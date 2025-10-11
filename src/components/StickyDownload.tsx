import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyDownload = () => {
  const [visible, setVisible] = useState(false);
  const downloadUrl = "https://eliteflix.shop/ELITEFLIXTV.apk";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <a href={downloadUrl}>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide shadow-2xl animate-glow-pulse px-8 py-6 text-lg"
        >
          <Download className="mr-2 h-5 w-5" />
          BAIXAR APP GRÁTIS
        </Button>
      </a>
    </div>
  );
};

export default StickyDownload;
