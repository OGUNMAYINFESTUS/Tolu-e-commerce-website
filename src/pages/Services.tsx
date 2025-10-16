import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import bridalImage from "@/assets/service-bridal.jpg";
import fashionImage from "@/assets/service-fashion.jpeg";
import specialImage from "@/assets/service-special.jpg";
import eveningImage from "@/assets/service-evening.jpg";
import softLookImage from "@/assets/service-softlook.jpg";
import groupImage from "@/assets/service-group.jpg";

const Services = () => {
  const packages = [
    {
      title: "Bridal Makeup",
      description: "Complete bridal beauty package for your special day",
      image: bridalImage,
      features: [
        "Makeup trial session",
        "Wedding day makeup",
        "Touch-up kit included",
        "Lashes and accessories",
        "Photography-ready finish",
      ],
      popular: true,
    },
    {
      title: "Fashion & Editorial",
      description: "Creative makeup for photoshoots and fashion shows",
      image: fashionImage,
      features: [
        "Creative consultation",
        "Editorial makeup application",
        "Custom color palette",
        "High-fashion techniques",
        "Photography coordination",
      ],
      popular: false,
    },
    {
      title: "Special Occasions",
      description: "Glamorous makeup for your special events",
      image: specialImage,
      features: [
        "Event makeup application",
        "Skin preparation",
        "Custom color matching",
        "Long-lasting formula",
        "Complimentary lashes",
      ],
      popular: true,
    },
    {
      title: "Evening Glamour",
      description:
        "Perfect for parties, galas, and special date nights. Bold and dramatic looks.",
      image: eveningImage,
      features: [
        "Full-face application",
        "Choice of smoky eye or dramatic liner",
        "Contouring and highlighting",
        "Premium false lashes included",
        "Setting spray for longevity",
      ],
      popular: false,
    },
    {
      title: "Everyday Soft Look",
      description:
        "A natural, refreshed look perfect for professional headshots or daily wear.",
      image: softLookImage,
      features: [
        "Light foundation or tinted moisturizer",
        "Subtle eye definition",
        "Natural brow fill",
        "Quick 30-minute session",
        "Focus on enhancing natural features",
      ],
      popular: true,
    },
    {
      title: "Group Event Package",
      description:
        "On-site beauty for you and your friends. Ideal for proms, bachelorette parties, or family photos.",
      image: groupImage,
      features: [
        "Custom looks for up to 4 people",
        "Dedicated makeup artist for 4 hours",
        "Includes light lashes for all",
        "Travel to your location",
        "Group photo-ready finish",
      ],
      popular: false,
    },
  ];

  const additionalServices = [
    { name: "Owanbe Traditional Makeup" },
    { name: "Birthday Glam" },
    { name: "Makeup Masterclass" },
    { name: "Bridal Party Makeup (per person)" },
    { name: "Bead & Headgear Styling" },
    { name: "Photoshoot Makeup" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient-rose">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Premium beauty services designed to enhance your natural beauty
                and create unforgettable looks
              </p>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`card-hover overflow-hidden border-0 shadow-medium ${
                    pkg.popular ? "ring-2 ring-primary" : ""
                  } relative`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-rose text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold z-10">
                      Most Popular
                    </div>
                  )}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-2xl font-semibold mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {pkg.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-rose text-primary-foreground hover:opacity-90">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl font-bold text-center mb-12">
              Additional <span className="text-gradient-rose">Services</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary transition-colors"
                  >
                    <CardContent className="p-6 flex justify-between items-center">
                      <span className="font-medium">{service.name}</span>
                      <span className="text-primary font-semibold">
                        {service.price}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Need a custom package? Let's create something perfect for you.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-rose text-primary-foreground hover:opacity-90 shadow-glow"
                >
                  Request Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
