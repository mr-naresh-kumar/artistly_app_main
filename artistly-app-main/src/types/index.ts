export interface Artist {
  id: string;
  name: string;
  category: string[];
  bio: string;
  priceRange: string;
  location: string;
  languages: string[];
  profileImage: string;
  rating: number;
  experience: string;
  availability: "Available" | "Busy";
}

export interface FilterState {
  category: string;
  location: string;
  priceRange: string;
  searchTerm: string;
}

export interface ArtistFormData {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
  profileImage?: File | null;
}

export interface CategoryCard {
  id: string;
  name: string;
  description: string;
  icon: string;
  artistCount: number;
}

export const CATEGORIES = [
  "Singer",
  "Dancer", 
  "Speaker",
  "DJ",
  "Performer",
  "Choreographer",
  "Music Producer",
  "Motivational Coach",
  "Event Host",
  "Wellness Coach"
] as const;

export const LOCATIONS = [
  "Mumbai",
  "Delhi", 
  "Bangalore",
  "Pune",
  "Jaipur",
  "Gurgaon",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad"
] as const;

export const PRICE_RANGES = [
  "₹0 - ₹25,000",
  "₹25,000 - ₹50,000", 
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,00,000",
  "₹2,00,000+"
] as const;

export const LANGUAGES = [
  "English",
  "Hindi",
  "Marathi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Bengali",
  "Gujarati",
  "Punjabi",
  "Malayalam",
  "Rajasthani",
  "Konkani"
] as const; 