import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { globalState, model } from "../state";
import { useEffect } from "react";


export default function ObjectModifier() {
    const modelName = useSnapshot(globalState).model
    const model3d = useSnapshot(model)
    const localModel = useThree((three) => modelName ? three.scene.getObjectByName(modelName) : null)

    useEffect(() => {
        console.log(localModel?.position)
    }, [localModel?.position])

    useFrame(() => {
        if (!localModel) return
        model.position = localModel.position.toArray()
        model.rotation = [localModel.rotation.x, localModel.rotation.y, localModel.rotation.z]
        model.scale = localModel.scale.toArray()
        model.name = localModel.name
    })

    if (localModel)
        return (
            <Html>
                <div className="flex flex-col items-end p-2">
                    <div className="flex flex-col justify-center items-center bg-blue-500/10 w-fit gap-2 backdrop-blur p-2 text-xl">
                        <div>
                            {localModel.name}
                        </div>
                        <div>
                            {model3d.position}
                        </div>
                    </div>
                </div>
            </Html>
        )
}


// const radToDeg = (rad: number): number => {
//     return rad * (180 / Math.PI);
// };