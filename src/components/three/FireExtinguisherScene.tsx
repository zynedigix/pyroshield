"use client";

import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    Float,
    Environment,
    ContactShadows,
} from "@react-three/drei";

import FireExtinguisherModel from "./FireExtinguisherModel";

export default function FireExtinguisherScene() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#0A0A0A]">
            <Canvas
                shadows
                camera={{ position: [0, 0, 7], fov: 40 }}
                gl={{ antialias: true }}
                className="absolute inset-0 !h-full !w-full"
            >
                {/* Background */}
                <color attach="background" args={["#0a0a0a"]} />

                {/* Ambient */}
                <ambientLight intensity={1.2} />

                {/* Orange cinematic light */}
                <directionalLight
                    castShadow
                    position={[5, 5, 5]}
                    intensity={3}
                    color="#ff5a1f"
                />

                {/* White fill light */}
                <pointLight
                    position={[-4, -2, 4]}
                    intensity={2}
                    color="#ffffff"
                />

                {/* Floating Animation */}
                <Float
                    speed={2}
                    rotationIntensity={0.6}
                    floatIntensity={1.5}
                >
                    <FireExtinguisherModel />
                </Float>

                {/* Ground Shadow */}
                <ContactShadows
                    position={[0, -3.5, 0]}
                    opacity={0.5}
                    scale={10}
                    blur={2}
                    far={5}
                />

                {/* HDR Environment */}
                <Environment preset="city" />

                {/* Controls */}
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={1.5}
                />
            </Canvas>
        </div>
    );
}