import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, PlusCircle, Search } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";

const mockCategories = ["Elektronik", "Fashion", "Perabotan", "Otomotif"];

const Categories = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = mockCategories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Kategori Produk</h2>
        {isAdmin && (
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Tambah
          </Button>
        )}
      </div>
      <div className="relative mb-4">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Cari kategori..."
          className="w-full rounded-lg bg-background pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Card>
        <CardContent className="p-0">
          <ul className="divide-y">
            {filteredCategories.map((category) => (
              <li
                key={category}
                className="flex cursor-pointer items-center justify-between p-4 hover:bg-accent"
              >
                <span>{category}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Categories;