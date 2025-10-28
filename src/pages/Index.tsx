import { useState } from "react";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";

import coffeeBefore from "@/assets/coffee-before.jpg";
import coffeeAfter from "@/assets/coffee-after.jpg";
import retailBefore from "@/assets/retail-before.jpg";
import retailAfter from "@/assets/retail-after.jpg";
import officeBefore from "@/assets/office-before.jpg";
import officeAfter from "@/assets/office-after.jpg";
import restaurantBefore from "@/assets/restaurant-before.jpg";
import restaurantAfter from "@/assets/restaurant-after.jpg";

const projects: Project[] = [
  {
    title: "Coffee Shop – Romană Square",
    category: "HoReCa",
    location: "Bucharest",
    beforeImg: coffeeBefore,
    afterImg: coffeeAfter,
    problem: ["Uneven lighting", "Cold color temperature 5000K", "High energy usage"],
    solution: ["Track lights CRI 95, 3000K", "Accent 15° beam", "DALI dimming scenes"],
    results: { lux_avg: 420, cri: 95, consumption_delta_pct: -32 },
    summary: "Warm ambiance, better product highlight, 32% energy savings.",
    tags: ["HoReCa", "Accent", "DALI"]
  },
  {
    title: "Premium Boutique – Old Town",
    category: "Retail",
    location: "Cluj-Napoca",
    beforeImg: retailBefore,
    afterImg: retailAfter,
    problem: ["Harsh overhead fluorescents", "Poor product visibility", "Cold atmosphere"],
    solution: ["Track lighting system", "CRI 98, 3000K", "Adjustable beam angles"],
    results: { lux_avg: 650, cri: 98, consumption_delta_pct: -38 },
    summary: "Luxury retail experience with perfect color rendering and 38% energy reduction.",
    tags: ["Retail", "Track", "High CRI"]
  },
  {
    title: "Tech Startup Office",
    category: "Office",
    location: "Bucharest",
    beforeImg: officeBefore,
    afterImg: officeAfter,
    problem: ["Fluorescent glare", "Eye strain complaints", "Uninspiring workspace"],
    solution: ["LED panels 4000K", "Task lighting on desks", "Daylight simulation"],
    results: { lux_avg: 500, cri: 92, consumption_delta_pct: -45 },
    summary: "Comfortable workspace with reduced eye strain and 45% less energy consumption.",
    tags: ["Office", "Task Lighting", "Wellness"]
  },
  {
    title: "Fine Dining Restaurant",
    category: "HoReCa",
    location: "Timișoara",
    beforeImg: restaurantBefore,
    afterImg: restaurantAfter,
    problem: ["Inadequate lighting", "Poor ambiance", "Dark dining areas"],
    solution: ["Pendant lights over tables", "Accent wall lighting", "Dimming control"],
    results: { lux_avg: 280, cri: 95, consumption_delta_pct: -28 },
    summary: "Elegant atmosphere with perfect mood lighting and significant energy savings.",
    tags: ["HoReCa", "Ambient", "Dimming"]
  },
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore transformations across retail, HoReCa, offices, and residential spaces
            </p>
          </div>

          <FilterBar 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Index;
