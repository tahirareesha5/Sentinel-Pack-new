function Banner () {
    return (
        <div>
             {/* <!-- ENJOY-UP PAGE-7 --> */}
    <section class="px-4 sm:px-8 md:px-12 lg:px-16">
      {/* <!-- BG-CONTAINER --> */}
      <div class="relative w-full">
        {/* <!-- BG IMAGE --> */}
        <img
          src="/home-banner.png"
          alt=""
          class="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] object-cover mx-auto"
        />
        {/* <!-- FOR PHONE--> */}
        <div class="absolute inset-0 flex flex-col sm:hidden justify-end p-4">
          <h1 class="font-medium text-lg text-white">Enjoy up to 10% off!</h1>
          <p class="text-xs font-normal text-white mt-1">
            Grab your limited-time discount and enjoy <br />
            10% off on all our products
          </p>
          <div
            class="flex bg-white w-40 h-9 items-center justify-center gap-2 mt-3"
          >
            <button class="text-green-600 text-xs font-medium">
              Get this from Jurhy
            </button>
            <img src="home-banarr.png" alt="" class="w-4" />
          </div>
        </div>
        {/* <!-- FOR TAB AND LAPTOP --> */}
        <div
          class="absolute inset-0 hidden sm:flex flex-col items-center md:items-center lg:items-start justify-center lg:justify-center lg:ml-[600px] gap-1 sm:gap-2 md:gap-3 text-center lg:text-left px-2 sm:px-4"
        >
          <h1
            class="font-medium text-sm sm:text-lg md:text-2xl lg:text-4xl text-white leading-snug"
          >
            Enjoy up to 10% off!
          </h1>
          <p
            class="text-[10px] sm:text-xs md:text-sm lg:text-base font-normal text-white leading-relaxed"
          >
            Grab your limited-time discount and enjoy 10% off
            <br class="hidden sm:block" />
            on all our products
          </p>
          <div
            class="flex bg-white w-28 sm:w-36 md:w-44 lg:w-48 h-7 sm:h-9 md:h-10 lg:h-11 items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mt-2"
          >
            <button
              class="text-green-600 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium"
            >
              Get this from Jurhy
            </button>
            <img src="home-banarr.png" alt="" class="w-3 sm:w-4 md:w-5 lg:w-6" />
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}
export default Banner;