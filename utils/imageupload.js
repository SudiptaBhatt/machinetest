const multer = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        if(file.fieldname=='image'){
            filePath="./assets/user";
        }       
        callback(null,filePath);
    },
    filename: function (req, file, callback) {
        callback(null, new Date().getTime() + path.extname(file.originalname));//file.originalname
    }
});

const upload = multer({ storage: storage });

module.exports = upload;