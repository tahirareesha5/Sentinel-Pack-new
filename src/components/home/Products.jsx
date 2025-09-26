import ProductCard from "./ProductCard";
function Products () {
  const products = [
    {
      id: 1,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro1.png"
    },
    {
      id: 2,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "./public/home-pro2.png"
    },
    {
      id: 3,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro3.png"
    },
    {
      id: 4,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro4.png"
    },
    {
      id: 5,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro5.png"
    },
    {
      id: 6,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro6.png"
    },
    { 
      id: 7,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro7.png"
    },
      { 
      id: 7,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro8.png"
    },
      { 
      id: 7,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro9.png"
    },
      { 
      id: 7,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro10.png"
    },
  ];
    return (
        <div>
             {/* <!-- OUR PRODUCTS PAGE-5 --> */}
    <div class="bg-[#FAFAFA]">
      <section class="px-4 sm:px-8 md:px-12 lg:px-16 py-12 lg:py-28">
        {/* <!-- HEADING + VIEW ALL --> */}
        <div
          class="flex justify-between items-center mb-6 sm:mb-8 px-4 sm:px-6 md:px-8 lg:px-12"
        >
          {/* <!-- HEADING --> */}
          <h1 class="text-2xl sm:text-2xl md:text-3xl font-semibold">
            Our Products
          </h1>
          {/* <!-- BUTTON --> */}
          <button
            class="bg-[#4EA291] text-white px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base"
          >
            View All
          </button>
        </div>
        {/* <!-- PRODUCT GRID --> */}
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 justify-items-center"
        >
          {/* <!-- PRODUCT CARD 1--> */}
       {products.map((product) => (
        <ProductCard key={product.id} product={product} />
       ))}
       
        </div>
      </section>
    </div>
        </div>
    )
}
export default Products;