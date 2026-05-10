import Image from "next/image"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Your Puppy Deserves the Ribbons!",
    excerpt: "Explore high-quality food, fun toys, cozy beds, and more for your best friend.",
    image: "/blog/puppy-ribbons.jpg",
  },
  {
    id: 2,
    title: "Seasonal Activities and Training Tips!",
    excerpt: "Explore high-quality food, fun toys, cozy beds, and more for your best friend.",
    image: "/blog/dog-training.jpg",
  },
]

export function Blog() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
          Blog/Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="h-40 lg:h-48 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
