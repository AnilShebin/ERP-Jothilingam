"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/charts";
import {
  BarChart3,
  PieChart as PieChartIcon,
  TrendingUp,
  Lock,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import { useRouter } from "next/navigation";
import Image from "next/image";

function FloatingLogo() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function LandingPage() {
  const router = useRouter(); // Initialize the router

  const handleLoginClick = () => {
    router.push("/sign-in"); // Navigate to the sign-in page
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
            </filter>
          </defs>
          <g filter="url(#goo)">
            <motion.circle
              cx="10%"
              cy="10%"
              r="80"
              fill="rgba(59, 130, 246, 0.3)"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="90%"
              cy="20%"
              r="60"
              fill="rgba(139, 92, 246, 0.3)"
              animate={{
                x: [0, -50, 0],
                y: [0, 100, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="50%"
              cy="70%"
              r="100"
              fill="rgba(16, 185, 129, 0.3)"
              animate={{
                x: [0, 70, 0],
                y: [0, -70, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      </motion.div>

      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg relative z-10">
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <BarChart3 className="h-8 w-8 text-blue-600" /> */}
          <Image
            src="/icons/logo.svg" // Path to your logo image
            alt="Jothilingam Logo" // Alt text for accessibility
            width={32} // Adjust the width as needed
            height={32} // Adjust the height as needed
            className="h-8 w-8 text-blue-600" // You can adjust this class or remove it if not needed
          />
          <span className="ml-2 text-2xl font-bold text-gray-900">
            Jothilingam
          </span>
        </motion.div>
        <motion.div
          className="ml-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant="outline"
            className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            onClick={handleLoginClick} // Add onClick handler
          >
            <Lock className="mr-2 h-4 w-4" />
            Login
          </Button>
        </motion.div>
      </header>

      <section className="h-screen flex flex-col justify-center items-center relative">
        <Canvas className="absolute inset-0">
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingLogo />
        </Canvas>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-center z-10 mb-8 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Revolutionize Your Auditing
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-center max-w-2xl mx-auto z-10 mb-12 text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Experience the future of ERP with Jothilingam&apos;s cutting-edge
          auditing solution
        </motion.p>
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
        {/* <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-8 w-8 text-blue-600 opacity-50" />
          </motion.div> */}
      </section>

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8 text-blue-500" />}
              title="Real-time Analytics"
              description="Track key performance indicators and audit progress in real-time."
            >
              <LineChart
                data={[
                  { name: "Jan", value: 100 },
                  { name: "Feb", value: 120 },
                  { name: "Mar", value: 110 },
                  { name: "Apr", value: 140 },
                  { name: "May", value: 130 },
                  { name: "Jun", value: 160 },
                ]}
                xAxis="name"
                yAxis="value"
              />
            </FeatureCard>
            <FeatureCard
              icon={<PieChartIcon className="h-8 w-8 text-green-500" />}
              title="Resource Allocation"
              description="Optimize your team's workload with intelligent resource management."
            >
              <PieChart
                data={[
                  { name: "Audit A", value: 30 },
                  { name: "Audit B", value: 25 },
                  { name: "Audit C", value: 20 },
                  { name: "Other", value: 25 },
                ]}
              />
            </FeatureCard>
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-purple-500" />}
              title="Performance Metrics"
              description="Measure and improve your team's efficiency with detailed performance metrics."
            >
              <BarChart
                data={[
                  { name: "Team A", value: 85 },
                  { name: "Team B", value: 92 },
                  { name: "Team C", value: 78 },
                  { name: "Team D", value: 88 },
                ]}
                xAxis="name"
                yAxis="value"
              />
            </FeatureCard>
          </motion.div>
          <motion.div
            className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-center shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ready to Transform Your Auditing Process?
            </h2>
            <p className="text-xl mb-6 text-gray-600">
              Log in now and experience the power of Jothilingam ERP.
            </p>
            <Button
              size="lg"
              variant="default"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              onClick={handleLoginClick} // Add onClick handler
            >
              <Lock className="mr-2 h-5 w-5" />
              Login to Your Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </main>

      <footer className="mt-12 border-t border-gray-200 py-6 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600"
          >
            © 2024 Jothilingam ERP. All rights reserved.
          </motion.p>
          {/* <motion.div
            className="mt-4 sm:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="link"
              className="text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              className="text-gray-500 hover:text-gray-700 ml-4"
            >
              Terms of Service
            </Button>
          </motion.div> */}
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  children,
}) => {
  return (
    <Card className="transition-all duration-300 shadow-lg">
      <CardHeader className="flex items-center space-x-4">
        {icon}
        <CardTitle className="text-xl font-semibold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <p className="text-gray-600">{description}</p>
        <div className="w-full h-64">{children}</div>{" "}
        {/* Set a fixed height for charts */}
      </CardContent>
    </Card>
  );
};
