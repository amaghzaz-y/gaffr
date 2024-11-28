import { RootState, useFrame } from "@react-three/fiber"
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
    const ref = useRef({ rotationSpeed: 0, movementSpeed: 0 })
    const material = new THREE.MeshStandardMaterial({ color: "purple", transparent: true, opacity: 0.975 })
    const updateRotation = (robot: THREE.Object3D, delta: number) => {
        const current = robot.rotation.z
        const target = robotStateSnap.targetRotation;
        const direction = (target - current) % (Math.PI * 2);
        if (Math.abs(direction) > 0.02) {
            ref.current.rotationSpeed += Math.sign(direction) * 0.01
            ref.current.rotationSpeed = Math.min(ref.current.rotationSpeed, 2)
            // body.current.setRotation()
            robot.rotateOnAxis(new THREE.Vector3(0, 0, 1), ref.current.rotationSpeed * delta)
            robotState.currentRotation = robot.rotation.z
            return false
        } else {
            robot.rotation.z = robotStateSnap.targetRotation
            ref.current.rotationSpeed = 0
            return true
        }
    }

    const updatePosition = (robot: THREE.Object3D, delta: number) => {
        const position = new THREE.Vector3(robot.position.x, 0, robot.position.z);
        const target = new THREE.Vector3(robotStateSnap.target[0], 0, robotStateSnap.target[2]);
        const direction = new THREE.Vector3().subVectors(target, position);
        const axis = new THREE.Vector3(0, 1, 0);
        direction.applyAxisAngle(axis, robot.rotation.z);
        direction.normalize();
        if (position.manhattanDistanceTo(target) > 0.1) {
            ref.current.movementSpeed += 0.01
            ref.current.movementSpeed = Math.min(ref.current.movementSpeed, 2)
            robot.translateOnAxis(new THREE.Vector3(direction.x, direction.z, 0), ref.current.movementSpeed * delta);
            robotState.current = [robot.position.x, 0, robot.position.z]
        } else {
            robot.position.set(robotStateSnap.target[0], 1.85, robotStateSnap.target[2])
            ref.current.movementSpeed = 0
        }
    }

    const updateDesign = (robot: THREE.Object3D, _delta?: number) => {
        robot.traverse((o) => {
            if (o instanceof THREE.Mesh) {
                o.material.wireframe = worldStateSnap.wirefame
                o.material = material
            }
        })
    }

    const updateState = (robot: THREE.Object3D) => {
        robotState.current = [robot.position.x, 0, robot.position.z]
        robotState.currentRotation = robot.rotation.z
    }

    const useSelf = (c: RootState) => {
        return c.scene.getObjectByName("Jessy")
    }

    useFrame((c, delta) => {
        const robot = useSelf(c)
        if (!robot) return
        if (updateRotation(robot, delta)) updatePosition(robot, delta)
        updateDesign(robot, delta)
        updateState(robot)
    })

    return (
        <>
            <Gltf name="Jessy" receiveShadow position={[position[0], 5.97, position[2]]} rotation={[rotation[0], rotation[1], rotation[2]]} castShadow src="/robot.gltf" scale={[scale[0], scale[1], scale[2]]} useDraco={true} />
        </>
    )
}