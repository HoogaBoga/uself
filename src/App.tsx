import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import SelfSection from "./components/SelfSection"
import Footer from "./components/Footer"
import { Button } from "./components/ui/button"
import {
  Dumbbell,
  ShoppingBag,
  Heart,
  Vote,
  Monitor,
  Sparkles,
} from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection />

      <SelfSection
        id="physical"
        title="Physical"
        description="How I express myself through my body and actions"
        content="Throughout my life, I've always been on the bigger side. At some point, I thought it was okay and that there was nothing I could do about it. But it got too hard. Too hard to walk for a long time, too hard to climb up the stairs, too hard to live the life I wanted to. Enough was enough. With the help of my friends, family, and girlfriend, my physical self has started to turn into something I am proud of."
        highlights={[
          "👉 My energy level: 1/10",
          "👉 I function best at: 8am (after gym)",
          "👉 My go-to look: T-shirt and shorts",
          "👉 Physical goal: Jog in CCLEX",
          "👉 Secret power: Secret",
        ]}
        variant="physical"
        icon={<Dumbbell />}
        quote="I feel strongest when I'm challenging my limits and celebrating what my body can do."
        details={[
          "Morning routine (MTThFS): 1 hour of gym",
          "Price of the gym makes me consistently go 5x a week",
          "Walking on the treadmill while playing sudoku is the best",
          "I still eat the food I love, but with better will power",
        ]}
      />

      <SelfSection
        id="material"
        title="Material"
        description="The things I own that represent who I are"
        content="I am someone who loves owning the latest stuff. However, I have no money hehe. Unfortunately, I am also a very impulsive buyer and buy things I don't need all that much. My girlfriend also calls me a hoarder with the number of stuff in my room that I don't use anymore but won't throw away."
        highlights={[
          "💼 Essentials I bring everywhere: Laptop, water bottle, powerbank, mobile phone",
          "🛏️ Comfort items: Asthma Inhaler, Stress ball, Rubik's Cube",
          "📱 Stuff I use the most: Phone, laptop, laptop charger, headset",
          "✨ If I could only keep 3 things: My laptop, my phone, my powerbank",
          "🎯 Current wishlist: Standing desk, Pokemon Z-A, new gpu",
        ]}
        variant="material"
        icon={<ShoppingBag />}
        quote="True wealth isn't about what I own, but about having exactly what I need to create and connect."
        details={[
          "Ever since second year, my laptop has always been with me",
          "Despite waking up early at 5 am, I sleep late and I believe it's okay, but it's not",
          "I mostly impulsly buy tech stuff that I may or may not use only twice or thrice",
          "I aim to keep my laptop the same until I get my own job",
        ]}
      />

      <SelfSection
        id="sexual"
        title="Sexual"
        description="My identity, preferences, and how I relate to love, attraction, and intimacy"
        content="Love language? Physical touch and quality time, definitely. I express attraction through deep conversations, genuine interest in someone's passions, and creating cozy spaces where we can just be ourselves. I met my girlfriend back in 11th grade and started talking to her towards the end of it. We offically became a couple in October of 2022. She has been one of my biggest supporters and I am so happy to have her. She supports me in everything I do, and I do the same for her."
        highlights={[
          "❤️ Love language: Physical touch & quality time (tie), maybe a bit of acts of service ✨",
          "✨ My aesthetic: I don't really know? Blue? 😭",
          "🌙 Perfect date: Watching TV series and movies",
          "💕 What makes me feel loved: Being remembered and truly heard",
        ]}
        variant="sexual"
        icon={<Heart />}
        quote="Intimacy isn't just about bodies touching—it's about souls recognizing each other."
        details={[
          "My girlfriend is my best friend and biggest supporter",
          "We've mastered the art of comfortable silence together",
          "Believe in love that feels both safe and adventurous",
          "Small gestures mean everything",
        ]}
      />

      <SelfSection
        id="political"
        title="Political"
        description="What I believe in and what causes matter to me"
        content="I believe in a world where everyone has access to education, healthcare, and the freedom to be themselves. My activism starts with listening, learning, and using my voice responsibly. I vote in every election (yes, even the small local ones), share resources on social media, and try to support businesses that align with my values.   "
        highlights={[
          "🗳️ Issues I care about: Mental health, education equity, climate action",
          "✊ My activism style: Research first, quiet",
          "📢 Fake protest sign: 'Therapy should be as accessible as fast food'",
          "🌍 I stand for: Kindness as resistance, progress over perfection",
          "⚡ My political energy: Optimistic realist",
        ]}
        variant="political"
        icon={<Vote />}
        quote="Politics is too important to be left to politicians—it requires all of us to participate."
        details={[
          "Inform my family of the good and bad of the candidates I support",
          "Will always have an opinion on something",
          "That friend who sends you articles with thoughtful commentary",
          "Believe change happens one conversation at a time",
        ]}
      />

      <SelfSection
        id="digital"
        title="Digital"
        description="My online life and digital identity"
        content="Digital me vs. Real me? Honestly, they're pretty similar - maybe my online self is 20% more curated and 100% more likely to use proper punctuation. I'm that person who has 47 tabs open, bookmarks everything 'for later,' and somehow always finds the perfect meme for any situation. My home screen is organized chaos, and my camera roll is 60% screenshots, 30% random photos, and 10% actual good pictures."
        highlights={[
          "📱 Home screen vibe: Pure chaos",
          "🎵 Current playlist: 'Kpop Demon Hunters'",
          "👾 Online personality: Liker and hearter",
          "💭 Digital habits: Screenshot collector, youtube while eating, will forget to check tiktok messages",
          "🌐 If the internet was a place: I'd live in the cozy corner with good WiFi",
        ]}
        variant="digital"
        icon={<Monitor />}
        quote="Technology should amplify our humanity, not replace it."
        details={[
          "I will always get anxious when my phone battery turns red",
          "TikTok algorithm knows me too much",
          "I am not the type to post stories or anything about my day",
          "I may or may not reply too fast",
        ]}
      />

      <SelfSection
        id="spiritual"
        title="Spiritual"
        description="What gives me peace, purpose, and grounding in life"
        content="I honestly don't think that I have tapped into my spiritual self a lot. There are times where I feel lost and don't know what to do. Usually, I just breathe and think everything is happening for a reason. I believe in God, but I just disagree with the Church's teachings."
        highlights={[
          "🌅 Morning ritual: Gym",
          "🌿 Things that calm me: Rain sounds, stargazing, staring at the ceiling",
          "✨ When I feel lost: Talk to myself, sleep",
          "📿 My beliefs: Everything is connected, love always wins, growth never stops",
          "🎵 Spiritual playlist: Maoy songs",
        ]}
        variant="spiritual"
        icon={<Sparkles />}
        quote="Spirituality isn't about having all the answers—it's about staying open to the questions."
        details={[
          "I find going to gym calming sometimes",
          "Find God/Universe in small moments of unexpected kindness",
          "Believe that humans will truly live in peace in the future",
          "Believe my purpose is to leave people feeling a little more seen",
        ]}
      />

      {/* All of Me Section */}
      <section
        id="all-of-me"
        className="min-h-screen py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                All of{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Me
                </span>
              </h2>

              <p className="text-xl text-muted-foreground">
                Six layers, one authentic human, infinite possibilities for
                growth.
              </p>
            </div>

            {/* Word cloud of traits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                "Curious",
                "Empathetic",
                "Creative",
                "Resilient",
                "Authentic",
                "Growing",
                "Connected",
                "Hopeful",
                "Thoughtful",
                "Passionate",
                "Present",
                "Evolving",
              ].map((trait, index) => (
                <div
                  key={trait}
                  className="p-4 bg-card/30 backdrop-blur-sm rounded-lg hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium">{trait}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <blockquote className="text-2xl font-medium italic">
                "All of this is me. I'm still growing, still learning, still
                becoming."
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Connect with me
                </Button>
                <Button variant="outline" size="lg">
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Index
