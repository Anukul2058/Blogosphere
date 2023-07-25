import mongoose from 'mongoose';

const formSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    username:{
        type:String,
        unique:true
    },
    password:String
})

const formD = mongoose.model('formdata',formSchema)
export default formD