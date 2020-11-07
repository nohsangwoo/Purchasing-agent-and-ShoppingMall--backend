import { isAuthenticated } from '../../../middlewares';
import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    goodsToggleLike: async (_, args, { request }) => {
      // 로긴상태인지 아닌지 확인하는 작업

      isAuthenticated(request);
      const { goodsId } = args;
      const { user } = request;
      const filterOptions = {
        // and로 필터링해줌
        // user.id나 postId 둘중 하나라도 없으면 false
        // 만약 OR 이라면 user.id나 postId 둘중 하나만 있어도 true
        AND: [
          {
            // prismaDB의 id와 client에서 전달받은 user.id와 같은지 여부
            user: {
              id: user.id,
            },
          },
          {
            // prisma DB의 post id와 client에서 전달받은 postId와 같은지?
            goods: {
              id: goodsId,
            },
          },
        ],
      };
      try {
        // $exists : prisma 문법인데, 존재하는지 여부를 알려줌
        // 옵션을 따로 만들어줄수있음
        const existingLike = await prisma.$exists.like(filterOptions);
        if (existingLike) {
          // 만약 like가 존재한다면?
          // 그니깐 deleteManyLike라는 이름에서 확인하듯이
          //Like가 존재한다면 해당 추가된 모든 Like를 삭제해주는 기능임
          // 근데 우리는 toggleLike로 한개의 데이터만 추가하는거니깐
          // 결국 삭제되는건 하나임
          // id가 아닌 한개의 like를 지울수가 없음 게다가 id도 확인할수없고.
          // 약간의 편법
          await prisma.deleteManyLikes(filterOptions);
        } else {
          // like가 존재하지않는다면
          // like테이블에 필드를 추가해줌
          // like테이블엔 user와 post 컬럼이 존재하는데
          // client에서 받아온 내용을 db에 할당 해주는 작업
          await prisma.createLike({
            user: {
              connect: {
                id: user.id,
              },
            },
            goods: {
              connect: {
                id: goodsId,
              },
            },
          });
        }
        return true;
      } catch {
        return false;
      }
    },
  },
};

// # graphqlTest

// mutation{
//   toggleLike(postId:"ck7o7ktjl5eut0986xuty56vz")
// }
