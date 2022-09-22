import connectToDb from "../../middleware/db";
import Blog from "../../model/blog";

const handler = async(req, res) => {

    if(req.method === 'GET'){
        const blog  = await Blog.findOne({slug: req.query.slug})
        if(blog){
            return res.status(200).json({success:true, blog: blog})
        }else{
            return res.status(400).json({success:false, msg: 'Does not Exist!'})
        }
    }else{
        res.status(400).send('Method not allowed!')
    }

}

const getBlogBySlug = connectToDb(handler)

export default getBlogBySlug