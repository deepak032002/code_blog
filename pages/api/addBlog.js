import connectToDb from "../../middleware/db"
import Blog from "../../model/blog"
import {faker}  from '@faker-js/faker'

const handler = async (req, res) => {
    if (req.method == 'POST') {

        const obj = {
            title: faker.lorem.lines(2),
            slug: faker.lorem.slug(4),
            tags: [faker.lorem.word(4), faker.lorem.word(4)],
            image: faker.image.abstract(330, 200, true),
            metadesc: faker.lorem.paragraph(3),
            author: faker.name.fullName(),
            content: '<h1 className="h1">Hello Code</h1>'
        }

        const data = new Blog(obj)
        const db_res = await data.save()
        if (db_res) {
            res.status(200).json({ success: true, msg: 'Message added!' })
        }
    } else {
        res.status(400).json({ success: false, msg: 'Method Not allowed' })
    }

}

const addBlog = connectToDb(handler)

export default addBlog