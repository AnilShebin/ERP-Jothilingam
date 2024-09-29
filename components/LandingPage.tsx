import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/charts";
import {
  BarChart3,
  PieChart as PieChartIcon,
  TrendingUp,
  Lock,
  ArrowRight,
  Users,
  FileText,
  Star,
  Clock,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden">
      <BackgroundSvg />
      <Header />
      <MainSection />
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

function BackgroundSvg() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
          </filter>
        </defs>
        <g filter="url(#goo)">
          <circle cx="15%" cy="15%" r="80" fill="rgba(59, 130, 246, 0.3)" />
          <circle cx="85%" cy="20%" r="60" fill="rgba(139, 92, 246, 0.3)" />
          <circle cx="50%" cy="80%" r="100" fill="rgba(16, 185, 129, 0.3)" />
        </g>
      </svg>
    </div>
  );
}


function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 bg-white/40 backdrop-blur-lg relative z-10 shadow-md">
      <div className="flex items-center justify-center">
        <Image
          src="/icons/logo.svg"
          alt="Jothilingam Logo"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span className="ml-2 text-2xl font-extrabold text-gray-900">
          Jothilingam
        </span>
      </div>
      <div className="ml-auto">
        <Link href="/sign-in" passHref>
          <Button
            variant="outline"
            className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Lock className="mr-2 h-4 w-4" />
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
}

function MainSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-gray-800 z-10 animate-fade-in">
        Revolutionize Your Audit
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-600 z-10 animate-slide-in">
        Experience the future of ERP with Jothilingam&apos;s cutting-edge
        auditing solution.
      </p>
      <div className="z-10">
        <Link href="/sign-in" passHref>
          <Button
            size="lg"
            variant="default"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Lock className="mr-2 h-5 w-5" />
            Login to Your Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      value: "10,000+",
      label: "Clients",
    },
    {
      icon: <FileText className="h-6 w-6 text-green-600" />,
      value: "1M+",
      label: "Audits Completed",
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      value: "99%",
      label: "Satisfaction Rate",
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      value: "50%",
      label: "Time Saved",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white/50 backdrop-blur-md rounded-lg shadow-lg mt-12 animate-zoom-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-4"
            >
              <div className="p-3 bg-blue-100 rounded-full">{stat.icon}</div>
              <div>
                <div className="text-3xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 py-6 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg relative z-10 shadow-lg">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600">
          © 2024 Jothilingam ERP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
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
    <Card className="transition-all duration-300 hover:shadow-lg rounded-xl">
      <CardHeader className="flex items-center space-x-4">
        <div className="p-2 bg-blue-100 rounded-full">{icon}</div>
        <CardTitle className="text-xl font-bold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
};
