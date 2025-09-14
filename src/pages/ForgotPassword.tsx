import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { showSuccess } from "@/utils/toast";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // NOTE: Tampilan halaman ini akan menggunakan pengaturan yang sama dengan halaman login
  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1555529771-834f6dba3c83?q=80&w=2574&auto=format&fit=crop')`,
  };

  const handleResetRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulasi pengiriman email
    setTimeout(() => {
      console.log(`Meminta reset password untuk: ${email}`);
      showSuccess("Jika email terdaftar, instruksi reset telah dikirim.");
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center p-4"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Lupa Password</CardTitle>
            <CardDescription>
              Masukkan email Anda dan kami akan mengirimkan instruksi untuk mereset password Anda.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleResetRequest}>
            <CardContent className="grid gap-4 text-left">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Mengirim..." : "Kirim Instruksi"}
              </Button>
              <Button variant="link" asChild className="text-muted-foreground">
                <Link to="/login">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Login
                </Link>
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;