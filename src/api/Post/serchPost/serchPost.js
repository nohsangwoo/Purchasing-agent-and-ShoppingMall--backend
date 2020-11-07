import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    searchPost: async (_, args) =>
      prisma.posts({
        where: {
          // starts_with : 검색할때 검색 키워드가 처음부터 시작하는것만 검색
          //ex) se검색=> "seoul" 검색됨   "esec" 검색안됨

          // args.term 는 graphql파일에서 설정해준 args이름임
          // args의 이름도 마음대로 정할수있음
          OR: [
            { location_starts_with: args.term },
            { caption_starts_with: args.term },
          ],
        },
      }),
  },
};
