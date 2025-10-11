import { Download, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const downloadUrl = "https://eliteflix.shop/ELITEFLIXTV.apk";
  const whatsappUrl = "https://wa.me/5544991082160";

  return (
    <footer className="bg-black border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold mb-4">
              ELITEFLIX<span className="text-primary">TV</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Cinema grátis na palma da sua mão. Assista seus filmes e séries favoritos onde e quando quiser.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/vyntrixsistemas" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-primary transition-colors p-2 rounded-lg">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/eliteflixgratis" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-primary transition-colors p-2 rounded-lg">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-primary transition-colors p-2 rounded-lg">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Filmes em Alta</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Premium</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Suporte</a></li>
            </ul>
          </div>

          {/* Download & Contact */}
          <div>
            <h4 className="font-bold text-xl mb-4">Baixe Agora</h4>
            <div className="space-y-3">
              <a href={downloadUrl} className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  <Download className="mr-2 h-5 w-5" />
                  Download APK
                </Button>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p className="mb-2">© 2025 Eliteflix TV — Todos os direitos reservados</p>
          <p className="text-sm">
            Feito com ❤️ para os amantes de cinema
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
