import connectToDb from "../../../middleware/db";
import Blog from "../../../model/blog";
import { faker } from "@faker-js/faker";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      const obj = {
        title: req.body.title,
        slug: req.body.slug,
        tags: req.body.tags,
        image: req.body.image,
        metadesc: req.body.metadesc,
        author: faker.name.fullName(),
        author_image:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content: req.body.content,
      };

      const data = new Blog(obj);
      const db_res = await data.save();
      if (db_res) {
        res.status(200).json({ success: true, msg: "Message added!" });
      }
    }
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};

const addBlog = connectToDb(handler);

export default addBlog;
