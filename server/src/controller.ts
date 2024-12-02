import { Robot } from "./robot"
import { AddCommand, RegisterCommand, StatusCommand, Command } from "./spacelink"
class Controller {
    robots: Map<string, Robot>
    robots_sockets: Map<string, WebSocket>
    simulators_sockets: Map<string, WebSocket>

    onRegister(cmd: RegisterCommand): StatusCommand {
        const robot: Robot = {
            name: cmd.robotName,
            type: cmd.robotType,
            x: 0,
            y: 0,
            angle: 0,
            radius: cmd.radius,
            color: cmd.color,
        }
        this.robots.set(cmd.robotName, robot)
        return new StatusCommand(cmd.robotName, Command.OK)
    }
    private addRobotToSimulator(robot: Robot) {
        for (const socket of this.simulators_sockets.values()) {
            const cmd: AddCommand = {
                robotName: robot.name,
                robotType: robot.type,
                x: robot.x,
                y: robot.y,
                angle: robot.angle,
                radius: robot.radius,
                color: robot.color,
                command: Command.ADD
            }
            // socket.send()
        }
    }
}

export const controller = new Controller()