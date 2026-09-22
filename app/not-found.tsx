import PhotoHero from "@/components/PhotoHero";

// The nav is white text until you scroll, so every page opens on a dark photo hero; without one it is invisible here.
export default function NotFound() {
  return <PhotoHero image="/images/ocean.jpg" eyebrow="404" title="That page isn't here." primary={{ label: "Back to home", href: "/" }} />;
}
