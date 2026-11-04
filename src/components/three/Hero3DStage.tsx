"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Hero3DStageProps {
  activeVideoSrc: string;
  activeReelTitle: string;
}

export default function Hero3DStage({
  activeVideoSrc,
  activeReelTitle,
}: Hero3DStageProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.load();
    vid.play().catch(() => {});
  }, [activeVideoSrc]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 2. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.35);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 7, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe4e4e7, 0.9);
    dirLight2.position.set(-5, -4, 3);
    scene.add(dirLight2);

    // 3. Main Interactive Minimalist 3D Geometry (No background images)
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // Subtle Architectural Wireframe Ring & Orbital Geometry
    const ringGeo = new THREE.TorusGeometry(2.25, 0.007, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd4d4d8,
      transparent: true,
      opacity: 0.65,
    });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    orbitRing.rotation.x = Math.PI / 2.6;
    orbitRing.rotation.y = -0.25;
    stageGroup.add(orbitRing);

    const outerWireGeo = new THREE.IcosahedronGeometry(2.45, 1);
    const outerWireMat = new THREE.MeshBasicMaterial({
      color: 0xe4e4e7,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireSphere = new THREE.Mesh(outerWireGeo, outerWireMat);
    stageGroup.add(wireSphere);

    // 4. Pointer Parallax Tracking
    let pointerX = 0;
    let pointerY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    // 5. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 6. Animation Loop
    const clock = new THREE.Clock();
    let reqId: number;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smoothly interpolate 3D stage rotation with cursor
      stageGroup.rotation.y = THREE.MathUtils.lerp(
        stageGroup.rotation.y,
        pointerX * 0.32,
        0.06
      );
      stageGroup.rotation.x = THREE.MathUtils.lerp(
        stageGroup.rotation.x,
        -pointerY * 0.22,
        0.06
      );

      // Sync 3D CSS perspective tilt on center phone frame
      if (frameRef.current) {
        const degY = (stageGroup.rotation.y * 180) / Math.PI;
        const degX = (stageGroup.rotation.x * 180) / Math.PI;
        const floatY = Math.sin(t * 1.5) * 5;
        frameRef.current.style.transform = `perspective(1000px) rotateY(${degY.toFixed(
          2
        )}deg) rotateX(${(-degX).toFixed(2)}deg) translateY(${floatY.toFixed(
          1
        )}px)`;
      }

      wireSphere.rotation.y = t * 0.08;
      orbitRing.rotation.z = t * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      ringGeo.dispose();
      ringMat.dispose();
      outerWireGeo.dispose();
      outerWireMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[540px] lg:h-[620px] rounded-3xl bg-gradient-to-b from-zinc-100/90 to-zinc-200/40 border border-zinc-200/80 overflow-hidden shadow-sm flex items-center justify-center">
      {/* Three.js WebGL Canvas Layer */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
      />

      {/* Top & Bottom Telemetry Pills */}
      <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-zinc-200/80 px-3 py-1.5 rounded-full text-[11px] font-mono text-zinc-700 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-zinc-950" />
        <span>THREE.JS 3D STAGE</span>
      </div>

      <div className="absolute bottom-4 right-4 z-30 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-zinc-200/80 px-3 py-1.5 rounded-full text-[11px] font-mono text-zinc-500 pointer-events-none">
        <span>MOVE CURSOR TO TILT 3D PHONE</span>
      </div>

      {/* Center 3D-Synced Titanium Smartphone Hardware Frame */}
      <div
        ref={frameRef}
        className="relative z-20 pointer-events-none w-[236px] sm:w-[254px] aspect-[9/19] rounded-[38px] bg-zinc-950 p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border-[3px] border-zinc-700/80 transition-transform duration-75 ease-out"
      >
        <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-black flex flex-col justify-between">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-20 h-4 bg-black rounded-full border border-white/10 flex items-center justify-end px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <video
            ref={videoRef}
            key={activeVideoSrc}
            src={activeVideoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Minimal Bottom Telemetry Overlay */}
          <div className="absolute bottom-2.5 inset-x-2.5 z-20 bg-zinc-950/85 backdrop-blur-md border border-white/15 rounded-2xl p-2.5 text-white">
            <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-zinc-400 mb-0.5">
              <span>LIVE 9:16 MASTER</span>
              <span className="text-emerald-400 font-semibold">3.0x ROAS</span>
            </div>
            <p className="text-[11px] font-medium truncate text-zinc-100">
              {activeReelTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
