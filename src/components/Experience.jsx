export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Experience
        </h2>

        {/* NVIDIA */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold">
            ML Trainee – NVIDIA (DGX-A100)
          </h3>
          <p className="text-gray-400 mb-4">
            Worked on high-performance ML systems and deployment workflows.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Worked with NVIDIA DGX-A100 for ML workloads</li>
            <li>Used Docker and Kubeflow for containerized ML pipelines</li>
            <li>Built multi-person face recognition systems</li>
            <li>Handled data preprocessing, training, and evaluation</li>
            <li>Implemented document-based ML workflows</li>
          </ul>
        </div>

        {/* Zidio */}
        <div>
          <h3 className="text-2xl font-semibold">
            Web Developer – Zidio Development (Bangalore)
          </h3>
          <p className="text-gray-400 mb-4">
            Aug 2024 – Oct 2024
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Worked on MERN stack web applications</li>
            <li>Integrated frontend with backend REST APIs</li>
            <li>Collaborated with team members to implement features</li>
            <li>Maintained and debugged production-ready apps</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
