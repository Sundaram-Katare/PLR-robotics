import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Robot2 from "./Robot2";

export default function ManRobo() {
    return (
        <>
            <div className="bg-transparent flex items-center relative h-screen">
                <Canvas camera={{ position: [0, 1, 5] }}>

                    <ambientLight intensity={1} />
                    <directionalLight position={[2, 2, 5]} intensity={2} />

                    <Robot2 />

                    <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={2}
                    />

                    <Environment preset="city" />

                </Canvas>
            </div>
        </>
    )
}