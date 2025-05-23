import React from 'react';

interface LookbookItemProps {
  image: string;
  video: string;
  title: string;
  description?: string;
}

const LookbookItem: React.FC<LookbookItemProps> = ({ image, video, title, description }) => {
  return (
    <div className="overflow-hidden group cursor-pointer relative">
      <div className="overflow-hidden relative h-[400px] md:h-[500px]">
        {/* Video plays immediately in background */}
        <video 
          src={video} 
          className="w-full h-full object-cover absolute inset-0 z-0"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Image on top by default, fades out on hover */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-opacity duration-500 z-10 relative group-hover:opacity-0"
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
