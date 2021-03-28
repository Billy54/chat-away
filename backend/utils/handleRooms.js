var rooms = []

const addUser = function(id) {
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i] === id) {
            return;
        }
    }
    rooms.push(String(id));
    console.log(rooms);
}

const deleteUser = function(id) {
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i] === id) {
            rooms.splice(i, 1);
        }
    }
}

const getRooms = function() {
    return rooms;
}

const online = function(id) {
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i] === id) {
            return true;
        }
    }
    return false;
}

module.exports = {
    addUser,
    deleteUser,
    getRooms,
    online
}