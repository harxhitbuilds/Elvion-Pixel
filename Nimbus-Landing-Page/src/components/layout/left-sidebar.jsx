import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/constants/layout";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/useAuthStore";
import { Spinner } from "../ui/spinner";
import { useLocation, Link } from "react-router-dom";

export default function LeftSidebar() {
  const { loading, logout, user } = useAuthStore();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="mt-8 flex h-full flex-col border-none md:mt-24">
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.label}
                    className={cn(
                      "flex items-center gap-3 rounded-xl pl-5 transition-colors",
                      isActive
                        ? "bg-muted-foreground/10 text-foreground/60"
                        : "hover:bg-muted-foreground/20 hover:text-foreground",
                    )}
                  >
                    <Link to={item.href} className="py-5 font-robert-regular">
                      <item.icon
                        className={cn(
                          "h-4 w-4 shrink-0",
                          isActive ? "text-blue-500" : "",
                        )}
                      />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <div className="flex-1" />
      <SidebarFooter className="mb-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="rounded-none border">
            <Button
              variant="ghost"
              className="bg-secondary/40 flex h-auto w-full items-center justify-start gap-2 rounded-xl p-2"
            >
              <img
                src={user?.profile}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div className="min-w-0 text-left">
                <p className="truncate text-sm font-medium text-foreground">
                  {user?.name}
                </p>
                <p className="text-muted-foreground/80 truncate text-xs">
                  {user?.email}
                </p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 rounded-xl cursor-pointer"
            side="top"
            align="start"
          >
            <DropdownMenuItem
              onClick={logout}
              className="text-red-500 cursor-pointer"
            >
              {loading ? (
                <Spinner className="h-5 w-5 animate-spin" />
              ) : (
                "Logout"
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </div>
  );
}
