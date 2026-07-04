import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from "./components/Calendar";
import WelcomePage from "./components/WelcomePage";
import Admin from "./components/Admin";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/booking" element={<Calendar />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
