import React from "react";
import Nav from "../components/Nav";
import hero from "../assets/ReadMore/sugar_cosmetics_pzguaf.png";
import gif1 from "../assets/ReadMore/GIF_1_xmrtb4.gif";
import gif2 from "../assets/ReadMore/GIF_2_rdbfts.gif";
import gif4 from "../assets/ReadMore/GIF_4_ldtcay.gif";
import gif5 from "../assets/ReadMore/GIF_5_rufkim.gif";
import gif6 from "../assets/ReadMore/GIF_6_lreypy.gif";
import inf1 from "../assets/ReadMore/Influencer_1S_g7eeeq.png";
import inf2 from "../assets/ReadMore/Influencer_2S_aplqdj.png";
import inf3 from "../assets/ReadMore/Influencer_3S_b9i4kr.png";
import inf4 from "../assets/ReadMore/Influencer_4S_n1hles.png";
import inf5 from "../assets/ReadMore/Influencer_5S_ihboxz.png";
import inf6 from "../assets/ReadMore/Influencer_6S_wjacbm.png";
import diamond from "../assets/ReadMore/diamond_jwp0xg.png";
import faqImg from "../assets/faq_rvlham.png";

// --- Utility Components (Kept from previous, adjusted DonutChart logic slightly) ---

// Simple Donut chart using CSS conic-gradient for fast rendering
function DonutChart({ segments = [], size = 140, thickness = 28 }) {
  const total = segments.reduce((s, it) => s + (it.value || 0), 0) || 1;
  let cumulative = 0;
  const stops = segments.map((s) => {
    const pct = (s.value / total) * 100;
    const from = cumulative;
    cumulative += pct;
    const to = cumulative;
    return `${s.color} ${from}% ${to}%`;
  });
  const bg = `conic-gradient(${stops.join(",")})`;

  return (
    <div style={{ width: size, height: size }} className="mx-auto relative">
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          background: bg,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: thickness,
          top: thickness,
          right: thickness,
          bottom: thickness,
          borderRadius: "9999px",
          background: "#fff",
        }}
      />
    </div>
  );
}

function Legend({ color = "#000", label = "" }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-4 h-2 rounded-sm block"
        style={{ background: color }}
      />
      <span>{label}</span>
    </div>
  );
}

// --- NEW/UPDATED Results Section Components ---

