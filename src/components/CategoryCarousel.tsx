import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrailerModal from "./TrailerModal";

interface Movie {
  id: number;
  title: string;
  name?: string;
  poster_path: string;
  backdrop_path: string;
}

interface CategoryCarouselProps {
  title: string;
  endpoint: string;
}

const CategoryCarousel = ({ title, endpoint }: CategoryCarouselProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const TMDB_API_KEY = "9049a1d821f51ef88e70e430d10298c5";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const separator = endpoint.includes('?') ? '&' : '?';
        const response = await fetch(
          `https://api.themoviedb.org/3${endpoint}${separator}api_key=${TMDB_API_KEY}&language=pt-BR`
        );
        const data = await response.json();
        setMovies(data.results.slice(0, 20));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [endpoint]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const scroll = (direction: 'left' | 'right', containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const containerId = `carousel-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <section className="py-12 px-4 relative bg-gradient-to-b from-black via-black/95 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 animate-fade-in">
          {title}
        </h2>
        
        <div className="relative group">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-12 w-12"
            onClick={() => scroll('left', containerId)}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-12 w-12"
            onClick={() => scroll('right', containerId)}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div 
            id={containerId}
            className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-48 md:w-56 group/card cursor-pointer animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleMovieClick(movie)}
              >
                <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-110 hover:z-20 shadow-lg hover:shadow-primary/50">
                  <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title || movie.name}
                    className="w-full h-72 md:h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-bold text-sm line-clamp-2">{movie.title || movie.name}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-2 ring-primary opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {selectedMovie && (
        <TrailerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          movieId={selectedMovie.id}
          movieTitle={selectedMovie.title || selectedMovie.name || ""}
          mediaType={selectedMovie.name ? "tv" : "movie"}
        />
      )}
    </section>
  );
};

export default CategoryCarousel;
