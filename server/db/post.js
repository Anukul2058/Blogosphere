import mongoose, { Schema } from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    content: String,
    file: String,
    authorId: {type:Schema.Types.ObjectId,ref:'formdata'},
    authorName: String
},{
    timestamps:true,
});

const postData = mongoose.model('postdata',postSchema)
export default postData
