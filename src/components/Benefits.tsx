import { Film, DollarSign, Zap, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Film,
    title: "Acesso Ilimitado",
    description: "Milhares de filmes e séries sempre disponíveis para você assistir quando quiser."
  },
  {
    icon: DollarSign,
    title: "100% Gratuito",
    description: "Sem mensalidades, sem taxas ocultas. Apenas alguns anúncios curtos."
  },
  {
    icon: Zap,
    title: "Leve e Rápido",
    description: "App otimizado que instala rapidamente e funciona perfeitamente no seu celular."
  },
  {
    icon: Smartphone,
    title: "Qualquer Android",
    description: "Funciona em todos os aparelhos Android. Não precisa de celular potente."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
          Por Que Escolher a <span className="text-primary">Eliteflix TV?</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          A melhor experiência de cinema grátis no seu celular
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:box-glow cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
