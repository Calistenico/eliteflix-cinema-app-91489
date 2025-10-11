import { Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const downloadUrl = "https://eliteflix.shop/ELITEFLIXTV.apk";
  const whatsappUrl = "https://wa.me/5544991082160";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-0" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
        {/* Logo/Brand */}
        <h1 className="font-display text-7xl md:text-9xl font-bold mb-6 text-glow tracking-tight">
          ELITEFLIX<span className="text-primary">TV</span>
        </h1>
        
        {/* Main tagline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          🎬 Bem-vindo à Eliteflix TV
        </h2>
        
        <p className="text-xl md:text-3xl font-semibold mb-3 text-muted-foreground">
          O cinema na palma da sua mão — <span className="text-primary font-bold">100% grátis!</span>
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto">
          Assista filmes e séries sem pagar nada, apenas vendo um ou outro anúncio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href={downloadUrl} className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-xl px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide animate-glow-pulse box-glow-strong transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-6 w-6" />
              📲 BAIXAR AGORA GRÁTIS
            </Button>
          </a>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-xl px-10 py-7 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              💬 Falar no WhatsApp
            </Button>
          </a>
        </div>

        {/* Social proof */}
        <p className="text-sm md:text-base text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
          🎥 Mais de <span className="font-bold text-primary">3.743 pessoas</span> já estão assistindo grátis!
        </p>
      </div>
    </section>
  );
};

export default Hero;
