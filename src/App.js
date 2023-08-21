import {Route, Routes, BrowserRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mainpage from "./page/Mainpage";
import Hear from "./page/Hear";
import Tell from "./page/Tell";
import Report from "./page/Report";

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path={"/tell"} element={<Tell/>}/>
        <Route path={"/hear"} element={<Hear/>}/>
        <Route path={"/report"} element={<Report/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
