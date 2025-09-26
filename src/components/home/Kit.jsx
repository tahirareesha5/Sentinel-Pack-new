function Kit () {
    return (
        <div>
             {/* <!-- PADDING PAGE 6 --> */}
    <div class="px-0 sm:px-3 md:px-4 lg:px-16 py-2 sm:py-4 md:py-6 lg:py-10">
      {/* <!-- INTRAVITREAL-KIT PAGE-6 --> */}
      <div
        class="flex flex-col lg:flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-12 md:px-12 lg:px-28 py-8"
      >
        {/* <!-- TEXT INTRO-KIT --> */}
        <div
          class="flex flex-col gap-3 sm:gap-6 max-w-2xl text-left order-2 lg:order-2"
        >
          {/* <!-- H2 --> */}
          <h2 class="font-semibold text-lg sm:text-xl block lg:hidden">
            Product Overview
          </h2>
          {/* <!-- IMG --> */}
          <div class="flex-shrink-0 block lg:hidden">
            <img
              src="intra-kit.svg"
              alt=""
              class="w-[180px] sm:w-[220px] h-auto mx-auto shadow-md"
            />
          </div>
          {/* <!-- Heading + H1--> */}
          <div class="flex flex-col gap-1 hidden lg:block">
            <h2 class="font-semibold text-lg sm:text-xl">Product Overview</h2>
            <h1 class="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Intravitreal Kit
            </h1>
          </div>
          {/* <!-- H1 --> */}
          <h1 class="font-medium text-xl sm:text-2xl block lg:hidden">
            Intravitreal Kit
          </h1>
          {/* <!-- TEXT --> */}
          <p
            class="font-normal text-sm sm:text-base md:text-md leading-relaxed line-clamp-6"
          >
            Safecare Medical Industries Was Conceived And Established In The
            Year Of 2016 By Bin Ali Group That Plans To Give A Different
            Dimension To The Medical Industries All Across The Middle East.
            Headquartered in Abu Dhabi, UAE, SafeCare is a domestic profit
            corporation providing quality medical plastic consumable products
            across all GCC countries.
          </p>
          {/* <!-- BUTTON --> */}
          <div
            class="flex bg-[#4EA291] w-36 sm:w-40 h-10 sm:h-11 rounded-lg items-center justify-center gap-2 sm:gap-4 cursor-pointer hover:bg-[#3b8275] transition mx-0"
          >
            <button class="text-white text-xs sm:text-sm">Buy Now</button>
            <img src="/home-arrow.png" alt="" class="w-4 sm:w-5" />
          </div>
        </div>
        {/* <!-- IMG --> */}
        <div class="flex-shrink-0 hidden lg:block order-1">
          <img
            src="/home-intrakit.png"
            alt=""
            class="w-full max-w-[260px] sm:max-w-[320px] h-auto mx-auto shadow-none"
          />
        </div>
      </div>
    </div>
        </div>
    )
}
export default Kit;