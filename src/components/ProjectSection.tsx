import { ExternalLink, Github, Folder } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

const ProjectsSection = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const featuredProjects = [
    {
      title: "IT office system",
      description:
        "A fullstack system that proceed from hire to fire of employee in a single application",
      tags: [
        "React.js",
        "Node.js",
        "TypeScript",
        "MySql",
        "Zoom meet integration",
        "Socket.IO",
      ],
      github: "https://github.com/ITOfficeSystem",
      live: "#",
      featured: true,
    },
    {
      title: "Know your partner",
      description: "Simple quiz game to know more about the realtionship",
      tags: ["React", "Node.js", "MySql"],
      github: "https://github.com/sajakshrestha8/Know-Your-Partner",
      live: "https://know-your-partner.netlify.app/",
      featured: true,
    },
    {
      title: "DND Form builder",
      description:
        "A dynamic form builder using the drag and drop of the form components",
      tags: ["React", "GraphQL", "MongoDB", "Docker"],
      github: "https://github.com/sajakshrestha8/DND-FormBuilder",
      live: "https://dragndropformbuilder.netlify.app/",
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather app with location-based forecasts and interactive maps.",
      tags: ["React", "API", "Charts"],
      github: "#",
    },
    {
      title: "Portfolio Generator",
      description:
        "CLI tool that generates beautiful portfolio websites from JSON config.",
      tags: ["Node.js", "CLI", "Templates"],
      github: "#",
    },
    {
      title: "Code Snippet Manager",
      description:
        "Personal snippet manager with syntax highlighting and cloud sync.",
      tags: ["Electron", "React", "Firebase"],
      github: "#",
    },
    {
      title: "Markdown Editor",
      description:
        "Live preview markdown editor with custom themes and export options.",
      tags: ["React", "MDX", "PDF"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-lg font-mono text-green-200 mb-4">
            // Featured Work
          </h2>
          <h3 className="text-4xl text-gray-200 md:text-5xl font-bold">
            Things I've <span className="gradient-text">Built</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`border border-gray-800 bg-[#011627] rounded-2xl p-8 group hover:glow-subtle transition-all duration-500 ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <Folder className="w-10 h-10 text-green-300" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-gray-200 hover:text-green-200 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={26} />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-200 hover:text-green-200 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={26} />
                  </a>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 border border-gray-800 py-1 pointer text-xs font-mono bg-gray-900 shadow-lg rounded-full text-gray-500 hover:text-green-200 hover:border-green-200 "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-2xl text-gray-200 font-bold text-center mb-8">
          Other Noteworthy Projects
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-800 bg-[#011627] rounded-xl p-6 group hover:glow-subtle transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-8 h-8 text-green-200" />
                <a
                  href={project.github}
                  className="text-gray-200 hover:text-green-200 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              </div>
              <h5 className="font-bold text-gray-200 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h5>
              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-gray-800 font-mono text-gray-500 hover:text-green-200 hover:border-green-200"
                  >
                    {tag}
                    {project.tags.indexOf(tag) !== project.tags.length - 1 &&
                      " · "}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="glow" size="lg" onClick={() => setOpenModal(true)}>
            View All Projects
          </Button>
        </div>
        {openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpenModal(false)}
            />

            {/* Modal */}
            <div
              className="relative z-10 w-full max-w-md mx-4 rounded-2xl
                    bg-[#0b1220] border border-white/10
                    shadow-[0_0_40px_rgba(34,211,238,0.15)]
                    p-6 animate-fade-up"
            >
              {/* Title */}
              <h2 className="text-xl font-semibold text-white mb-2">
                🚧 Coming Soon
              </h2>

              {/* Message */}
              <p className="text-gray-400 leading-relaxed">
                Hey! Sorry for the interruption 🙏 <br />
                More projects are currently in progress and will be displayed
                very soon.
              </p>

              {/* Actions */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setOpenModal(false)}
                  className="px-5 py-2 rounded-lg
                     bg-cyan-400 text-black font-medium
                     hover:scale-105 transition-all duration-300
                     shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
