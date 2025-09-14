import { Outlet } from "react-router-dom";

export function AuthLayout() {
  // Layout ini sekarang memberikan kontrol penuh ke halaman di dalamnya
  // agar bisa membuat desain full-screen seperti halaman login.
  return (
    <div className="min-h-screen w-full">
      <Outlet />
    </div>
  );
}