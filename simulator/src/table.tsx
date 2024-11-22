import { Image } from "@react-three/drei";
import * as geom from "./geom"
import { TABLE_WORLD_HEIGHT, TABLE_WORLD_WIDTH } from "./constants";
import { useControls } from "leva";
export default function Table() {
    const { rotation, scale } = useControls("Table", {
        rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
        scale: [TABLE_WORLD_HEIGHT, TABLE_WORLD_WIDTH]
    })
    return (
        <>
            <Image scale={scale} rotation={rotation} position={geom.getAbsolutePosition(0, 0)} url="/playmat.webp" />
        </>
    )
}