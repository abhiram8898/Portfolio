import AboutSection from "./components/aboutSection";
import AchievementsSection from "./components/AchievmentsSection";
import EmailSection from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/heroSection";
import NavbarSection from "./components/navbar";
import ProjectsSection from "./components/projects";

export default function Home() {
  return (
    <main className="flex flex-col bg-black  ">
      <NavbarSection />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
