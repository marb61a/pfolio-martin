const slugify = require('slugify');
const AsyncLock = require('async-lock');
const lock = new AsyncLock();

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

exports.getBlogBySlug = (req, res) => {
    const slug = req.params.slug;
  
    Blog.findOne({slug}, function(err, foundBlog) {
        if (err) {
            return res.status(422).send(err);
        }

        return res.json(foundBlog);
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
};
  
exports.getUserBlogs = (req, res) => {
    const userId = req.user.sub;

    Blog.find({userId}, function(err, userBlogs) {
        if (err) {
            return res.status(422).send(err);
        }

        return res.json(userBlogs);
    });
};

exports.updateBlog = (req, res) => {
    const blogId = req.params.id;
    const blogData = req.body;

    Blog.findById(blogId, function(err, foundBlog) {
        if(err) {
            return res.status(422).send(err)
        }

    });
};