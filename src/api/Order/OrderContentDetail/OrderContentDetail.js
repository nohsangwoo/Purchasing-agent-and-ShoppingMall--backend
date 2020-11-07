import { isAuthenticated } from '../../../middlewares';
import { prisma } from '../../../../generated/prisma-client';
// prisma의 값을 읽어오기 위해서 prisma-client의 prisma를 호출
export default {
  Mutation: {
    createOrderContentDetail: async (_, args, { request }) => {
      isAuthenticated(request);

      const {
        OrderContent,
        serviceType,
        productName,
        productURL = '',
        productOption,
        fileImageURL = '',
        visible = true,
      } = args;

      // console.log('bb', args);

      // mutation 실행
      try {
        await prisma.createOrderContentDetail({
          serviceType,
          OrderContent: {
            connect: {
              id: OrderContent,
            },
          },
          productName,
          productURL,
          productOption,
          fileImageURL,
          visible,
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

/*
이와같이 만들수있음

mutation{
  createAccount(username:"jonhran", email:"fairyfloss0909@gmail.com" firstName:"Kim" lastName:"jongran")
}


*/
