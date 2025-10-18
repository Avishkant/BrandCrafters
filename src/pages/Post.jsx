import React from "react";
import Nav from "../components/Nav";
import img1 from "../assets/blog/Earn_money_on_Instagram_a24cbu.png";
import img2 from "../assets/blog/blog_2-1p_tbid1a.png";
import img3 from "../assets/blog/How_to_increase_views_on_Instagram_Reels_whxqup.png";
import img4 from "../assets/blog/Increse_Instagram_Followers_wx1xeu.png";
import img5 from "../assets/blog/OPA_Fr_Image_k3eojm.jpg";
import img6 from "../assets/blog/blog7-1_hbjy18.jpg";
import img7 from "../assets/blog/PHOTO-2022-10-28-16-16-54_otcysf.jpg";
import img8 from "../assets/blog/PHOTO-2022-10-19-11-27-20_zlv95n.jpg";
import img9 from "../assets/blog/IMG-20221001-WA0003_tabpq7.jpg";

const POSTS = {
  "post-1": {
    title: "How to Earn Money from Instagram?",
    img: img1,
    content: `Monetizing Instagram has become approachable for creators and brands. Start by defining your niche, creating consistent high-quality content, partnering with brands, using affiliate links, and leveraging features like Reels and Stories to drive engagement. Keep an editorial calendar and track performance.`,
  },
  "post-2": {
    title: "Top 10 Influencer Marketing Agencies in India",
    img: img2,
    content: `Agency selection matters. Look for case studies, transparent reporting, audience understanding and a roster of influencers that matches your brand. A great agency handles end-to-end execution: creator discovery, contracting, content briefs, and performance reporting.`,
  },
  "post-3": {
    title: "How to increase views on Instagram reels",
    img: img3,
    content: `Reels reward early engagement and watch-time. Use strong hooks in the first 2 seconds, vertical composition, trending audio, and clear captions. Post consistently and cross-promote your reel to Stories and other platforms.`,
  },
  "post-4": {
    title: "Increase Instagram Followers",
    img: img4,
    content: `Growing followers requires a mix of quality content, community engagement, and discoverability. Use consistent visual language, collaborate with micro-influencers in your niche, and encourage saves and shares to improve algorithmic reach.`,
  },
  "post-5": {
    title: "Micro influencer Marketing - A Comprehensive Guide",
    img: img5,
    content: `Micro-influencers often have higher engagement and niche audiences. Run pilot campaigns with a handful of creators, measure CPC/CPM and engagement uplift, then scale the ones delivering the best ROI.`,
  },
  "post-6": {
    title: "21 Facts About Social Media Influencers",
    img: img6,
    content: `Influencers performance varies by platform and content type. Short-form video often drives the best impressions, while long-form builds authority. Always align creative briefs to platform best practices.`,
  },
  "post-7": {
    title: "What Type of Brands should use Influencer Marketing",
    img: img7,
    content: `Most consumer brands can benefit from influencer marketing when they have a clear message and product-market fit. Start small, measure uplift, then expand the creator mix.`,
  },
  "post-8": {
    title: "Why Brands Need To Leverage Micro-Influencers",
    img: img8,
    content: `Micro-influencers bring authenticity and niche trust. For many brands, they offer a cost-effective way to test messaging and reach targeted segments.`,
  },
  "post-9": {
    title: "Influencer Management - Tips to Manage",
    img: img9,
    content: `Clear contracts, KPIs, and creative freedom balance are key. Maintain consistent communication and provide performance feedback to creators to build long-term relationships.`,
  },
};

export default function Post() {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  // expected path: /blog/post-1
  const parts = path.split("/").filter(Boolean);
  const slug = parts.length >= 2 ? parts[1] : null;

  const post = slug ? POSTS[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-6xl mx-auto px-6 pt-20 pb-24">
          <h2 className="text-3xl font-semibold">Post not found</h2>
          <p className="mt-4">
            We couldn't find the article you're looking for.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-24">
        <article>
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            {post.title}
          </h1>
          <div className="w-full h-72 overflow-hidden rounded-md mb-6">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose max-w-none text-gray-700">
            <p>{post.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <h3>Key takeaways</h3>
            <ul>
              <li>Start with a clear goal</li>
              <li>Measure performance and iterate</li>
              <li>Prefer authenticity over hard-sell</li>
            </ul>
            <p className="mt-6">
              If you'd like, this can be expanded with richer content, images,
              and embedded media per post.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
