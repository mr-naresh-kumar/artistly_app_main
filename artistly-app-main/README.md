# Artistly - Performing Artist Booking Platform

A modern, responsive web application for connecting event planners with talented performing artists. Built with Next.js 13+ App Router, React, and Tailwind CSS.

## 🎭 Project Overview

Artistly is a platform designed for event planners and artist managers to connect. Event planners can browse artist profiles, filter by categories, and request quotes, while artist managers can onboard new artists and manage bookings through a dashboard.

## ✨ Features

### 🏠 Homepage
- Hero section with compelling call-to-action
- Feature highlights and benefits
- Artist category showcase
- Mobile-responsive design

### 🎨 Artist Listing
- Grid and list view toggle
- Advanced filtering (category, location, price range, search)
- Interactive filter badges
- Real-time search functionality
- Responsive card layout

### 📝 Artist Onboarding
- Multi-section registration form
- Form validation with React Hook Form + Yup
- Multi-select dropdowns with checkboxes
- File upload for profile images
- Success confirmation with auto-redirect

### 📊 Manager Dashboard
- Statistics overview cards
- Searchable artist table
- Artist profile view modal
- Action buttons (approve, contact, reject)
- Responsive table design

## 🛠 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/UI
- **Form Management**: React Hook Form
- **Validation**: Yup
- **Icons**: Lucide React
- **Data**: Static JSON (mock data)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd artistly-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## 📱 Pages Structure

```
/                    # Homepage with hero and categories
/artists            # Artist listing with filters
/onboard            # Artist registration form
/dashboard          # Manager dashboard
```

## 🎯 Key Features Implemented

### ✅ Requirements Met
- **Responsive Design**: Fully mobile-responsive across all pages
- **Component Reusability**: Modular components (ArtistCard, FilterSidebar, etc.)
- **Form Validation**: Comprehensive validation with error handling
- **Filtering Logic**: Working filter system with multiple criteria
- **State Management**: useState and context patterns
- **SEO Optimization**: Proper metadata, alt tags, and accessibility
- **Modern UI**: Clean, professional design with ShadCN components

### 🔧 Code Quality
- TypeScript for type safety
- ESLint configuration for code quality
- Proper folder structure and organization
- Reusable custom components
- Clean, commented code

## 📊 Performance

- **Build Size**: Optimized bundle sizes
- **Static Generation**: All pages pre-rendered for performance
- **Responsive Images**: Optimized image handling
- **Code Splitting**: Automatic code splitting by Next.js

## 🎨 Design Features

- **Modern UI**: Clean, professional aesthetic
- **Interactive Elements**: Hover effects, transitions, animations
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Mobile-First**: Responsive design from mobile to desktop

## 📝 Mock Data

The application uses static JSON data for demonstration:
- 8 sample artists with varied categories and details
- Multiple categories (Singer, Dancer, Speaker, DJ)
- Different locations across India
- Varied price ranges and availability

## 🔮 Future Enhancements

- Backend API integration
- Real-time messaging system
- Payment gateway integration
- Advanced search with location radius
- Artist portfolio galleries
- Booking calendar system
- Email notifications
- User authentication

## 📧 Contact

This is a demo application created for a frontend developer position. For questions or feedback, please contact the development team.

---

**Built with ❤️ using Next.js and React**
