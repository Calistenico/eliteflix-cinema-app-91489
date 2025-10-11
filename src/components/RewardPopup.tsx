import { useEffect, useState } from "react";
import { X, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const RewardPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState<string>("");
  const whatsappUrl = "https://wa.me/5544991082160";

  useEffect(() => {
    // Fetch location
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.city) {
          setCity(data.city);
        } else {
          setCity("sua região");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setCity("sua região");
      }
    };

    fetchLocation();

    // Show popup after 25 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Play confetti sound
      const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHWW56+OdTBELTaHi8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEKTKHh8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEKTKHh8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEKTKHh8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEKTKHh8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEKTKHh8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEKTKHh8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEKTKHh8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEKTKHh8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEKTKHh8K9cGgU7k9r0yXkqBSh+zPLaizsIGGS56eKaTRAMUKXh8bllHAU2jdXzzn0vBSqAzfDWhzYHHGO45+SaTBEK");
      audio.volume = 0.3;
      audio.play().catch(err => console.log("Audio play failed:", err));
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary rounded-2xl p-8 max-w-lg w-full shadow-[0_0_50px_rgba(220,38,38,0.5)] animate-scale-in">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Animated sparkles */}
        <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-8">
          <div className="bg-primary rounded-full p-4 animate-bounce shadow-[0_0_30px_rgba(220,38,38,0.8)]">
            <Gift className="h-12 w-12 text-primary-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mt-8">
          <h2 className="font-bold text-3xl md:text-4xl mb-4 animate-glow-pulse" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            🎉 Parabéns{city ? `, morador(a) de ${city}` : ""}!
          </h2>
          
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold text-primary">Você foi selecionado(a) para uma oportunidade exclusiva:</span>
            </p>
            
            <p className="text-base mb-3">
              Indique o <span className="font-bold text-primary">Eliteflix TV grátis</span> para <span className="font-bold">5 amigos</span>,
            </p>
            <p className="text-base mb-3">
              faça eles assistirem por pelo menos <span className="font-bold">7 dias seguidos</span>
            </p>
            <p className="text-xl font-bold text-primary mb-4">
              e GANHE 15 dias do Eliteflix Premium grátis!
            </p>
            
            {city && (
              <p className="text-sm text-muted-foreground">
                🎁 Essa oferta é exclusiva para você de <span className="font-bold text-foreground">{city}</span>!
              </p>
            )}
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 rounded-lg shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300"
            >
              <Gift className="mr-2 h-6 w-6" />
              Participar e Ganhar!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RewardPopup;
