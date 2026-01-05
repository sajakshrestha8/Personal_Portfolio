import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Button from "./components/Button";

const App = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl floating-delayed" />

      <div className="mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8 animate-fade-up">
            <div className="rounded-lg px-6 py-3 font-mono text-sm border-1 border-blue-100">
              <span className="text-blue-400">$</span>
              <span className="text-gray-500 ml-2">whoami</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-6 animate-fade-up animation-delay-200">
            Hi, I'm <span className="gradient-text">Sajak Shrestha</span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-up animation-delay-400">
            <span className="text-2xl md:text-3xl text-muted-foreground font-mono">
              {displayText}
              <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animation-delay-600">
            I craft elegant solutions through code, turning complex problems
            into seamless digital experiences. Passionate about clean
            architecture and cutting-edge technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-800">
            <Button variant="hero" size="xl">
              View My Work
            </Button>
            <Button variant="glow" size="xl">
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-up animation-delay-800">
            <a
              href="#"
              className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:glow-subtle transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:glow-subtle transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:glow-subtle transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default App;
