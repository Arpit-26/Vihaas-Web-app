// import { useState } from 'react';
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import Careers from './components/Careers.jsx';
import ContactUs from './components/ContactUs.jsx';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
// import LocomotiveScroll from 'locomotive-scroll';
import CareersFresher from './components/CareersFresher.jsx';
import ApplyNowForm from './components/Carreers/ApplyNowForm.jsx';
import ProductPage from './components/Products/ProductPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  // const [count, setCount] = useState(0);

  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div>
        <Router>
          <ScrollToTop />
          <div className="App flex flex-col min-h-screen">
            <AnnouncementBar />
            <Navbar />
            <main
              // data-scroll
              // data-scroll-section
              // data-scroll-speed="1.4"
              className="flex-1 mt-24 "
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careersFresher" element={<CareersFresher />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/applicationForm" element={<ApplyNowForm />} />
                <Route path="/productPage" element={<ProductPage />} />
              </Routes>
            </main>

            <Footer
              // data-scroll
              // data-scroll-section
              // data-scroll-speed="2"
              className=" h-1/2"
            />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
