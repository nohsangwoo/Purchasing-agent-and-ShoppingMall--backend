# 구매대행 및 쇼핑몰 웹

> Node.JS, React, Express, GraphQL, Prisma, Passport, jsonwebtoken ,multer, nodemailer, nodemailer-sendgrid-transport, passport-jwt, morgan, nodemon, React Hooks, AWS S3, Netlify, Heroku

### 프로젝트 계획

> 해외에서 한국의 물건을 구매의뢰 하는 기능 구현(구매대행)
> 한국의 물건을 쇼핑할수있는 기능 구현

### setting

> graphql-yoga를 기반으로 graphql 세팅
> 파일을 저장할때마다 서버를 재실행 해주는 도구 nodemon 을 세팅
> .env 파일 세팅

### login

> 로긴 전용 모듈 morgan을 이용하여 logger 사용
> Passport jwt를 사용하여 토큰생성
> sendgrid api를 사용하여 인증 단어를 메일로 보냄

### Prisma 연동

> prisma.io에서 프로젝트용 데모서버 사용

### 기능 구현

> 사진 업로드는 aws s3를 사용하여 구현
> prisma를 사용하여 Backend 구성(prisma는 proxy같은 느낌)
> 해당 프로젝트는 총 3개의 서버가 필요함

### 구현 동영상

