import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { CoursesSection } from "@/components/CoursesSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { GiphyFeed } from "@/components/GiphyFeed";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-primary/10 border-b border-primary/20 py-2 text-center">
        <p className="text-sm font-medium text-primary animate-pulse">
          🚧 Site em construção e desenvolvimento 🚧
        </p>
      </div>
      <Hero />
      <WhySection />
      <CoursesSection />
      <SponsorsSection />
      <GiphyFeed />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Index;
