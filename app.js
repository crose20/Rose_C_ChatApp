var express = require('express');
var app = express();
var io = require('socket.io')(http);

const port = process.env.PORT || 3030;

//tell express where our static files are (js, images,)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const serve = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});

io.attach(server);

io.on('connection', function(socket) {
    console.log('a user has connected');

    socket.on('disconnect', function() {
        console.log('a user has disconnected')
    });
});