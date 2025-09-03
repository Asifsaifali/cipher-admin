import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { DashboardHome } from "./DashboardHome";
import { UsersManagement } from "./UsersManagement";
import { AdminProfile } from "./AdminProfile";
import { AboutUs } from "./AboutUs";
import { Settings } from "./Settings";

export type ActiveSection = "home" | "users" | "profile" | "about" | "settings";

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("home");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <DashboardHome />;
      case "users":
        return <UsersManagement />;
      case "profile":
        return <AdminProfile />;
      case "about":
        return <AboutUs />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <main className="flex-1 flex flex-col min-h-screen">
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="animate-fade-in max-w-full">
              {renderActiveSection()}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}