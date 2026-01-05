import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-4" : "py-6"
      }`}
    >
      <div className="relative w-full h-full">
        <div
          className="absolute bottom-[-20] right-10 w-[300px] h-[300px]
                  bg-green-400/20 rounded-full blur-[120px]"
        />
        <div
          className="absolute bottom-[-20] right-20 w-[180px] h-[180px]
                  bg-green-300/40 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-[-20] right-28 w-[60px] h-[60px]
                  bg-green-200 rounded-full shadow-[0_0_40px_rgba(34,197,94,0.9)]"
        />
      </div>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-mono">
          <span className="text-gray-400">&lt;</span>
          <span className="text-red-400"> Sajak </span>
          <span className="text-gray-400">/&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button variant="glow" size="sm">
            Resume
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-4 mx-6 rounded-xl p-6 animate-fade-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="glow" className="mt-4">
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
