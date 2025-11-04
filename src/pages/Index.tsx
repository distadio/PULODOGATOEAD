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
