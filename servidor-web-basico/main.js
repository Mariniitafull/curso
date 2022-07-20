//lado del servidor
const express = require('express'); 
const app = express();

app.use(express.static('public'));

app.get('/hola', (req, res)=>{
  res.end("Hola Mundo");
})
app.listen(3005, function () {
  console.log('Example app listening on port 3005!');
});

