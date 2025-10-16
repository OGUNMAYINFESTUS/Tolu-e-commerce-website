import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import bridalImage from "@/assets/service-bridal.jpg";
import fashionImage from "@/assets/service-fashion.jpg";
import specialImage from "@/assets/service-special.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "bridal", label: "Bridal" },
    { id: "fashion", label: "Fashion" },
    { id: "special", label: "Special Events" },
    { id: "traditional", label: "Traditional" },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "bridal",
      image: bridalImage,
      title: "Elegant Bridal Look",
      description: "Classic bridal makeup with soft glam",
    },
    {
      id: 2,
      category: "fashion",
      image: fashionImage,
      title: "Fashion Editorial",
      description: "Bold and creative editorial makeup",
    },
    {
      id: 3,
      category: "special",
      image: specialImage,
      title: "Red Carpet Glam",
      description: "Sophisticated evening makeup",
    },
    {
      id: 4,
      category: "bridal",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop",
      title: "Natural Bridal Beauty",
      description: "Soft and romantic bridal look",
    },
    {
      id: 5,
      category: "traditional",
      image:
        "https://images.unsplash.com/photo-1583361716325-8c55bc8b1542?w=800&h=1000&fit=crop",
      title: "Owanbe Glam",
      description: "Traditional Nigerian party makeup",
    },
    {
      id: 6,
      category: "fashion",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=1000&fit=crop",
      title: "Avant-Garde Beauty",
      description: "Creative fashion week makeup",
    },
    {
      id: 6,
      category: "fashion",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=1000&fit=crop",
      title: "Avant-Garde Beauty",
      description: "Creative fashion week makeup",
    },
    {
      id: 6,
      category: "fashion",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=1000&fit=crop",
      title: "Avant-Garde Beauty",
      description: "Creative fashion week makeup",
    },
    {
      id: 6,
      category: "fashion",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=1000&fit=crop",
      title: "Avant-Garde Beauty",
      description: "Creative fashion week makeup",
    },
    {
      id: 6,
      category: "fashion",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=1000&fit=crop",
      title: "Avant-Garde Beauty",
      description: "Creative fashion week makeup",
    },
    {
      id: 6,
      category: "fashion",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=1000&fit=crop",
      title: "Avant-Garde Beauty",
      description: "Creative fashion week makeup",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
                My <span className="text-gradient-rose">Portfolio</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore my makeup artistry through stunning transformations and
                beautiful looks
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className={
                    activeFilter === category.id
                      ? "bg-gradient-rose text-primary-foreground"
                      : "hover:bg-muted"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 card-hover"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Ready to Create Your Own{" "}
              <span className="text-gradient-rose">Stunning Look</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create a beautiful makeup look that
              highlights your unique features
            </p>
            <Button
              size="lg"
              className="bg-gradient-rose text-primary-foreground hover:opacity-90 shadow-glow"
            >
              Book Your Session
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
