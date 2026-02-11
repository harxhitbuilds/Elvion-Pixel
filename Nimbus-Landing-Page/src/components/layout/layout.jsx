import LeftSidebar from "@/components/layout/left-sidebar";
import Topbar from "@/components/layout/topbar";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
const TOPBAR_HEIGHT = 64;

export default function Layout() {
  return (
    <SidebarProvider>
      <div
        className="fixed top-0 left-0 z-50 w-full"
        style={{ height: TOPBAR_HEIGHT }}
      >
        <Topbar />
      </div>

      <div
        className="flex min-h-screen w-full pt-16"
        style={{ paddingTop: TOPBAR_HEIGHT }}
      >
        {/* Give Sidebar a fixed width */}
        <Sidebar className="w-64 shrink-0">
          <SidebarContent>
            <LeftSidebar />
          </SidebarContent>
        </Sidebar>
        {/* Main content fills the rest */}
        <main className="bg-background flex-1 overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
