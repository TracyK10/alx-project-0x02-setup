import React from 'react';
import { type PostProps } from '@/interfaces';
import Link from 'next/link';

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {body}
        </p>
      </div>
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            User ID: {userId}
          </span>
          <Link 
            href={`/posts/${id}`}
            className="text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
