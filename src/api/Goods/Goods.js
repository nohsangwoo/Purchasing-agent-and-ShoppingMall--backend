import { prisma } from '../../../generated/prisma-client';

// Computed Fields

export default {
  Goods: {
    // 이건 그냥 models.graphql안에있는 함수 호출문 같은거(꼭 OrderContentDetails가 아니어도 상관없음 내맘대로 이름지으면됨)
    files: ({ id }) => {
      // prisma엔드포인트에서의 호출명을 가져옴

      // 무한 중복 호출을 막기위해서 이런식으로 설정함
      return prisma.goods({ id }).files();
    },
    color: ({ id }) => {
      // prisma엔드포인트에서의 호출명을 가져옴

      // 무한 중복 호출을 막기위해서 이런식으로 설정함
      return prisma.goods({ id }).color();
    },
    admin: ({ id }) => {
      // prisma엔드포인트에서의 호출명을 가져옴

      // 무한 중복 호출을 막기위해서 이런식으로 설정함
      return prisma.goods({ id }).admin();
    },
    comments: ({ id }) => prisma.goods({ id }).comments(),
    tags: ({ id }) => {
      // prisma엔드포인트에서의 호출명을 가져옴

      // 무한 중복 호출을 막기위해서 이런식으로 설정함
      return prisma.goods({ id }).tags();
    },
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      // 사용자가 선택한 어떤 post의 id 정보
      const { id } = parent;

      // like라는 테이블의user 부분과 post부분을 비교하는것
      return prisma.$exists.like({
        AND: [
          {
            user: {
              id: user.id,
            },
          },
          {
            // post{id:id} 와 같은 내용
            goods: {
              id,
            },
          },
        ],
      });
    },
    likeCount: (parent) =>
      prisma
        .likesConnection({
          where: { goods: { id: parent.id } },
        })
        .aggregate()
        .count(),
  },
  Tag: {
    // 이건 그냥 models.graphql안에있는 함수 호출문 같은거(꼭 OrderContentDetails가 아니어도 상관없음 내맘대로 이름지으면됨)
    goods: ({ id }) => {
      // prisma엔드포인트에서의 호출명을 가져옴

      // 무한 중복 호출을 막기위해서 이런식으로 설정함
      return prisma.tag({ id }).goods();
    },
  },
};
