import { isAuthenticated } from '../../../middlewares';
import { prisma } from '../../../../generated/prisma-client';
// prisma의 값을 읽어오기 위해서 prisma-client의 prisma를 호출
export default {
  Mutation: {
    createShopEstimate: async (_, args, { request }) => {
      isAuthenticated(request);

      const {
        Shop,
        country,
        productWeight,
        firstExchangeRate,
        secondExchangeRate,
        firstPaypal,
        secondPaypal,
        ShippingType,
        visible = true,
      } = args;

      // mutation 실행
      try {
        await prisma.createShopEstimate({
          Shop: {
            connect: {
              id: Shop,
            },
          },
          country,
          productWeight,
          firstExchangeRate,
          secondExchangeRate,
          firstPaypal,
          secondPaypal,
          ShippingType,
          visible,
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

/*
이와같이 만들수있음
mutation {
  createShopDetail(
    Shop: "ckbzva1xoo31e0968ttmt3c7j"
    imageURL: "daum.net"
    title: "33333"
    basePrice: "3000"
    goodsId: "goodsid"
    firstOption: "red,blue"
    secondOption: "XXL,FRE"
    quantity: "3,2,5"
    addPrice: "32,42,12,55"
    quantityPerGoods: "1,4"
    visible: false
  )
}

*/
