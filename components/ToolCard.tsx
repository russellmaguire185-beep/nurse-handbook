"use client";

import { useRouter } from "next/navigation";

type ToolCardProps = {
  href: string;
  icon: string;
  title: string;
  subtitle: string;
  iconTone?: "blue" | "green" | "cyan" | "lime" | "orange" | "red" | "teal";
  isFavourite?: boolean;
  onToggleFavourite?: () => void;
};

const iconToneMap: Record<NonNullable<ToolCardProps["iconTone"]>, string> = {
  blue: "from-[#7dc0ff] to-[#4d93f5]",
  green: "from-[#48d09a] to-[#23b37e]",
  cyan: "from-[#58c4d9] to-[#3aa7c1]",
  lime: "from-[#b6dd52] to-[#74bb3f]",
  orange: "from-[#ff9b76] to-[#f06a4f]",
  red: "from-[#eb7e8f] to-[#d05c5c]",
  teal: "from-[#5fd1c4] to-[#3aa5b4]",
};

export default function ToolCard({
  href,
  icon,
  title,
  subtitle,
  iconTone = "blue",
  isFavourite = false,
  onToggleFavourite,
}: ToolCardProps) {
  const router = useRouter();

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={() => router.push(href)}
      onKeyDown={(event) => {
        if (event.key === "Enter") router.push(href);
      }}
      className="nh-card cursor-pointer px-4 py-3 transition-transform duration-150 active:scale-[0.995]"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br text-[28px] text-white shadow-[0_6px_14px_rgba(62,142,247,0.18)] ${iconToneMap[iconTone]}`}
        >
          <span aria-hidden="true">{icon}</span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[17px] font-extrabold tracking-[-0.02em] text-[#233a60]">
            {title}
          </h3>
          <p className="mt-1 truncate text-[14px] font-medium text-[#667a99]">
            {subtitle}
          </p>
        </div>

        <button
          type="button"
          aria-label={isFavourite ? `Remove ${title}` : `Save ${title}`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onToggleFavourite?.();
          }}
          className={`shrink-0 rounded-full p-2 ${
            isFavourite ? "text-[#f8c63e]" : "text-[#c7d2e0]"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </button>
      </div>
    </article>
  );
}