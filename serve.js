const express = require('express');

const caminho = require('path');

const app=express();

app.use(express.static(dirname + '/dist/angular-cautech'));

app.get('/*', function(req,res) {

res.sendFile(caminho.join(dirname+

'/dist/cautech/index.html'));});

app.listen(process.env.PORT || 8080);