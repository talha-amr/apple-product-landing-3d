import React from 'react'
import { useProduct } from '../context/ProductContext'
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import MacbookModel14 from './models/Macbook-14';
import StudioLights from './three/StudioLights';
import ModelSwitcher from './three/ModelSwitcher';
import CameraRig from './three/CameraRig';

const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useProduct();



  return (
    <section id='product-viewer'>
      <h2>Take a closer look</h2>
      <div className="controls">
        <p className="info">
          MacBook Pro {scale} and color {color}
        </p>

        <div className="flex-center gap-5 ">
          <div className="color-control">
            <div
              className={`bg-neutral-300 ${color === '#adb5bd' ? 'active' : ''}`}
              onClick={() => setColor('#adb5bd')}
            ></div>
            <div
              className={`bg-neutral-900 ${color === '#2e2e2c' ? 'active' : ''}`}
              onClick={() => setColor('#2e2e2c')}
            ></div>
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale('0.06')}
              style={{ backgroundColor: scale === '0.06' ? 'white' : 'transparent', color: scale === '0.06' ? 'black' : 'white' }}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale('0.08')}
              style={{ backgroundColor: scale === '0.08' ? 'white' : 'transparent', color: scale === '0.08' ? 'black' : 'white' }}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas id="canvas">
        <CameraRig position={[0, 2, 5]} target={[0, 0, 0]} />
        <StudioLights/>
        <ModelSwitcher scale={scale}/>
      </Canvas>
    </section>
  )
}

export default ProductViewer