import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  movieId: number;
  movieTitle: string;
  mediaType: "movie" | "tv";
}

const TrailerModal = ({ isOpen, onClose, movieId, movieTitle, mediaType }: TrailerModalProps) => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const TMDB_API_KEY = "9049a1d821f51ef88e70e430d10298c5";

  useEffect(() => {
    if (isOpen && movieId) {
      fetchTrailer();
    }
  }, [isOpen, movieId]);

  const fetchTrailer = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${mediaType}/${movieId}/videos?api_key=${TMDB_API_KEY}&language=pt-BR`
      );
      const data = await response.json();
      
      const trailer = data.results.find(
        (video: any) => video.type === "Trailer" && video.site === "YouTube"
      ) || data.results.find(
        (video: any) => video.site === "YouTube"
      );

      if (trailer) {
        setTrailerKey(trailer.key);
      } else {
        const englishResponse = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
        );
        const englishData = await englishResponse.json();
        const englishTrailer = englishData.results.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube"
        ) || englishData.results.find(
          (video: any) => video.site === "YouTube"
        );
        
        if (englishTrailer) {
          setTrailerKey(englishTrailer.key);
        }
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-black/95 border-primary/20">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary flex items-center justify-between">
            {movieTitle}
            <button
              onClick={onClose}
              className="p-2 hover:bg-primary/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : trailerKey ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title={movieTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Trailer não disponível
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrailerModal;
