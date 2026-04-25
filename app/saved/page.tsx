"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import PageShell from "@/components/PageShell";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/lib/tools";

const favouritesKey = "nurse-handbook-favourites";

export default function SavedPage() {
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

  const savedTools = useMemo(() => {
    return tools
      .filter((tool) => favourites.includes(tool.slug))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [favourites]);

  return (
    <PageShell activeNav="saved">
      <Header title="Saved tools" subtitle="Your favourite quick-access tools" />

      <div className="nh-content pt-4">
        <section className="nh-tool-list">
          {savedTools.length > 0 ? (
            savedTools.map((tool) => (
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
              <p className="nh-section-label">No saved tools</p>
              <h2>Nothing saved yet</h2>
              <p>
                Tap the star on any tool to save it here for quick access during
                a shift.
              </p>
            </div>
          )}
        </section>
      </div>
    </PageShell>
  );
}