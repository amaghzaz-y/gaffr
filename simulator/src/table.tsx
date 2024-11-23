import { Image } from "@react-three/drei";
import * as geom from "./geom"
import { TABLE_WORLD_HEIGHT, TABLE_WORLD_WIDTH } from "./constants";
import { useProxy } from "valtio/utils";
import { tableState } from "./state";
export default function Table() {
    const tableStateSnap = useProxy(tableState)
    const { rotation, scale } = {
        rotation: [-Math.PI / 2, 0, 0],
        scale: [TABLE_WORLD_HEIGHT, TABLE_WORLD_WIDTH]
    }
    const src = tableStateSnap.grid ? "/grid.webp" : "/playmat.webp"
    return (
        <>
            {tableStateSnap.visible && <Image scale={[scale[0], scale[1]]} rotation={[rotation[0], rotation[1], rotation[2]]} position={geom.getAbsolutePosition(0, 0)} url={src} />}
        </>
    )
}