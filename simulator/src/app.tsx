import { Canvas } from "@react-three/fiber";
import { CameraControls, GizmoHelper, GizmoViewcube, GizmoViewport, Grid } from "@react-three/drei";
import Table from "./table";
import Robot from "./robot";
import { worldState } from "./state";
import { useSnapshot } from "valtio";

export default function App() {
  const worldStateSnap = useSnapshot(worldState)
  console.log(worldStateSnap.camera)
  return (
    <Canvas shadows camera={{
      name: "camera",
      position: [0, 18, 0],
      zoom: 1,
      fov: 45
    }} gl={{ antialias: true, powerPreference: "high-performance" }} >
      <ambientLight intensity={1} />
      <pointLight position={[10, 12, 12]} decay={0} intensity={5} />
      <Grid visible={worldStateSnap.grid} position={[0, -0.05, 0]} args={[24, 24]} cellSize={0.6}
        cellThickness={1}
        cellColor='#6f6f6f'
        sectionSize={3}
        sectionThickness={0.75}
        sectionColor='#6f6f6f'
        fadeDistance={50}
        fadeStrength={1}
        fadeFrom={0}
        followCamera={false}
        infiniteGrid={true}
      />
      <Table />
      <Robot />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
        <GizmoViewcube color="white" opacity={0.8} hoverColor="darkblue" />
      </GizmoHelper>
      <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
    </Canvas>
  )
}




