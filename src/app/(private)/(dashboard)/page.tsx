import { AppSidebar } from "@/app/_components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function Home() {
  return (
    <main className="bg-black">
      <SidebarProvider>
        <AppSidebar/>
      </SidebarProvider>
    </main>
  );
}
