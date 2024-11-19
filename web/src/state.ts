import { proxy } from "valtio"


export enum Shape {
    Cube = "cube",
    Sphere = "sphere",
    Cylinder = "cylinder",
    Cone = "cone",
    Torus = "torus",
    Capsule = "capsule"
}

export enum Mode {
    Translate = "translate",
    Rotate = "rotate",
    Scale = "scale"
}

export interface GlobalState {
    mode: Mode
    grid: boolean
    wireframe: boolean
    shape: Shape
    models: { name: string, shape: Shape }[]
    position: number[]
    model: string | null
}

export interface Model {
    name: string | null
    shape: Shape | null
    position: [number, number, number]
    rotation: [number, number, number]
    scale: [number, number, number]
    args: number[]
}

export const globalState = proxy<GlobalState>(
    {
        model: null,
        shape: Shape.Cube,
        mode: Mode.Translate,
        grid: true,
        position: [],
        wireframe: false,
        models: [],
    }
)

export const model = proxy<Model>({
    args: [0, 0, 0],
    name: null,
    shape: null,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [0, 0, 0],
})