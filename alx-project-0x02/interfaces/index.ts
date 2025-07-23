export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  type: 'entire-place' | 'private-room' | 'shared-room';
  amenities: string[];
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface SearchFilters {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  minPrice: number;
  maxPrice: number;
  propertyTypes: string[];
  amenities: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinedDate: Date;
  isSuperhost: boolean;
  about: string;
  responseRate: number;
  responseTime: string;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  rating: number;
  comment: string;
  date: Date;
  user: {
    name: string;
    avatar: string;
  };
}

export interface CardProps {
  title: string;
  content: string;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}