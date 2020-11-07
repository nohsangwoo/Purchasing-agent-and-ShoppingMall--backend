import { prisma } from '../../../../generated/prisma-client';
// prisma의 값을 읽어오기 위해서 prisma-client의 prisma를 호출
export default {
  Mutation: {
    createAccount: async (_, args) => {
      //사용자가 입력한 정보를 client(argument)에서 받아옴
      // firstName, lastName, bio는 필수 입력항목이 아니기 때문에 기본값으로 빈 String값  '' 를 설정해줌

      const { username, email, firstName = '', lastName = '', bio = '' } = args;

      // prisma에 username이나 email이 존재하는지 확인함
      // const exists = await prisma.$exists.user({
      //   OR: [{ username }, { email }]
      // });
      // 위처럼 하나로묶어서 에러를 표시해도 되지만
      // 좀더 자세하게 무엇이 존재하는지 안내하려면 아래와같이 표시해줌
      const existsUsername = await prisma.$exists.user({
        // 오브젝트 안에 배열넣은듯
        OR: [{ username }],
      });

      const existsEmail = await prisma.$exists.user({
        OR: [{ email }],
      });

      // 존재한다면 에러를 던짐
      if (existsUsername) {
        throw Error('This Username is already taken');
      }

      if (existsEmail) {
        throw Error('This Email is already taken');
      }

      // 위조건문에 해당하지 않는다면 계정생성
      // 각각 username:username  email:email firstName:firstName...이것이 생략된 내용임
      await prisma.createUser({
        username,
        email,
        firstName,
        lastName,
        bio,
      });
      return true;
    },
  },
};

/*
이와같이 만들수있음

mutation{
  createAccount(username:"jonhran", email:"fairyfloss0909@gmail.com" firstName:"Kim" lastName:"jongran")
}


*/
