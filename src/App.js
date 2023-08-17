import {Route, Routes, BrowserRouter} from "react-router-dom";
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mainpage from "./page/Mainpage";
import Instancepage from "./page/Instancepage";

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/instance" element={<Instancepage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
