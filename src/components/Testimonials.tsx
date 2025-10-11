import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos M.",
    rating: 5,
    text: "Melhor app de filmes grátis que já usei! A qualidade é incrível e os anúncios nem incomodam."
  },
  {
    name: "Ana Paula S.",
    rating: 5,
    text: "Assisto todos os dias! Tem todos os filmes que procuro e é super fácil de usar."
  },
  {
    name: "Roberto L.",
    rating: 5,
    text: "Vale muito a pena! Já baixei para toda família. O Premium sem anúncios é show!"
  },
  {
    name: "Juliana F.",
    rating: 5,
    text: "App leve, rápido e com muito conteúdo. Recomendo demais!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
          O Que Nossos <span className="text-primary">Usuários Dizem</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Milhares de pessoas já aprovam!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 line-clamp-3">{testimonial.text}</p>
              <p className="font-bold">{testimonial.name}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Star className="h-6 w-6 fill-primary text-primary" />
            <span className="font-bold text-xl">4.8/5.0</span>
            <span className="text-muted-foreground">• Mais de 10.000 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
