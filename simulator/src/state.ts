import { proxy } from "valtio"

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

// state.camera.lookAt(0, -20, 0)
// state.camera.position.set(1, 25, 0);