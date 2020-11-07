import { prisma } from '../../../../generated/prisma-client';
// update user
export default {
  Mutation: {
    // mutation은 거의 isAuthenticated로 보호가 필요함
    editUser: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      // 나머지는 입력받은 args로 user테이블의 내용 update해주는거
      const { username, email, firstName, lastName, bio, avatar } = args;
      const { user } = request;
      return prisma.updateUser({
        where: { id: user.id },
        data: { username, email, firstName, lastName, bio, avatar },
      });
    },
  },
};

/*

mutation {
  editUser(
    username: "sangwoo"
    firstName: "noh"
    lastName: "sangwoo"
    bio: "male"
  ) {
    id
    username
    firstName
    lastName
    bio
  }
}
*/
