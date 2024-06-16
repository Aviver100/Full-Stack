import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error('Incorrect file type');
        error.code = 'INCORRECT_FILETYPE';
        return cb(error, false);
    }
    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5000000 // 5 MB
    }
});

export default upload;
