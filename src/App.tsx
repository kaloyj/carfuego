/** @jsx jsx */
import { jsx } from "@emotion/core";
import { hot } from "react-hot-loader/root";
import { GlobalStyles } from "./global-styles/general";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import Recipe from "./cookbook/recipe/recipe";
import { AnimatePresence } from "framer-motion";
import RecipeEdit from "./cookbook/recipe/recipe-edit/recipe-edit";
import { FlexStyles } from "./global-styles/flex";

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
      <FlexStyles />
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
                <Route
                  exact
                  path="/cookbook/:recipeId/edit"
                  component={RecipeEdit}
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
