import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Routes/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

// [
//   {
//     id : 0,
//     title : "White and Black",
//     content : "Born in France",
//     price : 120000,
//     img : "https://codingapple1.github.io/shop/shoes1.jpg"
//   },

//   {
//     id : 1,
//     title : "Red Knit",
//     content : "Born in Seoul",
//     price : 110000,
//     img : "https://codingapple1.github.io/shop/shoes2.jpg"
//   },

//   {
//     id : 2,
//     title : "Grey Yordan",
//     content : "Born in the States",
//     price : 130000,
//     img : "https://codingapple1.github.io/shop/shoes3.jpg"
//   }
// ]

// https://codingapple1.github.io/shop/data2.json
