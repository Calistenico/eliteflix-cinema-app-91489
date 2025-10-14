import { Crown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  "Zero anúncios durante os filmes e séries",
  "Qualidade de streaming premium",
  "Acesso prioritário aos lançamentos",
  "Suporte premium 24/7"
];

const Premium = () => {
  const purchaseUrl = "https://pay.wiapy.com/XqwRugO8ia";
  const downloadUrl = "https://webplay.eliteflix.shop/EliteFlixFilmes_Celular.apk";

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center bg-primary/20 px-4 py-2 rounded-full mb-4">
            <Crown className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Eliteflix Plus</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Quer Assistir <span className="text-primary">Sem Anúncios?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experimente o Eliteflix Premium e veja tudo sem interrupções
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-2xl mb-6">Recursos Exclusivos:</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <div className="mb-6">
                <p className="text-muted-foreground mb-2">A partir de</p>
                <div className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">
                  R$ 9<span className="text-2xl">,90</span>
                </div>
                <p className="text-muted-foreground">por mês</p>
              </div>

              <div className="space-y-3">
                <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="w-full text-lg px-8 py-6 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
                  >
                    📱 Baixar App Premium
                  </Button>
                </a>

                <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="w-full text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide box-glow transition-all duration-300 hover:scale-105"
                  >
                    <Crown className="mr-2 h-5 w-5" />
                    Comprar o Premium
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                🎯 Baixe o app e garanta sua assinatura premium!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Premium;
