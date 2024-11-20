import * as THREE from 'three'
import { globalState } from '../state'
import { useRef } from 'react'
import { useSnapshot } from 'valtio'

export default function Capsule({ name }: { name: string }) {
    const snap = useSnapshot(globalState)
    const meshRef = useRef<THREE.Mesh>(null!)
    return (
        <mesh
            scale={[1, 1, 1]}
            position={[0, 1, 0]}
            rotation={[0, 0, 0]}
            ref={meshRef}
            onClick={(e) => (e.stopPropagation(), (globalState.model = name))}
            onPointerMissed={(e) => e.type === 'click' && (globalState.model = null)}
            name={name}
        >
            <capsuleGeometry args={[0.5, 1, 32]} />
            <meshStandardMaterial transparent={true} opacity={snap.model && snap.model !== name ? 0.5 : 1} wireframe={snap.wireframe} color={"#ff0000"} />
        </mesh>
    )
}