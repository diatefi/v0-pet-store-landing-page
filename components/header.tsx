"use client"

import { useState } from "react"
import Link from "next/link"
import { PawPrint, Search, User, ShoppingCart, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { name: "Shop", href: "#" },
  { name: "Dogs", href: "#" },
  { name: "Cats", href: "#" },
  { name: "Birds", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About Us", href: "#" },
]

const smallPetsItems = [
  { name: "Hamsters", href: "#" },
  { name: "Guinea Pigs", href: "#" },
  { name: "Rabbits", href: "#" },
  { name: "Ferrets", href: "#" },
  { name: "Gerbils", href: "#" },
]

const servicesItems = [
  { name: "Grooming", href: "#" },
  { name: "Veterinary Care", href: "#" },
  { name: "Training", href: "#" },
  { name: "Pet Sitting", href: "#" },
  { name: "Dog Walking", href: "#" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [smallPetsOpen, setSmallPetsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">PUPPY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Small Pets Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
                Small Pets
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {smallPetsItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
                Services
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(4).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <PawPrint className="h-5 w-5 text-primary" />
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="h-5 w-5 text-foreground" />
            </button>
            <button className="hidden md:flex p-2 hover:bg-muted rounded-full transition-colors">
              <User className="h-5 w-5 text-foreground" />
            </button>
            <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5 text-foreground" />
              <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-primary text-primary-foreground text-xs font-medium rounded-full">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Small Pets Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setSmallPetsOpen(!smallPetsOpen)}
                >
                  Small Pets
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${smallPetsOpen ? 'rotate-180' : ''}`} />
                </button>
                {smallPetsOpen && (
                  <div className="ml-4 flex flex-col gap-1 mt-1">
                    {smallPetsItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 flex flex-col gap-1 mt-1">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
