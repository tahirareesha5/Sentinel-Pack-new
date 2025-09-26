import HomeCard from "./HomeCard";
function Card () {
  const Card = [
    {
      id: 1,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,  
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro1.png"
    },
      {
      id: 1,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,  
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro1.png"
    },
      {
      id: 1,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,  
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro1.png"
    },
      {
      id: 1,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,  
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro1.png"
    },
      {
      id: 1,
      name: "Vulval Toilet Cleaning Pack",
      rating: 4.7,  
      reviews: 23,
      ref: "CHK-007",
      image: "/home-pro1.png"
    },
  ]
    return (
        <div>
{/* <!-- CARDS AND ARROW PAGE-3 --> */}
<div class="hidden md:flex justify-between py-16 px-6 sm:px-12 lg:px-20">
  {/* <!-- LEFT-ARROW --> */}
  <div class="mt-16">
    <img src="/home-leftarr.png" alt="" class="cursor-pointer" />
  </div>
  {/* <!-- CARDS --> */}
  <div class="flex gap-4 flex-wrap md:flex-nowrap justify-center">
    {/* Array Call */}
      {Card.map((card) => (
        <HomeCard key={card.id} product={card} />
       ))}
  </div>
  {/* <!-- RIGHT-ARROW --> */}
  <div class="mt-16">
    <img src="/home-rightarr.png" alt="" class="cursor-pointer" />
  </div>
</div>
        </div>
    )
}
export default Card;