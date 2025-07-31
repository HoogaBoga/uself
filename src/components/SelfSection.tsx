import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { type ReactNode } from "react"

// Import all section images
import physicalImage from "/src/assets/pisical2.jpeg"
import materialImage from "/src/assets/material_self.jpg"
import sexualImage from "/src/assets/best.jpeg"
import politicalImage from "/src/assets/pink.jpg"
import digitalImage from "/src/assets/digital.jpeg"
import spiritualImage from "/src/assets/spiritual.jpg"

interface SelfSectionProps {
  id: string
  title: string
  description: string
  content: string
  highlights: string[]
  variant:
    | "physical"
    | "material"
    | "sexual"
    | "political"
    | "digital"
    | "spiritual"
  icon: ReactNode
  quote: string
  details?: string[]
}

export default function SelfSection({
  id,
  title,
  description,
  content,
  highlights,
  variant,
  icon,
  quote,
  details = [],
}: SelfSectionProps) {
  // Map section IDs to their corresponding images
  const sectionImages = {
    physical: physicalImage,
    material: materialImage,
    sexual: sexualImage,
    political: politicalImage,
    digital: digitalImage,
    spiritual: spiritualImage,
  }

  const currentImage = sectionImages[variant]
  return (
    <section id={id} className="min-h-screen py-20 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${currentImage})` }}
      />
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-${variant} opacity-5`} />

      {/* Decorative elements */}
      <div
        className={`absolute top-10 right-10 w-24 h-24 bg-${variant}/20 rounded-full blur-xl animate-pulse`}
      />
      <div
        className={`absolute bottom-20 left-16 w-32 h-32 bg-${variant}/10 rounded-full blur-xl animate-pulse delay-500`}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-${variant} rounded-full text-white text-2xl shadow-card`}
            >
              {icon}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              My{" "}
              <span
                className={`bg-gradient-${variant} bg-clip-text text-transparent`}
              >
                {title}
              </span>{" "}
              Self
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Image and Story */}
            <div className="space-y-8">
              {/* Featured image */}
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <img
                  src={currentImage}
                  alt={`${title} self representation`}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-${variant} opacity-20`}
                />
              </div>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-0 shadow-card">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">My Story</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {content}
                  </p>

                  {details.length > 0 && (
                    <div className="space-y-3">
                      {details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div
                            className={`w-2 h-2 bg-${variant} rounded-full mt-2 flex-shrink-0`}
                          />
                          <p className="text-muted-foreground">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>

              {/* Quote */}
              <Card
                className={`p-8 bg-gradient-${variant} text-white border-0 shadow-card`}
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl opacity-50">"</div>
                  <blockquote className="text-lg italic font-medium leading-relaxed">
                    {quote}
                  </blockquote>
                  <div className="text-4xl opacity-50 rotate-180">"</div>
                </div>
              </Card>
            </div>

            {/* Right column - Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Key Highlights</h3>

              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer group bg-card/50 backdrop-blur-sm border-0 shadow-card"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-8 h-8 bg-gradient-${variant} rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform`}
                      >
                        {index + 1}
                      </div>
                      <p className="flex-1 group-hover:text-foreground transition-colors">
                        {highlight}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Call to action */}
              <div className="pt-8">
                <Button
                  variant={variant}
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    // Scroll to next section
                    const sections = [
                      "physical",
                      "material",
                      "sexual",
                      "political",
                      "digital",
                      "spiritual",
                    ]
                    const currentIndex = sections.indexOf(id)
                    const nextSection = sections[currentIndex + 1]
                    if (nextSection) {
                      const element = document.getElementById(nextSection)
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Explore Next Layer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
