import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockComments = [
  {
    user: "Budi",
    comment: "Aplikasinya bagus dan mudah digunakan!",
  },
  {
    user: "Ani",
    comment: "Produknya lengkap, terima kasih.",
  },
];

const Comments = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Komentar & Masukan</h2>
        <form className="space-y-4">
          <Textarea placeholder="Tulis komentar Anda di sini..." />
          <Button>Kirim Komentar</Button>
        </form>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Komentar Terbaru</h3>
        <div className="space-y-4">
          {mockComments.map((c, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4 p-4">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>{c.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{c.user}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">{c.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;