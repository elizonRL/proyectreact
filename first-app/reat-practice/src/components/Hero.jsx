export default function hero() {
  return (
    <>
      <section className="md-section">
        <div>
          <div>
            <div>
              <div>
                <h1> Bella Beauty Salon</h1>
                <p>
                  Discover the ultimate pampering experience at our premier
                  beauty salon. Indulge in a wide range of luxurious services
                  tailored to make you feel beautiful and confident.
                </p>
              </div>
              <div>
                <a href="">View Services</a>
                <a href="">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/*
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NcsUqOO5w5P
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 /*
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <ScissorsIcon className="h-6 w-6" />
          <span className="sr-only">Bella Beauty Salon</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Bella Beauty Salon
                  </h1>
                  <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover the ultimate pampering experience at our premier beauty salon. Indulge in a wide range of
                    luxurious services tailored to make you feel beautiful and confident.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    View Services
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Salon Services"
                  className="aspect-[3/2] overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Salon Services"
                    className="aspect-[3/2] overflow-hidden rounded-xl object-cover object-center"
                  />
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Salon Services"
                    className="aspect-[3/2] overflow-hidden rounded-xl object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Indulge in Luxury</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our wide range of premium beauty services designed to help you look and feel your best.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Hair Services</h3>
                      <p className="text-gray-500 dark:text-gray-400">Haircuts, coloring, styling, and more.</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">From $45</span>
                        <Link
                          href="#"
                          className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          prefetch={false}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Nail Services</h3>
                      <p className="text-gray-500 dark:text-gray-400">Manicures, pedicures, and nail treatments.</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">From $25</span>
                        <Link
                          href="#"
                          className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          prefetch={false}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Skin Care</h3>
                      <p className="text-gray-500 dark:text-gray-400">Facials, peels, and advanced treatments.</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">From $65</span>
                        <Link
                          href="#"
                          className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          prefetch={false}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Body Treatments</h3>
                      <p className="text-gray-500 dark:text-gray-400">Massages, body wraps, and more.</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">From $85</span>
                        <Link
                          href="#"
                          className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          prefetch={false}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Salon Services"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Elevating Beauty, Empowering Confidence
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    At Bella Beauty Salon, we are passionate about helping our clients look and feel their absolute
                    best. Our team of skilled professionals is dedicated to providing personalized, high-quality
                    services in a luxurious and welcoming environment.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Book an Appointment
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Salon Services"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Schedule Your Appointment Today
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our team is here to assist you and answer any questions you may have. Get in touch to book your next
                  appointment.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                  <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                </form>
                <Textarea placeholder="Message" className="max-w-lg w-full" rows={4} />
                <Button type="submit" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
/*
function ScissorsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  )
}
*/
