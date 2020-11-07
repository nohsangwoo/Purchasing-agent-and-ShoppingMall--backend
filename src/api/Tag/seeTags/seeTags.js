import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeTags: async (_, args, { request, isAuthenticated }) => {
      // args.num
      // 보호
      // console.log(args);
      isAuthenticated(request);
      // 로그인된 사용자의 정보에서 user를 뽑아옴
      const { user } = request;
      // 로그인된 사용자가 follow하는 user의 db를 배열로 불러옴(following리스트)
      //   const following = await prisma.user({ id: user.id }).following();
      //console.log(following);
      return prisma.tags({
        // 위에 , 콤마 추가해야함
        // orderBy: 'createdAt_DESC',
        first: 100,
        skip: args.num * 100,
      });
    },
  },
};
