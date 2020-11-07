import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      // isAuthenticated로 보호해줌
      isAuthenticated(request);
      const { user } = request;
      const { caption, files, location } = args;
      const post = await prisma.createPost({
        caption,
        location,
        user: { connect: { id: user.id } },
      });
      files.forEach(
        async (file) =>
          await prisma.createFile({
            url: file,
            post: {
              connect: {
                id: post.id,
              },
            },
          })
      );
      return post;
    },
  },
};

// #graphqlTest

// mutation {
//   upload(
//     caption: "kimchi"
//     files: [
//       "https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg"
//       "https://i.pinimg.com/originals/6f/5f/be/6f5fbe5279611852a1e4175d6c3c6408.jpg"
//     ]
//   ) {
//     id
//    caption
//   }
// }
