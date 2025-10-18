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

export default function Blog() {
  const posts = [
    {
      id: 1,
      img: img1,
      title: "How to Earn Money from Instagram?",
      excerpt: "How to Earn Money from Instagram",
      slug: "/readmore",
    },
    {
      id: 2,
      img: img2,
      title: "Top 10 Influencer Marketing Agencies in India",
      excerpt:
        "Influencers have a substantial following and can influence consumers.",
      slug: "/readmore",
    },
    {
      id: 3,
      img: img3,
      title: "How to increase views on Instagram reels",
      excerpt: "Quick tips to increase views on reels.",
      slug: "/readmore",
    },
    {
      id: 4,
      img: img4,
      title: "Increase Instagram Followers",
      excerpt: "7 steps guide to grow followers.",
      slug: "/readmore",
    },
    {
      id: 5,
      img: img5,
      title: "Micro influencer Marketing - A Comprehensive Guide",
      excerpt: "Micro influencer marketing explained.",
      slug: "/readmore",
    },
    {
      id: 6,
      img: img6,
      title: "21 Facts About Social Media Influencers",
      excerpt: "Facts related to social media influencers in India.",
      slug: "/readmore",
    },
    {
      id: 7,
      img: img7,
      title: "What Type of Brands should use Influencer Marketing",
      excerpt: "Brands who can benefit from influencer marketing.",
      slug: "/readmore",
    },
    {
      id: 8,
      img: img8,
      title: "Why Brands Need To Leverage Micro-Influencers",
      excerpt: "Read more about micro-influencers.",
      slug: "/readmore",
    },
    {
      id: 9,
      img: img9,
      title: "Influencer Management - Tips to Manage",
      excerpt: "Tips to manage influencer marketing campaigns.",
      slug: "/readmore",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="mb-8 w-full text-left">
          <div className="relative w-full">
            <h2 className="text-5xl font-light text-gray-800">Blog</h2>
            <span className="absolute left-0 -bottom-3 h-2 w-40 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500"></span>
          </div>
          <p className="text-gray-500 mt-4 text-left">
            a glimpse into whats been happening
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {posts.map((post) => (
            <article key={post.id} className="bg-white text-left">
              <a
                href={post.slug}
                className="block overflow-hidden rounded-md border"
              >
                <div className="w-full h-48 bg-gray-100">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>

              <div className="mt-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{post.excerpt}</p>
                <a
                  href={post.slug}
                  className="inline-block mt-4 text-sm text-gray-700"
                >
                  Read more→
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
