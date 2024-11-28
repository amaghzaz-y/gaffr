export const ws = new WebSocket("ws://127.0.0.1:3567");

ws.addEventListener("open", () => {
    ws.send("Hello");
    console.log("Connected");
})



export const scheme = "ROBOT_NAME ACTION PARAMETERS";


ws.addEventListener("message", (event) => {
    console.log(event.data);
})

export function Send(message: string) {
    ws.send(message);
}
