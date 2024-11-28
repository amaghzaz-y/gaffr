import { Gltf, Image } from "@react-three/drei";
import * as geom from "./geom"
import * as THREE from "three"
import { TABLE_WORLD_HEIGHT, TABLE_WORLD_WIDTH } from "./constants";
import { useProxy } from "valtio/utils";
import { worldState } from "./state";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
export default function Table() {
    const tableStateSnap = useProxy(worldState)
    const { rotation, scale } = {
        rotation: [-Math.PI / 2, 0, 0],
        scale: [TABLE_WORLD_HEIGHT, TABLE_WORLD_WIDTH]
    }
    const src = tableStateSnap.tableGrid ? "/grid.webp" : "/playmat.webp"
    const material = new THREE.MeshStandardMaterial({ color: "#56483b", transparent: true, opacity: 0.80 })

    const updateDesign = (table: THREE.Object3D, _delta?: number) => {
        table.traverse((o) => {
            if (o instanceof THREE.Mesh) {
                o.material = material
            }
        })
    }

    useFrame((c) => {
        const table = c.scene.getObjectByName("table")
        if (!table) return
        updateDesign(table)
    })

    return (
        <>
            <group>
                <RigidBody type="fixed">
                    <Gltf name="table" visible={tableStateSnap.tableVisible} receiveShadow castShadow src="/table.gltf" scale={[6, 6, 6]} position={[0, -0.07, 0]} rotation={[Math.PI / 2, Math.PI, 0]} useDraco={true} />
                </RigidBody>
                {(tableStateSnap.tablePlaymat || tableStateSnap.tableGrid) && <Image scale={[scale[0], scale[1]]} rotation={[rotation[0], rotation[1], rotation[2]]} position={geom.getAbsolutePosition(0, 0)} url={src} />}

                {/* CANS */}
                <group position={geom.getPosition(1750, 950)}>
                    <RigidBody>
                        <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    </RigidBody>
                    <RigidBody>
                        <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    </RigidBody>
                    <RigidBody>
                        <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    </RigidBody>
                    <RigidBody position={[1.8, 0, 0]} rotation={[0, 0, 0]} >
                        <Gltf src="/can.glb" visible={tableStateSnap.cans} receiveShadow castShadow useDraco={true} />
                    </RigidBody>
                </group>
                {/* <group position={geom.getPosition(950, 950)}>
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.8, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                </group>
                <group position={geom.getPosition(625, 250)}>
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.8, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                </group>
                <group position={geom.getPosition(2075, 250)}>
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.8, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                </group>
                <group position={geom.getPosition(2025, 1725)}>
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.8, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                </group>
                <group position={geom.getPosition(675, 1725)}>
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.8, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                </group>
                <group position={geom.getPosition(75, 250)} rotation={[0, Math.PI / 2, 0]}>
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.8, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                </group>
                <group position={geom.getPosition(75, 1175)} rotation={[0, Math.PI / 2, 0]}>
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.8, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                </group>
                <group position={geom.getPosition(2925, 1175)} rotation={[0, Math.PI / 2, 0]}>
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.8, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                </group>
                <group position={geom.getPosition(2925, 250)} rotation={[0, Math.PI / 2, 0]}>
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[0.6, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.2, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                    <Gltf src="/can.glb" visible={tableStateSnap.cans} position={[1.8, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} receiveShadow castShadow useDraco={true} />
                </group> */}
            </group>
        </>
    )
}