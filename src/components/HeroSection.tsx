import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { ArrowDown, Sparkles } from "lucide-react"
import heroImage from "/src/assets/hero-layers.png"

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("physical")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-spiritual/20 rounded-full blur-xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-physical/20 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Discover the layers beneath</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            The Many{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Layers
            </span>{" "}
            of Me
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Beyond what meets the eye lies a complex tapestry of experiences,
            beliefs, and identities. Join me on a journey through the six
            dimensions that make me uniquely human.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToNext}
              className="text-lg px-8 py-6 h-auto"
            >
              Begin the Journey
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>

            <div className="text-sm text-muted-foreground">
              6 dimensions • 1 authentic self
            </div>
          </div>

          {/* Preview cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
            {[
              {
                name: "Physical",
                color: "physical",
                gradient: "gradient-physical",
              },
              {
                name: "Material",
                color: "material",
                gradient: "gradient-material",
              },
              { name: "Sexual", color: "sexual", gradient: "gradient-sexual" },
              {
                name: "Political",
                color: "political",
                gradient: "gradient-political",
              },
              {
                name: "Digital",
                color: "digital",
                gradient: "gradient-digital",
              },
              {
                name: "Spiritual",
                color: "spiritual",
                gradient: "gradient-spiritual",
              },
            ].map((item, index) => (
              <Card
                key={item.name}
                className={`p-4 bg-${item.gradient} border-0 text-white hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  background: `var(--${item.gradient})`,
                }}
                onClick={() => {
                  const section = document.getElementById(
                    item.name.toLowerCase()
                  )
                  if (section) section.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <div className="text-center">
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="text-xs opacity-80 mt-1">Explore</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
