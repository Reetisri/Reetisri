 const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

 
app.use(cookieParser());
app.use(express.json());

 
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'user123', { 
    maxAge: 3600000, 
    httpOnly: true,   
    secure: false    
  });
  res.cookie('theme', 'dark', { 
    maxAge: 7 * 24 * 3600000 
  });
  res.send('Cookies have been set and saved!');
});
 
app.get('/get-cookies', (req, res) => {
  res.json({
    message: 'Cookies retrieved',
    cookies: req.cookies
  });
});
 
app.get('/clear-cookies', (req, res) => {
  res.clearCookie('username');
  res.clearCookie('theme');
  res.send('Cookies have been cleared!');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});