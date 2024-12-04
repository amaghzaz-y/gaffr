import { WebSocketServer } from 'ws';
import SpaceLink from './spacelink';
import Logger from './logger';

const wss = new WebSocketServer({ port: 36969 });
const spaceLink = new SpaceLink()

wss.on('connection', (ws, message) => {
    ws.on('error', console.error);

    ws.on('message', (data) => {
        spaceLink.handle(ws, data.toString("utf8"))
    });

    ws.on('open', () => {
        console.log(`Connection from ${message.socket.remoteAddress} opened.`);
    })

    ws.on('close', () => {
        console.log(`Connection from ${message.socket.remoteAddress} closed.`);
    });
});

wss.on("listening", () => {
    Logger.Info("Listening on port: 36969")
})
