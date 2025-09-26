import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
function Cardpro() {
  const location = useLocation();
  const product = location.state;
  if (!product) {
    return <p className="p-4">No product selected.</p>;
  }

  const resolve = (img) => {
    if (!img) return "/placeholder.png"; 
    return img.startsWith("/") ? img : `/${img}`;
  };

  const images = useMemo(() => {
    if (Array.isArray(product.images) && product.images.length) {
      return product.images.map(resolve);
    }
    return [resolve(product.image)];
  }, [product]);
  const [mainImg, setMainImg] = useState(images[0]);
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* IMGS */}
        <div className="flex flex-col bg-white w-full lg:w-[470px] py-6 shadow-md px-3 gap-4">
          <div className="flex justify-center">
            <img
              src={mainImg}
              alt={product.name}
              className="w-60 sm:w-72 md:w-80 object-contain"
            />
          </div>
          {/* Thumbnails */}
          <div className="hidden sm:flex gap-3 justify-center items-center mt-2">
            <button
              type="button"
              className="p-1"
              onClick={() => setMainImg(images[0])}
            >
              {/* optional left arrow or similar */}
            </button>
            <div className="flex gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setMainImg(img)}
                  className={`border rounded-md p-1 ${mainImg === img ? "ring-2 ring-emerald-400" : ""}`}
                >
                  <img src={img} alt={`${product.name}-${idx}`} className="w-16 sm:w-20 md:w-24 object-contain" />
                </button>
              ))}
            </div>
            <button
              type="button"
              className="p-1"
              onClick={() => setMainImg(images[images.length - 1])}
            >
              {/* optional right arrow */}
            </button>
          </div>
        </div>
        {/* TEXT */}
        <div className="flex flex-col gap-5 mt-4 lg:mt-0">
          <h1 className="font-bold text-xl sm:text-xl">{product.name}</h1>
          <div>
            <div className="flex flex-wrap gap-1">
              <span className="font-normal text-sm text-gray-400">Pack:</span>
              <p className="font-medium text-sm text-gray-500">{product.pack}</p>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="font-normal text-sm text-gray-400">REF:</span>
              <p className="font-medium text-sm text-gray-500">{product.ref}</p>
            </div>
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-500 leading-relaxed">
            {product.desc}
          </p>
          <div className="flex flex-wrap gap-6 sm:gap-16">
            <div className="flex gap-1">
              <span className="font-medium text-md text-gray-600">Rating:</span>
              <p className="font-normal text-md text-gray-400">{product.rating}</p>
            </div>
            <div className="flex gap-1">
              <span className="font-medium text-md text-gray-600">Reviews:</span>
              <p className="font-normal text-md text-gray-400">({product.reviews})</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <button className="bg-[#4EA291] text-white py-1 px-6 shadow-md hover:bg-[#3c8677] transition">
              Request for quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cardpro;
