import { Image } from "@react-three/drei";

export default function Table() {
    const width = 12
    const height = width * 1.5
    return (
        <>
            <Image scale={[width, height]} rotation={[-Math.PI / 2, 0, 0]} position={[0.0, 0.01, 0]} url="/playmat.webp" />
        </>
    )
}