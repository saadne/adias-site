import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Consulting from "./pages/consulting/Consulting";
import Digitalization from "./pages/digitalization/Digitalization";
import OffShoring from "./pages/offShoring/OffShoring";
import Contact from "./pages/contact/Contact";
import Layout from "./pages/layout/Layout";
import NoPage from "./pages/noPage/NoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="digitalization" element={<Digitalization />} />
          <Route path="offShoring" element={<OffShoring />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
