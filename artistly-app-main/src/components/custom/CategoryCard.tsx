"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Music, Users, Megaphone, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  category: string;
  description: string;
  artistCount: number;
  href?: string;
}

export default function CategoryCard({ 
  category, 
  description, 
  artistCount, 
  href = "/artists" 
}: CategoryCardProps) {
  const getIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "singer":
      case "singers":
        return <Mic className="h-8 w-8" />;
      case "dancer":
      case "dancers":
        return <Users className="h-8 w-8" />;
      case "speaker":
      case "speakers":
        return <Megaphone className="h-8 w-8" />;
      case "dj":
      case "djs":
        return <Music className="h-8 w-8" />;
      default:
        return <Users className="h-8 w-8" />;
    }
  };

  const getGradient = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "singer":
      case "singers":
        return "from-pink-400 to-purple-600";
      case "dancer":
      case "dancers":
        return "from-blue-400 to-cyan-600";
      case "speaker":
      case "speakers":
        return "from-green-400 to-emerald-600";
      case "dj":
      case "djs":
        return "from-orange-400 to-red-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-0">
        {/* Header with gradient background */}
        <div className={`bg-gradient-to-br ${getGradient(category)} p-6 text-white relative overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 bg-white bg-opacity-10 transform -skew-y-6 scale-110"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white">
                {getIcon(category)}
              </div>
              <Badge variant="secondary" className="bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-20">
                {artistCount} Artists
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{category}</h3>
            <p className="text-white text-opacity-90 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6">
          <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
            <Link href={`${href}?category=${encodeURIComponent(category)}`}>
              Explore {category}
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 