const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/:date', (req, res) => {
  const extractedValue = req.params.date;

  const date = new Date(isNaN(extractedValue) ? extractedValue : parseInt(extractedValue));

  if (date instanceof Date && !isNaN(date.valueOf())) {
    const unixDate = date.getTime();
    const utcDate = date.toUTCString();

    return res.json({ unix: unixDate, utc: utcDate });
  } else {
    return res.json({ error: date.toString() });
  }
});

app.get('/api', (req, res) => {
  const date = new Date();
  const unixDate = date.getTime();
  const utcDate = date.toUTCString();

  let dateObj = { unix: unixDate, utc: utcDate };

  res.json(dateObj);
});

app.listen(3000);
