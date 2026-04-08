const app = require("express");
const { authUser } = require("../middlewares/auth.middleware");
const { readFile } = require("../middlewares/parseFile.middleware");
const { uploadResume } = require("../controllers/resume.controller");
const upload = require("../middlewares/fileUpload.middleware");
const router = app.Router();

router.post("/upload", authUser,upload.single("resume") ,readFile, uploadResume);

module.exports = router;