// A component to create the partially or fully filled donut/circle
function DataCircle({
  size = 64,
  fill = 100,
  color = "#fcd34d",
  bgColor = "#e5e7eb",
  children,
}) {
  // Fill is a percentage (0 to 100).
  // We use conic-gradient to create the fill effect.
  const conicGradient = `conic-gradient(${color} 0% ${fill}%, ${bgColor} ${fill}% 100%)`;
  const innerSize = size * 0.7; // 70% inner circle

  return (
    <div
      style={{ width: size, height: size, background: conicGradient }}
      className="rounded-full flex items-center justify-center"
    >
      {/* Inner white circle for the donut effect */}
      <div
        style={{ width: innerSize, height: innerSize }}
        className="rounded-full bg-white flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  );
}

// Reusable component for the main total in the Results section (Fully filled circle)
function ResultTotal({ count, label }) {
  const size = 112; // Large size for the total
  const innerSize = size * 0.75; // 75% inner circle for thinner donut

  return (
    <div className="flex items-center gap-6 min-w-[200px] justify-start">
      {/* The outer circle is fully yellow, inner is white with the text */}
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-[#fcd34d] flex items-center justify-center"
      >
        <div
          style={{ width: innerSize, height: innerSize }}
          className="rounded-full bg-white flex items-center justify-center text-3xl font-semibold text-gray-800"
        >
          {count}
        </div>
      </div>
      <div className="text-3xl font-semibold text-gray-700">{label}</div>
    </div>
  );
}

// Reusable component for the breakdown items
function ResultBreakdownItem({
  count,
  label,
  totalValue,
  partValue,
  color = "#fcd34d",
  isGray = false,
}) {
  let fillPercentage = 0;
  if (totalValue > 0) {
    fillPercentage = (partValue / totalValue) * 100;
  }

  // For "Posts" and "Comments", which are 0 or very small, just show a mostly gray circle.
  // Use the screenshot's distinct gray for the 0 Posts/Comments
  const visualColor = isGray ? "#e5e7eb" : color;
  const visualFill = isGray ? 5 : fillPercentage; // Small sliver of fill for visual effect on 0 or just fill based on calc

  return (
    <div className="flex items-center gap-4 min-w-[150px]">
      <DataCircle
        size={64}
        fill={isGray && count !== 0 ? 100 : visualFill} // Force 100% fill for gray if count > 0, otherwise use calculated or sliver
        color={visualColor}
      ></DataCircle>

      <div className="text-left">
        <div className="text-xl font-semibold text-gray-800">{count}</div>
        <div className="text-xs text-gray-500 font-medium">{label}</div>
      </div>
    </div>
  );
}

// Lightweight parallax image component
function ParallaxImage({ src, alt = "", className = "", strength = 0.18 }) {
  const ref = React.useRef(null);
  const targetRef = React.useRef(0);
  const currentRef = React.useRef(0);
  const rafRef = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function updateTarget() {
      const rect = el.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const center = rect.top + rect.height / 2 - viewportHeight / 2;
      // target translate
      targetRef.current = -center * strength;
    }

    function animate() {
      const diff = targetRef.current - currentRef.current;
      // lerp towards target (0.12 is smoothing factor)
      currentRef.current += diff * 0.12;
      // apply transform
      el.style.transform = `translateY(${currentRef.current}px)`;
      // continue animation while not settled
      if (Math.abs(diff) > 0.1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    }

    function onScroll() {
      updateTarget();
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    // initial
    updateTarget();
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover block" />
    </div>
  );
}

// --- Main ReadMore Component ---

export default function ReadMore() {
  // Define the color used in the screenshot for the main metrics
  const primaryYellow = "#fcd34d"; // Or a similar bright yellow/orange
  const primaryOrange = "#fb923c"; // For Impressions and Engagement

  return (
    <div className="min-h-screen bg-white">
      <Nav /> {/* Assuming Nav component is imported */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        {/* Hero */}
        <section className="text-center py-12">
          <img
            src={hero}
            alt="brand"
            className="mx-auto w-40 h-40 object-contain"
          />
          <h2 className="text-xl text-gray-700 mt-4">Sugar Cosmetics</h2>
          <div className="text-sm text-yellow-700 mt-2">#MySkinMyChoice</div>
          <p className="max-w-2xl mx-auto text-gray-500 mt-4">
            Sugar Cosmetics is a brand that believes in empowerment. That's why,
            they carefully curate products from around the globe which meet
            every want and need there could possibly be when it comes to your
            makeup and skincare regime.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-600">
            <div>
              <div className="text-3xl font-semibold">6</div>
              <div className="text-sm">Influencers</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">12</div>
              <div className="text-sm">Content Pieces</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">773K+</div>
              <div className="text-sm">Estimated Impressions</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">34K+</div>
              <div className="text-sm">Engagement</div>
            </div>
          </div>
        </section>

        {/* Gallery Section – OPA-style horizontal staggered arrangement (Using previous structure) */}
        <section className="mt-12 w-full">
          <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center items-start gap-6 px-4 md:px-8">
            {/* GIF 1 */}
            <div className="w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-[280px] sm:h-[300px] md:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={gif1}
                alt="gif1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* GIF 2 */}
            <div className="w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-[240px] sm:h-[260px] md:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden shadow-lg mt-10">
              <img
                src={gif2}
                alt="gif2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* GIF 3 + GIF 4 stacked */}
            <div className="flex flex-col gap-6">
              <div className="w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-[200px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={gif4}
                  alt="gif4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-[200px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={gif5}
                  alt="gif5"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* GIF 5 */}
            <div className="w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-[240px] sm:h-[260px] md:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden shadow-lg mt-10">
              <img
                src={gif6}
                alt="gif6"
                className="w-full h-full object-cover"
              />
            </div>

            {/* GIF 6 */}
            {/* <div className="w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-[280px] sm:h-[300px] md:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={gif2}
                alt="gif7"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>
        </section>

        {/* Campaign Setup */}
        <section className="my-28 text-center relative">
          {/* decorative diamonds */}
          <img
            src={diamond}
            alt="dec"
            className="hidden md:block absolute left-8 top-1/3 w-6 opacity-80 transform -translate-y-1/2"
          />
          <img
            src={diamond}
            alt="dec"
            className="hidden md:block absolute right-8 top-1/3 w-6 opacity-80 transform -translate-y-1/2"
          />

          <h3 className="text-5xl md:text-6xl font-light tracking-tight text-gray-800">
            Campaign Setup
          </h3>
          <p className="max-w-xl mx-auto text-gray-500 mt-6 leading-relaxed text-center">
            Our aim for this campaign was to promote and get influencers onboard
            who are comfortable in their own skin and embrace their unique skin
            tone. The message conveyed through the campaign was to choose the
            right shade of foundation and not apply different shades to look in
            stereotypical way. The creators were asked to show half face shaded
            in lighter shade of foundation and other half in their skin tone and
            were requested to say how everyone should do the same, as - one
            feels more comfortable in their complexion.
          </p>
        </section>

        {/* Influencer selection - styled like screenshot */}
        <section className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: big heading + copy */}
          <div className="px-4 md:px-0">
            <div>
              <div className="relative inline-block">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 leading-tight">
                  Influencer
                </h3>
                <span className="absolute left-0 -bottom-2 h-4 w-40 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 -translate-x-2"></span>
                <img
                  src={diamond}
                  alt="dec"
                  className="absolute left-10 -top-2 w-3"
                />
              </div>

              <div className="relative inline-block mt-4">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 leading-tight">
                  Selection
                </h3>
                <span className="absolute left-0 -bottom-2 h-4 w-40 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 -translate-x-3"></span>
                <img
                  src={diamond}
                  alt="dec"
                  className="absolute left-12 -top-2 w-3"
                />
              </div>
            </div>

            <p className="text-gray-500 mt-6 max-w-lg">
              Influencers from Beauty and Make-up segment across country, with
              100K followers & great aesthetic appeal were chosen to ensure
              maximum reach of the message - MySkinMyChoice. Influencers were
              given liberty to add personal touch to the video to bring organic
              flow in the video.
            </p>
          </div>

          {/* Right: stacked influencer images in two columns */}
          <div className="flex justify-center">
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 items-center">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={inf1}
                    className="w-full h-full object-cover"
                    alt="inf1"
                  />
                </div>
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={inf3}
                    className="w-full h-full object-cover"
                    alt="inf3"
                  />
                </div>
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={inf5}
                    className="w-full h-full object-cover"
                    alt="inf5"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={inf2}
                    className="w-full h-full object-cover"
                    alt="inf2"
                  />
                </div>
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={inf4}
                    className="w-full h-full object-cover"
                    alt="inf4"
                  />
                </div>
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={inf6}
                    className="w-full h-full object-cover"
                    alt="inf6"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audience Insights (charts) - Kept original DonutChart for this section */}
        <section className="mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Followers Chart */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h5 className="text-lg font-semibold mb-4">Followers</h5>
                <DonutChart
                  segments={[
                    { color: "#38bdf8", value: 20 },
                    { color: "#fb923c", value: 35 },
                    { color: "#fcd34d", value: 25 },
                    { color: "#10b981", value: 20 },
                  ]}
                />
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
                  <Legend color="#10b981" label="1k-5k" />
                  <Legend color="#38bdf8" label="5K-10K" />
                  <Legend color="#fb923c" label="10K-50K" />
                  <Legend color="#fcd34d" label="50K+" />
                </div>
              </div>

              {/* Interests Chart */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h5 className="text-lg font-semibold mb-4">Interests</h5>
                <DonutChart
                  segments={[
                    { color: "#10b981", value: 50 },
                    { color: "#38bdf8", value: 20 },
                    { color: "#fb923c", value: 15 },
                    { color: "#fcd34d", value: 15 },
                  ]}
                />
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
                  <Legend color="#10b981" label="Beauty" />
                  <Legend color="#38bdf8" label="Fashion" />
                  <Legend color="#fb923c" label="Lifestyle" />
                  <Legend color="#fcd34d" label="Other" />
                </div>
              </div>

              {/* City Chart */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h5 className="text-lg font-semibold mb-4">City</h5>
                <DonutChart
                  segments={[
                    { color: "#38bdf8", value: 60 },
                    { color: "#10b981", value: 20 },
                    { color: "#fb923c", value: 12 },
                    { color: "#fcd34d", value: 8 },
                  ]}
                />
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
                  <Legend color="#10b981" label="Metro" />
                  <Legend color="#38bdf8" label="Tier 1" />
                  <Legend color="#fb923c" label="Tier 2" />
                  <Legend color="#fcd34d" label="Tier 3" />
                </div>
              </div>

              {/* Age Chart */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h5 className="text-lg font-semibold mb-4">Age</h5>
                <DonutChart
                  segments={[
                    { color: "#38bdf8", value: 70 },
                    { color: "#fb923c", value: 15 },
                    { color: "#fcd34d", value: 10 },
                    { color: "#10b981", value: 5 },
                  ]}
                />
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
                  <Legend color="#fcd34d" label="0-18" />
                  <Legend color="#38bdf8" label="18-25" />
                  <Legend color="#fb923c" label="25-35" />
                  <Legend color="#10b981" label="35+" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results - OPA-style cards with correct circle logic */}
        <section className="mt-12">
          <div className="w-full text-left mb-4">
            <div className="relative inline-block">
              <h4 className="text-4xl font-light text-gray-800">Results</h4>
              <span className="absolute left-0 -bottom-3 h-2 w-40 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 -translate-x-2"></span>
            </div>
          </div>
          <div className="mt-6 space-y-6">
            {/* Card 1 - Content Pieces */}
            <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between">
              {/* Left Side (Total) */}
              <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <ResultTotal count="12" label="Content Pieces" />
              </div>

              {/* Separator and Right Side (Breakdown) */}
              <div className="flex items-center justify-center w-full md:w-auto">
                <div className="hidden md:block text-5xl font-light text-gray-800 mx-8">
                  =
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-center justify-center space-x-0 md:space-x-6 gap-6 md:gap-0 mt-4 md:mt-0">
                  <ResultBreakdownItem
                    count="6"
                    label="Reels & Videos"
                    totalValue={12}
                    partValue={6}
                    color={primaryYellow}
                  />

                  <div className="text-3xl font-light text-gray-800 hidden md:block">
                    +
                  </div>

                  <ResultBreakdownItem
                    count="0"
                    label="Posts"
                    totalValue={12}
                    partValue={0}
                    color={primaryYellow}
                    isGray={true}
                  />

                  <div className="text-3xl font-light text-gray-800 hidden md:block">
                    +
                  </div>

                  <ResultBreakdownItem
                    count="6"
                    label="Stories"
                    totalValue={12}
                    partValue={6}
                    color={primaryYellow}
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - Impressions */}
            <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between">
              {/* Left Side (Total) */}
              <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <ResultTotal count="773K" label="Impressions" />
              </div>

              {/* Separator and Right Side (Breakdown) */}
              <div className="flex items-center justify-center w-full md:w-auto">
                <div className="hidden md:block text-5xl font-light text-gray-800 mx-8">
                  =
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-center justify-center space-x-0 md:space-x-6 gap-6 md:gap-0 mt-4 md:mt-0">
                  <ResultBreakdownItem
                    count="615K"
                    label="Reels & Videos"
                    totalValue={773} // Simplified for percentage calc
                    partValue={615}
                    color={primaryOrange}
                  />

                  <div className="text-3xl font-light text-gray-800 hidden md:block">
                    +
                  </div>

                  <ResultBreakdownItem
                    count="0"
                    label="Posts"
                    totalValue={773}
                    partValue={0}
                    color={primaryOrange}
                    isGray={true}
                  />

                  <div className="text-3xl font-light text-gray-800 hidden md:block">
                    +
                  </div>

                  <ResultBreakdownItem
                    count="158K"
                    label="Stories"
                    totalValue={773}
                    partValue={158}
                    color={primaryOrange}
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - Engagement */}
            <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between">
              {/* Left Side (Total) */}
              <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <ResultTotal count="34K" label="Engagement" />
              </div>

              {/* Separator and Right Side (Breakdown) */}
              <div className="flex items-center justify-center w-full md:w-auto">
                <div className="hidden md:block text-5xl font-light text-gray-800 mx-8">
                  =
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-center justify-center space-x-0 md:space-x-6 gap-6 md:gap-0 mt-4 md:mt-0">
                  <ResultBreakdownItem
                    count="34K"
                    label="Likes"
                    totalValue={34495} // 34K + 495
                    partValue={34000}
                    color={primaryOrange}
                  />

                  <div className="text-3xl font-light text-gray-800 hidden md:block">
                    +
                  </div>

                  <ResultBreakdownItem
                    count="495"
                    label="Comments"
                    totalValue={34495}
                    partValue={495}
                    color={primaryOrange}
                    isGray={false} // Small fill, but not fully gray
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        {/* <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mx-auto md:mx-0 md:order-2">
            <img src={heart} alt="heart" className="w-60 h-60 object-cover rounded-full" />
          </div>
          <div className="md:order-1">
            <h4 className="text-3xl font-semibold">Conclusion</h4>
            <p className="text-gray-500 mt-4">Influencers successfully positioned Sugar's Foundation Stick as a solution for perfect shade & established it as quintessential Foundation for Indian Skin Tone. The campaign generated strong engagement and impressions.</p>
          </div>
        </section> */}

        {/* --- UPDATED CONCLUSION SECTION --- */}
        <section className="mt-28 mb-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image (Placeholder to match screenshot layout) */}
          {/* <div className="md:order-1 flex justify-center md:justify-start">
    <img 
      src={faqImg} 
      alt="Influencer thought process" 
      className="w-full max-w-sm h-auto rounded-xl shadow-2xl" 
      style={{ aspectRatio: '4/5' }} 
    />
  </div> */}

          <ParallaxImage
            className="w-72 h-96 overflow-hidden rounded-b-full"
            src={faqImg}
            alt="faq"
            strength={0.16}
          />

          {/* Right Side: Text & Heading */}
          <div className="md:order-2 px-4 md:px-0 relative">
            {/* Heading with Underline Effect */}
            <div className="relative inline-block mb-8">
              <h4 className="text-5xl md:text-6xl font-light text-gray-800 tracking-tight">
                Conclusion
              </h4>
              <span className="absolute left-0 -bottom-2 h-4 w-40 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 translate-y-3"></span>
            </div>

            {/* Decorative Diamonds - positioned near the text block */}
            <div className="absolute top-0 right-0 hidden md:flex gap-1">
              <img src={diamond} alt="dec" className="w-4 h-4 opacity-80" />
              <img src={diamond} alt="dec" className="w-4 h-4 opacity-80" />
            </div>

            {/* Text Content matching the screenshot */}
            <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
              The primary goal of generating awareness about choosing the
              correct foundation shade basis their actual skin tone was
              delivered effectively. Influencers were able to communicate &amp;
              share their problem of struggling to find the correct skin tone
              &amp; compromising with either a lighter or darker shade, this
              communication resonated &amp; viewers could relate to the same
              problem which translated into staggering **800K Impressions** and
              **35K Engagements**. Influencers successfully positioned Sugar's
              Foundation Stick as a solution for perfect shade &amp; established
              it as quintessential Foundation for Indian Skin Tone.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
