import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import QuestionH from "./components/MainTable";

class QuestionHub extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <QuestionH />
        </div>
        {/* main table component to be pasted here */}
        <Footer />
      </div>
    );
  }
}

export default QuestionHub;
