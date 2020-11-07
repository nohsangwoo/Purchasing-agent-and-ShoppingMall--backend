import { prisma } from '../../../../generated/prisma-client';
import { generateToken } from '../../../utils';

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      // email:email
      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        // 로그인 성공시 loginSecret컬럼을 지우고싶음
        await prisma.updateUser({
          where: { id: user.id },
          data: {
            loginSecret: '',
          },
        });
        // JWT
        return generateToken(user.id);
      } else {
        throw Error('Wrong email/secret combination');
      }
    },
  },
};

// #graphqlTest
// mutation{
//   confirmSecret(email:"nsgr12@naver.com",secret:"volatile legs")
// }
