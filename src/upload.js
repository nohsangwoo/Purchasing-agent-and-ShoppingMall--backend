// multer는 어떤 사용자로부터 제출된 form 을 받았을때
// 전달받은 파일을 업로드 시켜줌

// uploadMiddleware는 uploadController가 실행되기전에 실행됨
// uploadMiddleware file을 가져오고
// uploadController는 uploadMiddleware에서온 file을 가지고 req.file을 가져옴
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const upload = multer({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: 'prismagram-noh',
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

// multer를 사용하여 업로드 하고싶습니다. 라고 설정
// 업로드된파일을 이 폴더에 저장할것입니다.
export const uploadMiddleware = upload.single('file');

// uploadController는 req.file을 가져올거임
// req.file은 uploadMiddleware로부터 온것임
export const uploadController = (req, res) => {
  //   const { file } = req;
  //   const { path } = file;
  const {
    file: { location },
  } = req;
  res.json({ location });
  console.log(location);
};
