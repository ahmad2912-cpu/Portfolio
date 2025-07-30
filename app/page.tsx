"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  Code,
  Database,
  Brain,
  PenToolIcon as Tool,
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/90 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="#" className="font-bold text-lg text-primary">
            Muhammad Ahmad Imran
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center overflow-hidden"
        >
          {/* Subtle background pattern/gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-70 z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 z-0 [background-size:20px_20px]"></div>

          <div className="container px-4 md:px-6 max-w-3xl space-y-6 z-10">
            <div
              className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Muhammad Ahmad Imran"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Muhammad Ahmad Imran
            </h1>
            <p
              className="text-xl text-muted-foreground md:text-2xl animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Software Engineering Student
            </p>
            <p
              className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              Highly motivated and adaptable Software Engineering student with a solid academic foundation and hands-on
              experience in diverse projects. Proficient in programming, web development, and database management, with
              a strong commitment to contributing effectively in a dynamic work environment. Eager to apply academic
              knowledge to real-world challenges, continuously learn, and deliver exceptional results.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <Button asChild className="hover:scale-105 transition-transform duration-200">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl">
              As a highly motivated and adaptable Software Engineering student, I bring a solid academic foundation and
              hands-on experience from diverse projects. My proficiency spans programming, web development, and database
              management. I am deeply committed to contributing effectively in dynamic work environments, eager to apply
              my academic knowledge to real-world challenges, continuously learn, and deliver exceptional results.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">Education</h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <GraduationCap className="w-6 h-6" />
                    B.S Software Engineering
                  </CardTitle>
                  <CardDescription>University of Central Punjab, Pakistan</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Semester: 7th | CGPA: 3.00/4.00</p>
                  <p className="text-sm text-muted-foreground">2022 - Present</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <GraduationCap className="w-6 h-6" />
                    Higher Secondary School Certificate (F.Sc Pre-Engineering)
                  </CardTitle>
                  <CardDescription>Govt. College for Science, Wahdat Road, Lahore</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Achievement: Passed with 70% marks</p>
                  <p className="text-sm text-muted-foreground">2019 - 2021</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <GraduationCap className="w-6 h-6" />
                    Secondary School Certificate (Science)
                  </CardTitle>
                  <CardDescription>Standard Model High School, Pir Gazi Road, Lahore</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Achievement: Passed with 80.05% marks</p>
                  <p className="text-sm text-muted-foreground">2017 - 2019</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-10">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">My Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>University Management System - OOP</CardTitle>
                  <CardDescription>Object Oriented Programming</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Managed departments, students, and teachers, with functionality to add departments, enroll students,
                    hire teachers, and display overall university information.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Image Editor - Programming Fundamentals</CardTitle>
                  <CardDescription>File Handling, Pointers, 2D Arrays</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Provided tools such as blur, zoom, color change, and black-and-white filters using matrices.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Snake and Ladder Game - Basic</CardTitle>
                  <CardDescription>If-else, loops</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Created an interactive game allowing players to compete against each other or a computer-generated
                    opponent.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Car Parking System</CardTitle>
                  <CardDescription>Documentation, Requirements Gathering</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enabled system membership, card scanning for parking eligibility, and notification of available
                    slots via a mobile application.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Health Care System</CardTitle>
                  <CardDescription>Requirements Engineering, Documentation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Facilitated patient access to healthcare information, provided tools for informed health decisions,
                    and enabled provider collaboration for better patient care.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Bank Database Management System</CardTitle>
                  <CardDescription>Database (SQL)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Managed and stored banking information, creating tables for customers, accounts, and transactions,
                    enabling seamless data retrieval and report generation.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Car Specifications and Information Website</CardTitle>
                  <CardDescription>HTML, CSS, BOOTSTRAP 5, JavaScript</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developed a website providing detailed car model information, including user-friendly interfaces,
                    comparison tools, and user reviews.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Human-Computer Interaction - Interface Design</CardTitle>
                  <CardDescription>Figma</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    ShareMeal is an innovative app designed to address food insecurity by facilitating food donations to
                    the needy through NGOs.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>CarHub Full Stack MERN Website</CardTitle>
                  <CardDescription>Node.js, React, MongoDB, Express</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developed a car-related web application using Node.js, React, MongoDB, and Express, with RESTful
                    APIs and API testing for seamless backend communication.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Chatbot</CardTitle>
                  <CardDescription>Machine Learning, NLP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    An AI chatbot that interacts with users and responds intelligently using NLP.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>CNN Image Recognition</CardTitle>
                  <CardDescription>Deep Learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A deep learning model for classifying and recognizing images.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Text-to-Speech & Speech-to-Text</CardTitle>
                  <CardDescription>AI Models</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Converts text to speech and vice versa using AI models.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <CardTitle>Text Summarization</CardTitle>
                  <CardDescription>NLP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automatically generates concise summaries from long-form text using NLP.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">My Skills</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5" />
                  Web Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MERN Stack</Badge>
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">Bootstrap 5</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                  <Brain className="w-5 h-5" />
                  Machine Learning
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Deep Learning</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                  <Database className="w-5 h-5" />
                  Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">SQL</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5" />
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">C</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                  <Tool className="w-5 h-5" />
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Taiga</Badge>
                  <Badge variant="secondary">Jira</Badge>
                  <Badge variant="secondary">MS Office</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-10">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">Get in Touch</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Feel free to reach out to me through the form or connect via my social links.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <Link href="mailto:ahmadimranmughal.2912@gmail.com" className="hover:underline text-foreground">
                      ahmadimranmughal.2912@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <Link href="tel:+923204751625" className="hover:underline text-foreground">
                      +92-320-4751625
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="https://linkedin.com/in/ahmad-imran-396025266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  {/* Add GitHub if you have one */}
                  {/* <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub</span>
                  </Link> */}
                </div>
              </div>
              <Card className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" as="textarea" placeholder="Your message..." className="min-h-[100px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border/50">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Muhammad Ahmad Imran. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            About
          </Link>
          <Link href="#projects" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Projects
          </Link>
          <Link href="#contact" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
