import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ventures = [
  {
    name: "Pics.Direct",
    description: "Next-generation image hosting and sharing platform",
    url: "https://pics.direct",
    type: "Venture"
  }
];

const Portfolio = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight text-center">
            Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-20 text-center font-medium">
            Our ventures and investments
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ventures.map((venture) => (
              <Card 
                key={venture.name}
                className="group hover:shadow-elegant transition-smooth border-border bg-card hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold mb-3">{venture.name}</CardTitle>
                      <CardDescription className="text-base text-accent font-semibold">
                        {venture.type}
                      </CardDescription>
                    </div>
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium text-base">
                    {venture.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
