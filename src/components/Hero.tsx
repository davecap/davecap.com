import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-primary-foreground mb-6 animate-fade-in tracking-tight">
          Davecap Ventures
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-light max-w-3xl mx-auto animate-slide-up">
          Building and backing the next generation of innovative technology companies
        </p>
      </div>
    </section>
  );
};

export default Hero;
