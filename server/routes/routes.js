import express from 'express';
import { createdata,loginData,createpost,getPost, getPostPage} from '../controller/actions.js';


const router = express.Router()

router.post('/register',createdata)
router.post('/login',loginData)
router.post('/createpost',createpost)
router.get('/getpost',getPost)
router.get('/getPostPage/:id',getPostPage)



export default router