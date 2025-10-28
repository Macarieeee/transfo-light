import { Button } from "@/components/ui/button";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const categories = [
  "All",
  "Retail",
  "HoReCa",
  "Office",
  "Residential",
];

export const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          onClick={() => onFilterChange(category)}
          className="transition-all duration-280"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
