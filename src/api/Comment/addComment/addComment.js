import { isAuthenticated } from '../../../middlewares';
import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    addComment: async (_, args, { request }) => {
      isAuthenticated(request);
      const { text, postId } = args;
      const { user } = request;
      console.log(text);
      console.log(postId);
      
      // prisma 문법을 사용하니깐prisma불러오고 createComment사용
      // 테이블에 user , post , text 이렇게 3개의 컬럼이 있는데 각각 컬럼이
      // 연결되는 내용을 적어줌
      const comment = await prisma.createComment({
        user: {
          connect: {
            id: user.id,
          },
        },
        post: {
          connect: {
            id: postId,
          },
        },
        text,
      });
      return comment;
    },
  },
};
