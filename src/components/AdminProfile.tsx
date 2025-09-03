import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  UserCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit,
  Save,
  Shield,
  Star,
  Settings as SettingsIcon
} from "lucide-react";
import { useState } from "react";

const adminData = {
  name: "Alex Rodriguez",
  email: "alex.rodriguez@admin.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  role: "Super Administrator",
  joinDate: "January 15, 2023",
  lastLogin: "2 hours ago",
  permissions: ["User Management", "System Settings", "Analytics", "Billing", "Support"]
};

export function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(adminData);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log("Saving profile data:", profileData);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center space-x-3 mb-4">
          <UserCircle className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Admin Profile</h1>
            <p className="text-muted-foreground text-lg">Manage your administrative account</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="glass-card border-border/50 animate-fade-in lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Profile Information</CardTitle>
              <Button 
                variant={isEditing ? "default" : "outline"}
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
                className={isEditing ? "bg-gradient-primary" : ""}
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Picture Section */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                {isEditing && (
                  <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                    <Edit className="w-3 h-3" />
                  </Button>
                )}
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-card-foreground">{profileData.name}</h3>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {profileData.role}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                  Full Name
                </Label>
                <div className="relative">
                  <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    disabled={!isEditing}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    disabled={!isEditing}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    disabled={!isEditing}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium text-card-foreground">
                  Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    disabled={!isEditing}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats & Permissions */}
        <div className="space-y-6">
          {/* Admin Stats */}
          <Card className="glass-card border-border/50 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Star className="w-5 h-5 text-accent" />
                <span>Admin Stats</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Join Date</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-muted-foreground" />
                  <span className="text-sm font-medium text-card-foreground">{profileData.joinDate}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Last Login</span>
                <span className="text-sm font-medium text-card-foreground">{profileData.lastLogin}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Users Managed</span>
                <span className="text-sm font-medium text-card-foreground">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Actions Today</span>
                <span className="text-sm font-medium text-card-foreground">23</span>
              </div>
            </CardContent>
          </Card>

          {/* Permissions */}
          <Card className="glass-card border-border/50 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <SettingsIcon className="w-5 h-5 text-primary" />
                <span>Permissions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {profileData.permissions.map((permission, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-card-foreground">{permission}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}