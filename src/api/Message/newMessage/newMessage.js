import { prisma } from '../../../../generated/prisma-client';

export default {
  Subscription: {
    newMessage: {
      subscribe: (_, args) => {
        const { roomId } = args;
        return prisma.$subscribe
          .message({
            AND: [
              { mutation_in: 'CREATED' },
              {
                node: {
                  room: { id: roomId },
                },
              },
            ],
          })
          .node();
      },
      resolve: (payload, args, context) => {
        //console.log(args, context);
        return payload;
      },
    },
  },
};

// sendMessage 에서 roomId를 같게 설정해야함
// 해당룸의 메시지만 보고싶을때 이렇게 함
// #graphqlTest
// subscription {
//   newMessage(roomId: "ck7xeocbjkrai0950exyrrrsi") {
//     id
//     text
//     createdAt
//   }
// }
