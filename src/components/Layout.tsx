import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="relative mx-auto flex h-screen max-w-sm flex-col border bg-background shadow-lg">
      <Header />
      <main className="flex-1 overflow-y-auto p-4 pb-20">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}