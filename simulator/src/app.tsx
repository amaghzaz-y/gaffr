import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'
import { CameraControls, GizmoHelper, GizmoViewport, Grid, Helper } from "@react-three/drei";
import Table from "./table";
import Robot from "./robot";

export default function App() {
  return (
    <Canvas shadows camera={{ position: [15, 25, 0], fov: 28 }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 12, 12]} decay={0} intensity={5} />
      <Grid visible={true} position={[0, -0.001, 0]} args={[24, 24]} cellSize={0.2}
        cellThickness={0.5}
        cellColor='#6f6f6f'
        sectionSize={1}
        sectionThickness={1}
        sectionColor='#adadad'
        fadeDistance={50}
        fadeStrength={1}
        fadeFrom={0}
        followCamera={false}
        infiniteGrid={true}
      />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
      </GizmoHelper>
      <Table />
      <Robot />
      <Controls />
      <Helper type={THREE.AxesHelper} />
    </Canvas>
  )
}


function Controls() {
  // const snap = useSnapshot(globalState)
  // const scene = useThree((state) => state.scene)
  return (
    <>
      {/* {snap.model && <TransformControls object={scene.getObjectByName(snap.model)} mode={snap.mode} />} */}
      <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
    </>
  )
}

