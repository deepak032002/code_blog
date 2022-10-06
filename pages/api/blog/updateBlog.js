import connectToDb from "../../../middleware/db"
import Blog from "../../../model/blog"
import {faker}  from '@faker-js/faker'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const obj = {
            title: req.body.title,
            slug: req.body.slug,
            tags: req.body.tags,
            image: req.body.image,
            metadesc: req.body.metadesc,
            author: faker.name.fullName(),
            author_image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            content: req.body.content
        }

        const {blog_id} = req.headers;
        console.log(blog_id);
        const data = await Blog.findByIdAndUpdate(blog_id, obj);

        if (data) {
           return res.status(200).json({ success: true, msg: 'Message added!', data })
        }

        return res.status(400).json({success: false, msg: 'Some Problem occured!'})

    } else {
        res.status(400).json({ success: false, msg: 'Method Not allowed' })
    }

}

const updateBlog = connectToDb(handler)

export default updateBlog