const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Aditya',
    likes: [
      'Biking',
      'Badminton'
    ]
  })
});

app.get('/about', (req, res) => {
//  res.send('About Page');
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad request'
  })
})


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
