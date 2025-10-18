import React, { useEffect, useRef } from "react";
import Button from "./Button";
import img1 from "../assets/discover1_mfunos.png";
import img2 from "../assets/discover2_aoabxg.png";
import img3 from "../assets/discover3_qrh3lz.png";

export default function Discover() {
  // keep a stable refs array across renders to satisfy hook lint rules
  const refs = useRef([null, null, null]);

  useEffect(() => {
    let rafId = null;
    const startScroll = window.scrollY;

    // Stronger parallax movement factors
    const factors = [0, 0.25, 0.4]; // discover1 static, discover2 & 3 move noticeably

    const update = () => {
      const delta = window.scrollY - startScroll;

      refs.current.forEach((r, i) => {
        const el = r;
        if (!el) return;

        const direction = -1; // opposite to scroll (parallax)
        const offset = delta * factors[i] * direction;

        el.style.transform = `translateY(${offset}px)`;
        el.style.willChange = "transform";
      });

      rafId = null;
    };

    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="discover"
      className="container mx-auto px-6 py-20 relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-medium text-gray-800 mb-4 relative inline-block">
            Discover
            <br />
            <span className="relative z-10">Best Influencers</span>
            <span className="absolute left-0 bottom-1 z-0 w-40 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-sm"></span>
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-lg">✦</span>
              <div>
                <strong>No Garbage</strong>
                <div className="text-sm">
                  opa manually vets & rates each influencer
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">✦</span>
              <div>
                <strong>Comprehensive Data</strong>
                <div className="text-sm">
                  use 30+ metrics like age, kids, profession, city, engagement,
                  etc.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">✦</span>
              <div>
                <strong>Insider Information</strong>
                <div className="text-sm">
                  use data from 4lakh+ collabs done by opa to find winners
                </div>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <Button>Get Started</Button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative" style={{ width: "560px", height: "550px" }}>
            {/* discover1 — static */}
            <div
              ref={(el) => (refs.current[0] = el)}
              className="absolute rounded-2xl overflow-hidden shadow-xl"
              style={{
                left: "0px",
                top: "0px",
                width: "220px",
                height: "420px",
                zIndex: 30,
              }}
            >
              <img
                src={img1}
                alt="person-1"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* discover2 — parallax */}
            <div
              ref={(el) => (refs.current[1] = el)}
              className="absolute rounded-2xl overflow-hidden shadow-xl"
              style={{
                left: "150px",
                top: "70px",
                width: "200px",
                height: "360px",
                zIndex: 20,
              }}
            >
              <img
                src={img2}
                alt="person-2"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* discover3 — parallax, larger and not cropped */}
            <div
              ref={(el) => (refs.current[2] = el)}
              className="absolute rounded-2xl overflow-hidden shadow-xl bg-white"
              style={{
                left: "300px",
                top: "140px",
                width: "220px",
                height: "480px", // taller
                zIndex: 10,
              }}
            >
              <img
                src={img3}
                alt="person-3"
                className="w-full h-full object-contain block bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
