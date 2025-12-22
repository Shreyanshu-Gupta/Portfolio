export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="py-32 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
