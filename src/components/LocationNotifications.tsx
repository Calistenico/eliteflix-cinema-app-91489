import { useEffect, useState } from "react";
import { Play, CheckCircle, Sparkles } from "lucide-react";

interface Notification {
  id: number;
  message: string;
  icon: "play" | "check" | "sparkles";
}

const LocationNotifications = () => {
  const [city, setCity] = useState<string>("sua cidade");
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const names = ["Mônica", "Márcio", "Camila", "João", "Maria", "Pedro", "Ana", "Carlos", "Julia", "Rafael"];

  useEffect(() => {
    // Fetch location
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setCity(data.city);
        }
      })
      .catch(() => {
        // Fallback if location fails
        setCity("sua cidade");
      });
  }, []);

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const notifications = [
        {
          id: Math.random(),
          message: `🎬 ${randomName} de ${city} acabou de baixar o Eliteflix TV!`,
          icon: "play" as const
        },
        {
          id: Math.random(),
          message: `🔥 ${randomName} de ${city} acabou de adquirir o plano Premium!`,
          icon: "check" as const
        },
        {
          id: Math.random(),
          message: `🍿 ${randomName} de ${city} começou a assistir agora mesmo!`,
          icon: "sparkles" as const
        }
      ];

      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);

    // Show new notification every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [city]);

  if (!currentNotification) return null;

  const IconComponent = 
    currentNotification.icon === "play" ? Play :
    currentNotification.icon === "check" ? CheckCircle :
    Sparkles;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-sm transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-card border border-primary/30 rounded-lg p-4 shadow-lg shadow-primary/20 flex items-center gap-3">
        <div className="bg-primary/20 p-2 rounded-full">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
        <p className="text-sm font-medium flex-1">{currentNotification.message}</p>
      </div>
    </div>
  );
};

export default LocationNotifications;
