import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// define and style the 3D balls
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>

      {/* lightings */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      {/* material */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* texture */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Set up the display canvas - similar every time
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >

      {/* set up loader */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />

        {/* render balls defined above */}
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

// export the canvas not the actual ball
export default BallCanvas;