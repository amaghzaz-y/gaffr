import { useControls } from "leva"

export default function Robot() {
    const { position, scale, rotation } = useControls("Robot", {
        position: [5.3, 0, 8.3],
        scale: [1, 1, 1],
        rotation: [0, Math.PI / 2, 0],
    })
    return (
        <Jessy position={position} scale={scale} rotation={rotation} color={"#ff0000"} />
    )
}

const Jessy = ({ position, scale, rotation, color }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number], color: string | undefined }) => {
    return (
        <group position={position} scale={scale} rotation={rotation}>
            <mesh
                scale={[1, 1, 1]}
                position={[0, 1, 0]}
                rotation={[0, 0, 0]}
            >
                <capsuleGeometry args={[0.5, 1, 32]} />
                <meshStandardMaterial wireframe={false} color={color || "#ff0000"} />
            </mesh>
            <mesh
                scale={[1, 1, 1]}
                position={[0.3, 1.5, -0.2]}
                rotation={[0, 0, 0]}
            >
                <boxGeometry args={[0.5, 0.2, 0.2]} />
                <meshStandardMaterial wireframe={false} color={"#ffab00"} />
            </mesh>
            <mesh
                scale={[1, 1, 1]}
                position={[0.3, 1.5, 0.2]}
                rotation={[0, 0, 0]}
            >
                <boxGeometry args={[0.5, 0.2, 0.2]} />
                <meshStandardMaterial wireframe={false} color={"#ffab00"} />
            </mesh>
            <mesh
                scale={[1, 1, 1]}
                position={[0.4, 1, 0]}
                rotation={[0, 0, 0]}
            >
                <capsuleGeometry args={[0.2, 0.2, 32]} />
                <meshStandardMaterial wireframe={false} color={"#45ab33"} />
            </mesh>
            <mesh
                scale={[1, 1, 1]}
                position={[-0.5, 0.75, 0]}
                rotation={[0, 0, 0.7]}
            >
                <capsuleGeometry args={[0.1, 0.75, 32]} />
                <meshStandardMaterial wireframe={false} color={"#ff3445"} />
            </mesh>
        </group>
    )
}