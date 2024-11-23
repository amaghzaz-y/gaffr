import { useFrame } from "@react-three/fiber"
import * as geom from "./geom"
import { Gltf } from "@react-three/drei"
import * as THREE from "three"
import { useSnapshot } from "valtio"
import { robotState, worldState } from "./state"
import { useRef } from "react"
export default function Robot() {
    const worldStateSnap = useSnapshot(worldState)
    const robotStateSnap = useSnapshot(robotState)
    const { position, scale, rotation } = {
        position: geom.getPosition(1500, 1000),
        scale: [6, 6, 6],
        rotation: [Math.PI / 2, 0, 0],
    }
    const ref = useRef({ accel: 0 })
    const material = new THREE.MeshPhongMaterial({ color: "purple", transparent: true, opacity: 0.95 })
    console.log(ref)
    useFrame((c, delta) => {
        const robot = c.scene.getObjectByName("Jessy")
        if (!robot) return
        const position = new THREE.Vector3(robot.position.x, 0, robot.position.z);
        const target = new THREE.Vector3(robotStateSnap.target[0], 0, robotStateSnap.target[2]);
        const direction = target.clone().sub(position);
        direction.normalize();
        if (position.manhattanDistanceTo(target) > 0.01) {
            ref.current.accel += 0.01
            robot.translateOnAxis(new THREE.Vector3(direction.x, direction.z, 0), ref.current.accel * delta);
        } else {
            ref.current.accel = 0
        }
        robot.traverse((o) => {
            if (o instanceof THREE.Mesh) {
                o.material.wireframe = worldStateSnap.wirefame
                o.material = material
            }
        })
    })

    return (
        <>
            <Gltf receiveShadow castShadow name="Jessy" src="/Robot.gltf" position={[position[0], 1.85, position[2]]} scale={[scale[0], scale[1], scale[2]]} rotation={[rotation[0], rotation[1], rotation[2]]} useDraco={true} />
        </>
    )
}

export const Jessy = ({ position, scale, rotation, color }: { position: [number, number, number], scale: [number, number, number], rotation: [number, number, number], color: string | undefined }) => {
    return (
        <group name="Jessy" position={position} scale={scale} rotation={rotation}>
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