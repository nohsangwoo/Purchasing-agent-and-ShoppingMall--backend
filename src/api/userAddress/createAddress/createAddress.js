import { prisma } from '../../../../generated/prisma-client';
// prisma의 값을 읽어오기 위해서 prisma-client의 prisma를 호출
export default {
  Mutation: {
    createAddress: async (_, args, { request, isAuthenticated }) => {
      //사용자가 입력한 정보를 client(argument)에서 받아옴
      // firstName, lastName, bio는 필수 입력항목이 아니기 때문에 기본값으로 빈 String값  '' 를 설정해줌
      isAuthenticated(request);
      const { user } = request;

      const { address, post } = args;

      const userAddress = await prisma.createUserAddress({
        address,
        post,
        user: {
          connect: {
            id: user.id,
          },
        },
      });
      return userAddress;
    },
  },
};
