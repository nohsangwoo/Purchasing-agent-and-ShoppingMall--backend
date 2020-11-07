import { prisma } from '../../../../generated/prisma-client';
// 이쿼리는 보호할필요가없어서 middleware의 isAuthenticated로 보호하지 않음
export default {
  Query: {
    searchUser: async (_, args) =>
      // users라는건 모든 유저들중 무엇을 검색조건으로 사용하여 검색할것이냐는 명령어
      prisma.users({
        where: {
          // users의 목록중 username , firstName, lastName 이 3개중 하나라도 겹치는 내용이 있으면 표시
          // username_contains으로 검색해서 단어중 일부만으로고 검색됨
          // (예를들면 keiko중 kei까지만 검색해도 검색됨)

          // username으로만 검색하면 단어가 완벽하게 맞아야지만 검색됨
          // (keiko중 keiko를 다 쳐야만 검색됨)

          OR: [
            { username_contains: args.term },
            { firstName_contains: args.term },
            { lastName_contains: args.term },
          ],
        },
      }),
  },
};
