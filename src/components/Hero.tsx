import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Lighting Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 hero-glow" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center space-y-8">
        <Badge variant="secondary" className="mb-4 text-sm font-medium">
          <Star className="w-3 h-3 mr-1.5 fill-current" />
          90+ projects · ★ 4.8 client rating
        </Badge>

        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight">
          Lighting that
          <br />
          <span className="text-primary">transforms spaces</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          See how our projects evolved — Before & After in retail, HoReCa, offices, and homes
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="text-lg px-8 glow-emerald"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
