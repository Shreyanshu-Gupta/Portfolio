export default function TitleHeader({ title, subtitle }) {
  return (
    <div className="mb-14">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
