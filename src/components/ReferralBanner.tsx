import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReferralBanner = () => {
  const whatsappUrl = "https://wa.me/5544991082160";

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-glow-pulse" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 animate-bounce">
          <Gift className="h-10 w-10 text-primary-foreground" />
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          💎 Indique 2 amigos para o<br />
          <span className="text-primary animate-glow-pulse">Eliteflix Premium</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          e <span className="text-primary font-bold">GANHE 1 mês GRÁTIS!</span>
        </p>
        
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300">
            Quero Indicar e Ganhar!
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ReferralBanner;
