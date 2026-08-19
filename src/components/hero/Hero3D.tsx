"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Environment } from "@react-three/drei";

function InfiniteTesseract() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 1500;

  const { positions, initialZ, scales, colors } = useMemo(() => {
    const positionsArray = new Float32Array(count * 3);
    const initialZArray = new Float32Array(count);
    const scalesArray = new Float32Array(count * 3);
    const colorsArray = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      let x = Math.round((Math.random() - 0.5) * 20) * 2;
      let y = Math.round((Math.random() - 0.5) * 20) * 2;
      let z = -100 + Math.random() * 110;

      if (Math.abs(x) <= 2 && Math.abs(y) <= 2) {
        x += Math.sign(x || 1) * 4;
        y += Math.sign(y || 1) * 4;
      }

      positionsArray[i * 3] = x;
      positionsArray[i * 3 + 1] = y;
      positionsArray[i * 3 + 2] = z;
      initialZArray[i] = z;

      const type = Math.random();
      let sx, sy, sz;

      if (type > 0.8) {
        sx = 0.1;
        sy = 0.1;
        sz = Math.random() * 10 + 2;
      } else if (type > 0.6) {
        sx = Math.random() * 5 + 1;
        sy = 0.1;
        sz = 0.1;
      } else if (type > 0.4) {
        sx = 0.1;
        sy = Math.random() * 5 + 1;
        sz = 0.1;
      } else {
        sx = Math.random() * 0.5 + 0.1;
        sy = Math.random() * 0.5 + 0.1;
        sz = Math.random() * 0.5 + 0.1;
      }

      scalesArray[i * 3] = sx;
      scalesArray[i * 3 + 1] = sy;
      scalesArray[i * 3 + 2] = sz;

      color.set("#111111");
      color.toArray(colorsArray, i * 3);
    }
    return {
      positions: positionsArray,
      initialZ: initialZArray,
      scales: scalesArray,
      colors: colorsArray,
    };
  }, [count]);

  useMemo(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color(
        colors[i * 3],
        colors[i * 3 + 1],
        colors[i * 3 + 2],
      );
      meshRef.current.setColorAt(i, color);
    }
    meshRef.current.instanceColor!.needsUpdate = true;
  }, [colors]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const dummy = new THREE.Object3D();

    const speed = 5;
    const depth = 110;

    for (let i = 0; i < count; i++) {
      let x = positions[i * 3];
      let y = positions[i * 3 + 1];

      let z0 = initialZ[i] + 100;
      let newZ = ((z0 + time * speed) % depth) - 100;

      dummy.position.set(x, y, newZ);
      dummy.scale.set(scales[i * 3], scales[i * 3 + 1], scales[i * 3 + 2]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.3,
      0.05,
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.3,
      0.05,
    );
    state.camera.lookAt(0, 0, -50);
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry />
      <meshPhysicalMaterial
        vertexColors={true}
        transparent={true}
        transmission={0.3}
        opacity={1}
        roughness={0.01}
        metalness={0.85}
        ior={1.5}
        thickness={2}
        envMapIntensity={1.2}
        color="#ffffff"
      />
    </instancedMesh>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <EffectComposer enableNormalPass={false}>
          <Bloom luminanceThreshold={0.3} mipmapBlur intensity={3} />
        </EffectComposer>

        <Environment files="/assets/three-drei/potsdamer_platz_1k.hdr" />
        <fog attach="fog" args={["#050505", 5, 60]} />

        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1.5}
          color="#ffffff"
        />
        <directionalLight
          position={[-10, -10, -10]}
          intensity={1}
          color="#ffffff"
        />

        <InfiniteTesseract />
      </Canvas>
    </div>
  );
}
