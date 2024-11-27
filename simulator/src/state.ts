import { proxy } from "valtio"
import { getPosition } from "./geom"


export interface WorldState {
    tableGrid: boolean,
    tablePlaymat: boolean,
    tableVisible: boolean,
    camera: [number, number, number]
    wirefame: boolean
    grid: boolean
}

export const worldState = proxy<WorldState>({
    tableGrid: false,
    tablePlaymat: true,
    tableVisible: true,
    camera: [10, 25, 0],
    wirefame: false,
    grid: true
})

export interface RobotState {
    target: [number, number, number]
    current: [number, number, number]
    targetRotation: number
    currentRotation: number
    speed: number
    acceleration: number
}

export const robotState = proxy<RobotState>({
    target: getPosition(1500, 1000),
    current: getPosition(0, 0),
    targetRotation: 0,
    currentRotation: 0,
    speed: 1,
    acceleration: 1
})

// state.camera.lookAt(0, -20, 0)
// state.camera.position.set(1, 25, 0);