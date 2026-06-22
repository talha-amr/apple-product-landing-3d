import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * CameraRig — positions the camera and makes it look at a target every frame.
 * Unlike OrbitControls, this doesn't add user interaction (PresentationControls handles that).
 * Unlike a static PerspectiveCamera with onUpdate, this runs every frame so it's always correct.
 */
const CameraRig = ({ position = [0, 2, 5], target = [0, 0, 0] }) => {
  const { camera } = useThree()
  const targetVec = useRef(new THREE.Vector3(...target))

  useEffect(() => {
    camera.position.set(...position)
    camera.fov = 50
    camera.near = 0.1
    camera.far = 100
    camera.updateProjectionMatrix()
  }, [camera, position])

  useFrame(() => {
    camera.lookAt(targetVec.current)
  })

  return null
}

export default CameraRig
