import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 z-10 text-center py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 animate-fade-in tracking-tight">
          Davecap Ventures
        </h1>
        <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto animate-slide-up leading-relaxed">
          Building and backing the next generation of innovative technology companies
        </p>
      </div>
    </section>
  );
};

export default Hero;
