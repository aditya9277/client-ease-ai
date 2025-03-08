
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, Brain, Monitor, Rocket, Star, 
  BarChart3, Clock, FileCheck, 
  MessageSquare, ClipboardCheck, 
  Database, Zap, Users, ExternalLink
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
    <div className="min-h-screen bg-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/30 to-white pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent pointer-events-none" />

      {/* Header/Navigation */}
      <header className="relative z-10 container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-slate-800">ClientEase AI</h1>
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={() => navigate("/dashboard")} 
              variant="outline"
              className="text-primary border-primary/30 hover:bg-primary/5"
            >
              Dashboard
            </Button>
            <Button 
              onClick={() => window.open("https://drive.google.com/file/d/1PkOEKa1KfzJxh4YU_5WWwqPvnM0z81D7/view?usp=sharing", "_blank")}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
              AI for <span className="text-primary">Workflow Enhancement</span> in Indian BPOs
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              Transforming Customer Support for a Faster, Smarter, and More Efficient Future
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                onClick={() => navigate("/dashboard")} 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25"
              >
                Try It Now
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => window.open("https://drive.google.com/file/d/1PkOEKa1KfzJxh4YU_5WWwqPvnM0z81D7/view?usp=sharing", "_blank")}
                variant="outline" 
                size="lg"
                className="bg-white border-secondary text-secondary hover:bg-secondary/5 w-full sm:w-auto px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Watch Demo
                <Monitor className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-12 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Key Features & Capabilities
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our AI-driven Smart Call Management System harnesses the power of AI to streamline claim processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 p-6 rounded-xl hover:translate-y-[-4px]"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700">
                      <div className="h-5 w-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Star className="h-3 w-3 text-secondary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative z-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Our Mission: <span className="text-primary">Harnessing AI</span> to Power Bharat's Progress
            </h2>
            <p className="text-xl text-slate-600">
              We leverage cutting-edge AI to redefine customer service for BPOs, empowering agents to handle claims faster, smarter, and stress-free.
            </p>
            <Button 
              onClick={() => navigate("/dashboard")} 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-slate-800">ClientEase AI</span>
            </div>
            <div className="text-slate-500 text-sm">
              © 2024 ClientEase AI. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors flex items-center gap-1">
                Contact <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
