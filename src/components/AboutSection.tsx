import { Code2, Coffee, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, label: "1+ Years", description: "Coding Experience" },
    { icon: Rocket, label: "20+", description: "Projects Completed" },
    { icon: Coffee, label: "1000+", description: "Cups of Coffee" },
    { icon: Lightbulb, label: "∞", description: "Ideas to Build" },
  ];

  return (
    <section id="about" className="bg-gray-900 py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute text-gray-200 inset-0 border-1 border-blue-400  rounded-2xl overflow-hidden bg-[#011627] rounded-xl shadow-lg">
                <pre className="p-6 font-mono text-sm text-muted-foreground leading-relaxed">
                  <div className="mt-5 font-mono text-sm leading-relaxed text-[#d6deeb]">
                    <span className="text-[#c792ea]">const</span>{" "}
                    <span className="text-[#addb67]">developer</span>{" "}
                    <span>=</span> <span className="text-[#c792ea]">{"{"}</span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#82aaff]">"name"</span>:{" "}
                    <span className="text-[#ecc48d]">"Sajak Shrestha"</span>,
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#82aaff]">"location"</span>:{" "}
                    <span className="text-[#ecc48d]">"Kathmandu, Nepal"</span>,
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#82aaff]">"skills"</span>:{" "}
                    <span className="text-[#c792ea]">[</span>
                    <span className="text-[#ecc48d]">"Javascript"</span>,{" "}
                    <span className="text-[#ecc48d]">"TypeScript"</span>,{" "}
                    <span className="text-[#ecc48d]">"Node.js"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-[#ecc48d]">"React"</span>,{" "}
                    <span className="text-[#ecc48d]">"Nest.js"</span>
                    <span className="text-[#c792ea]">]</span>,
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#82aaff]">"passion"</span>:{" "}
                    <span className="text-[#ecc48d]">
                      "Building random things"
                    </span>
                    ,
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#82aaff]">
                      "currentlyLearning"
                    </span>:{" "}
                    <span className="text-[#ecc48d]">"Reading anything"</span>,
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#82aaff]">
                      "lifePhilosophy"
                    </span>: <span className="text-[#addb67]">()</span>{" "}
                    <span className="text-[#c792ea]">=&gt;</span>{" "}
                    <span className="text-[#c792ea]">{"{"}</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-[#c792ea]">return</span>{" "}
                    <span className="text-[#ecc48d]">
                      "Code. Create. Repeat."
                    </span>
                    ;
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#c792ea]">{"}"}</span>
                    <br />
                    <span className="text-[#c792ea]">{"}"}</span>;
                  </div>
                </pre>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-green-300 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-purple-500 rounded-2xl" />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-mono text-green-200 mb-4 animate-fade-up">
              // About Me
            </h2>
            <h3 className="text-4xl text-gray-200 md:text-5xl font-bold mb-6 animate-fade-up animation-delay-200">
              Crafting Digital
              <span className="gradient-text"> Experiences</span>
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed mb-6 animate-fade-up animation-delay-400">
              I'm a passionate software developer with a love for creating
              elegant, efficient, and user-friendly applications. With a strong
              foundation in modern web technologies, I specialize in building
              full-stack applications that not only look great but perform
              exceptionally.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-10 animate-fade-up animation-delay-600">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee while brainstorming the next big idea.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up animation-delay-800">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-800 p-4 text-center hover:glow-subtle transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-green-200 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-200">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
