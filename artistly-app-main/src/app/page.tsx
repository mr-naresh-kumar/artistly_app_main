"use client";

import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/custom/CategoryCard";
import { ArrowRight, Star, Users, CheckCircle, Mic } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Singers",
    description: "Professional vocalists for concerts, weddings, and private events",
    artistCount: 25
  },
  {
    name: "Dancers",
    description: "Classical, contemporary, and street dance performers",
    artistCount: 18
  },
  {
    name: "Speakers",
    description: "Motivational speakers, corporate trainers, and wellness coaches",
    artistCount: 12
  },
  {
    name: "DJs",
    description: "Professional DJs and music producers for parties and events",
    artistCount: 15
  }
];

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Verified Artists",
    description: "All artists are verified with ratings and reviews from previous clients"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Easy Booking",
    description: "Simple quote request process with quick responses from artists"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Quality Assured",
    description: "High-quality performances backed by artist ratings and portfolios"
  }
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                <Mic className="h-8 w-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Find Perfect Artists for Your
                <span className="block text-yellow-300">Dream Events</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Connect with talented singers, dancers, speakers, and DJs. 
                Book verified artists for weddings, corporate events, and private parties.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link href="/artists">
                  Explore Artists
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                <Link href="/onboard">
                  Join as Artist
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="relative">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" fill="currentColor">
            <path d="M0,80 C300,120 900,0 1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Artistly?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make it easy to find and book the perfect artists for your events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Artist Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our diverse collection of talented performing artists
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                category={category.name}
                description={category.description}
                artistCount={category.artistCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Perfect Artist?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied event planners who found their ideal performers on Artistly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/artists">
                Start Browsing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/onboard">
                List Your Talent
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
