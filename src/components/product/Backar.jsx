function Backar () {
    return (
        <div>
            <div class="px-4 sm:px-6 md:px-12 lg:px-16">
            <div class="flex flex-col md:flex-row justify-between py-6 md:py-12">
              {/* <!-- BACK BTN --> */}
  <div class="flex gap-2 items-center mb-4 md:mb-0">
   <img src="/back-arr.png" alt="" class="w-4"/>
    <p class="font-medium text-lg">Back</p>
  </div>
  {/* <!-- SEARCH --> */}
  <div class="w-full md:w-auto">
    <input 
      type="text" 
      placeholder="Enter Your Email" 
      class="shadow-sm w-full md:w-[300px] px-4 py-3 rounded border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4EA291]"/>
  </div>
  </div>
  </div>
</div>
    )
}
export default Backar;