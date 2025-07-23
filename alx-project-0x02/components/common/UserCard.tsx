import React from 'react';
import { type UserProps } from '@/interfaces';
import Link from 'next/link';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-xl mr-4">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-rose-500">@{username}</p>
          </div>
        </div>

        <div className="space-y-2 text-gray-600">
          <div className="flex items-start">
            <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`mailto:${email}`} className="hover:text-rose-500 transition-colors break-all">
              {email}
            </a>
          </div>
          
          <div className="flex items-start">
            <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${phone}`} className="hover:text-rose-500 transition-colors">
              {phone}
            </a>
          </div>
          
          <div className="flex items-start">
            <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <a 
              href={`https://${website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-rose-500 transition-colors"
            >
              {website}
            </a>
          </div>
          
          <div className="flex items-start">
            <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>
              {address.suite}, {address.street}, {address.city}, {address.zipcode}
            </span>
          </div>
          
          <div className="flex items-start">
            <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <div>
              <p className="font-medium">{company.name}</p>
              <p className="text-sm text-gray-500">{company.catchPhrase}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <Link 
          href={`/users/${id}`}
          className="text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors inline-flex items-center"
        >
          View Profile
          <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
