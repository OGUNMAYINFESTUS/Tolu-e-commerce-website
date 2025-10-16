import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import profileImage from "@/assets/Tolu-profile.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Heart, value: "200+", label: "Bridal Makeups" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Sparkles, value: "1000+", label: "Transformations" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[3/4] bg-gradient-rose rounded-2xl overflow-hidden shadow-strong">
              <img
                src={profileImage}
                alt="Tolulope Awosadere - Professional Makeup Artist"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -right-6 w-64 bg-card shadow-strong border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-rose flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Certified</p>
                    <p className="text-sm text-muted-foreground">
                      Professional Artist
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient-rose">Story</span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                I'm{" "}
                <span className="text-foreground font-semibold">
                  Tolulope Awosadere
                </span>
                , a passionate makeup artist with a flair for creativity and a
                keen eye for detail. I specialize in bridal, fashion, and
                special occasion makeup, ensuring every client feels beautiful
                and confident.
              </p>

              <p>
                With years of experience in the industry, I stay updated with
                the latest trends and techniques to provide my clients with the
                best service possible. My approach combines artistry with an
                understanding of each client's unique features and style
                preferences.
              </p>

              <p>
                Whether you're preparing for your wedding day, a special event,
                or a professional photoshoot, I'm dedicated to creating looks
                that not only enhance your natural beauty but also reflect your
                personality and make you feel absolutely stunning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-muted"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
