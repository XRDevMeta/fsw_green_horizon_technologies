import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wind, Sun, Battery, Zap, Leaf, Globe } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Green Horizon</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Powering a Sustainable Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Green Horizon Technologies: Pioneering renewable energy solutions for a cleaner, greener world.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Learn More</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Sun className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Solar Power Systems</h3>
                <p className="text-gray-600">Harness the power of the sun with our advanced solar technologies.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Wind className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Wind Energy Solutions</h3>
                <p className="text-gray-600">Efficient wind turbines for clean, renewable electricity generation.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Battery className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Energy Storage</h3>
                <p className="text-gray-600">Cutting-edge battery technology for reliable energy storage and distribution.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Grid Technology</h3>
                <p className="text-gray-600">Intelligent systems for optimized energy management and distribution.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                <p className="text-gray-600">Reducing carbon footprints and promoting sustainable lifestyles worldwide.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Eco-Friendly Innovation</h3>
                <p className="text-gray-600">Continuously developing new technologies for a greener future.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Green Horizon</h2>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Green Horizon Technologies is a pioneering leader in the renewable energy sector. We specialize in
                  developing and deploying sustainable technology solutions that drive a greener future. Our commitment is to
                  transform how the world generates and consumes energy by providing innovative, eco-friendly solutions that
                  meet both individual and industrial energy needs.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To accelerate the global transition to sustainable energy through innovation, accessibility, and
                    education.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    A world powered by 100% renewable energy, where clean technology enhances quality of life and preserves
                    our planet for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Interested in our solutions? Have questions? We'd love to hear from you!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input placeholder="Your Name" type="text" />
                  <Input placeholder="Your Email" type="email" />
                  <Input placeholder="Your Message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2024 Green Horizon Technologies. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}