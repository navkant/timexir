import SideNav2 from "@/app/ui/dashboard/sidenav2";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-pink-300 flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav2 />
      </div>
      <div className="grow md:overflow-y-auto md:p-12 bg-yellow-300">
        {children}
      </div>
    </div>
  );
}
