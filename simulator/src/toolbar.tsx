import { useSnapshot } from "valtio"
import { robotState, worldState } from "./state"
import { useState } from "react"
import * as geom from "./geom"

export default function Toolbar() {
    const [target, setTarget] = useState([0, 0, 0]) // X,Y,ROTATION
    const worldStateSnap = useSnapshot(worldState)
    const robotStateSnap = useSnapshot(robotState)
    const currentPosition = geom.getWorldPosition(robotStateSnap.current[0], robotStateSnap.current[2])
    return (
        <div className="flex font-bold flex-col gap-0.5 w-full min-h-[500px] min-w-[250px] h-fit bg-white/50 backdrop-blur-sm">
            <div>
                <h1 className="text-xl bg-blue-950/80 text-white text-center py-1">GAFFRSIM</h1>
            </div>
            <div className="bg-white/20 px-2 py-1 flex justify-between items-center">
                <label>
                    Table:
                </label>
                <input checked={worldStateSnap.tableVisible} className="w-[1.25rem] h-[1.25rem]" type="checkbox" onChange={(e) => { worldState.tableVisible = e.target.checked }} />
            </div>
            <div className="bg-white/20 px-2 py-1 flex justify-between items-center">
                <label>
                    Table Playmat:
                </label>
                <input checked={worldStateSnap.tablePlaymat} className="w-[1.25rem] h-[1.25rem]" type="checkbox" onChange={(e) => { worldState.tablePlaymat = e.target.checked }} />
            </div>
            <div className="bg-white/20 px-2 py-1 flex justify-between items-center">
                <label>
                    Table Grid:
                </label>
                <input checked={worldStateSnap.tableGrid} className="w-[1.25rem] h-[1.25rem]" type="checkbox" onChange={(e) => { worldState.tableGrid = e.target.checked }} />
            </div>
            <div className="bg-white/20 px-2 py-1 flex justify-between items-center">
                <label>
                    World Grid:
                </label>
                <input checked={worldStateSnap.grid} className="w-[1.25rem] h-[1.25rem]" type="checkbox" onChange={(e) => { worldState.grid = e.target.checked }} />
            </div>
            <div className="bg-white/20 px-2 py-1 flex justify-between items-center">
                <label>
                    Wireframe:
                </label>
                <input checked={worldStateSnap.wirefame} className="w-[1.25rem] h-[1.25rem]" type="checkbox" onChange={(e) => { worldState.wirefame = e.target.checked }} />
            </div>
            <div className="bg-white/20 px-2 py-1 flex flex-col justify-between">
                <text className="text-lg">Robot: 1</text>
                <text>Position: {currentPosition[0].toFixed(2)}: {currentPosition[1].toFixed(2)}</text>
                <text>Rotation: {geom.getAngleDegree(robotStateSnap.currentRotation).toFixed(2)}</text>
                <div className="flex flex-col gap-1">
                    <input placeholder="X" type="number" className="outline-none indent-2 bg-white/20" onChange={(e) => { setTarget([e.target.valueAsNumber, target[1], target[2]]) }} />
                    <input placeholder="Y" type="number" className="outline-none indent-2 bg-white/20" onChange={(e) => { setTarget([target[0], e.target.valueAsNumber, target[2]]) }} />
                    <input placeholder="Rotation" type="number" className="outline-none indent-2 bg-white/20" onChange={(e) => { setTarget([target[0], target[1], e.target.valueAsNumber]) }} />
                    <button className="w-[3rem] bg-blue-500 text-white hover:bg-blue-400" onClick={() => { robotState.target = geom.getPosition(target[0], target[1]); robotState.targetRotation = geom.getAngleRadian(target[2]) }}>Go</button>
                </div>
            </div>
        </div>
    )
}