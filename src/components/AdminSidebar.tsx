import { 
  Home, 
  Users, 
  UserCircle, 
  Info, 
  Settings as SettingsIcon,
  ChevronLeft,
  Menu
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ActiveSection } from "./AdminDashboard";

interface AdminSidebarProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "users", label: "Users", icon: Users },
  { id: "profile", label: "Admin Profile", icon: UserCircle },
  { id: "about", label: "About Us", icon: Info },
  { id: "settings", label: "Settings", icon: SettingsIcon },
] as const;

export function AdminSidebar({ activeSection, onSectionChange }: AdminSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar 
      className={`border-r border-sidebar-border bg-sidebar transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3 animate-slide-in">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Menu className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-sidebar-foreground">Admin Panel</h1>
                <p className="text-xs text-sidebar-foreground/60">Dashboard</p>
              </div>
            </div>
          )}
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarMenu className="space-y-2">
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <button
                onClick={() => onSectionChange(item.id as ActiveSection)}
                className={`w-full flex items-center justify-start h-12 px-3 rounded-xl transition-all duration-300 hover-lift hover:bg-sidebar-accent group ${
                  activeSection === item.id 
                    ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                    : "text-sidebar-foreground hover:text-sidebar-primary"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className={`w-5 h-5 ${isCollapsed ? "mx-auto" : "mr-3"} transition-colors duration-300`} />
                {!isCollapsed && (
                  <span className="font-medium animate-slide-in">{item.label}</span>
                )}
              </button>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}