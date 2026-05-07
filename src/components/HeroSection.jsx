import AnimatedGrid from "./AnimatedGrid";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Robot from "./Robot";

export default function HeroSection() {
    return (
        <>
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f14] to-[#0a0a0f] px-4 ">
                <AnimatedGrid />

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block"
                        >
                            <span className="px-4 py-2 bg-cyan/10 border border-cyan/30 rounded-full inline-flex items-center gap-2">
                                <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                                <span className="text-cyan">Next-Gen Industrial Automation</span>
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                        >
                            <span className="bg-gradient-to-r from-white via-cyan to-blue-200 bg-clip-text text-transparent">
                                Precision Automation
                            </span>
                            <br />
                            <span className="text-white">for the Next</span>
                            <br />
                            <span className="text-white">Industrial Era</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
                        >
                            Intelligent robotics systems designed to transform manufacturing with unprecedented precision, speed, and reliability.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button className="group px-8 py-4 bg-gradient-to-r from-cyan to-blue rounded-lg font-medium hover:shadow-lg hover:shadow-cyan/50 transition-all duration-300 flex items-center gap-2">
                                Explore Solutions
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-medium hover:bg-white/10 hover:border-cyan/50 transition-all duration-300 flex items-center gap-2">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
                        >
                            {[
                                { value: '500+', label: 'Deployments' },
                                { value: '99.9%', label: 'Uptime' },
                                { value: '24/7', label: 'Support' }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-2xl md:text-3xl font-bold text-cyan">{stat.value}</div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <div className="bg-transparent h-full">
                        <Canvas camera={{ position: [0, 1, 5] }}>

                            <ambientLight intensity={1} />
                            <directionalLight position={[2, 2, 5]} intensity={2} />

                            <Robot />

                            <OrbitControls
                                enableZoom={false}
                                autoRotate
                                autoRotateSpeed={2}
                            />

                            <Environment preset="city" />

                        </Canvas>
                    </div>
                </div>

            </section>
        </>
    )
}