import { isAuthenticated } from '../../../middlewares';
import { prisma } from '../../../../generated/prisma-client';
// prisma의 값을 읽어오기 위해서 prisma-client의 prisma를 호출
export default {
  Mutation: {
    createShop: async (_, args, { request }) => {
      isAuthenticated(request);

      const { username, Stage = 0, visible = true } = args;
      const { user } = request;

      // mutation 실행
      try {
        const Shop = await prisma.createShop({
          username,
          user: {
            connect: {
              id: user.id,
            },
          },
          Stage,
          visible,
        });
        return Shop;
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
