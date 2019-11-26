/** @jsx jsx */
import { jsx } from "@emotion/core";
import { hot } from "react-hot-loader/root";
import { GlobalStyles } from "./global-styles";
import { Router } from "@reach/router";
import Home from "./home/home";
import Cookbook from "./cookbook/cookbook";

function App() {
  return (
    <div
      css={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
        overflowY: "auto",
        padding: "4%"
      }}
    >
      <GlobalStyles />
      <Router>
        <Home path="/">
          <Cookbook path="/" />
        </Home>
        <Cookbook path="/cookbook" />
      </Router>
    </div>
  );
}

export default hot(App);
