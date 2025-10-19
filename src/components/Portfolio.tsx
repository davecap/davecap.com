import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ventures = [
  {
    name: "Pics.Direct",
    description: "The simplest way to turn your phone photos into stunning prints. Text your pictures, get professional quality prints delivered.",
    url: "https://pics.direct",
    type: "Venture",
    logo: "/pics-direct-logo.png"
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
          
          <div className="space-y-8">
            {ventures.map((venture) => (
              <a
                key={venture.name}
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="group hover:shadow-elegant transition-smooth border-border bg-card cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="w-full md:w-48 flex-shrink-0">
                      <AspectRatio ratio={1} className="flex items-center justify-center overflow-hidden">
                        {venture.logo ? (
                          <img
                            src={venture.logo}
                            alt={`${venture.name} logo`}
                            className="w-full h-full object-contain p-4"
                          />
                        ) : (
                          <div className="text-muted-foreground/40 text-sm font-medium">Logo</div>
                        )}
                      </AspectRatio>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-3xl font-bold mb-2 group-hover:text-accent transition-smooth">
                              {venture.name}
                            </CardTitle>
                            <CardDescription className="text-base text-accent font-semibold">
                              {venture.type}
                            </CardDescription>
                          </div>
                          <div className="text-muted-foreground group-hover:text-accent transition-smooth">
                            <ArrowUpRight className="w-6 h-6" />
                          </div>
                        </div>
                        <p className="text-muted-foreground font-medium text-lg">
                          {venture.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
