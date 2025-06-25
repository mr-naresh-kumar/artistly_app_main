"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, X } from "lucide-react";

interface MultiSelectProps {
  options: readonly string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  label?: string;
  error?: string;
}

export default function MultiSelect({ 
  options, 
  selected, 
  onChange, 
  placeholder = "Select options...",
  label,
  error 
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionToggle = (option: string) => {
    const isSelected = selected.includes(option);
    if (isSelected) {
      onChange(selected.filter(item => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const removeOption = (option: string) => {
    onChange(selected.filter(item => item !== option));
  };

  return (
    <div className="relative">
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          {label}
        </label>
      )}
      
      {/* Selected Items Display */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`min-h-[2.5rem] p-3 border rounded-md cursor-pointer bg-white hover:bg-gray-50 transition-colors ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        {selected.length === 0 ? (
          <span className="text-gray-500">{placeholder}</span>
        ) : (
          <div className="flex flex-wrap gap-1">
            {selected.map((item) => (
              <Badge 
                key={item} 
                variant="secondary" 
                className="flex items-center gap-1"
              >
                {item}
                <X 
                  className="h-3 w-3 cursor-pointer hover:text-red-600" 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeOption(item);
                  }}
                />
              </Badge>
            ))}
          </div>
        )}
        <ChevronDown 
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}

      {/* Dropdown Options */}
      {isOpen && (
        <Card className="absolute z-10 w-full mt-1 max-h-64 overflow-y-auto">
          <CardContent className="p-2">
            <div className="space-y-2">
              {options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={selected.includes(option)}
                    onCheckedChange={() => handleOptionToggle(option)}
                  />
                  <label 
                    htmlFor={option}
                    className="text-sm cursor-pointer flex-1 py-1"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 