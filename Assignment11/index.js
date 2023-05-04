import express from 'express';
import fileUpload from 'express-fileupload';

const app = express();

app.use(fileUpload({
    limits : {fileSize : 1024 * 1024},
    abortOnLimit : true
}));
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index');
});

app.post('/upload',(req,res) => {
    if(!req.files){
       return res.status(400).send('No Files were Uploaded')
    }

    const file = req.files.myFile;
    const path = `images/${file.name}`;

    file.mv(path,(err) => {
        if(err){
           return res.status(500).send(err);
        }
        return res.send({status : 'success',path : path})
    })
})

app.listen(5000,() => console.log('Server is running'));