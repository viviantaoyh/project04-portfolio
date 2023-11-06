import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls, Preload, useGLTF } from '@react-three/drei';

// Loader.jsx
import CanvasLoader from "../Loader";

// define and style the 3D computer
const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');

  return (
    <group>
      {/* Import 3D model and set position */}
      <primitive 
        object={scene} 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />

      {/* Add lightings */}
      <pointLight intensity={1} />
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    </group>
  );
};


// Set up the display canvas
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      {/* Set up loader */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}  
          minPolarAngle={Math.PI / 2} 
        />

        {/* Display the 3D model */}
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />

    </Canvas>
  );
};

// Make the canva available for use ( > index.js > external components)
export default ComputersCanvas;


