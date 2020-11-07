import { isAuthenticated } from '../../../middlewares';
import { prisma } from '../../../../generated/prisma-client';
// prisma의 값을 읽어오기 위해서 prisma-client의 prisma를 호출
export default {
  Mutation: {
    createOrderContent: async (_, args, { request }) => {
      isAuthenticated(request);
      // console.log(request.user);
      // isAuthenticated(request);
      //사용자가 입력한 정보를 client(argument)에서 받아옴
      // fileImageURL는 필수 입력항목이 아니기 때문에 기본값으로 빈 String값  '' 를 설정해줌
      const { username, Stage = 0, visible = true } = args;
      const { user } = request;

      // mutation 실행
      try {
        const OrderContent = await prisma.createOrderContent({
          username,
          user: {
            connect: {
              id: user.id,
            },
          },
          Stage,
          visible,
        });
        return OrderContent;
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

/*

mutation {
  editUser(
    username: "sangwoo"
    firstName: "noh"
    lastName: "sangwoo"
    bio: "male"
  ) {
    id
    username
    firstName
    lastName
    bio
  }
}
*/
