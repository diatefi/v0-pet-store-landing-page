import { Scissors, Stethoscope, GraduationCap } from "lucide-react"

const services = [
  {
    name: "Grooming",
    description: "Grooming, trimming, veterinary care",
    icon: Scissors,
    bgColor: "bg-teal-100",
  },
  {
    name: "Veterinary Care",
    description: "Ensures professional veterinary care",
    icon: Stethoscope,
    bgColor: "bg-sky-100",
  },
  {
    name: "Training",
    description: "Training classes and learning",
    icon: GraduationCap,
    bgColor: "bg-orange-100",
  },
]

export function Services() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow text-center"
            >
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                <service.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
