import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useLayoutEffect } from 'react'

function Earth() {
  const { scene } = useGLTF('/earth.glb')
  const scale = 0.0058
  useLayoutEffect(() => {
    scene.position.set(0, 0, 0)
    scene.scale.set(scale, scale, scale)

  }, [scene])

  return <primitive object={scene} />
}

export default function Globe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
    >
      <ambientLight intensity={8} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <directionalLight position={[-5, -5, -5]} intensity={1.5} />

      <Suspense fallback={null}
      >
        <Earth />
      </Suspense>

      <OrbitControls enablePan={false} />
    </Canvas>
  )
}
