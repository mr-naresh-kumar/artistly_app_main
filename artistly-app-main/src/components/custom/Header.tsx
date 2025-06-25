"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mic, Users, UserPlus } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Mic className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Artistly</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/artists" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Browse Artists
            </Link>
            <Link 
              href="/onboard" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Join as Artist
            </Link>
            <Link 
              href="/dashboard" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Dashboard
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/artists">
                <Users className="h-4 w-4 mr-2" />
                Find Artists
              </Link>
            </Button>
            <Button asChild>
              <Link href="/onboard">
                <UserPlus className="h-4 w-4 mr-2" />
                Join as Artist
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/artists" 
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Artists
              </Link>
              <Link 
                href="/onboard" 
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Join as Artist
              </Link>
              <Link 
                href="/dashboard" 
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/artists" onClick={() => setIsMenuOpen(false)}>
                    <Users className="h-4 w-4 mr-2" />
                    Find Artists
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/onboard" onClick={() => setIsMenuOpen(false)}>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Join as Artist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 