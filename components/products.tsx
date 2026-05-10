import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Bag Best Dog Food",
    price: 15.00,
    image: "/products/dog-food.jpg",
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    name: "Durable Toys Durable",
    price: 16.00,
    image: "/products/dog-toy.jpg",
    bgColor: "bg-rose-50",
  },
  {
    id: 3,
    name: "Stylish Collar Collar",
    price: 15.00,
    image: "/products/collar-blue.jpg",
    bgColor: "bg-sky-50",
  },
  {
    id: 4,
    name: "Stylish Collar Collar",
    price: 15.00,
    image: "/products/collar-orange.jpg",
    bgColor: "bg-orange-50",
  },
]

export function Products() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className={`relative aspect-square ${product.bgColor}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm lg:text-base line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-foreground font-bold mt-1">
                  ${product.price.toFixed(2)}
                </p>
                <Button
                  className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl"
                  size="sm"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
