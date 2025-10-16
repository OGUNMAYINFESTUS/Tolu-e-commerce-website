import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Camera, Users } from "lucide-react";
import bridalImage from "@/assets/service-bridal.jpg";
import fashionImage from "@/assets/service-fashion.jpg";
import specialImage from "@/assets/service-special.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Bridal Makeup",
      description:
        "Customized bridal makeup to complement your dress and style. Look radiant on your special day.",
      image: bridalImage,
      icon: Heart,
    },
    {
      title: "Fashion Makeup",
      description:
        "Creative and cutting-edge makeup for editorial shoots and runway shows.",
      image: fashionImage,
      icon: Sparkles,
    },
    {
      title: "Special Occasions",
      description:
        "Glamorous makeup for parties, proms, and special events that make you shine.",
      image: specialImage,
      icon: Camera,
    },
  ];

  const additionalServices = [
    {
      title: "Makeup Consultation",
      description: "Personalized consultation and trial session",
      icon: Users,
    },
    {
      title: "Owanbe Makeup",
      description: "Traditional Nigerian party makeup",
      icon: Sparkles,
    },
    {
      title: "Birthday Makeup",
      description: "Special birthday glam packages",
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient-rose">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium beauty services tailored to enhance your natural beauty and
            boost your confidence
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover overflow-hidden border-0 shadow-medium bg-card group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {additionalServices.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-colors duration-300 bg-card"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-rose text-primary-foreground hover:opacity-90 shadow-glow"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
