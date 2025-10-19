const Founder = () => {
  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-20 tracking-tight text-center">
            Leadership
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-4xl font-bold text-foreground mb-3">
                David Caplan
              </h3>
              <p className="text-xl text-accent mb-8 font-bold">
                Founder & Managing Partner
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium text-lg mb-6">
                David Caplan is an entrepreneur and investor with a proven track record of 
                building and scaling technology ventures. With deep expertise in product 
                development, market strategy, and operational excellence, David brings a 
                unique perspective to identifying and nurturing high-potential startups.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium text-lg">
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
