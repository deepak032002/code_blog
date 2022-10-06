import nextConnect from "next-connect";
import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const handler = nextConnect({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

const uploadMiddleware = upload.single("upload");

handler.use(uploadMiddleware);

handler.post(async (req, res) => {
  if(req.file){
    res.status(200).json({ url: `/uploads/${req.file.originalname}/`, success: true });
  }else{
    res.status(500).json({success: false})
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};