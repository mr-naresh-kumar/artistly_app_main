"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Artist } from "@/types";
import artistsData from "@/data/artists.json";
import { 
  LayoutDashboard, 
  Search, 
  Eye, 
  MessageCircle, 
  CheckCircle, 
  XCircle,
  Star,
  MapPin,
  Users
} from "lucide-react";

export default function DashboardPage() {
  const [artists] = useState<Artist[]>(artistsData as Artist[]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  // Filter artists based on search
  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAction = (action: string, artistId: string) => {
    const artist = artists.find(a => a.id === artistId);
    alert(`${action} action performed for ${artist?.name}`);
  };

  const handleViewProfile = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  if (selectedArtist) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setSelectedArtist(null)}
              className="mb-4"
            >
              ← Back to Dashboard
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {selectedArtist.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{selectedArtist.name}</h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedArtist.location}</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 ml-2" />
                    <span>{selectedArtist.rating}</span>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedArtist.category.map((cat, index) => (
                    <Badge key={index} variant="outline">{cat}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Bio</h3>
                <p className="text-gray-700">{selectedArtist.bio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Price Range</h3>
                  <p className="text-blue-600 font-semibold">{selectedArtist.priceRange}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-gray-700">{selectedArtist.experience}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedArtist.languages.map((lang, index) => (
                    <Badge key={index} variant="secondary">{lang}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Availability</h3>
                <Badge 
                  variant={selectedArtist.availability === "Available" ? "default" : "secondary"}
                  className={
                    selectedArtist.availability === "Available" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }
                >
                  {selectedArtist.availability}
                </Badge>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={() => handleAction("Approve", selectedArtist.id)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleAction("Contact", selectedArtist.id)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button 
                  variant="destructive"
                  onClick={() => handleAction("Reject", selectedArtist.id)}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Manager Dashboard
              </h1>
              <p className="text-lg text-gray-600">
                Manage artist profiles and booking requests
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Artists</p>
                  <p className="text-2xl font-bold text-gray-900">{artists.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Available</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {artists.filter(a => a.availability === "Available").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <XCircle className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Busy</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {artists.filter(a => a.availability === "Busy").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {(artists.reduce((sum, a) => sum + a.rating, 0) / artists.length).toFixed(1)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Artists Table */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle>Artist Submissions</CardTitle>
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search artists..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Name</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Category</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Location</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Fee Range</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Status</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Rating</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArtists.map((artist) => (
                    <tr key={artist.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {artist.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{artist.name}</p>
                            <p className="text-sm text-gray-500">{artist.experience}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex flex-wrap gap-1">
                          {artist.category.slice(0, 2).map((cat, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {cat}
                            </Badge>
                          ))}
                          {artist.category.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{artist.category.length - 2}
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-2 text-gray-900">{artist.location}</td>
                      <td className="py-4 px-2 text-blue-600 font-medium">{artist.priceRange}</td>
                      <td className="py-4 px-2">
                        <Badge 
                          variant={artist.availability === "Available" ? "default" : "secondary"}
                          className={
                            artist.availability === "Available" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {artist.availability}
                        </Badge>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-gray-900">{artist.rating}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2 justify-end">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleViewProfile(artist)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleAction("Contact", artist.id)}
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Contact
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredArtists.length === 0 && (
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">No artists found matching your search.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 