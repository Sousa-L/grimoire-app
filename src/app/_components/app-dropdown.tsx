import { SidebarMenuButton } from "@/app/_components/_shadcn/sidebar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, GalleryHorizontal, Settings, Share2 } from "lucide-react";
import { HTMLAttributes } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./_shadcn/avatar";

export function AppDropdown ({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={className} {...props}>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex flex-row items-center" asChild>
                    <SidebarMenuButton className="font-bold h-12">
                        <Avatar>
                            <AvatarImage src="https://res.cloudinary.com/dlpmcjihv/image/upload/v1747764540/Screenshot_7_cs3eyr.jpg"/>
                            <AvatarFallback>AF</AvatarFallback>
                        </Avatar>
                        <p>Nome da Campanha</p>
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
        </div>
    )
}