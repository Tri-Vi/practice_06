const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/client/bower_components', express.static('client/bower_components'));


app.listen(port, function(err){
  if(err) throw err;
  console.log('Running app on port 3000');
})
