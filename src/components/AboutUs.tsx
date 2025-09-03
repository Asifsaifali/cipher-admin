import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Info, 
  Heart, 
  Users, 
  Target, 
  Rocket,
  Globe,
  Award,
  Shield,
  Zap,
  Code
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for the best user experience",
    color: "accent"
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Built with users in mind, designed for simplicity",
    color: "success"
  },
  {
    icon: Code,
    title: "Modern Technology",
    description: "Built with the latest technologies and best practices",
    color: "warning"
  }
];

const stats = [
  { label: "Active Users", value: "2,847", icon: Users },
  { label: "Countries", value: "45+", icon: Globe },
  { label: "Uptime", value: "99.9%", icon: Award },
  { label: "Support Rating", value: "4.9/5", icon: Heart }
];

const team = [
  {
    name: "Alex Rodriguez",
    role: "CEO & Founder",
    description: "Visionary leader with 10+ years in tech"
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    description: "Technical excellence and innovation driver"
  },
  {
    name: "Michael Johnson",
    role: "Head of Design",
    description: "Creating beautiful and intuitive experiences"
  },
  {
    name: "Emma Wilson",
    role: "Head of Customer Success",
    description: "Ensuring every user has an amazing experience"
  }
];

export function AboutUs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center space-x-3 mb-4">
          <Info className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">About Us</h1>
            <p className="text-muted-foreground text-lg">Learn more about our mission, vision, and team</p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <Card className="glass-card border-border/50 animate-fade-in">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're dedicated to creating innovative solutions that empower businesses and individuals 
                to achieve their goals. Our platform combines cutting-edge technology with intuitive 
                design to deliver exceptional experiences that drive real results.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
        {stats.map((stat, index) => (
          <Card 
            key={stat.label} 
            className="glass-card border-border/50 hover-lift animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-card-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features */}
      <Card className="glass-card border-border/50 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center space-x-2">
            <Rocket className="w-6 h-6 text-accent" />
            <span>What Makes Us Different</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="flex items-start space-x-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-300"
              >
                <div className={`p-3 rounded-lg bg-${feature.color}/10 flex-shrink-0`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="glass-card border-border/50 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center space-x-2">
            <Heart className="w-6 h-6 text-primary" />
            <span>Meet Our Team</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">{member.name}</h3>
                  <Badge variant="outline" className="mb-2">{member.role}</Badge>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Company Values */}
      <Card className="glass-card border-border/50 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl">Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">People First</h3>
              <p className="text-muted-foreground">We prioritize our users, team, and community in everything we do.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">We constantly push boundaries to deliver cutting-edge solutions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Integrity</h3>
              <p className="text-muted-foreground">We maintain the highest standards of honesty and transparency.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}