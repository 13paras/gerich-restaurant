import React from "react";

import { Navbar } from "./components";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import EmptyCard from "./pages/EmptyCard";

const App = () => {
  return (
    <div className='mx-6'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/emptyCart' element={<EmptyCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
