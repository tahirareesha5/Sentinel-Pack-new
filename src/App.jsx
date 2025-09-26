
import { Routes, Route } from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import Product from "./product/page";
import Contact from "./contact/page";
import Extrapage from "./extrapage/page";
function App() {
  return (
    <>
      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extrapage" element={<Extrapage />} />
         <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
