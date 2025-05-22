import { AppSidebar } from "@/app/_components/app-sidebar";
import { SidebarProvider } from "@/app/_components/_shadcn/sidebar";
import { AppBreadcrumb } from "@/app/_components/app-breadcrumb";
import { AppMobileHeader } from "@/app/_components/app-mobile-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/_shadcn/card";
import { Input } from "@/app/_components/_shadcn/input";
import { Plus, Search } from "lucide-react";
import { Button } from "@/app/_components/_shadcn/button";


export default function Home() {
  return (
    <main className="bg-black">
      <SidebarProvider className="flex flex-col">
        <AppSidebar className="max-sm:mt-6"/>
        <AppMobileHeader/>
        <AppBreadcrumb className="mx-auto sm:my-6"/>
        <Card className="sm:ml-(--sidebar-width) h-[880px] max-sm:ml-2 max-sm:mt-2 mr-2">
          <CardHeader>
            <CardTitle className="text-2xl">Personagens</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-2">
              <div>
                <Search className="absolute mt-4 ml-4 size-4 text-muted-foreground"/>
                <Input className="h-12 w-2xl pl-12 mb-4"  placeholder="Buscar habilidades"/>
              </div>
              <Button className="h-12 font-bold text-base">
                <Plus className="size-5"/>
                <p>Novo Personagem</p>
              </Button>
            </div>
          </CardContent>
        </Card>
      </SidebarProvider>
    </main>
  );
}
