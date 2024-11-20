import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from 'three'
import { CameraControls, GizmoHelper, GizmoViewport, Grid, Helper, TransformControls } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { globalState, Shape } from "./state";
import Cube from "./primitives/Cube";
import Sphere from "./primitives/Sphere";
import Cylinder from "./primitives/Cylinder";
import Torus from "./primitives/Torus";
import Capsule from "./primitives/Capsule";
import Cone from "./primitives/Cone";
import { useMemo } from "react";
import ActionToolbar from "./components/action-toolbar";
import ObjectModifier from "./components/object-modifier";

export default function App() {
  const state = useSnapshot(globalState)
  const getShape = (name: string, shape: Shape) => {
    switch (shape) {
      case Shape.Cube:
        return <Cube name={name} />
      case Shape.Sphere:
        return <Sphere name={name} />
      case Shape.Cylinder:
        return <Cylinder name={name} />
      case Shape.Torus:
        return <Torus name={name} />
      case Shape.Capsule:
        return <Capsule name={name} />
      case Shape.Cone:
        return <Cone name={name} />
    }
  }
  const shapes = useMemo(() => {
    return state.models.map((model) => {
      return getShape(model.name, model.shape)
    })
  }, [state.models])
  return (
    <Canvas shadows camera={{ position: [10, 12, 12], fov: 25 }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 12, 12]} decay={0} intensity={5} />
      <Grid visible={state.grid} position={[0, -0.0001, 0]} args={[24, 24]} cellSize={0.2}
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
      {shapes}
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
      </GizmoHelper>
      <Controls />
      <Helper type={THREE.AxesHelper} />
      <ObjectModifier />
    </Canvas>
  )
}


function Controls() {
  const snap = useSnapshot(globalState)
  const scene = useThree((state) => state.scene)
  return (
    <>
      {snap.model && <TransformControls object={scene.getObjectByName(snap.model)} mode={snap.mode} />}
      <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
    </>
  )
}

