const path = require('path');

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const { password, Vpassword } = req.body;

    if (password === Vpassword) {
        res.redirect('/');
    } else {
        res.send('Las contraseñas no coinciden. <a href="/register">Volver al registro</a>');
    }
});

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname,'views','register.html')))

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));