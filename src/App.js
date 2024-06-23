import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Phone from "./Pages/Phone"
import Tab from "./Pages/Tab"
import Mac from "./Pages/Mac"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/iphone" element={<Phone />} />
        <Route path="/ipad" element={<Tab />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
