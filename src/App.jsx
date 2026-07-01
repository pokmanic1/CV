import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hero from "./pagini/Hero"
import Portofoliu from "./pagini/Portofoliu"
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/portofoliu" element={<Portofoliu />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
