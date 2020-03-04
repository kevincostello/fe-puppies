import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Puppies from "./Puppies";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Puppies />
      <Footer />
    </div>
  );
}

export default App;
