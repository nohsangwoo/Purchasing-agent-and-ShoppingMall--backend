import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    sendMessage: async (_, args, { request, isAuthenticated }) => {
      // isAuthenticated보호
      isAuthenticated(request);
      // 사용자 정보 받아옴
      const { user } = request;
      // 인자값 받아옴
      const { roomId, message, toId } = args;
      let room;

      // 방이 없다면
      if (roomId === undefined) {
        // 요청자와 상대방의 아이디가 같지않다면
        if (user.id !== toId) {
          // 채팅방 하나 만들고 그 방정보를 room에 저장
          room = await prisma.createRoom({
            // participants는 상대방 아이디와 요청자의 아이디를 한개의 채팅방에 다 묶어서 연결해줌
            participants: {
              connect: [{ id: toId }, { id: user.id }],
            },
          });
        }
      } else {
        // 방이 있다면 해당 방 정보를 room변수에 저장
        room = await prisma.room({ id: roomId });
      }
      // 위에서 방을만들던 찾던했는데 방이없다면 에러 던짐
      if (!room) {
        throw Error('Room not found');
      }

      // 1:1 대화를 기준으로함
      // roomId 또는 room.id를 가지고(roomId===room.id) participants의 목록을 가져옴
      const participants = await prisma.room({ id: room.id }).participants();

      // 위에서 찾은 participants중 나를 제외한 상대방의 id를 찾음(보내야할 대상의 id를 찾음)
      // filter는 배열로 저장되니깐 이렇게 찾은 filter의 배열중 [0]번째 인자만 getTo변수로 저장(getTo는 배열이 아님)
      const getTo = participants.filter(
        (participant) => participant.id !== user.id
      )[0];

      // 드디어 메세지를 만들어줌()

      return prisma.createMessage({
        text: message,
        // 누가? :  사용자(request)
        from: {
          connect: { id: user.id },
        },
        // 누구에게? : roomId가 있으면 getTo.id 없으면 to:id
        // roomId가 있으면 room테이블의 participants에서 상대방의 id를 뽑아온 getTo.id 연결
        // roomId가 없으면 방이없다는거니깐 args에서 받아온toId로 to 를 연결
        to: {
          connect: {
            id: roomId ? getTo.id : toId,
          },
        },

        // roomId나 room.id로 연결
        room: {
          connect: {
            id: room.id,
          },
        },
      });
    },
  },
};

/*
// 맨 처음 보내려고 하는 대상의 유저 아이디가 필요함
#graphql test
mutation{
  sendMessage(message:"hey how are you?" toId:"ck7nbfv4gdi7b09501b4utskn"){
    id
  }
}

// 위에서 만들어진 룸(채팅룸)의 아이디로 대화를 추가함
mutation{
  sendMessage(message:"I love you too" roomId:"ck7xeocbjkrai0950exyrrrsi"){
    id
  }
}
*/
