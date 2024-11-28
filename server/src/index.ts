import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 36969 });

wss.on('connection', (ws, s) => {
    ws.on('error', console.error);

    ws.on('message', (data) => {

    });

    ws.on('open', () => {
        console.log(`Connection from ${s.socket.remoteAddress} opened.`);
    })
    ws.on('close', () => {
        console.log(`Connection from ${s.socket.remoteAddress} closed.`);
    });
});