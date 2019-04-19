const Blog = require('../models/blog');

exports.getBlogs = (req, res) => {
    Blog.find({status: "published"})
        .sort({'createdAt': -1})
        .exec(function(err, publishedBlogs) {
            if(err) {
                return res.status(422).send(err);
            }

            return res.json(publishedBlogs);
        })
};