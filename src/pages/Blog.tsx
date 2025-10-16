import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Makeup Tips for Your Wedding Day",
      excerpt: "Essential advice to ensure your bridal makeup looks flawless from the ceremony to the reception...",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      category: "Bridal",
      date: "October 10, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Best Makeup Trends for 2025",
      excerpt: "Discover the hottest makeup trends that are taking the beauty world by storm this year...",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
      category: "Trends",
      date: "October 5, 2025",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "How to Choose the Perfect Makeup for Your Skin Tone",
      excerpt: "A comprehensive guide to selecting makeup shades that complement and enhance your natural complexion...",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=600&fit=crop",
      category: "Tutorial",
      date: "September 28, 2025",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Owanbe Makeup: Traditional Glam Done Right",
      excerpt: "Tips for achieving the perfect traditional Nigerian party makeup that lasts all night...",
      image: "https://images.unsplash.com/photo-1583361716325-8c55bc8b1542?w=800&h=600&fit=crop",
      category: "Traditional",
      date: "September 20, 2025",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Skincare Routine Before Makeup Application",
      excerpt: "The essential skincare steps to prepare your skin for flawless makeup application...",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
      category: "Skincare",
      date: "September 12, 2025",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Makeup Mistakes to Avoid",
      excerpt: "Common makeup errors that can ruin your look and how to avoid them like a pro...",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop",
      category: "Tips",
      date: "September 5, 2025",
      readTime: "4 min read",
    },
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
                Beauty <span className="text-gradient-rose">Blog</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Tips, trends, and tutorials to help you master the art of makeup
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-0 shadow-strong bg-card card-hover">
              <div className="grid lg:grid-cols-2">
                <div className="h-full min-h-[400px]">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gradient-rose text-primary-foreground text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <Button className="bg-gradient-rose text-primary-foreground hover:opacity-90 w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl font-bold text-center mb-12">
              Recent <span className="text-gradient-rose">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden border-0 shadow-medium bg-card card-hover group"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <span className="inline-block px-3 py-1 bg-muted text-primary text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-playfair text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      className="mt-4 p-0 h-auto text-primary hover:text-primary-light"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="border-0 shadow-strong bg-gradient-rose text-primary-foreground overflow-hidden">
              <CardContent className="p-12 text-center">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                  Stay Updated with Beauty Tips
                </h2>
                <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                  Subscribe to get the latest makeup tips, trends, and exclusive offers delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-lg text-foreground"
                  />
                  <Button
                    className="bg-background text-primary hover:bg-background/90 font-semibold"
                  >
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
