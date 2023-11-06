import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// create the stars model from scratch
const Stars = (props) => {
  const ref = useRef();

  // 5000 particles
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  // react fiber hook that makes the star moves - rotate it frame by frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    // rotate the group of stars
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref} 
        positions={sphere} 
        stride={3} 
        frustumCulled {...props}>

        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Set up the display canvas
const StarsCanvas = () => {
  return (

    // display this canvas behind elements using z-[-1]
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>

          {/* render star model defined above */}
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;