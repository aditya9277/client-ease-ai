
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, Brain, Monitor, Rocket, Star, 
  BarChart3, Clock, FileCheck, 
  MessageSquare, ClipboardCheck, 
  Database, Zap, Users, ExternalLink,
  Sparkles, CheckCircle, TrendingUp, Shield,
  Target, DollarSign, Lightbulb, ChartBar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "AI Business Advisor",
      description: "Get real-time strategic guidance powered by market intelligence and competitor analysis.",
      items: [
        "24/7 AI mentor analyzing your business decisions",
        "Market trend predictions and opportunity alerts",
        "Competitor intelligence and positioning strategies"
      ],
      icon: Brain,
      color: "primary"
    },
    {
      title: "Smart Resource Optimizer",
      description: "Automatically identify cost savings and efficiency opportunities across your operations.",
      items: [
        "40-60% reduction in operational costs",
        "Automated vendor negotiations and pricing optimization",
        "Resource allocation AI for maximum ROI"
      ],
      icon: Target,
      color: "success"
    },
    {
      title: "Revenue Intelligence Engine",
      description: "AI-powered sales forecasting and customer acquisition strategies that actually work.",
      items: [
        "Predictive sales analytics with 95% accuracy",
        "Customer behavior analysis and personalization",
        "Automated lead scoring and nurturing"
      ],
      icon: TrendingUp,
      color: "secondary"
    },
    {
      title: "Unified Command Center",
      description: "One dashboard to rule them all - manage finances, team, operations, and growth.",
      items: [
        "Replace 10+ separate tools with one platform",
        "Real-time KPI tracking and alerts",
        "Integrated communication and project management"
      ],
      icon: Monitor,
      color: "info"
    },
    {
      title: "Startup DNA Analysis",
      description: "Deep analysis of your startup's unique profile with personalized growth recommendations.",
      items: [
        "Comprehensive business health scoring",
        "Industry-specific benchmarking and insights",
        "Personalized growth roadmaps and milestones"
      ],
      icon: Database,
      color: "accent"
    },
    {
      title: "Innovation Labs",
      description: "AI-powered ideation and product development acceleration tools.",
      items: [
        "Market validation algorithms for new ideas",
        "Patent landscape analysis and IP strategy",
        "Product-market fit optimization tools"
      ],
      icon: Lightbulb,
      color: "warning"
    }
  ];

  const stats = [
    { value: "60%", label: "Cost Reduction", icon: DollarSign, color: "success" },
    { value: "3.5x", label: "Revenue Growth", icon: TrendingUp, color: "primary" },
    { value: "85%", label: "Success Rate", icon: CheckCircle, color: "secondary" },
    { value: "24/7", label: "AI Support", icon: Brain, color: "accent" }
  ];

  const testimonials = [
    {
      quote: "StartupOS is like having a team of expert consultants, analysts, and advisors working 24/7 for a fraction of the cost.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "Raised $2M Series A"
    },
    {
      quote: "We went from burning cash to profitability in 6 months. The AI insights were game-changing.",
      author: "Marcus Rodriguez",
      role: "Founder, GreenScale",
      company: "3x revenue growth"
    },
    {
      quote: "It's not just a tool, it's like having an operating system that makes every part of our startup smarter.",
      author: "Priya Patel",
      role: "Co-founder, DataVerse",
      company: "Exited for $50M"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-60 animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-accent/20 to-success/20 blur-3xl opacity-40 animate-float animate-delay-300 pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Brain className="h-10 w-10 text-primary" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">StartupOS</h1>
              <p className="text-xs text-slate-500">AI-Powered Startup Operating System</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={() => navigate("/dashboard")} 
              variant="outline"
              className="text-primary border-primary/30 hover:bg-primary/5"
            >
              Live Demo
            </Button>
            <Button 
              onClick={() => window.open("https://drive.google.com/file/d/1PkOEKa1KfzJxh4YU_5WWwqPvnM0z81D7/view?usp=sharing", "_blank")}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Watch Pitch
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">            
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <Sparkles className="h-5 w-5 mr-3 text-primary" />
                <span className="text-primary font-semibold">The World's First AI Operating System for Startups</span>
                <div className="ml-3 px-2 py-1 bg-success text-white text-xs rounded-full">NEW</div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-slate-800 leading-tight">
              Your Startup's
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                AI Operating System
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From ideation to IPO - One intelligent platform that replaces dozens of tools, 
              <span className="text-primary font-semibold"> cuts costs by 60%</span>, and 
              <span className="text-secondary font-semibold"> boosts revenue by 3.5x</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button 
                onClick={() => navigate("/dashboard")} 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white w-full sm:w-auto px-10 py-7 text-xl rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-2 group"
              >
                Experience StartupOS
                <Rocket className="ml-3 h-6 w-6 group-hover:animate-bounce" />
              </Button>
              <Button 
                onClick={() => window.open("https://drive.google.com/file/d/1PkOEKa1KfzJxh4YU_5WWwqPvnM0z81D7/view?usp=sharing", "_blank")}
                variant="outline" 
                size="lg"
                className="bg-white/80 backdrop-blur border-2 border-primary/20 text-primary hover:bg-primary/5 w-full sm:w-auto px-10 py-7 text-xl rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-2"
              >
                Watch Our Pitch
                <Monitor className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="pt-8 flex justify-center">
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-2">Trusted by 500+ startups worldwide</p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-2 text-slate-600 font-medium">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-16 bg-gradient-to-r from-slate-50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Real Results, Real Impact</h3>
            <p className="text-xl text-slate-600">See how StartupOS transforms businesses</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-2 group"
              >
                <div className={`mx-auto h-16 w-16 rounded-2xl bg-${stat.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-8 w-8 text-${stat.color}`} />
                </div>
                <div className={`text-5xl font-bold text-${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium text-lg">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-2" />
                <span>Revolutionary Features</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Everything Your Startup Needs
            </h2>
            <p className="text-xl text-slate-600">
              Six powerful AI-driven modules that work together as your startup's operating system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white border border-slate-100 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 p-8 rounded-2xl hover:-translate-y-4 group relative overflow-hidden"
              >
                <div className={`absolute -right-16 -top-16 w-40 h-40 rounded-full bg-${feature.color}/5 group-hover:bg-${feature.color}/10 transition-colors duration-500 blur-2xl`}></div>
                <div className="relative z-10">
                  <div className={`h-16 w-16 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold text-slate-800 mb-4 group-hover:text-${feature.color} transition-colors`}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <div className={`h-6 w-6 rounded-full bg-${feature.color}/10 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className={`h-4 w-4 text-${feature.color}`} />
                        </div>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600">See how startups are winning with StartupOS</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400 inline" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-slate-800">{testimonial.author}</div>
                  <div className="text-slate-600">{testimonial.role}</div>
                  <div className="text-primary font-medium text-sm">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-primary via-secondary to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Startup?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the AI revolution. Get StartupOS and turn your startup into an unstoppable force.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => navigate("/dashboard")} 
                size="lg"
                className="bg-white text-primary hover:bg-slate-100 px-10 py-6 text-xl rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2"
              >
                Start Your Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-xl rounded-2xl transition-all duration-300"
                onClick={() => window.open("mailto:hello@startupos.ai")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">StartupOS</span>
              </div>
              <p className="text-slate-400 text-lg mb-4">
                The AI-powered operating system that transforms startups into market leaders.
              </p>
              <div className="text-slate-500">
                © 2024 StartupOS. All rights reserved.
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Business Advisor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resource Optimizer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Revenue Intelligence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Command Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
