import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    confirmSecondaryPayment: async (_, args) => {
      // 입력받은 인자에서 email을 추출
      const {
        shopId,
        ConfirmSecondaryPayment,
        addressId,
        ShopEstimatesId,
        secondPaypal,
        ShippingType,
      } = args;

      //실패시 에러를 발생시킨다.
      try {
        await prisma.updateShop({
          data: { ConfirmSecondaryPayment: ConfirmSecondaryPayment },
          where: { id: shopId },
        });
        await prisma.updateShopEstimate({
          data: {
            secondPaypal: secondPaypal,
            ShippingType: ShippingType,
            addressId: addressId,
          },
          where: { id: ShopEstimatesId },
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
