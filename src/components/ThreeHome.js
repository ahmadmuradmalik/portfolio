import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import './ThreeHome.css';

const ThreeHome = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Create our sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: '#00ff83',
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Lights
    const light = new THREE.PointLight(0xffffff, 15, 100);
    light.position.set(7, 7, 7);
    scene.add(light);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height
    );
    camera.position.z = 20;
    scene.add(camera);

    // Canvas
    const canvas = canvasRef.current;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 6;

    // Resize
    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener('resize', handleResize);

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      // Cleanup code here...
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl"></canvas>;
};

export default ThreeHome;
