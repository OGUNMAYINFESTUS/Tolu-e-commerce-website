import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Sparkles, Target, Eye } from "lucide-react";
import profileImage from "@/assets/Tolu-profile.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "Dedicated to creating beautiful looks with genuine care and attention",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to the highest standards of artistry and professionalism",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your satisfaction and confidence are my top priorities",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description: "Bringing artistic vision and innovation to every look",
    },
  ];

  const achievements = [
    "10+ Years of Professional Experience",
    "500+ Satisfied Clients",
    "200+ Successful Bridal Makeovers",
    "Certified Professional Makeup Artist",
    "Featured in Fashion Events & Shows",
    "Continuous Training in Latest Techniques",
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
                About <span className="text-gradient-rose">Lewa Glam</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Passionate makeup artistry celebrating beauty, confidence, and
                self-expression
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="aspect-[4/5] bg-gradient-rose rounded-2xl overflow-hidden shadow-strong">
                  <img
                    src={profileImage}
                    alt="Tolulope Awosadere"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up">
                <h2 className="font-playfair text-4xl font-bold mb-6">
                  Meet{" "}
                  <span className="text-gradient-rose">Tolulope Awosadere</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hello! I'm Tolulope Awosadere, the creative force behind
                    Lewa Glam. My journey into the world of makeup artistry
                    began with a simple love for enhancing natural beauty and
                    making people feel confident in their own skin.
                  </p>
                  <p>
                    With over 10 years of professional experience, I've had the
                    privilege of working with hundreds of clients, from blushing
                    brides to fashion-forward individuals seeking that perfect
                    look. Each face is a canvas, and I take pride in creating
                    unique looks that celebrate individuality while maintaining
                    the highest standards of artistry.
                  </p>
                  <p>
                    I specialize in bridal makeup, fashion editorial looks, and
                    special occasion glamour. My approach combines classic
                    techniques with contemporary trends, always ensuring that my
                    clients feel beautiful, confident, and ready to shine.
                  </p>
                  <p>
                    When I'm not behind the makeup brush, I'm continuously
                    learning and staying updated with the latest beauty trends,
                    techniques, and products to offer my clients nothing but the
                    best.
                  </p>
                </div>
                <div className="flex gap-4 mt-8">
                  <Link to="/contact">
                    <Button className="bg-gradient-rose text-primary-foreground hover:opacity-90 shadow-glow">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold mb-4">
                My <span className="text-gradient-rose">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every transformation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="card-hover border-0 shadow-medium bg-card"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-rose flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-0 shadow-medium bg-card">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-rose flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To bring out the inner beauty and confidence of every client
                    through professional makeup artistry and elegant gele
                    styling that reflect individuality, culture, and grace.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium bg-card">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-rose flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be a top-rated beauty brand known for creativity,
                    precision, and excellence in makeup and gele artistry —
                    setting new standards for African-inspired glam across the
                    globe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl font-bold text-center mb-12">
                Achievements &{" "}
                <span className="text-gradient-rose">Milestones</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <Award className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Let's Create Something{" "}
              <span className="text-gradient-rose">Beautiful Together</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your look? Book your appointment today and
              experience professional makeup artistry.
            </p>
            <Button
              size="lg"
              className="bg-gradient-rose text-primary-foreground hover:opacity-90 shadow-glow"
            >
              Schedule Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
