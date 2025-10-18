import './App.css'
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'
import ReadMore from './pages/ReadMore'
import Footer from './components/Footer'

function App(){
  const path = typeof window !== 'undefined' ? window.location.pathname : '/'

  if (path === '/readmore') {
    return (
      <>
        <ReadMore />
        <Footer />
      </>
    )
  }

  return (
    <>
      {path === '/case-studies' ? <CaseStudies /> : <Home />}
      <Footer />
    </>
  )
}

export default App
