const {
    get
} = require('../utils/customRooms');
const {
    addUser,
    deleteUser,
    getRooms
} = require('../utils/handleRooms')
const {
    saveComment,
    customRoom,
    add,
    deleteUser
} = require('../utils/helpers');

const socketIO = function(io) {
    io.on('connection', (socket) => {
        console.log('a user connected');

        //a room for each user
        socket.on('userJoin', (id) => {
            socket.username = id;
            socket.join(id);
            get(id).then(rooms => {
                rooms.forEach(room => {
                    socket.join(room);
                })
            }).catch(err => {
                console.log(err);
            });
            console.log('joined');
            getRooms().forEach(i => {
                socket.to(i).emit('joined', {
                    id: id,
                    alive: true
                });
            });
            addUser(id);
        });

        //a message received save and emit to receiver(s) - emmiter
        socket.on('message', (msg) => {
            saveComment(msg).then(() => {
                socket.to(msg.receiver).emit('message', {
                    message: msg
                });
            }).catch(err => {
                console.log(err);
            });
        });

        //join custom room in real time
        socket.on('accept', (roomId) => {
            socket.join(roomId);
        });

        //custom room
        socket.on('newRoom', (data) => {
            customRoom(data.name, data.members).then((room) => {
                let newRoom = {
                    name: room.name,
                    id: room._id,
                    custom: true,
                    avatar: room.url
                }; //to all
                data.members.forEach(member => {
                    io.to(member).emit('invite', newRoom);
                });
            }).catch(err => {
                console.log(err);
            });
        });

        //add user
        socket.on('add', (data) => {
            add(data.uid, data.rid).then((room) => {
                let newRoom = {
                    name: room.name,
                    id: data.rid,
                    custom: true,
                    avatar: room.url
                }
                socket.to(data.uid).emit('invite', newRoom);
            }).catch(err => {
                console.log(err);
            });
        });

        //notify the rest
        socket.on('disconnect', () => {
            console.log('disconnected');
            deleteUser(socket.username);
            getRooms().forEach(i => {
                io.to(i).emit('left', {
                    id: socket.username,
                    alive: false
                });
            });
        });
    });
}

module.exports = socketIO;