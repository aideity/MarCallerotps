const path = require('path');

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')))

// ● /clarke -> Debe direccionar al recurso clarke.html.
// ● /hamilton -> Debe direccionar al recurso hamilton.html.
// ● /hopper -> Debe direccionar al recurso hopper.html.
// ● /lovelace -> Debe direccionar al recurso lovelace.html.
// ● /turing-> Debe direccionar al recurso turing.html.

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/babbage', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'babbage.html'));
});

app.get('/berners-lee', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'berners-lee.html'));
});

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
