import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  DollarSign, 
  Activity, 
  TrendingUp,
  UserPlus,
  CreditCard,
  Calendar,
  BarChart3
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
    color: "primary"
  },
  {
    title: "Revenue",
    value: "$54,239",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: DollarSign,
    color: "success"
  },
  {
    title: "Active Subscriptions",
    value: "1,429",
    change: "+3.1%",
    changeType: "positive" as const,
    icon: Activity,
    color: "accent"
  },
  {
    title: "Growth Rate",
    value: "23.4%",
    change: "-2.1%",
    changeType: "negative" as const,
    icon: TrendingUp,
    color: "warning"
  }
];

const recentActivity = [
  {
    type: "new_user",
    user: "John Doe",
    action: "registered",
    time: "2 minutes ago",
    icon: UserPlus
  },
  {
    type: "subscription",
    user: "Sarah Smith",
    action: "upgraded to Premium",
    time: "5 minutes ago",
    icon: CreditCard
  },
  {
    type: "subscription",
    user: "Mike Johnson",
    action: "cancelled subscription",
    time: "12 minutes ago",
    icon: Calendar
  },
  {
    type: "revenue",
    user: "Emma Wilson",
    action: "made a payment of $29.99",
    time: "18 minutes ago",
    icon: DollarSign
  }
];

export function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground text-lg">Welcome back! Here's what's happening with your platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
        {stats.map((stat, index) => (
          <Card 
            key={stat.title} 
            className="glass-card hover-lift border-border/50 animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground/80">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-${stat.color}/10`}>
                <stat.icon className={`w-4 h-4 text-${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground mb-1">
                {stat.value}
              </div>
              <div className="flex items-center space-x-1">
                <Badge 
                  variant={stat.changeType === "positive" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
                <span className="text-xs text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="glass-card border-border/50 animate-fade-in">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-primary" />
              <CardTitle className="text-xl text-card-foreground">Recent Activity</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <activity.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">
                    <span className="text-primary">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="glass-card border-border/50 animate-fade-in">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-accent" />
              <CardTitle className="text-xl text-card-foreground">Quick Stats</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Free Users</span>
                <span className="text-sm font-medium text-card-foreground">1,418 (49.8%)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "49.8%" }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Premium Users</span>
                <span className="text-sm font-medium text-card-foreground">1,429 (50.2%)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-accent h-2 rounded-full" style={{ width: "50.2%" }}></div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <div className="text-center">
                <p className="text-2xl font-bold text-card-foreground">92.3%</p>
                <p className="text-sm text-muted-foreground">User Satisfaction</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}