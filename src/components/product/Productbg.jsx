function Productbg () {
    return (
        <div>
            <div class="px-4 sm:px-6 md:px-12 lg:px-16">
            {/* <!-- PRODUCT-BG PAGE-2 --> */}
<div class="relative w-full h-52 sm:h-72 md:h-80 lg:h-[250px] mt-5">
  {/* <!-- IMG --> */}
  <img src="/pro-bg.png" alt="" class="w-full h-full object-cover" />
  {/* <!-- TEXT --> */}
  <div class="absolute flex flex-col gap-2 sm:gap-3 
              bottom-16 sm:bottom-12 md:bottom-16 lg:bottom-20 
              left-3 sm:left-8 md:left-12 lg:left-16">
    <h1 class="font-medium text-xl sm:text-2xl md:text-4xl text-white leading-snug">
      Our Products
    </h1>
    <div class="font-normal text-sm sm:text-base md:text-lg text-white">
      <p>
        Grab your limited-time discount and enjoy 10% off <br class="hidden sm:block"/> 
        on all our products
      </p>
    </div>
  </div>
</div>
</div>
        </div>
    )
}
export default Productbg;