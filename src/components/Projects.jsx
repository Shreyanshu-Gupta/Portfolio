import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 bg-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  className="text-blue-500 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
