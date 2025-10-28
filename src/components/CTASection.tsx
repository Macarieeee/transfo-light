import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="card-glow rounded-3xl p-12 md:p-16 text-center space-y-6 glow-emerald">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Want to transform your space too?
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Send your layout or photos — we'll reply within 24 hours with a custom lighting proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8">
              Get Custom Proposal
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
