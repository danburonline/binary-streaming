// const localWebSocketURL: "ws://127.0.0.1:8787"
const remoteWebSocketURL = 'wss://binary-streaming.danburonline.workers.dev';
const webSocketUrl = localWebSocketURL ? localWebSocketURL : remoteWebSocketURL;

const send = document.getElementById('send');
const socket = new WebSocket(webSocketUrl);
let clientTimeStamp;

socket.onopen = () => {
  console.log('Connection open!');
};

send.addEventListener('click', () => {
  clientTimeStamp = new Date().getTime().toString();
  console.log('Local timestamp: ' + clientTimeStamp);
  socket.send(clientTimeStamp);
});

socket.onmessage = (event) => {
  console.log('Server timestamp: ' + event.data);
  console.log('Difference: ' + (event.data - clientTimeStamp));
};
