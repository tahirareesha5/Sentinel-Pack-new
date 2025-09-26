import React from "react";

function CardRelated({ product }) {
  if (!product) return null;

  return (
    <div className="flex flex-col shadow-md w-full max-w-[250px] py-3 px-4 bg-white rounded-md">
      {/* Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Product Name */}
      <div className="font-medium text-sm py-2 leading-tight text-left">
        <p>{product.name}</p>
      </div>

      {/* Ratings */}
      <div className="flex gap-1 items-center">
        <p className="text-xs text-gray-400">{product.rating}</p>
        <img src="/star-1.png" alt="star" />
        <img src="/star-1.png" alt="star" />
        <img src="/star-1.png" alt="star" />
        <img src="/star-1.png" alt="star" />
        <img src="/star-2.png" alt="star" />
        <p className="text-xs text-gray-400">({product.reviews})</p>
      </div>

      {/* Reference */}
      <div className="font-medium text-sm py-2 mb-2 text-left">
        <p>{product.ref}</p>
      </div>

      {/* View Detail Button (no navigation now) */}
      <div className="bg-[#4EA291] text-white text-center py-1.5 rounded-md">
        <button className="text-sm w-full">View Detail</button>
      </div>
    </div>
  );
}

export default CardRelated;
