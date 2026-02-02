import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhoneFrame from './components/PhoneFrame';
import Home from './pages/Home';
import DeliveryBalance from './pages/DeliveryBalance';

function App() {
  return (
    <PhoneFrame>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery-balance" element={<DeliveryBalance />} />
        </Routes>
      </BrowserRouter>
    </PhoneFrame>
  )
}

export default App
