"use client";

import Link from "next/link";
import { Mic, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mic className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Artistly</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting talented performing artists with event planners. 
              Your one-stop platform for booking singers, dancers, speakers, 
              DJs, and more for memorable events.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@artistly.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-gray-300 hover:text-white transition-colors">
                  Browse Artists
                </Link>
              </li>
              <li>
                <Link href="/onboard" className="text-gray-300 hover:text-white transition-colors">
                  Join as Artist
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artists?category=Singer" className="text-gray-300 hover:text-white transition-colors">
                  Singers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=Dancer" className="text-gray-300 hover:text-white transition-colors">
                  Dancers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=Speaker" className="text-gray-300 hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=DJ" className="text-gray-300 hover:text-white transition-colors">
                  DJs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Artistly. All rights reserved. This is a demo application.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 