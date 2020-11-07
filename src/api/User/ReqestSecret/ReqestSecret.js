import { generateSecret, sendSecretMail } from '../../../utils';
import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      // 입력받은 인자에서 email을 추출
      const { email } = args;
      //임의의 형용사와 명사를 이용해 비밀키를 생성하는 함수를 실행
      //그리고 반환된 비밀키를 loginSecret변수에 저장
      const loginSecret = generateSecret();
      //해당 비밀키를 sendgrid api를 이용해 메일로 보내주고
      //prisma DB에도 업데이트 해줌
      //성공시 true를 반환하고
      //실패시 에러를 발생시킨다.
      try {
        // requestSecret실행시 메일도 같이 보내줌
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};

// #graphqlTest
// mutation{
//   requestSecret(email:"nsgr12@gmail.com")
// }
