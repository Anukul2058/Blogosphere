import express, { request } from 'express';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes.js';
import cookieParser from 'cookie-parser'

const app = express();

// define the usage of 
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
// app.use(cookieParser)
// {credentials:true,origin:'http://localhost:3000/'}
app.use(cors());
app.use('/',router)


// CONNECTIONS
const PORT = 4000;
const connection_url = 'mongodb://localhost:27017/myblog'

mongoose.connect(connection_url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,(request,response)=>{
        console.log('server started')
    })

})
.catch((error)=>{console.log(error)})



