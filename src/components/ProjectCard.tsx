import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export interface Project {
  title: string;
  category: string;
  location: string;
  beforeImg: string;
  afterImg: string;
  problem: string[];
  solution: string[];
  results: {
    lux_avg: number;
    cri: number;
    consumption_delta_pct: number;
  };
  summary: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="card-glow rounded-2xl p-6 transition-all duration-280 hover:scale-[1.02] glow-emerald-hover">
      <BeforeAfterSlider 
        beforeImage={project.beforeImg}
        afterImage={project.afterImg}
        beforeLabel="Old Lighting"
        afterLabel="New Lighting"
      />
      
      <div className="mt-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {project.category} · {project.location}
            </p>
          </div>
          <Badge variant="secondary" className="shrink-0 flex items-center gap-1.5">
            <Zap className="w-3 h-3" />
            {project.results.consumption_delta_pct}% energy
          </Badge>
        </div>

        <p className="text-foreground/90 leading-relaxed">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-primary">
              {project.results.lux_avg}
            </div>
            <div className="text-xs text-muted-foreground">Lux Avg</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-primary">
              {project.results.cri}
            </div>
            <div className="text-xs text-muted-foreground">CRI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-primary">
              {Math.abs(project.results.consumption_delta_pct)}%
            </div>
            <div className="text-xs text-muted-foreground">Savings</div>
          </div>
        </div>

        <Button variant="outline" className="w-full">
          View Case Study
        </Button>
      </div>
    </article>
  );
};
