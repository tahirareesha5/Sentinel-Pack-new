import React from "react";

function Description() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16">
      {/* BACK-SEARCH-TEXT PAGE-4 */}
      <section className="flex flex-col lg:flex-row py-6 sm:py-10 lg:py-4 mt-6 lg:mt-16 gap-4">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3 w-full">
          {/* TABS */}
          <div className="flex flex-col sm:flex-row sm:gap-8 md:gap-16 lg:gap-28">
            <h1 className="font-medium text-md">Description</h1>
            <h1 className="font-medium text-md">Reviews (1)</h1>
          </div>

          {/* HR */}
          <div>
            <hr className="w-full sm:w-[450px] md:w-[550px] lg:w-[650px] border border-gray-400" />
          </div>

          {/* TEXT */}
          <div>
            <p className="font-normal text-sm sm:text-base md:text-md text-gray-500 leading-relaxed ml-1 sm:ml-3 max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[650px]">
              Traditionally, the BWE has been studied in serial supply chains. That is also the
              setting of the famous beer game, where the typical demand pattern across the supply
              chain looks like this: for a relatively small change in demand seen by the retailer,
              the demand variability progressively increases at the more upstream wholesaler,
              distributor, and factory (see the figure below). This leads to capacity shortages,
              stockouts, excess inventory, and increased operational costs. No wonder BWE has a lot
              of attention among academics and practitioners alike.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-2 lg:gap-4 w-full lg:w-auto">
          <h1 className="font-medium text-md mb-2 sm:mb-4">Additional Information</h1>

          <div className="flex flex-col">
            <p className="font-medium text-sm sm:text-md text-gray-600">DIMENTIONS</p>
            <p className="font-normal text-sm sm:text-md text-gray-500">3x3x3</p>
          </div>

          <div className="flex flex-col">
            <p className="font-medium text-sm sm:text-md text-gray-600">Weight</p>
            <p className="font-normal text-sm sm:text-md text-gray-500">0.75 Ibs</p>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-col gap-3 mt-0 lg:mt-6">
        <h1 className="font-medium text-md text-gray-600">Product Details:</h1>
        <ul className="list-disc pl-4 sm:pl-5 space-y-1">
          <li className="font-normal text-sm sm:text-md text-gray-500">Exclusively handmade</li>
          <li className="font-normal text-sm sm:text-md text-gray-500">Antique gold charms</li>
          <li className="font-normal text-sm sm:text-md text-gray-500">
            Semi precious round smooth gemstone
          </li>
          <li className="font-normal text-sm sm:text-md text-gray-500">8mm beads</li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
