import { prisma } from '../../../../generated/prisma-client';

const DELETE = 'DELETE';
const EDIT = 'EDIT';

export default {
  Mutation: {
    editPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, caption, location, action } = args;
      const { user } = request;
      // post테이블 db에 전달받은id가 존재하거나 user:사용자의 id가 존재한다면
      const post = await prisma.$exists.post({ id, user: { id: user.id } });
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            data: { caption, location },
            where: { id },
          });
        } else if (action === DELETE) {
          return prisma.deletePost({ id });
        }
      } else {
        throw Error("You can't do that");
      }
    },
  },
};

// #graphqlTest

// mutation {
// // 괄호안의 부분을 수정하면 업데이트 됨
//   editPost(id: "ck7updpbuoc2v09501ny40pek", location: "seoul") {
//     id
//   }
// }
