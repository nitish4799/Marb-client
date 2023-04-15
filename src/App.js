import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Home/Footer'
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Financial from './Components/OurServices/Financial';
import Calci from './Components/OurServices/Calci';
import Installation from './Components/OurServices/Installation';
import Selection from './Components/OurServices/Selection';
import Interior from './Components/OurServices/Interior';
import Products from './Components/productsPage/Products';
import SingleProduct from './Components/productsPage/SingleProduct';
import ErrorPage from './Components/ErrorPage';
import Enquiry from './Components/Enquiry';
import Granite from './Components/Home/ProductCategories/Granite';
import Marble from './Components/Home/ProductCategories/Marble';
import Arts from './Components/Home/ProductCategories/Arts';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/financialanalyst" element={<Financial/>} />
        <Route path="/financialanalyst/calci" element={<Calci/>} />
        <Route path="/installation" element={<Installation/>} />
        <Route path="/selectionconsultancy" element={<Selection/>} />
        <Route path="/interior" element={<Interior/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/singleproduct/:id" element={<SingleProduct/>} />
        <Route path="/enquirycart" element={<Enquiry/>} />
        <Route path="/marble" element={<Marble/>} />
        <Route path="/granite" element={<Granite/>} />
        <Route path="/arts" element={<Arts/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
