
function Footer () {
    return (
        <div>
             {/* <!-- FOOTER PAGE-8--> */}
    <div class="bg-gray-100 pt-12 mt-4 sm:mt-6 md:mt-12 lg:mt-24">
      <section
        class="flex flex-col sm:flex-row flex-wrap justify-between gap-12 py-6 px-6 lg:px-16"
      >
        {/* <!-- COL-1 --> */}
        <div class="flex flex-col gap-3 max-w-sm">
          <img src="/home-logo.png" alt="" class="w-28" />
          <p class="text-sm text-gray-700 leading-relaxed">
            Safecare Prepared plates and broth tested in accordance with CLSI
            M22 A3 - Quality assurance for Commercially Prepared Microbiological
            Culture Media – second edition.
          </p>
          <div class="flex gap-4">
            <img
              src="/Facbook.png"
              alt="Facebook"
              class="w-5 h-5 cursor-pointer"
            />
            <img
              src="/Twitter.png"
              alt="Twitter"
              class="w-5 h-5 cursor-pointer"
            />
            <img
              src="/Instagram.png"
              alt="Instagram"
              class="w-5 h-5 cursor-pointer"
            />
            <img
              src="/Youtube.png"
              alt="YouTube"
              class="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
        {/* <!-- COL-2 --> */}
        <div class="w-full sm:w-[45%] lg:w-auto">
          <h1 class="font-medium text-md mb-5">Quick Links</h1>
          <div class="flex flex-col gap-2.5">
            <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" class="text-gray-600 hover:text-gray-900"
              >Resource Center</a
            >
          </div>
        </div>
        {/* <!-- COL-3 --> */}
        <div class="flex flex-col gap-3 max-w-sm w-full">
          <h1 class="font-medium text-md">Newsletter</h1>
          <p class="text-sm text-gray-700">Over 750+ people have subscribed.</p>
          <div
            class="flex flex-col sm:flex-row sm:items-center gap-2 mt-4 mb-4"
          >
            <input
              type="text"
              placeholder="Enter Your Email"
              class="text-sm w-full px-4 py-3 rounded border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4EA291]"
            />
            <button
              class="bg-[#4EA291] text-white py-2.5 px-6 rounded w-full sm:w-auto hover:bg-[#3d8476] transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* <!-- HR LINE --> */}
      <div class="px-6 lg:px-16">
        <hr class="border border-gray-300" />
      </div>
      {/* <!-- LAST TEXT --> */}
      <div>
        <p class="text-gray-600 text-sm text-center py-3">
          Copyright ©2023 Bensan | All rights reserved
        </p>
      </div>
    </div>
        </div>
    )
}
export default Footer;