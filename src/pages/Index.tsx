
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Smart Reminders & AI-Powered Follow-Up Scheduler",
      items: [
        "Automated Prioritization",
        "Optimized Scheduling",
        "Effortless Follow-Ups"
      ]
    },
    {
      title: "Automated Data Entry & Workflow Automation",
      items: [
        "Eliminates Manual Work",
        "Improves Data Accuracy",
        "Scales Effortlessly"
      ]
    },
    {
      title: "AI-Powered Sentiment Analysis & Live Call Insights",
      items: [
        "Real-Time Emotion Analysis",
        "Personalized Responses",
        "Training & Insights"
      ]
    },
    {
      title: "Live Call Transcripts & AI-Generated Suggestions",
      items: [
        "Real-Time Call Transcription",
        "AI-Powered Guidance",
        "Instant Query Resolutions"
      ]
    },
    {
      title: "Generative AI for Automated Claim Resolution",
      items: [
        "Instant Document Generation",
        "Ensures Compliance",
        "Reduces Processing Time"
      ]
    },
    {
      title: "Unified Dashboard & Integration Layer",
      items: [
        "One Centralized Hub",
        "Seamless Integrations",
        "Data-Driven Decisions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
          Client Ease AI
        </h1>
        <h2 className="text-2xl mb-8 text-gray-700">
          Harnessing AI to Empower Bharat: Transforming Customer Service with Intelligent Automation
        </h2>
        <p className="text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
          🚀 AI-Powered Customer Support & Workflow Automation
        </p>
        <Button 
          onClick={() => navigate("/dashboard")} 
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Try Now
          <ArrowRight className="ml-2" />
        </Button>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-700 flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          🚀 Why Our AI Solution is a Game-Changer for Bharat?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Empowers Local Businesses</h3>
            <p className="text-gray-700">AI-driven efficiency for seamless customer support</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Bridges the Digital Divide</h3>
            <p className="text-gray-700">Simplifies complex workflows for scalability</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Drives Economic Growth</h3>
            <p className="text-gray-700">Reduces operational costs and enhances service delivery</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Scales for India's Needs</h3>
            <p className="text-gray-700">Handles high volumes with real-time automation</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          🔗 Join us in transforming customer service with AI
        </h2>
        <p className="text-xl mb-12 text-gray-600">
          Experience the future of intelligent automation—built for Bharat, driven by innovation.
        </p>
        <Button 
          onClick={() => navigate("/dashboard")} 
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Get Started Now
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
