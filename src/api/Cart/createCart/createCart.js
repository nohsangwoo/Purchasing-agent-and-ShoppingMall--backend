import { prisma } from '../../../../generated/prisma-client';
// prisma의 값을 읽어오기 위해서 prisma-client의 prisma를 호출
export default {
  Mutation: {
    createCart: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { goodsId, color, size, quantity } = args;

      

      try {
        await prisma.createCart({
          user: { connect: { id: user.id } },
          goods: { connect: { id: goodsId } },
          color: color,
          size: size,
          quantity: quantity,
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
      return;
    },
  },
};

/*
이와같이 만들수있음

mutation{
  createAccount(username:"jonhran", email:"fairyfloss0909@gmail.com" firstName:"Kim" lastName:"jongran")
}


*/
