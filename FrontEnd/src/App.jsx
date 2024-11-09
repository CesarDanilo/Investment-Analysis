import './App.css'
import Investments from './Views/Investments';
import Bitcoin from './Views/Bitcoin';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Investments />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
