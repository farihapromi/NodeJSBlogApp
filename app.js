const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');

const blogRoutes = require('./router/blogRoute');

// express app
const app = express();
app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data

const dbUrl =
  'mongodb+srv://mugdho:sunday2025@cluster0.u7yariw.mongodb.net/FarihasBlog?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB successfully! 🚀'))
  .catch((err) => console.error('Database connection error:', err));

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});
app.use('/blogs', blogRoutes);

// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log('in the next middleware');
//   next();
// });

app.use(morgan('dev'));

// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
