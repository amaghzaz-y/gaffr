import { useSnapshot } from "valtio"
import { tableState, worldState } from "./state"

export default function Toolbar() {
    const worldStateSnap = useSnapshot(worldState)
    const tableStateSnap = useSnapshot(tableState)
    return (
        <div className="flex font-bold flex-col gap-0.5 w-full min-h-[500px] min-w-[250px] h-fit bg-white/50 backdrop-blur-sm">
            <div>
                <h1 className="text-xl bg-blue-950/80 text-white text-center py-1">GAFFRSIM</h1>
            </div>
            <div className="bg-white/20 px-2 py-1 flex justify-between items-center">
                <label>
                    Table visible:
                </label>
                <input checked={tableStateSnap.visible} className="w-[1.25rem] h-[1.25rem]" type="checkbox" onChange={(e) => { tableState.visible = e.target.checked }} />
            </div>
            <div className="bg-white/20 px-2 py-1 flex justify-between items-center">
                <label>
                    Table grid:
                </label>
                <input checked={tableStateSnap.grid} className="w-[1.25rem] h-[1.25rem]" type="checkbox" onChange={(e) => { tableState.grid = e.target.checked }} />
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
        </div>
    )
}