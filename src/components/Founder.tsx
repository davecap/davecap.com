const Founder = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-16 tracking-tight text-center">
            Leadership
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-medium text-foreground mb-2">
                David Caplan
              </h3>
              <p className="text-lg text-accent mb-6 font-medium">
                Founder & Managing Partner
              </p>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                David Caplan is an entrepreneur and investor with a proven track record of 
                building and scaling technology ventures. With deep expertise in product 
                development, market strategy, and operational excellence, David brings a 
                unique perspective to identifying and nurturing high-potential startups.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Prior to founding Davecap Ventures, David held leadership positions at 
                several technology companies, where he developed a comprehensive understanding 
                of what it takes to build successful businesses from the ground up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
