import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";  // create canvas
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";  // mouse control, preload assets, load 3D model

import CanvasLoader from "../Loader";  // loading placeholder

// define and style the 3D earth
const Earth = () => {
  // import the earth model
  const earth = useGLTF("./planet/scene.gltf");

  // lood/use the earth model
  return (
    <primitive 
      object={earth.scene}  // lood/use the earth model
      scale={2.5}           // expand the size
      position-y={0}        // to rotate it horizontally
      rotation-y={0} />
  );
};


// Set up the display canvas
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,     // field of view: make it larger
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >

      {/* set up loader */}
      <Suspense fallback={<CanvasLoader />}>
        {/* allow users to interact with the model using mouse  */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* render the earth model defined above */}
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;