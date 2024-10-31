import "./App.css";

import {
  Footer,
  Features,
  Blog,
  Header,
  Posibility,
  WhatGPT3,
} from "./container";

import { Navbar, Brand, CTA } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
