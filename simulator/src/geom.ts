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
    const rx = (x * TABLE_WORLD_HEIGHT / TABLE_HEIGHT) - TABLE_WORLD_HEIGHT / 2
    const ry = (-y * TABLE_WORLD_WIDTH / TABLE_WIDTH) + TABLE_WORLD_WIDTH / 2
    return [rx, 0, ry]
}

export function getWorldPosition(x: number, y: number): [number, number] {
    const rx = (x * TABLE_HEIGHT / TABLE_WORLD_HEIGHT) + TABLE_HEIGHT / 2
    const ry = (-y * TABLE_WIDTH / TABLE_WORLD_WIDTH) + TABLE_WIDTH / 2
    return [rx, ry];
}

export function getAngleRadian3(x: number, y: number, z: number): [number, number, number] {
    return [x * Math.PI / 180, y * Math.PI / 180, z * Math.PI / 180]
}

export function getAngleRadian(val: number): number {
    return val * Math.PI / 180
}

export function getAngleDegree(val: number): number {
    return val * 180 / Math.PI
}

export function getScale(x: number, y: number, z: number): [number, number, number] {
    const ratio = TABLE_WORLD_HEIGHT / TABLE_HEIGHT
    return [x * ratio, y * ratio, z * ratio]
}

export function getLength(size: number): number {
    const ratio = TABLE_WORLD_HEIGHT / TABLE_HEIGHT
    return size * ratio
}
