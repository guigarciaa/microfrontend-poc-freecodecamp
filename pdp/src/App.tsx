import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import SafeComponent from "./SafeComponent";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>
      <button
        className="text-3xl p-5"
        onClick={() => setShowHeader(!showHeader)}
      >
        Show The Header
      </button>
      <div className="my-10">Home Page</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
