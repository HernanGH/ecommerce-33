const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/mensaje', (req, res) => {
  res.send('HOla NOdeJS desde heroku!!!');
});

const PORT = process.env.PORT || 8080;

const  server = app.listen(PORT, () => console.log(`API EXPRESS run in ${PORT}`))

server.on('error', (error) => console.log('Server Error: ', error));