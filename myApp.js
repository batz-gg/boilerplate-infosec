const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet(
  {
    hidePoweredBy: false
  },
  {
    frameguard: { 
      action: 'DENY' 
    }
  },
  {
    xssFilter: false
  },
  {
    noSniff: false
  },
  {
    ieNoOpen: false
  },
  {
    ninetyDaysInSeconds: 90*24*60*60,
    hsts: {
      maxAge: this.ninetyDaysInSeconds,
      force: true
    }
  },
  {
    dnsPrefetchControl: false
  },
  {
    noCache: false
  },
  {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'trusted-cdn.com']
      }
    }
  }
))














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
