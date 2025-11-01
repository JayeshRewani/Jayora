import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function JayoraLogo(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/Planet.glb"); // your 3D logo

  // Rotate slowly for aesthetic motion
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, 0.5, 0]} // 🟢 move logo up (increase Y to lift it)
      scale={[2.2, 2.2, 2.2]} // 🟢 increase to make logo larger
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tripo_node_adc1be06-c7fa-4225-8360-ebadfc021809"].geometry}
        material={materials["tripo_mat_adc1be06-c7fa-4225-8360-ebadfc021809"]}
      />
    </group>
  );
}

useGLTF.preload("/models/Planet.glb");
