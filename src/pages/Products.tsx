import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Daftar Produk</h2>
      {mockProducts.map((product) => (
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
          <CardFooter>
            <Badge>{product.category}</Badge>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Products;