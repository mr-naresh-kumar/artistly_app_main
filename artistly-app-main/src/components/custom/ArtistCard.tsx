"use client";

import { Artist } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, User, MessageCircle } from "lucide-react";

interface ArtistCardProps {
  artist: Artist;
  onQuoteRequest?: (artistId: string) => void;
}

export default function ArtistCard({ artist, onQuoteRequest }: ArtistCardProps) {
  const handleQuoteRequest = () => {
    onQuoteRequest?.(artist.id);
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Placeholder for artist image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <User className="h-16 w-16 text-gray-400" />
        </div>
        
        {/* Availability Badge */}
        <div className="absolute top-3 right-3">
          <Badge 
            variant={artist.availability === "Available" ? "default" : "secondary"}
            className={
              artist.availability === "Available" 
                ? "bg-green-100 text-green-800 hover:bg-green-100" 
                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
            }
          >
            {artist.availability}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Artist Name and Rating */}
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              {artist.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700">{artist.rating}</span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1">
            {artist.category.map((cat, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{artist.location}</span>
          </div>

          {/* Price Range */}
          <div className="text-lg font-semibold text-blue-600">
            {artist.priceRange}
          </div>

          {/* Experience */}
          <div className="text-sm text-gray-600">
            Experience: {artist.experience}
          </div>

          {/* Bio (truncated) */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {artist.bio}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleQuoteRequest}
          className="w-full"
          disabled={artist.availability === "Busy"}
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          {artist.availability === "Available" ? "Ask for Quote" : "Currently Busy"}
        </Button>
      </CardFooter>
    </Card>
  );
} 