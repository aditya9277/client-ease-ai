
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, Brain, Rocket, Star, 
  BarChart3, Clock, FileCheck, 
  MessageSquare, ClipboardCheck, 
  Database, Zap, Users 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "AI-Powered Callback Scheduler",
      description: "Smart priority-based scheduling that automatically manages follow-ups based on urgency and sentiment.",
      items: [
        "Auto-schedules follow-up calls based on priority",
        "Ensures urgent claims are addressed first",
        "Reduces agent workload and missed follow-ups"
      ],
      icon: Clock
    },
    {
      title: "AI Knowledge Base Assistant",
      description: "Dynamic knowledge base that provides instant, relevant solutions from past cases.",
      items: [
        "Searchable AI-powered FAQ bot",
        "Learns from previous cases",
        "Reduces resolution time"
      ],
      icon: Database
    },
    {
      title: "Real-Time Sentiment Analysis",
      description: "Continuous tracking of customer emotions during calls for better service delivery.",
      items: [
        "Detects customer emotions in real-time",
        "Provides instant agent feedback",
        "Tracks performance dynamically"
      ],
      icon: BarChart3
    },
    {
      title: "Smart Call Summarization",
      description: "AI-powered automatic generation of call summaries from transcripts.",
      items: [
        "Generates professional summaries",
        "Stores for future reference",
        "Makes post-call processes instant"
      ],
      icon: FileCheck
    },
    {
      title: "Automated Documentation",
      description: "AI-generated claim resolution documents from call transcripts and notes.",
      items: [
        "Auto-formats structured details",
        "Ensures accuracy",
        "Reduces paperwork"
      ],
      icon: ClipboardCheck
    },
    {
      title: "Smart Reminders System",
      description: "AI-powered follow-up system ensuring no claim is overlooked.",
      items: [
        "Smart reminder scheduling",
        "Organized workflow",
        "Efficient claim tracking"
      ],
      icon: MessageSquare
    }
  ];

  const stats = [
    { value: "50%", label: "Manual Effort Reduced" },
    { value: "70%", label: "Less Paperwork Time" },
    { value: "99%", label: "Accuracy Rate" },
    { value: "24/7", label: "AI Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0B1121] to-[#090E1D] relative">
      {/* Gradient Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">            
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 leading-tight">
              AI for Workflow Enhancement in Indian BPOs
            </h1>
            
            <h2 className="text-2xl text-gray-300 max-w-2xl mx-auto">
              Transforming Customer Support for a Faster, Smarter, and More Efficient Future
            </h2>
            
            <div className="flex items-center justify-center gap-4">
              <Button 
                onClick={() => navigate("/dashboard")} 
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Try It Now
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-500/20 hover:bg-cyan-500/10 text-white px-8 py-6 text-lg rounded-full"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm relative">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-32 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            Key Features & Capabilities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-driven Smart Call Management System harnesses the power of AI to streamline claim processing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[#1E293B]/80 border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-cyan-400" />
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
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Star className="h-3 w-3 text-cyan-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-b from-[#1A1F2C] to-cyan-900/20 relative">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              Our Mission: Harnessing AI to Power Bharat's Progress
            </h2>
            <p className="text-xl text-gray-300">
              We leverage cutting-edge AI to redefine customer service for BPOs, empowering agents like Nisha to handle claims faster, smarter, and stress-free.
            </p>
            <Button 
              onClick={() => navigate("/dashboard")} 
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started Now
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
