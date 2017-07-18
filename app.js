const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/', (req,res) => {
  res.send('halo')
});

app.listen(process.env.PORT||3000);
