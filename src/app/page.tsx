import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InteractiveDots from "@/components/InteractiveDots";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Global Interactive Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <InteractiveDots />
      </div>

      <div className="fixed inset-0 bg-gradient-to-t from-slate-50 to-transparent z-0 pointer-events-none"></div>
      <div className="fixed inset-0 flex items-center justify-center bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0 pointer-events-none"></div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
      </div>

      {/* Simple Footer */}
      <footer className="relative z-10 bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-4">© {new Date().getFullYear()} TEOS. Все права защищены.</p>
          <a
            href="https://wa.me/77715255755"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-white transition-colors"
          >
            Связаться с техподдержкой в WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
