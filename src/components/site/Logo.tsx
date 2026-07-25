import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/avin-india-logo.jpg.asset.json";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white/60" : "text-muted-foreground";

  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="Avin India — Home">
      <img
        src={logoAsset.url}
        alt="Avin India logo"
        width={40}
        height={40}
        loading="eager"
        decoding="async"
        className="h-10 w-10 rounded-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[var(--shadow-elevated)]"
      />
      <span className="flex flex-col leading-tight">
        <span className={`font-display font-bold text-[15px] tracking-tight ${text}`}>
          Avin India
        </span>
        <span className={`text-[10px] uppercase tracking-[0.18em] ${sub}`}>
          Finance · Compliance · Growth
        </span>
      </span>
    </Link>
  );
}
