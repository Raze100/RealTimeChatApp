var socket = io();

let btn = document.getElementById('btn');

btn.onclick = function exec() {
    socket.emit ('from_client');
}
socket.on('from_Server', () => {
    
    const div = document.createElement('div');
    div.innerText = 'New Event from server';
    document.body.appendChild(div);  
})