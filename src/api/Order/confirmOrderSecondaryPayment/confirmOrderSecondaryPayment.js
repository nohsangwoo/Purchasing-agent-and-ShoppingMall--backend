import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    confirmOrderSecondaryPayment: async (_, args) => {
      // 입력받은 인자에서 email을 추출
      const {
        orderId,
        ConfirmSecondaryPayment,
        addressId,
        orderEstimatesId,
        secondPaypal,
        ShippingType,
      } = args;

      //실패시 에러를 발생시킨다.
      try {
        await prisma.updateOrderContent({
          data: { ConfirmSecondaryPayment: ConfirmSecondaryPayment },
          where: { id: orderId },
        });
        await prisma.updateEstimate({
          data: {
            secondPaypal: secondPaypal,
            ShippingType: ShippingType,
            addressId: addressId,
          },
          where: { id: orderEstimatesId },
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
