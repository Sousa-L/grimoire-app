import { Search, EllipsisVertical } from "lucide-react";
import { SidebarTrigger } from "./_shadcn/sidebar";
import { AppDropdown } from "./app-dropdown";

export function AppMobileHeader() {
    return(
        <div className="flex flex-row justify-between items-center my-4 mx-4 sm:hidden">
          <AppDropdown className=""/>
          <div className="flex flex-row gap-8 items-center">
            <Search className="size-4"/>
            <SidebarTrigger><EllipsisVertical className="size-5"/></SidebarTrigger>
          </div>
        </div>
    )
}