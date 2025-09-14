import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const mockCategories = ["Elektronik", "Fashion", "Perabotan", "Otomotif"];

const Categories = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Kategori Produk</h2>
      <Card>
        <CardContent className="p-0">
          <ul className="divide-y">
            {mockCategories.map((category) => (
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