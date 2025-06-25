"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MultiSelect from "@/components/custom/MultiSelect";
import { ArtistFormData, CATEGORIES, LANGUAGES, PRICE_RANGES } from "@/types";
import { User, Upload, Check, AlertCircle } from "lucide-react";

// Validation schema
const artistSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  bio: yup.string().required("Bio is required").min(50, "Bio must be at least 50 characters"),
  category: yup.array().of(yup.string().required()).min(1, "At least one category is required").required(),
  languages: yup.array().of(yup.string().required()).min(1, "At least one language is required").required(),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required").min(2, "Location must be at least 2 characters"),
});

export default function OnboardPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<ArtistFormData>({
    resolver: yupResolver(artistSchema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      location: "",
      profileImage: null
    }
  });

  const watchedValues = watch();

  const onSubmit = async (data: ArtistFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Artist Registration Data:", {
      ...data,
      profileImage: profileImage?.name || null
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      setProfileImage(null);
    }, 3000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileImage(file);
      setValue("profileImage", file);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Registration Successful!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you for joining Artistly. Your profile is now under review and will be live soon.
            </p>
            <Button onClick={() => window.location.href = "/"} className="w-full">
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <User className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join as an Artist
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your talent with event planners and start getting booked for amazing performances
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl">Artist Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Personal Information
                </h3>
                
                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Enter your full name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Bio */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Bio *
                  </label>
                  <Textarea
                    {...register("bio")}
                    placeholder="Tell us about your artistic background, experience, and what makes you unique..."
                    rows={4}
                    className={errors.bio ? "border-red-500" : ""}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.bio ? (
                      <p className="text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.bio.message}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Minimum 50 characters
                      </p>
                    )}
                    <p className="text-sm text-gray-400">
                      {watchedValues.bio?.length || 0}/500
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Location *
                  </label>
                  <Input
                    {...register("location")}
                    placeholder="Enter your city"
                    className={errors.location ? "border-red-500" : ""}
                  />
                  {errors.location && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Professional Information
                </h3>

                {/* Categories */}
                <div>
                  <MultiSelect
                    label="Categories *"
                    options={CATEGORIES}
                    selected={watchedValues.category || []}
                    onChange={(selected) => setValue("category", selected)}
                    placeholder="Select your performance categories"
                    error={errors.category?.message}
                  />
                </div>

                {/* Languages */}
                <div>
                  <MultiSelect
                    label="Languages Spoken *"
                    options={LANGUAGES}
                    selected={watchedValues.languages || []}
                    onChange={(selected) => setValue("languages", selected)}
                    placeholder="Select languages you can perform in"
                    error={errors.languages?.message}
                  />
                </div>

                {/* Fee Range */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Fee Range *
                  </label>
                  <Select 
                    onValueChange={(value) => setValue("feeRange", value)}
                    value={watchedValues.feeRange || ""}
                  >
                    <SelectTrigger className={errors.feeRange ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your fee range" />
                    </SelectTrigger>
                    <SelectContent>
                      {PRICE_RANGES.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.feeRange && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.feeRange.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Profile Image */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Profile Image (Optional)
                </h3>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Upload Profile Picture
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    {profileImage ? (
                      <div>
                        <p className="text-sm text-gray-900 font-medium">
                          {profileImage.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(profileImage.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-gray-600">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 