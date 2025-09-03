import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Database, 
  Mail,
  Globe,
  Key,
  Download,
  Upload,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Save
} from "lucide-react";

const settingsData = {
  notifications: {
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: false,
    securityAlerts: true
  },
  security: {
    twoFactorAuth: true,
    loginAlerts: true,
    sessionTimeout: "24"
  },
  system: {
    maintenanceMode: false,
    userRegistration: true,
    publicAPI: false,
    autoBackup: true
  },
  general: {
    siteName: "Admin Dashboard",
    siteURL: "https://admin.example.com",
    contactEmail: "admin@example.com",
    timezone: "UTC-8"
  }
};

export function Settings() {
  const [settings, setSettings] = useState(settingsData);
  const [hasChanges, setHasChanges] = useState(false);

  const updateNotification = (key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: value }
    }));
    setHasChanges(true);
  };

  const updateSecurity = (key: string, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      security: { ...prev.security, [key]: value }
    }));
    setHasChanges(true);
  };

  const updateSystem = (key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      system: { ...prev.system, [key]: value }
    }));
    setHasChanges(true);
  };

  const updateGeneral = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      general: { ...prev.general, [key]: value }
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Here you would typically save to backend
    console.log("Saving settings:", settings);
    setHasChanges(false);
  };

  const handleExportData = () => {
    console.log("Exporting data...");
  };

  const handleImportData = () => {
    console.log("Importing data...");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SettingsIcon className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-4xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground text-lg">Manage your platform configuration</p>
            </div>
          </div>
          {hasChanges && (
            <Button onClick={handleSave} className="bg-gradient-primary animate-fade-in">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="glass-card border-border/50 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl flex items-center space-x-2">
              <Globe className="w-5 h-5 text-primary" />
              <span>General Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                value={settings.general.siteName}
                onChange={(e) => updateGeneral("siteName", e.target.value)}
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="siteURL">Site URL</Label>
              <Input
                id="siteURL"
                value={settings.general.siteURL}
                onChange={(e) => updateGeneral("siteURL", e.target.value)}
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="contactEmail"
                  type="email"
                  value={settings.general.contactEmail}
                  onChange={(e) => updateGeneral("contactEmail", e.target.value)}
                  className="pl-10 bg-background/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select 
                id="timezone"
                value={settings.general.timezone}
                onChange={(e) => updateGeneral("timezone", e.target.value)}
                className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-sm"
              >
                <option value="UTC-8">Pacific Time (UTC-8)</option>
                <option value="UTC-5">Eastern Time (UTC-5)</option>
                <option value="UTC+0">Greenwich Mean Time (UTC+0)</option>
                <option value="UTC+1">Central European Time (UTC+1)</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="glass-card border-border/50 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl flex items-center space-x-2">
              <Bell className="w-5 h-5 text-accent" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <Switch
                id="emailNotifications"
                checked={settings.notifications.emailNotifications}
                onCheckedChange={(checked) => updateNotification("emailNotifications", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="pushNotifications">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive browser push notifications</p>
              </div>
              <Switch
                id="pushNotifications"
                checked={settings.notifications.pushNotifications}
                onCheckedChange={(checked) => updateNotification("pushNotifications", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="weeklyReports">Weekly Reports</Label>
                <p className="text-sm text-muted-foreground">Get weekly summary reports</p>
              </div>
              <Switch
                id="weeklyReports"
                checked={settings.notifications.weeklyReports}
                onCheckedChange={(checked) => updateNotification("weeklyReports", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="securityAlerts">Security Alerts</Label>
                <p className="text-sm text-muted-foreground">Important security notifications</p>
              </div>
              <Switch
                id="securityAlerts"
                checked={settings.notifications.securityAlerts}
                onCheckedChange={(checked) => updateNotification("securityAlerts", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="glass-card border-border/50 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl flex items-center space-x-2">
              <Shield className="w-5 h-5 text-success" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="twoFactorAuth"
                  checked={settings.security.twoFactorAuth}
                  onCheckedChange={(checked) => updateSecurity("twoFactorAuth", checked)}
                />
                {settings.security.twoFactorAuth && (
                  <Badge className="bg-success/10 text-success border-success/20">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Enabled
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="loginAlerts">Login Alerts</Label>
                <p className="text-sm text-muted-foreground">Get notified of new logins</p>
              </div>
              <Switch
                id="loginAlerts"
                checked={settings.security.loginAlerts}
                onCheckedChange={(checked) => updateSecurity("loginAlerts", checked)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">Session Timeout (hours)</Label>
              <Input
                id="sessionTimeout"
                type="number"
                value={settings.security.sessionTimeout}
                onChange={(e) => updateSecurity("sessionTimeout", e.target.value)}
                className="bg-background/50"
                min="1"
                max="168"
              />
            </div>
            <Button variant="outline" className="w-full">
              <Key className="w-4 h-4 mr-2" />
              Change Password
            </Button>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="glass-card border-border/50 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl flex items-center space-x-2">
              <Database className="w-5 h-5 text-warning" />
              <span>System</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                <p className="text-sm text-muted-foreground">Temporarily disable the platform</p>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="maintenanceMode"
                  checked={settings.system.maintenanceMode}
                  onCheckedChange={(checked) => updateSystem("maintenanceMode", checked)}
                />
                {settings.system.maintenanceMode && (
                  <Badge className="bg-warning/10 text-warning border-warning/20">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="userRegistration">User Registration</Label>
                <p className="text-sm text-muted-foreground">Allow new user registrations</p>
              </div>
              <Switch
                id="userRegistration"
                checked={settings.system.userRegistration}
                onCheckedChange={(checked) => updateSystem("userRegistration", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="publicAPI">Public API</Label>
                <p className="text-sm text-muted-foreground">Enable public API access</p>
              </div>
              <Switch
                id="publicAPI"
                checked={settings.system.publicAPI}
                onCheckedChange={(checked) => updateSystem("publicAPI", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="autoBackup">Auto Backup</Label>
                <p className="text-sm text-muted-foreground">Automatic daily backups</p>
              </div>
              <Switch
                id="autoBackup"
                checked={settings.system.autoBackup}
                onCheckedChange={(checked) => updateSystem("autoBackup", checked)}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Management */}
      <Card className="glass-card border-border/50 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-xl">Data Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button onClick={handleExportData} variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button onClick={handleImportData} variant="outline" className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Import Data
            </Button>
            <Button variant="destructive" className="w-full">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Cache
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}