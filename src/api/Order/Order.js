import { prisma } from '../../../generated/prisma-client';

// Computed Fields

export default {
  OrderContent: {
    user: ({ id }) => prisma.orderContent({ id }).user(),
    // 이건 그냥 models.graphql안에있는 함수 호출문 같은거(꼭 OrderContentDetails가 아니어도 상관없음 내맘대로 이름지으면됨)
    OrderContentDetails: ({ id }) => {
      // prisma엔드포인트에서의 호출명을 가져옴
      // prisma명령문의 orderContent을 실행시키는데 그 조건은 사용자 ID가 조건이고 거기서 OrderContentDetails를 가져옴
      // 무한 중복 호출을 막기위해서 이런식으로 설정함
      return prisma.orderContent({ id }).OrderContentDetails();
    },
    Estimates: ({ id }) => {
      // prisma엔드포인트에서의 호출명을 가져옴
      // prisma명령문의 orderContent을 실행시키는데 그 조건은 사용자 ID가 조건이고 거기서 OrderContentDetails를 가져옴
      // 무한 중복 호출을 막기위해서 이런식으로 설정함
      return prisma.orderContent({ id }).Estimates();
    },

    OrderContentDetailCount: (parent) =>
      prisma
        .orderContentDetailsConnection({
          where: { OrderContent: { id: parent.id } },
        })
        .aggregate()
        .count(),
  },
};
