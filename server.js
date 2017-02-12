var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: 'Article one by Sowmya',
    heading: 'Article one',
    date: 'Feb 10, 2017',
    content: `
            <p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
            </p>
            <p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
            </p>
            <p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
            </p>`
    },
    
    'article-two': {
        title: 'Article two by Sowmya',
        heading: 'Article two',
        date: 'Feb 10, 2017',
        content: `
        <p>
        This is article two
        </p>`
        
    },
    
    'article-three': {
        title: 'Article three by Sowmya',
        heading: 'Article three',
        date: 'Feb 10, 2017',
        content: `
        <p>
        This is article three
        </p>`
    }
            
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content= data.content;
    
    var htmlTemplate = `
    <html>
    <head>
        ${title}
        <meta name="viewport" content="width-device-width initial-scale=1" >
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div class="container">
            ${content}
        </div>
    </body>
    </html>
    `
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
