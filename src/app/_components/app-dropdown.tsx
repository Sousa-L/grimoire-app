import { SidebarMenuButton } from "@/app/_components/_shadcn/sidebar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, GalleryHorizontal, Settings, Share2 } from "lucide-react";

export function AppDropdown () {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-row items-center" asChild>
                <SidebarMenuButton className="font-bold">
                    Nome da Campanha
                    <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black z-100 w-54 ml-20 !important p-2 border-1 border-gray-500 rounded-lg text-sm flex flex-col gap-1">
                <DropdownMenuGroup className="flex flex-col gap-1">
                    <DropdownMenuItem className="flex gap-2 items-center outline-0 hover:bg-gray-700 hover:rounded px-2 py-1 cursor-pointer">
                        <Settings className="size-4"/>
                        Configurações
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex gap-2 items-center outline-0 hover:bg-gray-700 hover:rounded px-2 py-1 cursor-pointer">
                        <Share2 className="size-4"/>
                        Convidar
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="w-54 h-px place-self-center bg-gray-500 !important"/>
                <DropdownMenuItem className="flex gap-2 items-center outline-0 hover:bg-gray-700 hover:rounded px-2 py-1 cursor-pointer">
                    <GalleryHorizontal className="size-4"/>
                    Trocar de campanha
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}