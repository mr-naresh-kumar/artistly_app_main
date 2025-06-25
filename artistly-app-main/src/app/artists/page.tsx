"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ArtistCard from "@/components/custom/ArtistCard";
import FilterSidebar from "@/components/custom/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Artist, FilterState } from "@/types";
import artistsData from "@/data/artists.json";
import { Grid, List, X } from "lucide-react";

function ArtistsContent() {
  const searchParams = useSearchParams();
  const [artists] = useState<Artist[]>(artistsData as Artist[]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [filters, setFilters] = useState<FilterState>({
    category: searchParams.get("category") || "",
    location: searchParams.get("location") || "",
    priceRange: searchParams.get("priceRange") || "",
    searchTerm: searchParams.get("search") || ""
  });

  // Filter artists based on current filters
  const filteredArtists = useMemo(() => {
    return artists.filter((artist) => {
      const matchesCategory = !filters.category || 
        artist.category.some(cat => cat.toLowerCase().includes(filters.category.toLowerCase()));
      
      const matchesLocation = !filters.location || 
        artist.location.toLowerCase().includes(filters.location.toLowerCase());
      
      const matchesPriceRange = !filters.priceRange || 
        artist.priceRange === filters.priceRange;
      
      const matchesSearch = !filters.searchTerm || 
        artist.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        artist.category.some(cat => cat.toLowerCase().includes(filters.searchTerm.toLowerCase()));

      return matchesCategory && matchesLocation && matchesPriceRange && matchesSearch;
    });
  }, [artists, filters]);

  const handleQuoteRequest = (artistId: string) => {
    // Mock quote request functionality
    const artist = artists.find(a => a.id === artistId);
    alert(`Quote request sent to ${artist?.name}! They will get back to you soon.`);
  };

  const clearFilter = (filterKey: keyof FilterState) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: ""
    }));
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== "");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Artists
          </h1>
          <p className="text-lg text-gray-600">
            Discover talented performers for your next event
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{filteredArtists.length}</span> 
                  {" "}artists found
                </p>
                
                {/* Active Filters */}
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2">
                    {filters.category && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {filters.category}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => clearFilter("category")}
                        />
                      </Badge>
                    )}
                    {filters.location && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {filters.location}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => clearFilter("location")}
                        />
                      </Badge>
                    )}
                    {filters.priceRange && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {filters.priceRange}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => clearFilter("priceRange")}
                        />
                      </Badge>
                    )}
                    {filters.searchTerm && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        &ldquo;{filters.searchTerm}&rdquo;
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => clearFilter("searchTerm")}
                        />
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Artists Grid/List */}
            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Grid className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No artists found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button 
                  onClick={() => setFilters({ category: "", location: "", priceRange: "", searchTerm: "" })}
                  variant="outline"
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }>
                {filteredArtists.map((artist) => (
                  <div key={artist.id} className={viewMode === "list" ? "max-w-full" : ""}>
                    <ArtistCard
                      artist={artist}
                      onQuoteRequest={handleQuoteRequest}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArtistsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    }>
      <ArtistsContent />
    </Suspense>
  );
} 