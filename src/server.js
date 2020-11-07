import '@babel/polyfill';
import './env';
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';
import './passport';
import { authenticateJwt } from './passport';
import { isAuthenticated } from './middlewares';
import { uploadMiddleware, uploadController } from './upload';

import cors from 'cors';

const PORT = process.env.PORT || 80;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated }),
});

// cors에서 특정 web만 허용하기위해서 사용
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// graphql-yoga에 내장된 express로 morgan모듈을 사용하게 설정
server.express.use(logger('dev'));
// 위와 같은 내용
server.express.use(authenticateJwt);
// server.express.use(authenticateJwt);

//  웹에서 axios 접근시 Access-Control-Allow-Origin 에러해결
server.express.use(cors(corsOptions));

// uploadMiddleware는 uploadController가 실행되기전에 실행됨
// uploadMiddleware file을 가져오고
// uploadController는 uploadMiddleware에서온 file을 가지고 req.file을 가져옴
// server.express.post('/api/upload', uploadMiddleware, uploadController);
server.express.post('/api/upload', uploadMiddleware, uploadController);
// server.express.post('/api/fileupload', upload);

// 서버를 시작할때 옵션이 필요함(포트를 정해준다)
server.start({ port: PORT }, () =>
  // 서버를 실행할때 항상 성공여부를 찍어주는
  // callback 함수생성 (console.log창 띄워줌)
  console.log(`✔ Server running on  http://localhost:${PORT}`)
);
