//개인정보 가져오는것
import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    // 내 개인정보니깐 isAuthenticated 로 보호
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      // console.log('me작동1', user.id);
      // console.log(request);
      // 조건에 해당하는 user정보를 userProfile에 담아서 return 해줌

      const userProfile = await prisma.user({ id: user.id });

      return userProfile;
    },
  },
};
