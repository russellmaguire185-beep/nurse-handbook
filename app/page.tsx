"use client";

import { useEffect, useMemo, useState } from "react";
import CategoryPills from "@/components/CategoryPills";
import Header from "@/components/Header";
import PageShell from "@/components/PageShell";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/lib/tools";

const categories = ["All", "Calculators", "Ranges", "Protocols", "Guides"];
const favouritesKey = "nurse-handbook-favourites";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(favouritesKey);
    if (stored) {
      setFavourites(JSON.parse(stored));
    }
  }, []);

  function toggleFavourite(slug: string) {
    setFavourites((current) => {
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug];

      window.localStorage.setItem(favouritesKey, JSON.stringify(next));
      return next;
    });
  }

  const filteredTools = useMemo(() => {
    return tools
      .filter((tool) => {
        const matchesCategory =
          activeCategory === "All" || tool.category === activeCategory;

        const search = searchTerm.toLowerCase().trim();

        const matchesSearch =
          !search ||
          tool.title.toLowerCase().includes(search) ||
          tool.subtitle.toLowerCase().includes(search) ||
          tool.category.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [activeCategory, searchTerm]);

  return (
    <PageShell activeNav="home">
      <Header
        title="The Nurses’ Handbook"
        subtitle="Quick tools for real shifts"
      />
      <p className="px-4 pt-2 text-xs text-gray-500">
        Designed for UK clinical practice.
      </p>
      <div className="-mt-5 px-5">
        <div className="nh-search flex items-center gap-3 px-4 py-4">
          <span className="text-[#667a99]" aria-hidden="true">
            🔍
          </span>

          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search tools..."
            className="w-full border-0 bg-transparent text-[14px] font-medium text-[#5f7391] outline-none"
          />
        </div>
      </div>

      <CategoryPills
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="nh-content pt-4">
        <section className="nh-tool-list">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <ToolCard
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                icon={tool.icon}
                title={tool.title}
                subtitle={tool.subtitle}
                iconTone={tool.iconTone}
                isFavourite={favourites.includes(tool.slug)}
                onToggleFavourite={() => toggleFavourite(tool.slug)}
              />
            ))
          ) : (
            <div className="nh-card nh-page-card">
              <p className="nh-section-label">No results</p>
              <h2>No tools found</h2>
              <p>Try another search or category.</p>
            </div>
          )}
        </section>
      </div>
    </PageShell>
  );
}