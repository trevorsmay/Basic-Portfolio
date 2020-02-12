import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Discover from "./pages/Discover";
import About from "./pages/About";
import Slide from "./pages/Slide";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/discover" component={Discover} /> */}
          <Route exact path="/slide" component={Slide} />
          </Wrapper>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
