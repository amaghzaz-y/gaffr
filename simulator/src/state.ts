import { proxy } from "valtio"

export interface GlobalState {
    grid: boolean
    wireframe: boolean
    position: number[]
    model: string | null
}

export const globalState = proxy<GlobalState>(
    {
        model: null,
        grid: true,
        position: [],
        wireframe: false,
    }
)
