"use client"

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronRight, Calendar, Users, Mic, Code } from 'lucide-react'
import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
import { motion } from "framer-motion"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3B82F6",
            },
            links: {
              color: "#3B82F6",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="./favicon.ico" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Image src="/favicon.ico" alt="AlexaDevs SRM Logo" width={40} height={40} className="w-10 h-10" />
              </motion.div>
              <span className="text-xl font-bold text-blue-600">AlexaDevs SRM</span>
            </Link>
            <nav className="hidden md:flex space-x-10">
              <Link href="#about" className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out">About</Link>
              <Link href="#events" className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out">Events</Link>
              <Link href="#team" className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out">Team</Link>
              <Link href="#contact" className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out">Contact</Link>
            </nav>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">About</Link>
              <Link href="#events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Events</Link>
              <Link href="#team" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Team</Link>
              <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Contact</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow relative z-10">
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/favicon.ico" alt="Background pattern" layout="fill" objectFit="cover" className="opacity-10" />
          </div>
          <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="text-center">
              <motion.h1 
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Innovate with <span className="text-blue-300">Fast Evolving Technologies</span>
              </motion.h1>
              <motion.p 
                className="mt-6 max-w-2xl mx-auto text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join AlexaDevs SRM to explore the exciting world of voice-based applications and conversational AI.
              </motion.p>
              <motion.div 
                className="mt-10 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition duration-150 ease-in-out">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About AlexaDevs SRM
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                We are a student-led technical club dedicated to fostering innovation in voice technology and conversational AI.
              </p>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Mic, title: "Voice Technology", description: "Explore the cutting-edge world of voice-controlled applications and devices." },
                  { icon: Code, title: "Skill Development", description: "Learn to create innovative Alexa skills and voice-based applications." },
                  { icon: Users, title: "Community", description: "Connect with like-minded individuals and industry experts in voice technology." },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <motion.span 
                            className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </motion.span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{item.title}</h3>
                        <p className="mt-5 text-base text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Join us for exciting workshops, hackathons, and tech talks.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                { title: "Alexa Skill Building Workshop", date: "2024-03-15", description: "Learn how to build your first Alexa skill from scratch." },
                { title: "Voice UI/UX Seminar", date: "2024-04-02", description: "Explore best practices in designing voice user interfaces." },
                { title: "Hackathon: Voice for Good", date: "2024-05-20", description: "Create voice applications that make a positive impact on society." },
              ].map((event, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white overflow-hidden shadow rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{event.title}</h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                      <p>{event.description}</p>
                    </div>
                    <div className="mt-3 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Calendar className="mr-1.5 h-2 w-2" aria-hidden="true" />
                        {event.date}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-4 sm:px-6">
                    <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      Learn more 
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                The passionate individuals behind AlexaDevs SRM.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Alex Johnson", role: "President", image: "/favicon.ico" },
                { name: "Samantha Lee", role: "Vice President", image: "/favicon.ico" },
                { name: "David Chen", role: "Technical Lead", image: "/favicon.ico" },
                { name: "Emily Patel", role: "Event Coordinator", image: "/favicon.ico" }
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotateY:  180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image className="mx-auto h-40 w-40 rounded-full" src={member.image} alt={member.name} width={160} height={160} />
                    </motion.div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{member.name}</h3>
                        <p className="text-blue-600">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-500 text-center">
                Have questions or want to join AlexaDevs SRM? We would love to hear from you!
              </p>
              <motion.form 
                className="mt-8 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Your message"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image src="/favicon.ico" alt="AlexaDevs SRM Logo" width={40} height={40} className="w-10 h-10" />
              <p className="text-gray-400 text-base">
                Empowering students to innovate with voice technology and AI.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <GitHubLogoIcon className="h-6 w-6" />
                  </motion.div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <LinkedInLogoIcon className="h-6 w-6" />
                  </motion.div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <InstagramLogoIcon className="h-6 w-6" />
                  </motion.div>
                </Link>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    About
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Our Mission
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Resources
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Tutorials
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Events
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Workshops
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Hackathons
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Tech Talks
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Terms
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 AlexaDevs SRM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}