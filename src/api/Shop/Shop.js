import { prisma } from '../../../generated/prisma-client';

// Computed Fields

export default {
  Shop: {
    user: ({ id }) => prisma.shop({ id }).user(),
    ShopDetails: ({ id }) => {
      return prisma.shop({ id }).ShopDetails();
    },
    ShopEstimates: ({ id }) => {
      // prisma엔드포인트에서의 호출명을 가져옴
      // prisma명령문의 orderContent을 실행시키는데 그 조건은 사용자 ID가 조건이고 거기서 OrderContentDetails를 가져옴
      // 무한 중복 호출을 막기위해서 이런식으로 설정함
      return prisma.shop({ id }).ShopEstimates();
    },
    ShopDetailCount: (parent) =>
      prisma
        .shopDetailsConnection({
          where: { shop: { id: parent.id } },
        })
        .aggregate()
        .count(),
  },
};
