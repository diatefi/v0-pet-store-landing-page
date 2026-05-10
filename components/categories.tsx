import { Dog, Cat, Bird, Rabbit } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Dog Supplies",
    icon: Dog,
    bgColor: "bg-orange-50",
  },
  {
    name: "Cat Toys",
    icon: Cat,
    bgColor: "bg-blue-50",
  },
  {
    name: "Bird Cages",
    icon: Bird,
    bgColor: "bg-teal-50",
  },
  {
    name: "Small Animal Care",
    icon: Rabbit,
    bgColor: "bg-amber-50",
  },
]

export function Categories() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className={`w-20 h-20 lg:w-24 lg:h-24 ${category.bgColor} rounded-full flex items-center justify-center mb-4`}>
                <category.icon className="w-10 h-10 lg:w-12 lg:h-12 text-foreground" />
              </div>
              <h3 className="text-sm lg:text-base font-semibold text-foreground text-center mb-3">
                {category.name}
              </h3>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6"
              >
                Browse
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
