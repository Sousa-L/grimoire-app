import { SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, Sidebar } from "@/components/ui/sidebar";
import { Search, Map, User} from "lucide-react";
import { AppDropdown } from "./app-dropdown";

const items = [
    {
        title: "Personagens",
        url: "#",
        icon: User
    },
    {
        title: "Locais",
        url: "#",
        icon: Map
    },
]

export function AppSidebar () {
    return (
        <Sidebar variant="inset" className="">
          <SidebarHeader className="m-2 flex flex-row justify-between items-center">
            <AppDropdown/>
            <Search className="size-4" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Mundo</SidebarGroupLabel>
              <SidebarMenu>
                {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Mundo</SidebarGroupLabel>
              <SidebarMenu>
                {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
    )
}