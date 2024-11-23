import { proxy } from "valtio"
import { getPosition } from "./geom"

export interface TableState {
    grid: boolean,
    visible: boolean
}
export const tableState = proxy<TableState>({
    grid: false,
    visible: true,
})

export interface WorldState {
    camera: [number, number, number]
    wirefame: boolean
    grid: boolean
}

export const worldState = proxy<WorldState>({
    camera: [10, 25, 0],
    wirefame: false,
    grid: true
})

export interface RobotState {
    target: [number, number, number]
    speed: number
    acceleration: number
}

export const robotState = proxy<RobotState>({
    target: getPosition(0, 0),
    speed: 1,
    acceleration: 1
})

// state.camera.lookAt(0, -20, 0)
// state.camera.position.set(1, 25, 0);