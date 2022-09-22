const uploadImg = (req, res) => {
  if (req.method === "POST") {
    res.status(200).json({ url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", success: true });
  } else {
    res.status(500).json({ success: false });
  }
};

export default uploadImg;
