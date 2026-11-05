import { Routes,Route } from 'react-router';
import { HomePage } from './pages/HomePage.tsx';
import { Checkout } from './pages/Checkout.tsx';
import { Orders } from './pages/Orders.tsx'
import { Tracking } from './pages/Tracking.tsx'
import './App.css'

function App() {
  return (
    <Routes>
    <Route index element={<HomePage />} />
    <Route path="checkout" element={<Checkout />} />
    <Route path="orders" element={<Orders />} />
    <Route path="tracking" element={<Tracking />} />
  </Routes>
  )
}

export default App
