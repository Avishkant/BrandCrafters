import React from "react";

function Card({ children }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center min-w-[200px]">
      {children}
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-6 py-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-medium text-gray-800 inline-block relative">
          Pricing
          <span className="absolute left-1/4 bottom-0 transform -translate-x-1/2 w-40 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-sm"></span>
        </h2>
        <p className="text-sm text-gray-500 mt-4">
          its an investment for present and future!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-8 justify-center">
        <Card>
          <h3 className="text-gray-700 mb-6">Influencer per campaign</h3>
          <div className="text-gray-400 space-y-6">
            <div>100-500</div>
            <div>500-1000</div>
            <div>1000-2500</div>
            <div>2500+</div>
          </div>
        </Card>

        <Card>
          <h3 className="text-gray-700 mb-6 flex items-center justify-center gap-3">
            Instagram{" "}
            <img
              src="/src/assets/instagram_jc1jx1.png"
              alt="ig"
              className="w-6 h-6"
            />
          </h3>
          <div className="text-gray-400 space-y-6">
            <div>Rs. 1000</div>
            <div>Rs. 900</div>
            <div>Rs. 800</div>
            <div>Rs. 700</div>
          </div>
        </Card>

        <Card>
          <h3 className="text-gray-700 mb-6 flex items-center justify-center gap-3">
            Youtube{" "}
            <img
              src="/src/assets/youtube_xtvmqp.png"
              alt="yt"
              className="w-6 h-6"
            />
          </h3>
          <div className="text-gray-400 space-y-6">
            <div>Rs. 1500</div>
            <div>Rs. 1300</div>
            <div>Rs. 1200</div>
            <div>Rs. 1000</div>
          </div>
        </Card>

        <Card>
          <h3 className="text-gray-700 mb-6">Product Trials</h3>
          <div className="text-gray-400 space-y-6">
            <div>Rs. 400</div>
            <div>Rs. 350</div>
            <div>Rs. 300</div>
            <div>Rs. 250</div>
          </div>
        </Card>
      </div>

      <p className="text-xs text-center text-gray-400 mt-8">
        * Above pricing includes shipping of products upto 1kg
        <br />* Above prices are exclusive of GST
      </p>
    </section>
  );
}
