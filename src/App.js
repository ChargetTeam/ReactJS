import logo from './logo.svg';
import './App.css';
import Package from './components/Package';
import Internet from './screens/Internet';
import ChargeScreen from './screens/ChargeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './screens/Contact';
import Success from './screens/Success';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route exact path="/" element={<Internet />} />
        <Route exact path="/charge" element={<ChargeScreen />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
}

export default App;
