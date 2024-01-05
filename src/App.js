import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./routes/home/Home";
import Furniture from "./routes/furniture/Furniture";
import Shop from "./routes/shop/Shop";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/furniture" exact element={<Furniture />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
