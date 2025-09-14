import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between gap-4 border-b p-4">
      <div className="flex items-center gap-4">
        <img src="/placeholder.svg" alt="Company Logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold">Katalog Produk</h1>
      </div>
      {user && (
        <Button variant="ghost" size="icon" onClick={logout}>
          <LogOut className="h-5 w-5" />
          <span className="sr-only">Logout</span>
        </Button>
      )}
    </header>
  );
};