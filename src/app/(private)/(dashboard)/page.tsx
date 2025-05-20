import { AppSidebar } from "@/app/_components/app-sidebar";
import { SidebarProvider } from "@/app/_components/_shadcn/sidebar";


export default function Home() {
  return (
    <main className="bg-black">
      <SidebarProvider>
        <AppSidebar/>
      </SidebarProvider>
    </main>
  );
}
