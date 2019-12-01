/** @jsx jsx */
import { jsx } from "@emotion/core";
import { hot } from "react-hot-loader/root";
import { GlobalStyles } from "./global-styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import Recipe from "./cookbook/recipe/recipe";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div
      css={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
        overflowY: "auto"
      }}
    >
      <GlobalStyles />
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/cookbook/:recipeId"
                  component={Recipe}
                ></Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}

export default hot(App);
