//const express = require('express');

//const caminho = require('path');

//const app=express();

//app.use(express.static(dirname + '/dist/cautech'));

//app.get('/*', function(req,res) {

//res.sendFile(caminho.join(dirname+

//'/dist/cautech/index.html'));});

//app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist', 'cautech')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'cautech', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


