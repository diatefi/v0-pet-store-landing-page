import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-secondary overflow-hidden">
      {/* Paw print decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 bg-primary/20 rounded-full" />
        <div className="absolute top-20 right-20 w-12 h-12 bg-primary/20 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/20 rounded-full" />
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-primary/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Your Puppy{" "}
              <span className="block">Deserves the Best!</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-md mx-auto lg:mx-0">
              Explore high-quality food, fun toys, cozy beds, and more for your best friend.
            </p>
            <Button 
              size="lg" 
              className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full"
            >
              SHOP NOW
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              <Image
                src="/hero-dog.jpg"
                alt="Happy person with golden retriever puppy"
                fill
                className="object-cover object-center rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
