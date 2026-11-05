import { Routes,Route } from 'react-router'
import { HomePage } from './pages/HomePage.tsx'
import { Checkout } from './pages/Checkout.tsx'
import './App.css'

function App() {
  return (
    <Routes>
    <Route index element={<HomePage />} />
    <Route path="checkout" element={<Checkout />} />
  </Routes>
  )
}

export default App
