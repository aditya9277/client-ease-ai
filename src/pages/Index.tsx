import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Rocket, Star, Users, Brain, Shield, Zap, ChartBarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Smart Reminders & AI-Powered Follow-Up Scheduler",
      description: "Never miss crucial follow-ups with intelligent scheduling that adapts to your workflow.",
      items: [
        "Automated Prioritization",
        "Optimized Scheduling",
        "Effortless Follow-Ups"
      ],
      icon: Brain
    },
    {
      title: "Automated Data Entry & Workflow",
      description: "Reduce manual work by 80% with our advanced automation system.",
      items: [
        "Eliminates Manual Work",
        "Improves Data Accuracy",
        "Scales Effortlessly"
      ],
      icon: Zap
    },
    {
      title: "AI-Powered Sentiment Analysis",
      description: "Real-time emotion tracking for better customer understanding.",
      items: [
        "Real-Time Emotion Analysis",
        "Personalized Responses",
        "Training & Insights"
      ],
      icon: ChartBarIcon
    }
  ];

  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "85%", label: "Faster Resolution" },
    { value: "50%", label: "Cost Reduction" },
    { value: "24/7", label: "AI Support" }
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520,#9333ea20)] opacity-30" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-purple-500/10 to-transparent" />
        
        <div className="container mx-auto px-4 py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">            
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 leading-tight">
              Revolutionizing BPO <br /> with AI Innovation
            </h1>
            
            <h2 className="text-3xl text-gray-300 max-w-2xl mx-auto">
              Transform Customer Service with Next-Gen AI Technology
            </h2>
            
            <div className="flex items-center justify-center gap-4">
              <Button 
                onClick={() => navigate("/dashboard")} 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Experience AI Power
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500/20 hover:bg-purple-500/10 text-white px-8 py-6 text-lg rounded-full"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-purple-500/20 bg-purple-500/5">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Enterprise-Grade Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your customer service with our cutting-edge AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Tech Stack Section - NEW */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Cutting-Edge Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Card className="bg-[#252A3C]/50 border-purple-500/20 p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Advanced ML Models</h3>
            <p className="text-gray-400">Real-time sentiment analysis and prediction</p>
          </Card>
          <Card className="bg-[#252A3C]/50 border-purple-500/20 p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Processing</h3>
            <p className="text-gray-400">Instant insights and recommendations</p>
          </Card>
          <Card className="bg-[#252A3C]/50 border-purple-500/20 p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-gray-400">End-to-end encryption and compliance</p>
          </Card>
          <Card className="bg-[#252A3C]/50 border-purple-500/20 p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Scalable Infrastructure</h3>
            <p className="text-gray-400">Built for growing enterprises</p>
          </Card>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-b from-[#1A1F2C] to-purple-900/20">
        <div className="container mx-auto px-4 py-32">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Transforming Customer Service Across India
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-[#252A3C]/50 border-purple-500/20 hover:border-purple-500/40 p-8 rounded-xl backdrop-blur-sm">
              <Users className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Empowers Local Businesses</h3>
              <p className="text-gray-400">AI-driven efficiency enabling seamless customer support at scale.</p>
            </Card>
            <Card className="bg-[#252A3C]/50 border-purple-500/20 hover:border-purple-500/40 p-8 rounded-xl backdrop-blur-sm">
              <Shield className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Bridges the Digital Divide</h3>
              <p className="text-gray-400">Making advanced technology accessible to businesses of all sizes.</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Stories - NEW */}
      <div className="bg-gradient-to-b from-[#1A1F2C] to-purple-900/20 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#252A3C]/50 border-purple-500/20 p-8 rounded-xl backdrop-blur-sm">
              <blockquote className="space-y-4">
                <p className="text-gray-300">"Reduced our response time by 60% and improved customer satisfaction significantly."</p>
                <footer className="text-sm text-gray-400">
                  - Leading Insurance Provider
                </footer>
              </blockquote>
            </Card>
            <Card className="bg-[#252A3C]/50 border-purple-500/20 p-8 rounded-xl backdrop-blur-sm">
              <blockquote className="space-y-4">
                <p className="text-gray-300">"The AI-powered insights have transformed how we handle customer interactions."</p>
                <footer className="text-sm text-gray-400">
                  - Major Telecom Company
                </footer>
              </blockquote>
            </Card>
            <Card className="bg-[#252A3C]/50 border-purple-500/20 p-8 rounded-xl backdrop-blur-sm">
              <blockquote className="space-y-4">
                <p className="text-gray-300">"A game-changer for our customer support operations across India."</p>
                <footer className="text-sm text-gray-400">
                  - E-commerce Giant
                </footer>
              </blockquote>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Join us in transforming customer service with AI
          </h2>
          <p className="text-xl text-gray-400">
            Experience the future of intelligent automation—built for Bharat, driven by innovation.
          </p>
          <Button 
            onClick={() => navigate("/dashboard")} 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Get Started Now
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
