function About () {
    return (
        <div>
              {/* <!-- PADDIND PAGE 4 --> */}
    <div class="px-4 sm:px-8 md:px-16 lg:px-20">
      {/* <!-- ABOUT COMPANY PAGE-4 --> */}
      <div
        class="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-6 px-0 sm:px-10 md:px-12 lg:px-28 py-8"
      >
        {/* <!-- TEXT ABOUT --> */}
        <div
          class="flex flex-col gap-6 max-w-2xl text-left lg:text-left order-1"
        >
          {/* <!-- HEADING --> */}
          <h1 class="font-medium text-2xl sm:text-3xl md:text-4xl">
            About Company
          </h1>
          {/* <!-- TEXT --> */}
          <p
            class="font-normal text-sm sm:text-base md:text-md leading-relaxed"
          >
            Safecare Medical Industries was conceived and established in 2016 by
            the Bin Ali Group, with the vision of giving a new dimension to the
            medical industry across the Middle East. Headquartered in Abu Dhabi,
            UAE, Safecare is a domestic profit corporation providing quality
            medical plastic consumable products across all GCC countries. With
            its registered subsidiary factories and offices in the UK, USA,
            Germany, and China, Safecare thrives on producing and delivering
            quality medical products worldwide.
          </p>
          {/* <!-- BUTTON --> */}
          <div
            class="flex bg-[#4EA291] w-40 h-11 rounded-lg items-center justify-center gap-2 cursor-pointer hover:bg-[#3b8275] transition mx-0"
          >
            <button class="text-white text-sm">Learn More</button>
            <img src="/home-arrow.png" alt="" class="w-5" />
          </div>
        </div>
        {/* <!-- IMG ABOUT --> */}
        <div class="flex-shrink-0 order-2 lg:order-none">
          <img
            src="/home-about.png"
            alt=""
            class="w-full max-w-[380px] h-auto"
          />
        </div>
      </div>
    </div>
        </div>
    )
}
export default About;