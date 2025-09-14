import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Search, Trash2 } from "lucide-react";
import { ProductFormDialog } from "@/components/ProductFormDialog";
import { Input } from "@/components/ui/input";

const mockProducts = [
  {
    id: 1,
    name: "Smartphone Canggih",
    category: "Elektronik",
    price: "Rp 5.000.000",
    spec: "RAM 8GB, ROM 128GB, Kamera 48MP",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Laptop Produktif",
    category: "Elektronik",
    price: "Rp 12.000.000",
    spec: "Core i7, RAM 16GB, SSD 512GB",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Kemeja Katun",
    category: "Fashion",
    price: "Rp 250.000",
    spec: "Bahan katun, Ukuran L, Warna Biru",
    image: "/placeholder.svg",
  },
];

const Products = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Daftar Produk</h2>
          {isAdmin && (
            <Button size="sm" onClick={() => setIsDialogOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Tambah
            </Button>
          )}
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Cari produk..."
            className="w-full rounded-lg bg-background pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-20 w-20 rounded-md object-cover"
                />
                <div className="flex-1">
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.price}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{product.spec}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Badge>{product.category}</Badge>
              {isAdmin && (
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      {isAdmin && (
        <ProductFormDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      )}
    </>
  );
};

export default Products;