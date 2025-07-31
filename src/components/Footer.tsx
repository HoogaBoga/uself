import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Heart, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Thanks for exploring{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                all of me
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These six layers represent just a glimpse into the complexity of
              human identity. Each of us carries multiple selves, and I hope
              this journey inspired you to reflect on your own layers.
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-0 shadow-card">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-lg">
                Made with{" "}
                <Heart className="w-5 h-5 text-red-500 fill-current" /> and
                curiosity
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 w-5 h-5" />
                  Connect with me
                </Button>

                <Button variant="ghost" size="lg" onClick={scrollToTop}>
                  <ArrowUp className="mr-2 w-5 h-5" />
                  Back to top
                </Button>
              </div>
            </div>
          </Card>

          <div className="text-sm text-muted-foreground">
            © 2024 • A multi-layered human experience
          </div>
        </div>
      </div>
    </footer>
  )
}
