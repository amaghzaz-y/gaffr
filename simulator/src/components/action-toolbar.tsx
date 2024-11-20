import { useSnapshot } from "valtio";
import { globalState, Mode, Shape } from "../state";
import * as theme from "../theme"
import { IconArrowsMaximize, IconArrowsMove, IconCapsule, IconChartDonut3, IconCone, IconCube, IconCylinder, IconGridPattern, IconLayout, IconRotate360, IconSphere } from "@tabler/icons-react";
import { nanoid } from "nanoid";

export default function ActionToolbar() {
    const state = useSnapshot(globalState)
    const isModeSelected = (mode: string) => state.mode == mode
    const addModel = (shape: Shape) => {
        globalState.models.push(
            {
                name: `Model-${shape}-${globalState.models.length + 1}-${nanoid(6)}`,
                shape: shape
            }
        )
    }
    return (
        <div className={theme.verticalContainer}>
            <div className="flex justify-center items-center bg-violet-500/10 w-fit gap-2 backdrop-blur">
                <button onClick={() => (addModel(Shape.Cube))}
                    className={theme.btn}>
                    <IconCube size={"1.75rem"} />
                </button>
                <button onClick={() => (addModel(Shape.Sphere))}
                    className={theme.btn}>
                    <IconSphere size={"1.75rem"} />
                </button>
                <button onClick={() => (addModel(Shape.Cylinder))}
                    className={theme.btn}>
                    <IconCylinder size={"1.75rem"} />
                </button>
                <button onClick={() => (addModel(Shape.Cone))}
                    className={theme.btn}>
                    <IconCone size={"1.75rem"} />
                </button>
                <button onClick={() => (addModel(Shape.Capsule))}
                    className={theme.btn}>
                    <IconCapsule size={"1.75rem"} />
                </button>
                <button className={theme.btn}
                    onClick={() => (addModel(Shape.Torus))}>
                    <IconChartDonut3 size={"1.75rem"} />
                </button>
            </div>
            <div className="flex justify-center items-center bg-emerald-500/10 w-fit gap-2 backdrop-blur">
                <button
                    onClick={() => (globalState.mode = Mode.Translate)}
                    className={isModeSelected("translate") ? theme.btnSelected : theme.btn}>
                    <IconArrowsMove size={"1.75rem"} />
                </button>
                <button
                    onClick={() => (globalState.mode = Mode.Scale)}
                    className={isModeSelected("scale") ? theme.btnSelected : theme.btn}>
                    <IconArrowsMaximize size={"1.75rem"} />
                </button>
                <button
                    onClick={() => (globalState.mode = Mode.Rotate)}
                    className={isModeSelected("rotate") ? theme.btnSelected : theme.btn}>
                    <IconRotate360 size={"1.75rem"} />
                </button>
            </div>
            <div className="flex justify-center items-center bg-blue-500/10 w-fit gap-2 backdrop-blur">
                <button
                    onClick={() => (globalState.grid = !state.grid)}
                    className={globalState.grid ? theme.btnSelected : theme.btn}>
                    <IconGridPattern size={"1.75rem"} />
                </button>
                <button
                    onClick={() => (globalState.wireframe = !state.wireframe)}
                    className={globalState.wireframe ? theme.btnSelected : theme.btn}>
                    <IconLayout size={"1.75rem"} />
                </button>
            </div>
        </div>
    )
}