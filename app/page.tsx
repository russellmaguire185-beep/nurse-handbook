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
      return activeCategory === "All" || tool.category === activeCategory;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}, [activeCategory]);

  return (
    <PageShell activeNav="home">
      <Header
        title="The Nurse’s Handbook"
        subtitle="Quick reference & cross-check tools for clinical shifts"
      />
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