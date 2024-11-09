import './App.css'
import Investments from './Views/Investments';
import Bitcoin from './Views/Bitcoin';
import Ethereum from './Views/Ethereum';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/investments" element={<Investments />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/ethereum" element={<Ethereum />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
