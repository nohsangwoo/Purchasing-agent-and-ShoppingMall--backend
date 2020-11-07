import { prisma } from '../../../generated/prisma-client';

export default {
  Post: {
    files: ({ id }) => prisma.post({ id }).files(),
    comments: ({ id }) => prisma.post({ id }).comments(),
    user: ({ id }) => prisma.post({ id }).user(),
    likes: ({ id }) => prisma.post({ id }).likes(),

    // parent 사용자가 선택한 어떤 post에대한 정보
    // request (로그인한)사용자의 정보
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      // 사용자가 선택한 어떤 post의 id 정보
      const { id } = parent;

      // like라는 테이블의user 부분과 post부분을 비교하는것
      return prisma.$exists.like({
        AND: [
          {
            user: {
              id: user.id,
            },
          },
          {
            // post{id:id} 와 같은 내용
            post: {
              id,
            },
          },
        ],
      });
    },
    likeCount: (parent) =>
      prisma
        .likesConnection({
          where: { post: { id: parent.id } },
        })
        .aggregate()
        .count(),
    commentCount: (parent) =>
      prisma
        .commentsConnection({
          where: { post: { id: parent.id } },
        })
        .aggregate()
        .count(),
  },
};
