const express = require('express');

const BlogController = require('../controller/BlogController');
const router = express.Router();

// express router

// router.get('/', (req, res) => {
//   res.redirect('/blogs');
// });
router.get('/create', BlogController.blog_create_get);
router.get('/', BlogController.blog_index);

router.get('/:id', BlogController.blog_details);
router.get('/', BlogController.blog_index);
router.post('/', BlogController.blog_create_post);

router.post('/delete/:id', BlogController.blog_delete);

// router.get('/create', (req, res) => {
//   res.render('create', { title: 'Create a new blog' });
// });

//add data to database
// router.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'Typescript',
//     snippet: 'learn new things',
//     body: 'its similar to javascript',
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// //get all dcouments
// router.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
//single blog
// router.get('/single-blog', (req, res) => {
//   Blog.findById('67b1de24a4dd85ddc7347363')
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
//post data
// router.post('/create', (req, res) => {
//   const blog = new Blog({
//     title: req.body.title,
//     snippet: req.body.snippet,
//     body: req.body.body,
//   });

//   blog
//     .save()
//     .then(() => {
//       res.redirect('/blogs'); // Redirect to the blogs page after saving
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });
module.exports = router;
