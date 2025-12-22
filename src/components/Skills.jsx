export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
  ];

  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
