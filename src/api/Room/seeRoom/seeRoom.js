import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeRoom: async (_, args, { request, isAuthenticated }) => {
      // isAuthenticated로 보호
      isAuthenticated(request);
      // room id를 인자로 받아옴
      const { id } = args;
      const { user } = request;
      const canSee = await prisma.$exists.room({
        // room테이블에서 participants중 사용자(request)의 id를 가지고있는 room을 찾아서 그 정보를 canSee변수에 넣어줌
        participants_some: {
          id: user.id,
        },
      });
      // canSee변수는 사용자가 
      if (canSee) {
        return prisma.room({ id });
      } else {
        throw Error("You can't see this");
      }
    },
  },
};

// #graphqlTest
// {
//   seeRoom(id: "ck7yr24tja84n0986xe4bnbie") {
//     id
//     participants {
//       id
//       username
//       avatar
//     }
//     messages{
//       id
//       text
//       to{
//         id
//         username
//         avatar
//       }
//       from{
//         id
//         username
//         avatar
//       }
//     }
//   }
// }
