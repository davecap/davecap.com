const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-medium mb-2">Davecap Ventures</h3>
            <p className="text-primary-foreground/70 font-light">
              Established 2025 • Based in Canada
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/70 font-light">
              © {currentYear} Davecap Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
