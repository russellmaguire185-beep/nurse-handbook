type CategoryPillsProps = {
  categories: string[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
};

export default function CategoryPills({
  categories,
  activeCategory = "All",
  onCategoryChange,
}: CategoryPillsProps) {
  return (
    <section className="border-b border-[#d8e1ec] bg-[#f6f8fb] px-4 py-3">
      <div className="nh-scroll-row px-1">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange?.(category)}
              className={`nh-pill ${isActive ? "nh-pill-active" : ""}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}