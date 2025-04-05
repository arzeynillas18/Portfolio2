
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { SkillsSection } from '@/components/home/SkillsSection';
import { EducationSection } from '@/components/home/EducationSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { ContactSection } from '@/components/home/ContactSection';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // For smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
