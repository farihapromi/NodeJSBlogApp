const Blog = require('../models/blog');

const blog_index = (req, res) => {
  Blog.find()
    .then((result) => {
      res.render('index', { title: 'All blogs', blogs: result });
    })
    .catch((err) => {
      res.send(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create_get = (req, res) => {
  res.render('create', { title: 'Create a new blog' });
};

const blog_create_post = (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
  });

  blog
    .save()
    .then(() => {
      res.redirect('/blogs'); // Redirect to the blogs page after saving
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/blogs'); // Redirect to the blogs list after deletion
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error deleting blog');
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
