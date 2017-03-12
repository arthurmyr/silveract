var express = require('express'),
    app = express(),
    appPort = 1337;

app.use(express.static(__dirname + '/public'));

app
.get('/', function(req, res){
    res.sendFile('public/index.html', { root : __dirname });
})
.get('/presentation', function(req, res){
    res.sendFile('public/presentation.html', { root : __dirname });
})
.get('/activites', function(req, res){
    res.sendFile('public/activites.html', { root : __dirname });
})
.get('/contact', function(req, res){
    res.sendFile('public/contact.html', { root : __dirname});
})
.use(function(req, res){
    res.redirect('/');
})

app.listen(appPort, function(){
    console.log('listening on *'+appPort);
});