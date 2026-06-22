import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

const StudioLights = () => {
  return (
    <group name='lights'>
        <Environment resolution={256}>
            <group>
                <Lightformer 
                  form={"rect"}
                  intensity={8}
                  position={[-10, 5, -5]}
                  scale={10}
                  rotation={[1.6, 0, 0]}
                ></Lightformer>
                <Lightformer 
                  form={"rect"}
                  intensity={8}
                  position={[10, 10, -5]}
                  scale={10}
                  rotation={[1.6, 0, 0]}
                ></Lightformer>
            </group>
        </Environment>
        
        {/* SpotLights moved OUTSIDE Environment so they light up the main scene */}
        <spotLight position={[1.0, 17.2, 2.1]} intensity={2.4} angle={0.15} decay={1.1} />
        <spotLight position={[0, 5.0, 13]} intensity={1.8} angle={0.19}  decay={0.1} />
        <spotLight position={[0, -8.8, -10.3]} intensity={1.2} angle={0.22}  decay={0.9} />
    </group>
  )
}

export default StudioLights