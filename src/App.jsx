import "./App.css";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import ReadMore from "./pages/ReadMore";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/readmore") {
    return (
      <>
        <ReadMore />
        <Footer />
      </>
    );
  }

  if (path === "/blog") {
    return (
      <>
        <Blog />
        <Footer />
      </>
    );
  }

  if (path === "/contact") {
    return (
      <>
        <Contact />
        <Footer />
      </>
    );
  }

  // blog post pages like /blog/post-1
  if (path.startsWith("/blog/") && path !== "/blog") {
    return (
      <>
        <Post />
        <Footer />
      </>
    );
  }

  return (
    <>
      {path === "/case-studies" ? <CaseStudies /> : <Home />}
      <Footer />
    </>
  );
}

export default App;
