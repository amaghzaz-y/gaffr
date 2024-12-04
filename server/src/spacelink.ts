// import { Robot } from "./robot"
import { AddCommand, RegisterCommand, StatusCommand, Command, serialize, deserialize } from "./parser"
import { WebSocket } from "ws"
import Logger from "./logger"
class SpaceLink {
    robots_sockets: Map<string, WebSocket>
    simulators_sockets: Map<string, WebSocket>

    handle(ws: WebSocket, msg: string) {
        const command = deserialize(msg)
        switch (command.command) {
            case Command.REGISTER:
                this.handleRegister(ws, command)
                break;
        }
    }

    private handleRegister(ws: WebSocket, cmd: RegisterCommand) {
        // add connection to stack and ack robot's request
        Logger.Info("Handling Register")
        this.robots_sockets.set(cmd.robotName, ws)
        ws.send(serialize(new StatusCommand("server", Command.OK)))
        // add robot to simalation
        const payload: AddCommand = {
            command: Command.ADD,
            robotName: cmd.robotName,
            robotType: cmd.robotType,
            radius: cmd.radius,
            color: cmd.color,
            angle: 0,
            x: 0,
            y: 0
        }
        const response = serialize(payload)
        let count = 0
        for (const conn of this.simulators_sockets.values()) {
            conn.send(response)
            count++
        }
        Logger.Info(`Add Command sent to ${count} simulators`)
    }

}

export default SpaceLink;