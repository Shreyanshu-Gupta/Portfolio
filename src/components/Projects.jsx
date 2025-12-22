import Section from "./Section";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 bg-white/10 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={project.live} className="text-blue-400">
                Live
              </a>
              <a href={project.github} className="text-blue-400">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
