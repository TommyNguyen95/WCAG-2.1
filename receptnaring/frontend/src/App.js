import React, { useState } from "react";
import Footer from "./views/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateRecipe from "./views/CreateRecipe";
import StartPage from "./views/Startpage";
import Recipe from "./views/Recipe";
import Navbar from "../../frontend/src/components/Navbar";

import {
  Header,
  Main,
  WcagDiv,
  Wcagcontrastboxyellow,
  Wcagcontrastboxstandard,
  Wcagcontrastboxwhite
} from "./StyledApp";

const App = props => {
  const [Color, setColor] = useState({
    bgcolor: "#ffffff25",
    textcolor: "white",
    divcolor: "black",
    inputbg: "none",
    title:"white",
    searchicon: "/images/searchicon.svg",
    border:"#ababab",
    borderportion:"white",
    ingredients:"lightgrey",
    softbg:"#ffffff25",
    logo:"/images/HAMIDSLOGO.svg"
  });
  const ChangeColors = input => {
    if (input === "standard") {
      setColor({
        bgcolor: "#ffffff25",
        textcolor: "white",
        divcolor: "black",
        inputbg: "none",
        title:"white",
        searchicon: "/images/searchicon.svg",
        border:"#ababab",
        borderportion:"white",
        ingredients:"lightgrey",
        softbg:"#ffffff25",
        logo:"/images/HAMIDSLOGO.svg"
      });
    }

    if (input === "yellow") {
      setColor({
        bgcolor: "#FFEF00",
        textcolor: "black",
        divcolor: "#FFEF00",
        inputbg: "#FDFD96",
        title:"#FFEF00",
        searchicon: "/images/searchiconblack.svg",
        border:"black",
        borderportion:"black",
        ingredients:"black",
        softbg:"#FDFD96",
        logo:"/images/logoblack.svg"
      });
    }

    if (input === "white") {
      setColor({
        bgcolor: "white",
        textcolor: "black",
        divcolor: "white",
        inputbg: "#fff",
        title:"white",
        borderportion:"black",
        searchicon: "/images/searchiconblack.svg",
        border:"grey",
        ingredients:"black",
        softbg:"#FFFAFA",
        logo:"/images/logoblack.svg"
      });
    }
  };

  return (
    <Router>
      <Header>
        <Navbar color={Color}/>
      </Header>
      <Main>
        <WcagDiv>
          <p>Kontrast: </p>
          <Wcagcontrastboxstandard
            tabindex="0"
            onClick={() => ChangeColors("standard")}
          />
          <Wcagcontrastboxyellow
            tabindex="0"
            onClick={() => ChangeColors("yellow")}
          />
          <Wcagcontrastboxwhite
            tabindex="0"
            onClick={() => ChangeColors("white")}
          />
        </WcagDiv>
        <Switch>
          <Route exact path="/" render={() => <StartPage color={Color} />} />
          <Route
            exact
            path="/skapa-recept"
            render={() => <CreateRecipe color={Color} />}
          />
          <Route exact path="/recept/:url" render={(props) => <Recipe color={Color} {...props}  />} />
        </Switch>
      </Main>
      <Footer color={Color}>Footer här</Footer>
    </Router>
  );
};

export default App;
