// import React from 'react';

// const ImageoverlayCard = () => {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default ImageoverlayCard;


import { IImageGallery } from "../../types/globaltypes";
import { twMerge } from "tailwind-merge";

interface IImageCard extends Partial<IImageGallery> {
  className?: string;
  onClick?: (id: string | number) => void;
}

const ImageoverlayCard = ({ slug, className = "" }: IImageCard) => {
  return (
    <div
      className={twMerge(
        "rounded-lg overflow-hidden border border-gray-300 group flex items-center justify-center h-full",
        className
      )}
    >
      <img
        src={slug || "/assets/images/image-1.webp"}
        alt={slug}
        className="block h-full w-full object-cover"
      />
    </div>
  );
};

export default  ImageoverlayCard;
