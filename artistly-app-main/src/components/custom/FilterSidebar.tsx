"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FilterState, CATEGORIES, LOCATIONS, PRICE_RANGES } from "@/types";
import { Search, X, Filter } from "lucide-react";

interface FilterSidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FilterSidebar({ 
  filters, 
  onFiltersChange, 
  isOpen, 
  onToggle 
}: FilterSidebarProps) {
  const updateFilter = (key: keyof FilterState, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: "",
      location: "",
      priceRange: "",
      searchTerm: ""
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== "");

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button 
          variant="outline" 
          onClick={onToggle}
          className="w-full justify-center"
        >
          <Filter className="h-4 w-4 mr-2" />
          {isOpen ? "Hide Filters" : "Show Filters"}
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              {Object.values(filters).filter(v => v !== "").length}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filter Sidebar */}
      <div className={`${
        isOpen ? "block" : "hidden"
      } lg:block`}>
        <Card className="sticky top-4">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Filters</CardTitle>
              {hasActiveFilters && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Search */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Search Artists
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or skill..."
                  value={filters.searchTerm}
                  onChange={(e) => updateFilter("searchTerm", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Category
              </label>
              <div className="space-y-2">
                <Button
                  variant={filters.category === "" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateFilter("category", "")}
                  className="w-full justify-start"
                >
                  All Categories
                </Button>
                {CATEGORIES.map((category) => (
                  <Button
                    key={category}
                    variant={filters.category === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateFilter("category", category)}
                    className="w-full justify-start"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Location
              </label>
              <div className="space-y-2">
                <Button
                  variant={filters.location === "" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateFilter("location", "")}
                  className="w-full justify-start"
                >
                  All Locations
                </Button>
                {LOCATIONS.map((location) => (
                  <Button
                    key={location}
                    variant={filters.location === location ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateFilter("location", location)}
                    className="w-full justify-start"
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Price Range
              </label>
              <div className="space-y-2">
                <Button
                  variant={filters.priceRange === "" ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateFilter("priceRange", "")}
                  className="w-full justify-start"
                >
                  All Price Ranges
                </Button>
                {PRICE_RANGES.map((range) => (
                  <Button
                    key={range}
                    variant={filters.priceRange === range ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateFilter("priceRange", range)}
                    className="w-full justify-start"
                  >
                    {range}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
} 