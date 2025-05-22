import { SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, Sidebar } from "@/app/_components/_shadcn/sidebar";
import { Search, Map, User} from "lucide-react";
import { AppDropdown } from "./app-dropdown";
import { HTMLAttributes } from "react";

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

export function AppSidebar ({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <Sidebar variant="inset" className={className} {...props}>
          <SidebarHeader className="m-2 flex flex-row justify-between items-center max-sm:hidden">
            <AppDropdown/>
            <Search className="size-4" />
          </SidebarHeader>
          <SidebarContent className="max-sm: mt-5">
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