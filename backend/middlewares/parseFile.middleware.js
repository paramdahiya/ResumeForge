// middleware for parsing pdf files

const { PDFParse } = require('pdf-parse');
// import { PDFParse } from 'pdf-parse';

async function readFile(req, res, next) {
    try{
        const parser = new PDFParse({data: req.file.buffer});
        const result = await parser.getText();
        req.resumeContent = result.text;
        parser.destroy();
        next();

    }catch(err){
        return res.status(500).json({message:"Cannot read resume."});
    }
}

module.exports = {readFile};