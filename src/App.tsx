import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { GlobalStyles } from "./global-styles";
import { Discover } from "./discover/discover";

function App() {
  return (
    <div
      css={{
        border: "3px solid black",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        padding: "4%"
      }}
    >
      <GlobalStyles></GlobalStyles>
      <h2 className="accent-font" css={{ textTransform: "capitalize" }}>
        Discover
      </h2>
      <Discover></Discover>
    </div>
  );
}

export default App;
