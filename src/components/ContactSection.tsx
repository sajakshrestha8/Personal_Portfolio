import { Mail, MapPin, Send } from "lucide-react";
import Button from "./Button";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 py-32 relative">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-mono text-green-200 mb-4">
            // Get In Touch
          </h2>
          <h3 className="text-4xl text-gray-200 md:text-5xl font-bold mb-6">
            Let's Build Something
            <span className="gradient-text"> Amazing</span>
          </h3>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to chat, feel free to reach
            out!
          </p>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="border border-gray-800 bg-[#011627] rounded-xl p-6 flex items-center gap-4 hover:glow-subtle transition-all duration-300">
              <div className="p-3 rounded-lg bg-gray-700">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:shresthasajak123@gmail.com"
                  className="text-gray-200 hover:text-green-200 transition-colors font-mono"
                >
                  shresthasajak123@gmail.com
                </a>
              </div>
            </div>
            <div className="border border-gray-800 bg-[#011627] rounded-xl p-6 flex items-center gap-4 hover:glow-subtle transition-all duration-300">
              <div className="p-3 rounded-lg bg-gray-700">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-200 hover:text-green-200 font-mono">
                  Chandragiri Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="xl" className="group">
            <span>Say Hello</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>

          {/* Fun Code Comment */}
          <div className="mt-16 glass-card rounded-lg p-4 inline-block">
            <code className="text-sm text-green-200 font-mono">
              <span className="text-green-200">// </span>
              Thanks for scrolling this far! 🚀
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
