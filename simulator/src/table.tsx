import { Image } from "@react-three/drei";
import * as geom from "./geom"
export default function Table() {
    const width = 12
    const height = width * 1.5
    return (
        <>
            <Image scale={[width, height]} rotation={[-Math.PI / 2, 0, 0]} position={geom.getAbsolutePosition(0, 0)} url="/playmat.webp" />
        </>
    )
}