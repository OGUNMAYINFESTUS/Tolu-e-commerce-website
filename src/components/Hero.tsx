import { Button } from "@/components/ui/button";
import { Instagram, Mail, Facebook, Twitter } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lewa Glam Beauty Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-secondary font-medium tracking-wide uppercase">
              Welcome to Lewa Glam
            </p>

            <h1 className="font-playfair font-bold text-5xl md:text-7xl leading-tight">
              Hello, I'm{" "}
              <span className="text-gradient-rose">Tolulope Awosadere</span>
            </h1>

            <h2 className="font-playfair text-3xl md:text-4xl text-primary-light">
              Professional Makeup Artist
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl">
              Transform your beauty with artistry and elegance. Specializing in
              bridal, fashion, and special occasion makeup that celebrates your
              unique style.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-glow"
                >
                  Book Your Session
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://www.instagram.com/lewa_glam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted hover:bg-gradient-rose hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:Lewaglam@gmail.com"
                className="w-12 h-12 rounded-full bg-muted hover:bg-gradient-rose hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-muted hover:bg-gradient-rose hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-muted hover:bg-gradient-rose hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-gold opacity-20 blur-3xl rounded-full animate-float" />
    </section>
  );
};

export default Hero;
