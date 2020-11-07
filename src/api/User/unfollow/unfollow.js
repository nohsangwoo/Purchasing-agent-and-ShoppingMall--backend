import { isAuthenticated } from '../../../middlewares';
import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    // follow랑 같은 내용임
    // 내 user테이블에서 following부분을 업데이트해줌
    unfollow: async (_, args, { request }) => {
      // isAuthenticated로 보호
      isAuthenticated(request);

      // args 내가 unfollow하려는 대상의 user id
      // request.user.id 내 user id
      const { id } = args;
      const { user } = request;
      try {
        await prisma.updateUser({
          where: { id: user.id },
          data: {
            following: {
              disconnect: {
                id,
              },
            },
          },
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};

// #graphqlTest
// mutation{
//   unfollow(id:"ck7nbfv4gdi7b09501b4utskn")
// }
