import connectToDb from "../../middleware/db"
import Blog from "../../model/blog"

const handler = async(req, res) => {
    if(req.method == 'GET'){
        const blogs = await Blog.find()

        res.status(200).json({success: true, blogs: blogs})
    }else{
        res.status(400).json({success: false, msg: 'Method Not allowed'})
    }
    
}

const getBlogs = connectToDb(handler)

export default getBlogs