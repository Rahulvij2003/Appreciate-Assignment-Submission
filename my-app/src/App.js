import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from './components/Slider/Slider';
import Faq from './components/Faq/Faq';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      {/* <SliderComponent/> */}
      {/* <Faq/> */}
      <Router>
      <Routes>
        <Route path="/" element={<SliderComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} /> {/* Add route for FAQ */}
        <Route path="/login" element={<Login />} /> {/* Add route for Login */}
      </Routes>
    </Router>
    
    </div>

  );
}

export default App;
