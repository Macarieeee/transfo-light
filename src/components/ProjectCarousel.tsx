import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ProjectCard, Project } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    watchDrag: false,
    breakpoints: {
      "(min-width: 768px)": { 
        align: "start",
      }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla initialized");
    }
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2 mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="rounded-full glow-emerald-hover"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="rounded-full glow-emerald-hover"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] md:flex-[0_0_66.66%] min-w-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-all duration-280"
          />
        ))}
      </div>
    </div>
  );
};
