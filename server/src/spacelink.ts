enum Command {
    REGISTER = "REGISTER", // Register robot to server
    ADD = "ADD", // Add robot to simulation scene
    POSITION = "POSITION", //  robot position state sent from robot
    ROTATION = "ROTATION", //  robot rotation state sent from robot
    MOVE = "MOVE", // Move robot
    ROTATE = "ROTATE", // Rotate robot
    ACTION = "ACTION", // Perform robot action
    LIDAR = "LIDAR", // Lidar data sent from robot
    MSG = "MSG", // Message sent from/to robot
    OK = "OK", // Command successful
    ERROR = "ERROR", // Command failed
    TIMEOUT = "TIMEOUT", // Command timed out
    NOT_REGISTERED = "NOT_REGISTERED", // Robot not registered to server
    CMD_ERR = "CMD_ERR", // Command error
}

interface RegisterCommand {
    command: Command.REGISTER
    robotName: string
    robotType: string
    radius: number
    color: string
}


interface AddCommand {
    command: Command.ADD
    robotName: string
    robotType: string
    x: number
    y: number
    angle: number
    radius: number
    color: string
}

interface PositionCommand {
    command: Command.POSITION
    robotName: string
    x: number
    y: number
}

interface RotationCommand {
    command: Command.ROTATION
    robotName: string
    angle: number
}

interface MoveCommand {
    command: Command.MOVE
    robotName: string
    x: number
    y: number
}

interface RotateCommand {
    command: Command.ROTATE
    robotName: string
    angle: number
}

interface ActionCommand {
    command: Command.ACTION
    robotName: string
    action: string
}

interface LidarCommand {
    command: Command.LIDAR
    robotName: string
    angle: number
    distance: number
}

interface MsgCommand {
    command: Command.MSG
    robotName: string
    message: string
}

class Spacelink {
    constructor() { }

    public makeCommand(cmd: string) {
        const cmds = cmd.split(" ")
        const command = this.parseCommand(cmds[0])
        switch (command) {
            case Command.REGISTER:
                return this.parseRegisterCommand(cmds)
            case Command.ADD:
                return this.parseAddCommand(cmds)
            case Command.POSITION:
                return this.parsePositionCommand(cmds)
            case Command.ROTATION:
                return this.parseRotationCommand(cmds)
            case Command.MOVE:
                return this.parseMoveCommand(cmds)
            case Command.ROTATE:
                return this.parseRotateCommand(cmds)
            case Command.ACTION:
                return this.parseActionCommand(cmds)
            case Command.LIDAR:
                return this.parseLidarCommand(cmds)
            case Command.MSG:
                return this.parseMsgCommand(cmds)
            default:
                return command
        }
    }

    private parseRegisterCommand(cmds: string[]): RegisterCommand | Command.CMD_ERR {
        if (cmds.length != 5) {
            return Command.CMD_ERR
        }
        return {
            command: Command.REGISTER,
            robotName: cmds[1],
            robotType: cmds[2],
            radius: parseFloat(cmds[3]),
            color: cmds[4]
        }
    }
    private parseAddCommand(cmds: string[]): AddCommand | Command.CMD_ERR {
        if (cmds.length != 8) {
            return Command.CMD_ERR
        }
        return {
            command: Command.ADD,
            robotName: cmds[1],
            robotType: cmds[2],
            x: parseFloat(cmds[3]),
            y: parseFloat(cmds[4]),
            angle: parseFloat(cmds[5]),
            radius: parseFloat(cmds[6]),
            color: cmds[7]
        }
    }
    private parsePositionCommand(cmds: string[]): PositionCommand | Command.CMD_ERR {
        if (cmds.length != 3) {
            return Command.CMD_ERR
        }
        return {
            command: Command.POSITION,
            robotName: cmds[1],
            x: parseFloat(cmds[2]),
            y: parseFloat(cmds[3])
        }
    }
    private parseRotationCommand(cmds: string[]): RotationCommand | Command.CMD_ERR {
        if (cmds.length != 3) {
            return Command.CMD_ERR
        }
        return {
            command: Command.ROTATION,
            robotName: cmds[1],
            angle: parseFloat(cmds[2])
        }
    }
    private parseMoveCommand(cmds: string[]): MoveCommand | Command.CMD_ERR {
        if (cmds.length != 4) {
            return Command.CMD_ERR
        }
        return {
            command: Command.MOVE,
            robotName: cmds[1],
            x: parseFloat(cmds[2]),
            y: parseFloat(cmds[3])
        }
    }
    private parseRotateCommand(cmds: string[]): RotateCommand | Command.CMD_ERR {
        if (cmds.length != 3) {
            return Command.CMD_ERR
        }
        return {
            command: Command.ROTATE,
            robotName: cmds[1],
            angle: parseFloat(cmds[2])
        }
    }
    private parseActionCommand(cmds: string[]): ActionCommand | Command.CMD_ERR {
        if (cmds.length != 3) {
            return Command.CMD_ERR
        }
        return {
            command: Command.ACTION,
            robotName: cmds[1],
            action: cmds[2]
        }
    }
    private parseLidarCommand(cmds: string[]): LidarCommand | Command.CMD_ERR {
        if (cmds.length != 3) {
            return Command.CMD_ERR
        }
        return {
            command: Command.LIDAR,
            robotName: cmds[1],
            angle: parseFloat(cmds[2]),
            distance: parseFloat(cmds[3])
        }
    }
    private parseMsgCommand(cmds: string[]): MsgCommand | Command.CMD_ERR {
        if (cmds.length != 3) {
            return Command.CMD_ERR
        }
        return {
            command: Command.MSG,
            robotName: cmds[1],
            message: cmds[2]
        }
    }

    private parseCommand(cmd: string): Command {
        switch (cmd) {
            case "REGISTER":
                return Command.REGISTER
            case "ADD":
                return Command.ADD
            case "POSITION":
                return Command.POSITION
            case "ROTATION":
                return Command.ROTATION
            case "MOVE":
                return Command.MOVE
            case "ROTATE":
                return Command.ROTATE
            case "ACTION":
                return Command.ACTION
            case "LIDAR":
                return Command.LIDAR
            case "MSG":
                return Command.MSG
            case "OK":
                return Command.OK
            case "ERROR":
                return Command.ERROR
            case "TIMEOUT":
                return Command.TIMEOUT
            case "NOT_REGISTERED":
                return Command.NOT_REGISTERED
            default:
                return Command.CMD_ERR
        }
    }
}