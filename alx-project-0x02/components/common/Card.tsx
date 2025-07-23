import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({
  title,
  content,
  className = '',
  titleClassName = '',
  contentClassName = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg ${className}`}>
      <div className="p-6">
        <h3 className={`text-xl font-semibold text-gray-800 mb-3 ${titleClassName}`}>
          {title}
        </h3>
        <p className={`text-gray-600 ${contentClassName}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
