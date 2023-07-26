import { Component } from "react";
import "./App.css";
import Header from "../layouts/Header/Header";
import Main from "../layouts/Main/Main";
import Footer from "../layouts/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
