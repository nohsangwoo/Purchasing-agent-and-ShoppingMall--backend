import { adjectives, nouns } from './words';
import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
import jwt from 'jsonwebtoken';

// 비밀값 생성
// adjectives(형용사)와 nouns(명사)를 ./words에서 가져온다음
//Math.random으로 adjectives.length길이중 하나의 난수를 발생시킴
//해당 난수를 이용하여 adjectives와 nouns의 배열에서 단어를 각각 뽑아옴
//Math.floor는 소수점을 버려주는 함수(난수 발생시 소수점까지 계산해주기때문임)
export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

// 실질적으로 메일을 보내는 api - nodemailer 사용
const sendMail = (email) => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENGRID_PASSWORD,
    },
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

// 메일을 보내는 양식
export const sendSecretMail = (adress, secret) => {
  const email = {
    from: 'fairyfloss0909@gmail.com',
    to: adress,
    subject: '🔒Login Secret for Prismagram🔒',
    html: `<div>Hello! Your secret is <strong>${secret}</strong></div><br/><div>or click <a href="http://localhost:3000/#/confirmSecret/${adress}=${secret}"><strong>here</strong></a> to login</div>`,
  };
  return sendMail(email);
};
export const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);
