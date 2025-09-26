import React from "react";
import CardRelated from "./Cardrelated";

function Related() {
  const relatedProducts = [
    {
      id: 1,
      name: "sentinial pack Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-001",
      image: "/home-pro1.png",
    },
    {
      id: 2,
      name: "Vulval Toilet Cleaning Pack - Extra",
      rating: 4.6,
      reviews: 18,
      ref: "CHK-002",
      image: "/home-pro2.png",
    },
    {
      id: 3,
      name: "Vulval Toilet Cleaning Pack - Fresh",
      rating: 4.8,
      reviews: 45,
      ref: "CHK-003",
      image: "/home-pro3.png",
    },
    {
      id: 4,
      name: "Vulval Toilet Cleaning Pack - Mini",
      rating: 4.4,
      reviews: 10,
      ref: "CHK-004",
      image: "/home-pro4.png",
    },
    {
      id: 5,
      name: "Vulval Toilet Cleaning Pack - Value",
      rating: 4.5,
      reviews: 30,
      ref: "CHK-005",
      image: "/home-pro5.png",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16">
      {/* RELATED-PRODUCTS PAGE-5 */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-24">
        <div>
          <h1 className="font-medium text-xl mb-4">Related Products</h1>
        </div>

        {/* PRODUCT GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 
            gap-4 sm:gap-6 md:gap-8  
            justify-items-center"
        >
          {relatedProducts.map((product, index) => (
            <CardRelated key={product.id ?? index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Related;
