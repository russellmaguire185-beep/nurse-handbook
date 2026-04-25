import Link from "next/link";

type BottomNavProps = {
  active?: "home" | "categories" | "saved" | "references";
};

const items = [
  { key: "home", label: "Home", icon: "⌂", href: "/" },
  { key: "categories", label: "Categories", icon: "◫", href: "/" },
  { key: "saved", label: "Saved", icon: "★", href: "/saved" },
  { key: "references", label: "Refs", icon: "≡", href: "/references" },
] as const;

export default function BottomNav({ active = "home" }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 border-t border-[#d8e1ec] bg-[rgba(255,255,255,0.94)] backdrop-blur-md">
      <div className="grid grid-cols-4 px-3 pb-4 pt-3">
        {items.map((item) => {
          const isActive = item.key === active;

          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 rounded-xl py-1 text-[12px] font-semibold ${
                isActive ? "text-[#2f7ff1]" : "text-[#70839f]"
              }`}
            >
              <span className="text-[20px]" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}