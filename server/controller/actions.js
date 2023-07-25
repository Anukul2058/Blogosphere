import formD from "../db/model.js";
import bcrypt from 'bcrypt';
import postData from "../db/post.js";



export const createdata = async (request, response) => {

    const salt = bcrypt.genSaltSync(10);
    const data = request.body;

    const newdata = new formD({ ...data, password: bcrypt.hashSync(data.password, salt) });

    try {
        await newdata.save()
        response.json(newdata);
    }
    catch (error) {
        console.log(error)
        response.status(400).json(error)
    }


}

export const loginData = async (req, res) => {

    const { email, password } = req.body;
    try {
        const userdoc = await formD.findOne({ email })

        const passOk = bcrypt.compareSync(password, userdoc.password)
        if (passOk) {
            res.status(200).json(userdoc)
        }
        else {
            res.status(400).json(error)

        }

    } catch (error) {
        res.status(400).json(error)

    }


}

export const createpost = async (req, res) => {
    
    const { title, summary, content, file,authorId,authorName} = req.body;
    const postdoc = new postData({
        title, summary, content, file,authorId,authorName
    })
    try {
        await postdoc.save()

        res.json(postdoc)
    }
    catch (error) {
        res.status(400).json(error)

    }
}

export const getPost = async (req, res) => {
    try {
        const data = await postData.find();
        res.json(data);

    }
    catch(error){
        res.status(400).json(error)

    }
    
}

export const getPostPage = async(req,res)=>{
    try{
        const {id} = req.params;
        console.log(id);
        const data = await postData.findById(id);
        res.status(200).json(data);
        
    }
    catch(err){
        res.status(400).json(err);
    }
}
