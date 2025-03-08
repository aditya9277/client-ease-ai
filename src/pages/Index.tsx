
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, Brain, Monitor, Rocket, Star, 
  BarChart3, Clock, FileCheck, 
  MessageSquare, ClipboardCheck, 
  Database, Zap, Users, ExternalLink,
  Sparkles, CheckCircle, TrendingUp, Shield
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
    { value: "50%", label: "Manual Effort Reduced", icon: Zap, color: "primary" },
    { value: "70%", label: "Less Paperwork Time", icon: FileCheck, color: "success" },
    { value: "99%", label: "Accuracy Rate", icon: CheckCircle, color: "secondary" },
    { value: "24/7", label: "AI Support", icon: Brain, color: "accent" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated Shapes (decorative) */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-primary-100 to-primary-200/30 blur-3xl opacity-30 animate-float pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-secondary-100 to-secondary-200/30 blur-3xl opacity-20 animate-float animate-delay-300 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-success-100 to-success-200/30 blur-3xl opacity-20 animate-float animate-delay-500 pointer-events-none"></div>

      {/* Header/Navigation */}
      <header className="relative z-10 container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">ClientEase AI</h1>
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
      <div className="relative z-10 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">            
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>The Future of BPO Customer Experience</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
              AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-600">Workflow Enhancement</span> in Indian BPOs
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              Transforming Customer Support for a Faster, Smarter, and More Efficient Future
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button 
                onClick={() => navigate("/dashboard")} 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              >
                Try It Now
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => window.open("https://drive.google.com/file/d/1PkOEKa1KfzJxh4YU_5WWwqPvnM0z81D7/view?usp=sharing", "_blank")}
                variant="outline" 
                size="lg"
                className="bg-white border-secondary text-secondary hover:bg-secondary/5 w-full sm:w-auto px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                Watch Demo
                <Monitor className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Illustration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-20 md:h-32 bg-gradient-to-b from-transparent to-white blur-sm"></div>
      </div>

      {/* Stats Section with Card Design */}
      <div className="relative z-10 py-12 bg-gradient-to-r from-blue-50/70 to-cyan-50/70">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className={`p-6 text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white overflow-hidden relative card-hover-effect`}
              >
                <div className={`absolute -top-10 -left-10 w-24 h-24 rounded-full bg-${stat.color}-50 blur-xl opacity-50`}></div>
                <div className="relative z-10 space-y-3">
                  <div className={`mx-auto h-12 w-12 rounded-xl bg-${stat.color}-50 flex items-center justify-center mb-3`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-bold text-${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <div className="flex justify-center mb-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-50 text-secondary text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-2" />
                <span>Supercharge Your Workflow</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Key Features & Capabilities
            </h2>
            <p className="text-slate-600 text-lg">
              Our AI-driven Smart Call Management System harnesses the power of AI to streamline claim processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 p-6 rounded-xl hover:-translate-y-2 group overflow-hidden relative"
              >
                <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-slate-50 group-hover:bg-primary-50 transition-colors duration-300 blur-2xl opacity-0 group-hover:opacity-70"></div>
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700">
                        <div className="h-5 w-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Star className="h-3 w-3 text-secondary" />
                        </div>
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative z-10 bg-gradient-to-b from-white to-blue-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-50/30 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="flex justify-center mb-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                <span>Our Purpose</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Our Mission: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-600">Harnessing AI</span> to Power Bharat's Progress
            </h2>
            
            <p className="text-xl text-slate-600">
              We leverage cutting-edge AI to redefine customer service for BPOs, empowering agents to handle claims faster, smarter, and stress-free.
            </p>
            
            <Button 
              onClick={() => navigate("/dashboard")} 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 mt-4"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="relative z-10 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-slate-800">Trusted by Leading BPOs</h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-32 h-12 bg-slate-100/50 rounded-lg flex items-center justify-center">
                <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
            ))}
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
