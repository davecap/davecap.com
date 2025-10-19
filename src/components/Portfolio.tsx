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
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight text-center">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground mb-16 text-center font-light">
            Our ventures and investments
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures.map((venture) => (
              <Card 
                key={venture.name}
                className="group hover:shadow-elegant transition-smooth border-border/50 bg-card"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-medium mb-2">{venture.name}</CardTitle>
                      <CardDescription className="text-sm text-accent font-medium">
                        {venture.type}
                      </CardDescription>
                    </div>
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-light">
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
