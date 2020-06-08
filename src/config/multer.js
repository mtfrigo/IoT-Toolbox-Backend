const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const multerConfig =  {
  storage: multer.diskStorage({
    destination(request, file, callback) {
      if(file.fieldname === "artifactFiles") {
        callback(null, path.resolve(__dirname, '..', '..', 'uploads', 'artifacts'));
      } else if(file.fieldname === "interfaceFiles") {
        callback(null, path.resolve(__dirname, '..', '..', 'uploads', 'interfaces'));
      } else {
        callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
      }
      
    },
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');
      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    }
  })
}

module.exports = multerConfig;