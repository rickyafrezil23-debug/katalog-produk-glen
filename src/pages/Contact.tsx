import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, PlusCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Kontak Kami</h2>
        {isAdmin && (
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Tambah
          </Button>
        )}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Informasi Kontak</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>Jl. Jenderal Sudirman No. 123, Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>(021) 123-4567</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <span>kontak@perusahaan.com</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;