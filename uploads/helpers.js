const path = require("path");

const checkFileType = (filetypes, file, cb) => {
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    return cb("Invalid file type!");
  }
};

module.exports = {
  checkFileType,
};
