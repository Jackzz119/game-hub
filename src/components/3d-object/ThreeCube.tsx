import React, { useRef, useEffect } from "react";
import * as THREE from "three";
// import { THREEOrbitControls } from "three";

const ThreeCube: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let camera: THREE.PerspectiveCamera,
      scene: THREE.Scene,
      renderer: THREE.WebGLRenderer,
      cube: THREE.Mesh;

    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
      camera.position.z = 2.8;

      scene = new THREE.Scene();
      scene.background = null;

      const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      const material = new THREE.MeshNormalMaterial();

      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      containerRef.current.appendChild(renderer.domElement);

      // const controls = new OrbitControls(camera, renderer.domElement);
      // controls.enableZoom = false;

      const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.005; // 让立方体绕x轴旋转
        cube.rotation.y += 0.005; // 让立方体绕y轴旋转

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        // controls.dispose();
        renderer.dispose();
      };
    }
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeCube;
