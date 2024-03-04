const expresso = requer('expresso');

const caminho = require('caminho');

const app=express();

app.use(express.static(__dirname + '/dist/cautech'));

app.get('/*', function(req,res) {

res.sendFile(caminho.join(__dirname+

'/dist/cautech/index.html'));});

app.listen(process.env.PORT || 8080);