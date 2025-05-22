
import React from 'react';

interface LookbookItemProps {
  image: string;
  title: string;
  description?: string;
}

const LookbookItem: React.FC<LookbookItemProps> = ({ image, title, description }) => {
  return (
    <div className="overflow-hidden group cursor-pointer">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[400px] md:h-[500px] object-cover image-hover-effect"
        />
      </div>
      <div className="py-4">
        <h3 className="text-lg font-medium">{title}</h3>
        {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default LookbookItem;
