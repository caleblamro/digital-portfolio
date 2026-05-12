import { Hero } from "@/components/sections/hero";
import { Now } from "@/components/sections/now";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Skills } from "@/components/sections/skills";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Now />
      <FeaturedProjects />
      <Skills />
      <Cta />
    </>
  );
}
