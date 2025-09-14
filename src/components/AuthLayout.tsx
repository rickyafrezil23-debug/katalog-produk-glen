import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 dark:bg-gray-950">
      <Outlet />
    </div>
  );
}