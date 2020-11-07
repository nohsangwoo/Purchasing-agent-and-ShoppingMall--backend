import { prisma } from '../../../generated/prisma-client';

// Computed Fields

export default {
  Cart: {
    // 요청하는 사람(request)와, client에서 요청(prarent)이 같으면
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    },
    goods: ({ id }) => {
      // prisma엔드포인트에서의 호출명을 가져옴

      // 무한 중복 호출을 막기위해서 이런식으로 설정함
      return prisma.cart({ id }).goods();
    },
  },
};
