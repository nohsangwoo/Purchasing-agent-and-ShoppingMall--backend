import { isAuthenticated } from '../../../middlewares';
import { prisma } from '../../../../generated/prisma-client';

export default {
  // 내user테이블에서 following 부분을 업데이트 해줌
  Mutation: {
    // args : 내가 follow하려는 대상의 user id
    // requst.user.id : 내 user id
    follow: async (_, args, { request }) => {
      isAuthenticated(request);

      const { id } = args;
      const { user } = request;

      try {
        // prisma가 자동으로 만들어 주는 문법을 사용함
        await prisma.updateUser({
          where: { id: user.id },
          data: {
            following: {
              connect: {
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

// #test
// mutation{
//   follow(id:"ck7nbfv4gdi7b09501b4utskn")
// }
