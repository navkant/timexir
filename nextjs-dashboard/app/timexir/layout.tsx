import SideNav2 from "@/app/ui/dashboard/sidenav2";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen  flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav2 />
      </div>
      <div className="grow md:overflow-y-auto md:p-12 ">{children}</div>
    </div>
  );
}
