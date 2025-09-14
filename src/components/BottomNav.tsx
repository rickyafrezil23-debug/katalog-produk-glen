import { NavLink } from "react-router-dom";
import { Package, LayoutGrid, Mail, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: Package, label: "Produk" },
  { href: "/categories", icon: LayoutGrid, label: "Kategori" },
  { href: "/contact", icon: Mail, label: "Kontak" },
  { href: "/comments", icon: MessageSquare, label: "Komen" },
];

export const BottomNav = () => {
  return (
    <nav className="absolute bottom-0 left-0 right-0 border-t bg-background">
      <div className="flex h-16 justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex flex-1 flex-col items-center justify-center gap-1 text-sm text-muted-foreground",
                isActive && "text-primary",
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};