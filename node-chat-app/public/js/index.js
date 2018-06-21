var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', { 
        from: 'Browser',
        text: 'This is my message',
        createdAt: new Date().toTimeString()
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
});

