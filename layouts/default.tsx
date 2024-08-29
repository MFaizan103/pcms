import { Head } from "./head";

import { ThemeSwitch } from "@/ui/theme-switch";
// import { Navbar } from "@/ui/dashboard/navbar/Navbar";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <div className="flex gap-4 p-4 mt-4">
        <p>Switch Theme</p>
        <ThemeSwitch />
      </div>
      {/* <Navbar /> */}
      {children}
      <footer className="w-full flex items-center justify-center py-3">
        <div className="flex items-center gap-1 text-current">
          <span className="text-default-600">Designed By </span>
          <p className="text-primary">Muhammad Faizan, IT-Branch KPO</p>
        </div>
      </footer>
    </div>
  );
}
