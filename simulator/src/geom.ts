import { TABLE_HEIGHT, TABLE_WIDTH, TABLE_WORLD_HEIGHT, TABLE_WORLD_WIDTH } from "./constants"

export interface RobotState {
    position: [number, number, number],
    scale: [number, number, number],
    rotation: [number, number, number]
    color: string
}

export function createRobotState(): RobotState {
    return {
        position: [5.3, 0, 8.3],
        scale: [1, 1, 1],
        rotation: [0, Math.PI / 2, 0],
        color: "#ff0000"
    }
}

export function getAbsolutePosition(x: number, y: number): [number, number, number] {
    const rx = (x * TABLE_WORLD_HEIGHT / TABLE_HEIGHT)
    const ry = (y * TABLE_WORLD_WIDTH / TABLE_WIDTH)
    return [rx, 0, ry]
}

export function getPosition(x: number, y: number): [number, number, number] {
    const rx = (x * TABLE_WORLD_HEIGHT / TABLE_HEIGHT)
    const ry = (y * TABLE_WORLD_WIDTH / TABLE_WIDTH) + TABLE_WORLD_WIDTH / 2
    return [rx, 0, ry]
}


