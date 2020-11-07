import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    updateShopEstimateWeight: async (_, args) => {
      // 입력받은 인자에서 email을 추출
      const { ShopEstimatesId, shopWeight } = args;

      console.log(args);

      //실패시 에러를 발생시킨다.
      try {
        await prisma.updateShopEstimate({
          where: { id: ShopEstimatesId },
          data: { shopWeight: shopWeight },
        });

        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};

// #graphqlTest
// mutation{
//   requestSecret(email:"nsgr12@gmail.com")
// }
