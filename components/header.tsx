"use client"

import { useState } from "react"
import Link from "next/link"
import { PawPrint, Search, User, ShoppingCart, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Shop", href: "#" },
  { name: "Dogs", href: "#" },
  { name: "Cats", href: "#" },
  { name: "Birds", href: "#" },
  { name: "Small Pets", href: "#", hasDropdown: true },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Blog", href: "#" },
  { name: "About Us", href: "#" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
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
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
