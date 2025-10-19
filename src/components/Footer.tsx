const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-muted border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-3xl font-bold mb-3 text-foreground">Davecap Ventures</h3>
            <p className="text-muted-foreground font-medium text-lg">
              Established 2025 • Based in Canada
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground font-medium">
              © {currentYear} Davecap Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
