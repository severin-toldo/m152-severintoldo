const compression = require('compression')
const express = require('express');

const app = express();

app.use(compression())
app.use(express.static('./dist/m152-severintoldo'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/m152-severintoldo' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
