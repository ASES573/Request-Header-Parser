var express = require('express');

var app = express();

var port = process.env.PORT || 4001;

var headerRouter = require('./routes/headerParser');

app.use('/headerparser',headerRouter);

app.use(function(req, res, next) {
  if (req.path === '/headerparser') // pass requests for login page
    next();
  else
    res.redirect('/headerparser'); // redirect to login page when not logged in
  
});

app.get('/headerparser', function(req, res) {
  res.send('HEADERPARSER');
});



app.listen(port,function (err) {
    console.log('server running at PORT : ' + port);

});
