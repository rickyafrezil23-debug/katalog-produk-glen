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
import { Textarea } from "@/components/ui/textarea";

const Settings = () => {
  // NOTE: Fungsionalitas akan ditambahkan setelah koneksi ke Supabase
  const handleGeneralSettings = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Menyimpan pengaturan umum...");
  };

  const handleLoginSettings = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Menyimpan pengaturan halaman login...");
  };

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
          <CardTitle>Pengaturan Umum</CardTitle>
          <CardDescription>
            Atur judul utama yang tampil di header aplikasi.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGeneralSettings} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="app-title">Judul Aplikasi</Label>
              <Input id="app-title" defaultValue="Katalog Produk" />
            </div>
            <Button type="submit">Simpan Pengaturan</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pengaturan Halaman Login</CardTitle>
          <CardDescription>
            Kustomisasi tampilan halaman login untuk pengguna.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginSettings} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-title">Judul Halaman</Label>
              <Input id="login-title" defaultValue="Selamat Datang Kembali" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-desc">Deskripsi Halaman</Label>
              <Textarea id="login-desc" defaultValue="Masuk untuk mengakses katalog produk eksklusif kami." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-logo">Logo</Label>
              <Input id="login-logo" type="file" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-bg">Gambar Latar</Label>
              <Input id="login-bg" type="file" />
            </div>
            <Button type="submit">Simpan Pengaturan Login</Button>
          </form>
        </CardContent>
      </Card>

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
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latar Belakang Aplikasi</CardTitle>
          <CardDescription>
            Pilih warna latar belakang utama aplikasi. Fitur ini akan segera tersedia.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="h-10 w-10 cursor-pointer rounded-full border-2 border-primary bg-white" title="Default"></div>
            <div className="h-10 w-10 cursor-pointer rounded-full bg-slate-100" title="Slate"></div>
            <div className="h-10 w-10 cursor-pointer rounded-full bg-blue-50" title="Blue"></div>
            <div className="h-10 w-10 cursor-pointer rounded-full bg-green-50" title="Green"></div>
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