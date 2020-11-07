import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeRooms: (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      //console.log(request.user);
      // 요청자의 id가 포함된 모든 room(채팅방)을 반환
      const { user } = request;
      return prisma.rooms({
        where: {
          participants_some: {
            id: user.id,
          },
        },
      });
    },
  },
};

// #graphqlTest
// {
//   seeRooms{
//     id
//     participants{
//       id
//       username
//       avatar
//     }
//   }
// }
