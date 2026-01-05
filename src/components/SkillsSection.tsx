import ReactIcon from "../assets/icons/physics.png";
import TypeScriptIcon from "../assets/icons/typescript.png";
import ReactNativeIcon from "../assets/icons/react.png";
import NodeIcon from "../assets/icons/nodejs.png";
import RestApiIcon from "../assets/icons/cloud-api.png";
import RealtionalDBIcon from "../assets/icons/database-model.png";
import NonRealtionalDBIcon from "../assets/icons/database.png";
import GitIcon from "../assets/icons/github.png";
import DockerIcon from "../assets/icons/docker.png";
import FigmaIcon from "../assets/icons/figma.png";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: ReactIcon },
        { name: "TypeScript", icon: TypeScriptIcon },
        { name: "React Native", icon: ReactNativeIcon },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: NodeIcon },
        { name: "Rest Api", icon: RestApiIcon },
        { name: "Relational Database", icon: RealtionalDBIcon },
        { name: "Non Realtional Database", icon: NonRealtionalDBIcon },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: GitIcon },
        { name: "Docker", icon: DockerIcon },
        { name: "Figma", icon: FigmaIcon },
      ],
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "GraphQL",
    "REST APIs",
    "Next.js",
    "Tailwind",
    "Prisma",
    "Redis",
    "Linux",
  ];

  return (
    <section id="skills" className="bg-gray-900 py-32 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-lg font-mono text-green-200 mb-4">
            // Skills & Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl text-gray-200 font-bold">
            Technologies I <span className="gradient-text">Master</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="border border-gray-800 bg-[#011627] rounded-2xl p-8 hover:glow-subtle transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h4 className="text-xl font-bold text-gray-200 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-200" />
                {category.title}
              </h4>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400 font-mono">
                        {skill.name}
                      </span>
                      <div className="rounded-full border border-gray-800 p-1">
                        <img src={skill.icon} className="h-8" />
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 border border-gray-800 rounded-full text-sm font-mono text-gray-400 hover:text-green-200 hover:border-green-200 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
