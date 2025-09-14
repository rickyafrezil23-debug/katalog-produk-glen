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
import { Link, useNavigate } from "react-router-dom";
import { showSuccess, showError } from "@/utils/toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // NOTE: Tampilan halaman ini akan menggunakan pengaturan yang sama dengan halaman login
  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1555529771-834f6dba3c83?q=80&w=2574&auto=format&fit=crop')`,
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showError("Password tidak cocok.");
      return;
    }
    setLoading(true);
    // Simulasi reset password
    setTimeout(() => {
      console.log("Password berhasil direset.");
      showSuccess("Password Anda telah berhasil diubah.");
      setLoading(false);
      navigate("/login");
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
            <CardTitle className="text-2xl">Buat Password Baru</CardTitle>
            <CardDescription>
              Masukkan password baru Anda di bawah ini.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleReset}>
            <CardContent className="grid gap-4 text-left">
              <div className="grid gap-2">
                <Label htmlFor="password">Password Baru</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Konfirmasi Password Baru</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Menyimpan..." : "Simpan Password Baru"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;