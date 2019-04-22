const Blog = require('../models/blog');

exports.getBlogs = (req, res) => {
    Blog.find({status: "published"})
        .sort({'createdAt': -1})
        .exec(function(err, publishedBlogs) {
            if(err) {
                return res.status(422).send(err);
            }

            return res.json(publishedBlogs);
        });
};

exports.getBlogById = (req, res) => {
    const blogId = req.params.id;
  
    Blog.findById(blogId, (err, foundBlog) => {
        if (err) {
            return res.status(422).send(err);
        }

        return res.json(foundBlog);
    });
}
  
exports.getUserBlogs = (req, res) => {
    const userId = req.user.sub;

    Blog.find({userId}, function(err, userBlogs) {
        if (err) {
            return res.status(422).send(err);
        }

        return res.json(userBlogs);
    });
}