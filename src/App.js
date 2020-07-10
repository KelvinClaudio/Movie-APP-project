import React, { Component } from "react";
// components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import SearchDetails from "./components/SearchDetails";
import MovieDetails from "./components/MovieDetails";
// components
// Redux
import { Provider } from "react-redux";
import Store from "./redux/store";
// Redux
// Route r
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
// Router
export class App extends Component {
   render() {
      return (
         <Provider store={Store}>
            <Router>
               <Nav />
               <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route
                     path="/searchDetails"
                     exact
                     component={SearchDetails}
                  />
                  <Route
                     path="/searchDetails/:id"
                     exact
                     component={MovieDetails}
                  />
               </Switch>
               <Footer />
            </Router>
         </Provider>
      );
   }
}

export default App;