> 클릭(click)<br/> > [![Video Label](http://img.youtube.com/vi/B8qYpVIbnf4/0.jpg)](https://youtu.be/B8qYpVIbnf4?t=0s)

### 구현 이미지

<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 07 34" src="https://user-images.githubusercontent.com/57750190/98427586-2aa32f00-20e1-11eb-9de6-f8fcb6610d6b.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 11 33" src="https://user-images.githubusercontent.com/57750190/98427588-2bd45c00-20e1-11eb-938d-bd067d6885d5.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 16 64" src="https://user-images.githubusercontent.com/57750190/98427589-2c6cf280-20e1-11eb-868a-474460c9bcb4.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 30 56" src="https://user-images.githubusercontent.com/57750190/98427591-2d058900-20e1-11eb-80a5-84fcb123ba1e.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 00 10" src="https://user-images.githubusercontent.com/57750190/98427625-40b0ef80-20e1-11eb-952a-27d4c294e985.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 07 54" src="https://user-images.githubusercontent.com/57750190/98427629-43abe000-20e1-11eb-8621-386dda612332.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 15 00" src="https://user-images.githubusercontent.com/57750190/98427630-44dd0d00-20e1-11eb-9cfb-2fe28ee7509c.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 20 81" src="https://user-images.githubusercontent.com/57750190/98427631-4575a380-20e1-11eb-970a-dac58073d6d1.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 04 75" src="https://user-images.githubusercontent.com/57750190/98427628-427ab300-20e1-11eb-804c-a7424689fedc.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 40 02" src="https://user-images.githubusercontent.com/57750190/98427593-30007980-20e1-11eb-93e7-c19730ffe8a9.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 43 59" src="https://user-images.githubusercontent.com/57750190/98427594-3131a680-20e1-11eb-9ac7-a0f3b564e341.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 45 75" src="https://user-images.githubusercontent.com/57750190/98427598-3262d380-20e1-11eb-8deb-fc457df09d08.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 46 64" src="https://user-images.githubusercontent.com/57750190/98427600-32fb6a00-20e1-11eb-986f-1f5e635eb682.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 48 61" src="https://user-images.githubusercontent.com/57750190/98427601-342c9700-20e1-11eb-9166-dcb6ada74dfa.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 51 05" src="https://user-images.githubusercontent.com/57750190/98427604-355dc400-20e1-11eb-8a3f-b4a7732d4185.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 52 76" src="https://user-images.githubusercontent.com/57750190/98427605-35f65a80-20e1-11eb-9b2a-cded5a48d6a8.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 58 14 47" src="https://user-images.githubusercontent.com/57750190/98427613-3a227800-20e1-11eb-9fd8-73f908612f7d.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 58 22 88" src="https://user-images.githubusercontent.com/57750190/98427615-3b53a500-20e1-11eb-852b-1d89c249df8e.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 27 31" src="https://user-images.githubusercontent.com/57750190/98427633-46a6d080-20e1-11eb-826b-cfb706a2a009.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 39 90" src="https://user-images.githubusercontent.com/57750190/98427634-47d7fd80-20e1-11eb-987a-320fba79382a.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 44 28" src="https://user-images.githubusercontent.com/57750190/98427635-48709400-20e1-11eb-9ffd-24b9e32e33a6.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 52 66" src="https://user-images.githubusercontent.com/57750190/98427637-49a1c100-20e1-11eb-9d51-d2024a21e243.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 56 47" src="https://user-images.githubusercontent.com/57750190/98427641-4a3a5780-20e1-11eb-9e84-399b24543c0f.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 59 59 59" src="https://user-images.githubusercontent.com/57750190/98427642-4ad2ee00-20e1-11eb-9353-3cc6cea89dfc.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 10 00 03 74" src="https://user-images.githubusercontent.com/57750190/98427643-4c041b00-20e1-11eb-998b-dc85d120fab5.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 10 00 06 04" src="https://user-images.githubusercontent.com/57750190/98427644-4c9cb180-20e1-11eb-937d-19ff18f73239.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 10 00 14 47" src="https://user-images.githubusercontent.com/57750190/98427648-4d354800-20e1-11eb-8fc6-93deb99e4169.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 10 00 16 94" src="https://user-images.githubusercontent.com/57750190/98427650-4e667500-20e1-11eb-8195-e557068c126c.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 58 30 46" src="https://user-images.githubusercontent.com/57750190/98427617-3bec3b80-20e1-11eb-896f-98f6056e9973.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 58 36 35" src="https://user-images.githubusercontent.com/57750190/98427619-3c84d200-20e1-11eb-8c10-0987db893fdd.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 58 42 26" src="https://user-images.githubusercontent.com/57750190/98427620-3db5ff00-20e1-11eb-8f6f-ca91c2b519b0.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 10 00 20 36" src="https://user-images.githubusercontent.com/57750190/98427651-4eff0b80-20e1-11eb-845b-fb11c5bf6bdd.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 58 52 29" src="https://user-images.githubusercontent.com/57750190/98427623-3ee72c00-20e1-11eb-9f9e-2de54b03a3ed.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 58 57 08" src="https://user-images.githubusercontent.com/57750190/98427624-40185900-20e1-11eb-9ec6-4398f56226d6.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 57 02" src="https://user-images.githubusercontent.com/57750190/98427608-37c01e00-20e1-11eb-9b90-61661c6a90a1.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 58 08 85" src="https://user-images.githubusercontent.com/57750190/98427610-3858b480-20e1-11eb-9bce-7dbb3c832a1b.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 58 12 69" src="https://user-images.githubusercontent.com/57750190/98427611-3989e180-20e1-11eb-80ed-bf03f3110535.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 56 50 81" src="https://user-images.githubusercontent.com/57750190/98427581-2840d500-20e1-11eb-9501-cf9bbc470dd9.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 56 53 74" src="https://user-images.githubusercontent.com/57750190/98427582-28d96b80-20e1-11eb-8311-b138b745d58b.png">
<img width="1920" alt="Desktop Screenshot 2020 11 07 - 09 57 00 80" src="https://user-images.githubusercontent.com/57750190/98427583-29720200-20e1-11eb-91c4-cdd5712f3452.png">

<br/><br/><br/><br/>

<!-- -------------------------------------------------- -->

# Project 제작 노트

서버 실행
yarn dev

테이블 구조 업데이트(datamodel.prisma 업데이트)
yarn deploy

테이블 구조 업데이트 이후 yarn client generate (재구성)(다운받음)
yarn prisma
yarn deploy 이후에 yarn generate 실행

instagram clone with express +prisma + react and react native

# 0.1 Requirements

준비물 :
node.js visual studio code , google chrome
yarn or npm install

1. windows users need android studio for App Simulation
2. mac users need xcod for App Simulation

# 1.0 Setting up the project

프로젝트폴더 생성(ex: prismagram-backEnd)
그리고 github랑 연결

GraphQLServer has Express Server, so you do not need to include Express separately.
(GraphQLServer are included in graphql-yoga)

################ 1.0 setting ################

1.  yarn init -> name, version, description, entery point, git repository url, author, license, private 설정

2.  yarn add graphql-yoga

3.  code .

4.  package.json ->{
    remove this -> "main": "index.js",
    }
5.  yarn add nodemon -D (파일을 저장할때마다 서버를 재실행 해주는 도구)

6.  create new folder at "./src" (name is src)

7.  create new file at "./src/server.js" (name is server.js)

8.  yarn add babel-node

9.  package.json ->
    add this line->
    "scripts": {
    "dev": "nodemon --exec babel-node src/server.js",
    }

10. 이제 yarn dev를 콘솔에 실행하면 --exec babel-node src/server.js 가 실행됨(노데몬을 실행할때 바벨노드로 src/server.js를 실행)

11. create new file at "./nodemon.json" (name is nodemon.json)
    and write this ->
    {
    "ext":"js graphql"
    }
    (nodemon이 감시해야할 파일의 확장자를 지정할수있음, 해당 확장자의 내용에 변경이 있으면 자동으로 재시작해서 적용해줌)

12. yarn add @babel/node

13. yarn add @babel/core

(12,13은 미리 설치해줌 뒤에 설치하라고 니코쌤이 안내하실꺼임)

14. yarn dev
    src/server.js에서 console.log('hello'); 저장하고 실행되나 테스트

# 1.1 Creating GraphQL Server

1. yarn add dotenv
   This package reads only "./.env" file.

2. create new file at "./.env" (name is .env)
   write inside this ->
   port=4000
   Important settings values should be placed in the .env file.

3. create env.js file at "./src/env.js" (name is env.js)
   and write inside this ->
   import dotenv from 'dotenv';
   dotenv.config();

4. Add content within "./server.js"
   add this ->
   import './env';
   import { GraphQLServer } from 'graphql-yoga';

and write some configuration

5. yarn add @babel/preset-env

6. careate new file at "./.babelrc" (name is .babelrc)
   and write inside this
   {
   "presets": ["@babel/preset-env"]
   }

#######issue

#issue1 yarn remove babel-cli (babel-cli를 지워줌)
(if you installed "babel-cli",
Maybe you'll see the warning below,
so remove that)
#issue1
Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version.
yarn remove babel-cli

#issue2 yarn global remove babel-cli (global로 설치된 babel-cli를 지워줌)
if you installed "global babel-cli"
It's the same reason as above. remove that

# 1.2 Setting Up the Server like the Pros

#로깅전용 모듈(logger) 추가
(말그대로 로그인을 도와줌)

1. yarn add morgan
   and write inside server.js file
   import logger from 'morgan';

2. GraphQLServer has Express Server, so you do not need to include Express separately.
   (GraphQLServer are included in graphql-yoga)

3. When if you have successfully installed morgan loggin modul,
   Continuing to request something post.
   이유는 localhost:4000을 접속시 라이브로 상황을 업데이트 해주기위해서 인듯

4. should be enable Morgan Modul on the Express server.

####프로페셔널한 방법으로 typeDefs 와 resovers를 추가하는 방법#########

5. create a new folder at (./src/api)

6. Create a new file at (./src/schema.js)
   api하위 경로의 모든 파일을 schema.js에서 합칠꺼임
   api하위 경로에 많은
   typeDefs파일이 만들어질꺼고 같은 위치에 resolve파일이 추가될꺼임
   ex)
   ./api/test/test.graphql -typeDefs file
   ./api/test/test.js -resolve file
   schema.js은 모든 typeDefs 파일과 resolve파일을 가지고있고
   sever.js에서 schema.js을 불러와 사용하면 됨
   (import schema from './schema';만 포함)

   이렇게 하려면 아래것을 설치해야함

7. yarn add graphql-tools merge-graphql-schemas 설치

8. write this on schema.js
   import { makeExecutableSchema } from 'graphql-tools';
   import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
   등등 파일에서 내용 참조

9. Create a new file on this path(also making a new folder)
   src/api/hello/sayHello/sayHello.graphql
   src/api/hello/sayHello/sayHello.js

10. config server.js and schema.js

11. api 하위 폴더에 각각의 .graphql 파일과 .js파일을 폴더로 묶어서 불러온다

################ #2.0 Setting up Prisma ################

# 2.0 Introduction to Prisma

    <!-- prisma setting -->

1. prisma.io 로긴 후 new workspace 생성후
   add serviece ㄱㄱ
   (prisma 모듈이 설치안됐다면)
   npm install -g prisma
   or
   yarn global add prisma

2. 설치후 Log into prisma CLI에 안내된 코드 입력
   (prisma login -k eyJhbGciO~~이런식으로 길게 코드입력 안내창 나옴)

3. 프리즈마 로긴 성공시 다음창으로 넘어가게되고
   CREATE A NEW SERVICE 클릭

4. vsc에서 prisma init

#prisma init

1. Demo server 선택

2. eu or us서버 선택 나는 eu서버 선택함

3. 이후 select the programming language 에서 Prisma Javascript client 선택

4. 정상적으로 생성됐다면 generated 폴더가 생김

5. 프리즈마에서 생성된 키를 숨기려면 .gitigrnore 파일에 내용추가
   generated

6. datamodel.prisma 에서 모델을 추가하고 싶을때 prisma deploy 입력 하면
   prisma.io에 구동중인 데모서버에서 확인가능

   (datamodel.prisma에서 모델을 추가하는 의미는 데이터베이스의 테이블구성)

# 2.1 Datamodel with Prisma

1. datamodel.prisma 내용 추가

2. 프리즈마 사이트에서 쿼리를 수정(name-> username으로)

3. package.json -> "scripts"를 다음과같이 추가
   "scripts": {
   "deploy": "prisma deploy",
   "generate": "prisma generate",
   "prisma": "yarn run deploy && yarn run generate",
   "dev": "nodemon --exec babel-node src/server.js"
   }

4. 일단 yarn deploy로 datamodel.prisma 업데이트(테이블 구성 업데이트)

# 2.2 Testing Prisma OMG

1. 테이블구성을 다 작성하고 prisma demo서버에 업로드도 끝내면
   demo server에서 제공하는 playground(endpoint) 에서query를 자동으로 다 만들어줌

2. endpoint에서 자동으로 완성된 createUser를 doc에서 검색하면
   어떤상태인지
   어떤 arguments를 입력해야하는지 다 알려줌
   createUser의경우 DOC를 참조하여

   mutation {
   createUser(data: { username: "sangwoo", email: "nsgr12@naver.com" }) {
   id
   }
   }
   라고 입력하면 새 유저가 생성됨
   그리고 id값을 반환해줌

3. 위에서 생성된 user의 id값으로 user조회 방법
   {
   user(where: { id: "ck9ursscs92nn09404qz3aa89" }) {
   username
   }
   }

4. updateUser방법
   mutation{
   updateUser(where:{id:"ck9ursscs92nn09404qz3aa89"} data:{username:"keiko"}){
   id
   username
   }
   }

5. updateUser (following)
   mutation{
   updateUser(where:{id:"ck9ursscs92nn09404qz3aa89"},data:{following:{
   connect:{id:"ck9urr0qhbptb0911ikpkgvul"}
   }}){
   id
   firstName
   lastName
   username
   following{
   id
   }
   }
   }

6. follower 조회
   {
   user(where: { id: "ck9urr0qhbptb0911ikpkgvul" }) {
   id
   username
   followers {
   id
   username
   }
   }
   }

# 2.3 Integrating Prisma in our Server

prisma에서 우리의 api 사용법

1. prisma.yml파일도 .gitignore파일에 추가

서비스를 배포할때마다 prisma cloud에서 무언갈 생성하는데,
그걸 다운받아야함
prisma 서버와 정보를 주고받으려면 prisma client를 다운받아야함

2. package.json -> "scripts"를 다음과같이 추가
   "scripts": {
   "deploy": "prisma deploy",
   "generate": "prisma generate",
   "prisma": "yarn run deploy && yarn run generate",
   "dev": "nodemon --exec babel-node src/server.js"
   }

   yarn prisma
   yarn deploy 이후에 yarn generate 실행

3. 콘솔창 yarn prisma 입력하면 업로드와 클라이언트에 저장이 동시에됨

4. test를 위해 yarn dev입력하면 실행됨 이후 localhost:4000 접속

5. sayHello 기능에서 프리즈마를 불러옴 및 테스트 코드진행

6. yarn add prisma-client-lib

7. yarn dev

8. 프리즈마가 자동으로 클라이언트를 만들어줌, 해당 클라이언트로 prisma의 DB를 체크가능

#2.4 Resolvers with Prisma

<!-- 프리즈마 구조체를 우리의 api 폴더안에 연동해야함 -->

#이방법은 수동으로 복사 붙여넣기밖에 아직 안됨
#./datamodel.prisma 의내용과 완벽히 싱크가 맞아야함 변동이있다면 즉시 models.graphql에 아래의 작업(복사 붙여넣기 및 prisma 문법 제거)을 해야함

1. 구조체 복사를위해 src/api/models.graphql 생성

2. ./datamodel.prisma의 내용을 src/models.graphql에 복사 #이때 prisma문법은 삭제// @id, @relation("name":"asdf") 등등

(이후 localhost:4000에서doc - SCHEMA에 우리가 추가한 내용을 확인할수있음)

3. test를 위해 만들었던 src/api/Greeting 폴더를 지워준다

4. src/api/User/userByid/
   src/api/User/allUsers
   위 경로를 생성

5. src/api/User/userByid/userByid.graphql (type 작업)
   src/api/User/userByid/userByid.js (resolvers 작업)
   생성후 니코쌤의 코드작업 따라하기

##### 3 GraphQL API

# 3.1 Create Account Resolver

1.  post테이블에서 user만 연결하여 post 게시물 하나 생성

2.  login기능 먼저 구현

3.  src/User/createAccount폴더에 typedef파일(graphql)과 resolvers(js)파일생성

        <!-- createAccounte에 설명과 함께 써놈 -->

# 3.2 requestSecret Resolver

1.  비밀값 요청(이메일 인증으로 로그인 하게 만들것임)

2.  ./src/api/User/RequestSecret/폴더에 RequestSecret.graphql 파일과RequestSecret.js파일 생성

3.  src/utils.js
    비밀값을 생성하고 nodemailer로 로그인시 email에 비밀값을 전송하게 설정
    비밀값 생성시 무작위 단어를 기반으로 비밀값을 생성함(실제 서비스시에는 더 많은 변수를 넣어주던가 해야함)
    무작위 단어500개를 words generator에서 가져온다음 src/word.js에 저장해준다(google search)

# 3.3 sendMail Function with Nodemailer

1. yarn add nodemailer (nodemailer 설치)

2. utils.js에 sendMail 생성
   https://nodemailer.com/about/
   https://sendgrid.com/
   위 두개 사이트 참고

   sendgrid 계정 만들어야함

3. yarn add nodemailer-sendgrid-transport

4. 설정후 .env에 username과 password 작성

5. test를 위해서 server.js에
   import { sendSecretMail } from './utils';
   한후
   sendSecretMail("nsgr12@naver.com", "123");
   함수호출

6. 내 메일계정으로가서 비밀키가 왔는지 확인!

([Mailgun으로 구현하는 방법]

- mailgun 사이트에서 계정을 만든다.
- 터미널에서 yarn add nodemailer-mailgun-transport 설치한다.
- 첨부된 이미지 파일을 참고하여 api key값과 domain 값을 확인한다.
- (마지막 이미지 참고)테스트할 실제 이메일을 등록한다.
  해당 이메일로 보내진 인증 허가 요청 메일을 승낙하면 verified로
  표시가 뜬다.
- .env파일에 3에서 얻은 apikey 값과 domain이름을 입력한다.
  각각 MAILGUN_API, MAILGUN_DOMAIN으로 이름지음
  )

# 3.4 Passport JWT part One

1. requestsecret에 email 보내는 기능을 추가할꺼임
   requestSecret.js에
   await sendSecretMail(email, loginSecret);
   내용추가
   playground에서 체크
   mutation{
   requestSecret(email:"nsgr12@naver.com")
   }

2. confirm Secet / Passport JWT part
   #User Stories 요구사항
3. create a new file src/api/user/confirmScret.(graphql and js) file and setting

4. passportjs 사용 여기서 jwt라는 토큰을 사용할것임
   passportjs는 모든 인증단계를 쉽게 해줌
   구글검색후 사이트에서 passport-jwt 검색

   yarn add passport-jwt passport

5. src/passport.js 생성 및 세팅/ 해당 파일에 설명을 같이 붙여놈

   <!-- passport는 인증관련한 모든 일을 함. jwt 토큰이나 쿠키에서 정보를 가져와서 사용자 정보에 serialize(저장)함 -->
   <!-- // 토큰에서 정보를 가져와서 (express의)  request에 붙여줌. 토큰을 가져와서 해독한후-->
   <!-- // 사용자 객체를  request에 추가함
   //이 과정을 자동으로 해줌 -->

# 3.5 Passport JWT part Two

1. jwt를 생성하는 generateToken 함수 생성
   이때 npm jsonwebtokens 필요
   yarn add jsonwebtoken

2. 테스트방법
   localhost:4000
   mutation{
   confirmSecret(email:"nsgr12@naver.com",secret:"volatile legs")
   }

   여기서 얻은 토큰을 해석하려면 passport가 필요함

# 3.6 Passport JWT part Three

1. authenticateJwt함수를 utils.js에 만들고
   server.js에서 불러와서 사용
   server.express.use(authenticateJwt);

토큰을 받아서 해석하고 사용자를 찾고 사용자가 존재한다면 req 객체에 사용자를 추가하고 나면 graphql함수를 실행함

2. server.js passport 설정
   ./src/middlewares.js 생성및 server.js 에서 불러오기

여기서 얻은 토큰을 복사해서 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrN25hbHlndXZkYTMwOTg2eWl2enVkMXYiLCJpYXQiOjE1ODQyNjA3Njd9.T_mY5kuRE4fkp05kys5zKZDC-qO62HNmXHrWron0DTw

테스트할 쿼리시 하단의 HTTP HEADERS에
{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrOHNhMnlvMzAwMmgwNzU4emtpemhjODciLCJpYXQiOjE1ODY1MTA2NzV9.\_I6KixRq9VNginsjHoiGFyJn26Oto4M8ItaOseq79yc"}

(Bearer 뒤에 토큰을 복사 붙여넣기 ㄱㄱ)

# 3.7 toggleLike Resolver part One

1. toggleLike는 postId를 인자로 사용하여(어떤 Post를 좋아하는지 알아야 하니깐) Like를 만들거나 지움(좋아요 기능)
   그리고 Boolean을 반환(성공했나 실패했나 표시)

2. src/middlewares.js 에서 isAuthenticated 설정 후 server.js에서 불러옴

3. toggleLike.js와 graphql파일 확인 ㄱㄱ

4. toggleLike 테스트시 playground에서
   mutation{
   toggleLike(postId:"ck7o7ktjl5eut0986xuty56vz")
   }
   이부분은 prisma 들어가서 post의 id를 써주면됨

# 3.8 toggleLike and addComment Resolver

1. src/api/Comment/addcomment/ 안에 graphql파일과 js파일 작성및 생성
   grapqhl에서 타입은 인자값은 text는 String 필수고, 작성하는 해당 postId도 String 필수
   이때 반환값은 Comment 왜냐하면 입력후 바로 화면에 뿌려줘야 하니깐

   js(resolvers)파일설명은 파일안에 해놈

# 3.9 searchUser and searchImage resolver

1. user 검색
   src/api/User/searchUser

2. post 검색
   src/api/Post/searchPost
   작성
   정리내용은 코드안에있음

# 3.10 follow unfollow Resolver

1. follow 기능
   src/api/User/follow
   작성 및 정리내용은 코드 안에 있음

2. unfollow 기능
   src/api/User/unfollow
   작성 및 정리내용은 코드 안에 있음

# 3.11 editUser seeUser Resolver

# 3.12 me Resolver + Prisma's Limitations

1. 로그인상태에서 내 user 정보를 변경
   src/User/editUser

2. 내 정보 검색(profile)
   src/User/me
   src/User/User.js 에서 posts의 깊이를 설정해줌

3. 특정 user의 정보를 검색(username으로 검색)
   src/User/seeUser

# 3.13 See Full Posts

1. 인자값을 post id로 전달받고 post를 반환
   post의 내용, comments{id text}, likecount, user{username} 등을 조회가능

# 3.14 Computed Fields in Prisma

src/api/User/User.js
src/api/Post/Post.js
등등 computed Fields에대한 설명
parent 개념 설명
User.js 파일에 먼저 설명 적어놈

# 3.16 itsMe and amIFollowing Fileds part Two

1. src/api/User/User.js에 있는 computed 파일
   isFollowing 작업
   내가 어떤 profile을 확인했을때 following중인지 확인함

# 3.17 isLiked Computed File

1.  src/api/Post/Post.js 의 isLiked 설명

# 3.18 upload Resolver

1. src/api/post/upload/ 에 구현
   포스트를 생성할때 사용하는 resolver

# 3.20 editPost deletePost Resolver

1. ```/post/editpost/
   포스트를 수정 및 삭제가능
   ```

# 3.21 deletePost Resolver part Two

1. deletepost시 연결된 files랑 like를 같이 지워주기위해
   datamodel.prisma에서 onDelete:CASCADE설정을 해줌

# 3.22 seeFeed Resolver

1. 로그인한 사람이 following한 사람들의 post와 로그인한 사람의post를 피드창에 표현
   해당 조건의 post를 생성된 순서대로 보여준다

# 3.23 seeRooms & sendMessage part One

1. src/api/Room/seeRooms
   로그인된 요청자가 자신의 모든 채팅방을 목록을 확인

2. src/api/Message/sendMessage/
   메세지 보내기기능(채팅방생성 - Room을 만드는 기능)
   roomId, 메세지랑 누구에게 보낼것인지가 사용자로부터 요청됨

# 3.23 sendMessage of end

1. sendMessage computed파일 필요함(src/api/Message/Message.js)
   여기서 from, to , room의 깊이가 있는 반환값설정을 해줌

# 3.25 seeRoom Resolver

1. src/api/Room/seeRoom
   여기서 해당 방의 메시지를 확인할수있음
   기능적인 설명은 채팅방을 선택하면 해당 방의 정보(메시지)를 확인가능

# 3.28 newMessage

1. scr/api/message/newMessage
   subscribe기능임(알림표시)
   메시지가 새로 생성됐으면 실시간으로 알려줌

# api Greetings getData

테스트용 살펴보기

# upload to s3

를 위해서
yarn add aws-sdk multer multer-s3

<!-- 이건 내 웹에서 axios 접근시 Access-Control-Allow-Origin 에러해결 -->

yarn add cors
