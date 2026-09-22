// Decorative concentric rings drawn from the Atlantis emblem's proportions:
// pale outer ring, solid teal ring, white gap, solid centre disc. Purely ornamental.
type Props = { className?: string; size?: number; tone?: "light" | "teal" | "dark"; solid?: boolean };

export default function Rings({ className = "", size = 640, tone = "teal", solid = false }: Props) {
  const color = tone === "light" ? "#ffffff" : tone === "dark" ? "#181818" : "#60d0d8";
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`pointer-events-none select-none ${className}`}
      style={{ color }}
      fill="none"
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="7" opacity={solid ? 0.35 : 0.14} />
      <circle cx="50" cy="50" r="34.5" stroke="currentColor" strokeWidth="7" opacity={solid ? 0.8 : 0.3} />
      <circle cx="50" cy="50" r="24" fill="currentColor" opacity={solid ? 1 : 0.22} />
    </svg>
  );
}
