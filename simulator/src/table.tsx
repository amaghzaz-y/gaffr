import { Gltf, Image } from "@react-three/drei";
import * as geom from "./geom"
import * as THREE from "three"
import { TABLE_WORLD_HEIGHT, TABLE_WORLD_WIDTH } from "./constants";
import { useProxy } from "valtio/utils";
import { worldState } from "./state";
import { useFrame } from "@react-three/fiber";
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
                <Gltf name="table" visible={tableStateSnap.tableVisible} receiveShadow castShadow src="/table.gltf" scale={[6, 6, 6]} position={[0, -0.07, 0]} rotation={[Math.PI / 2, Math.PI, 0]} useDraco={true} />
                {(tableStateSnap.tablePlaymat || tableStateSnap.tableGrid) && <Image scale={[scale[0], scale[1]]} rotation={[rotation[0], rotation[1], rotation[2]]} position={geom.getAbsolutePosition(0, 0)} url={src} />}
            </group>
        </>
    )
}