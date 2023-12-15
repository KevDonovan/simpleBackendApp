const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  const filePath = page.slice(page.indexOf('/')+1);
  console.log(page);
  console.log(filePath);
  /*
  const pageObj = {
    '/' : function(){this.readHTML('index.html')},
    '/otherpage' : function(){this.readHTML('/otherpage.html')},
    '/otherotherpage' : function(){this.readHTML('/otherotherpage.html')},
    '/api' : function(){this.reqAPI()},
    '/css/style.css': function(){this.reqCSS(`${filePath}.css`)},
    '/js/main.js': function(){this.reqJS(`${filePath}.js`)},

    readHTML: function (htmlPage) {
      fs.readFile(`${htmlPage}.html`, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    },
    reqAPI: function (){
      if('student' in params){
        if(params['student'] == 'Kevin'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Kevin",
            status: "BDK",
            currentOccupation: "Irish Butter"
          }
          res.end(JSON.stringify(objToJson));
        }
        else if(params['student'] != 'Kevin'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "unknown",
            status: "unknown",
            currentOccupation: "unknown"
          }
          res.end(JSON.stringify(objToJson));
        }
      }
    },
    reqCSS: function (cssFile){
      fs.readFile(cssFile, function(err, data) {
      res.write(data);
      res.end();
      });
    },
    reqJS: function (jsFile){
      fs.readFile(jsFile, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
    }
  }

  pageObj[page]();
*/
  
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
  
});

server.listen(8000);
