import React from "react";

function Maping() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16">
      {/* MAP-IMAGE PAGE-4 */}
      <div className="relative">
        {/* MAP IMAGE */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.9905420392!2d72.75643710618309!3d33.61625093521127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1756903567088!5m2!1sen!2s"
          className="w-full h-[450px] rounded-md"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>

        {/* MAP-TEXT */}
        <section className="flex flex-col lg:flex-row rounded-lg overflow-hidden px-4 sm:px-8 lg:px-16 gap-6 lg:gap-0 -mt-20 relative z-10">
          {/* FORM */}
          <div className="bg-white w-full lg:w-[600px] flex flex-col gap-2 py-8 sm:py-12 px-6 sm:px-10 shadow-md">
            <h1 className="font-medium text-xl sm:text-2xl">Write a message</h1>
            <p className="font-normal text-sm sm:text-base py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br className="hidden sm:block" />
              sed do eiusmod tempor incididunt ut labore
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-100 px-3 py-2 placeholder-gray-400 w-full rounded"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-gray-100 px-3 py-2 placeholder-gray-400 w-full rounded"
              />
              <textarea
                placeholder="Message"
                className="bg-gray-100 px-3 py-2 h-28 placeholder-gray-400 w-full resize-none rounded"
              ></textarea>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#4EA291] text-white py-2 px-6 text-sm rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* CONTACT-INFO */}
          <div className="bg-[#4EA291] w-full lg:w-[550px] text-white py-8 sm:py-12 px-6 sm:px-10 flex flex-col gap-4">
            <div>
              <h1 className="font-medium text-xl sm:text-2xl">Contact Information</h1>
              <p className="font-normal text-sm sm:text-base py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br className="hidden sm:block" />
                elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>

            {/* PHONE */}
            <div>
              <p className="font-semibold">PHONE</p>
              <p className="font-normal text-sm">(12+) 123 3456</p>
              <p className="font-normal text-sm">(12+) 123 3456</p>
            </div>

            {/* EMAIL */}
            <div>
              <p className="font-semibold">EMAIL</p>
              <p className="font-normal text-sm">info@yoursite.com</p>
              <p className="font-normal text-sm">support@yoursite.com</p>
            </div>

            {/* LOCATION */}
            <div>
              <p className="font-semibold">LOCATION</p>
              <p className="font-normal text-sm">121th Haidezign st, Melbourne,</p>
              <p className="font-normal text-sm">AUS 12313</p>
            </div>

            {/* SOCIAL */}
            <div className="pt-4">
              <h1 className="font-medium text-lg sm:text-xl">Social Links</h1>
              <div className="flex gap-2 mt-2 flex-wrap">
                <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                  <img src="face.png" />
                </div>
                <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                  <img src="twit.png" />
                </div>
                <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                  <img src="insta.png" />
                </div>
                <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                  <img src="yout.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Maping;
