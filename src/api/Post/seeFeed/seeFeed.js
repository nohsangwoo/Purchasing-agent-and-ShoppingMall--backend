import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeFeed: async (_, __, { request, isAuthenticated }) => {
      // 보호
      isAuthenticated(request);
      // 로그인된 사용자의 정보에서 user를 뽑아옴
      const { user } = request;
      // 로그인된 사용자가 follow하는 user의 db를 배열로 불러옴(following리스트)
      const following = await prisma.user({ id: user.id }).following();
      //console.log(following);
      return prisma.posts({
        where: {
          user: {
            // 다른사람들의 post와 로그인한 사람의 post를 표현
            // map을 이용하여 following하는 user의 정보중 id만 따와서 다시구성한뒤
            // 배열에 뿌려줌
            // id_in: list중 해당하는 id만 쏙쏙 뽑아줌?
            id_in: [...following.map((user) => user.id), user.id],
          },
        },
        // 위에 , 콤마 추가해야함
        orderBy: 'createdAt_DESC',
      });
    },
  },
};

/*
// createdAt_DESC 가 안될때
//   createdAt: DateTime! @createdAt
//   updatedAt: DateTime! @updatedAt
//   model.graphql과 비교하여 추가

#graphqlTest
{
  seeFeed{
    id
    caption
  }
}
*/
