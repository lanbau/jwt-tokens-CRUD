var express = require('express'),
bodyParser  = require('body-parser'),
mongoose    = require('mongoose'),
expressJWT  = require('express-jwt'),
jwt         = require('jsonwebtoken'),
app         = express();

var secret = "onhermajestysecretservice";
mongoose.connect('mongodb://localhost:27017/MI6');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/agents/:id', expressJWT({secret: secret}));
app.use(function(error, request, response, next) {
  // Check type of error
  if ( error.name === "UnauthorizedError" ) {
    // response.json({message: "Some token error"})
    response.status(401).json( {message: "You do not have access to that classified information." });
  } else {
    response.json({message: "Some other error"})
  }
})

app.post('/api/authorizations', function(request, response) {
  //check the user credentials are right

  //collect information to include in the token
  var tokenInfo = {
    name: 'James Bond',
    codename: "007",
    id: "5705cff86671ce8d479edd76"
  }

  //make a token and send it as json
  var token = jwt.sign(tokenInfo, secret);
  response.json( {agent: tokenInfo, token: token });
})

var routes = require('./config/routes');
app.use('/api', routes);

app.listen(3000);
