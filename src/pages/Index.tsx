import Hero from "@/components/Hero";
import MovieCarousel from "@/components/MovieCarousel";
import CategoryCarousel from "@/components/CategoryCarousel";
import Benefits from "@/components/Benefits";
import ReferralBanner from "@/components/ReferralBanner";
import Premium from "@/components/Premium";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyDownload from "@/components/StickyDownload";
import LocationNotifications from "@/components/LocationNotifications";
import RewardPopup from "@/components/RewardPopup";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <StickyDownload />
      <LocationNotifications />
      <RewardPopup />
      <Hero />
      <MovieCarousel />
      <CategoryCarousel title="🔥 Mais Vistas" endpoint="/movie/popular" />
      <CategoryCarousel title="💕 Doramas" endpoint="/discover/tv?with_genres=18&with_origin_country=KR" />
      <CategoryCarousel title="⚔️ Animes" endpoint="/discover/tv?with_genres=16&with_origin_country=JP" />
      <CategoryCarousel title="📺 Novelas" endpoint="/discover/tv?with_genres=10766&with_origin_country=BR" />
      <CategoryCarousel title="🧙 Filmes de Fantasia" endpoint="/discover/movie?with_genres=14" />
      <Benefits />
      <ReferralBanner />
      <Premium />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
