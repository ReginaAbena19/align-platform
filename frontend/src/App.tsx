import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from "./components/Calendar";
import WelcomePage from "./components/WelcomePage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Booking" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
