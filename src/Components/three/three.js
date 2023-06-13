import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const MyComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up the scene and renderer
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.display = 'block';

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Load and add the 3D model to the scene
    const loader = new GLTFLoader();
    loader.load('/path/to/model.glb', (gltf) => {
      const model = gltf.scene;
      scene.add(model);
    });

    // Mount the renderer's DOM element to the container
    containerRef.current.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Perform any necessary updates or transformations on the 3D model
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      // Dispose resources, remove event listeners, etc. if needed
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }}></div>;
};

export default MyComponent;
