import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  // NOTE: Fungsionalitas akan ditambahkan setelah koneksi ke Supabase
  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Menambahkan admin baru...");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mengubah password...");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Pengaturan Admin</h2>

      <Card>
        <CardHeader>
          <CardTitle>Tampilan</CardTitle>
          <CardDescription>
            Atur tampilan aplikasi.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Mode Gelap</Label>
            <Switch id="dark-mode" disabled />
            {/* Fungsionalitas tema akan ditambahkan nanti */}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manajemen Pengguna</CardTitle>
          <CardDescription>
            Tambah admin baru ke sistem.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddAdmin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Admin Baru</Label>
              <Input id="email" type="email" placeholder="adminbaru@example.com" />
            </div>
            <Button type="submit">Tambah Admin</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ubah Password</CardTitle>
          <CardDescription>
            Ubah password login Anda.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Password Saat Ini</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Password Baru</Label>
              <Input id="new-password" type="password" />
            </div>
            <Button type="submit">Simpan Password</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;