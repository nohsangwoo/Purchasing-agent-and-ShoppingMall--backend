import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';

// 파일의 경로를 입력하기위한 함수
// api의 하위 모든 폴더에서 typeDefs내용이 들어있는 모든 graphql파일을 포함
// **은 모든 폴더를 뜻하고 / *.확장자는 해당 확장자의 모든 파일을 말함
const allTypes = fileLoader(path.join(__dirname, '/api/**/*.graphql'));

// api의 하위 모든 폴더에서 resolvers내용이 들어있는 모든 js파일을 포함
const allResolvers = fileLoader(path.join(__dirname, '/api/**/*.js'));
// api폴더 하위경로에 resolvers가 아닌js파일을 두면 안된다(에러남)

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;
