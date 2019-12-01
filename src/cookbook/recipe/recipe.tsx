/** @jsx jsx */
import { jsx } from "@emotion/core";
import { RouteComponentProps } from "react-router-dom";
import { motion } from "framer-motion";
import Steps from "./components/steps";
import Ingredients from "./components/ingredients";
import Tags from "./components/tags";
import Cover from "./components/cover";

// eslint-disable-next-line no-unused-vars
export default function Recipe(props: RouteComponentProps) {
  return (
    <motion.div
      css={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexFlow: "row wrap",
        alignContent: "flex-start",
        backgroundColor: "transparent"
      }}
      key="recipe"
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.1 }}
      exit={{ x: "100%", zIndex: 0, opacity: 0 }}
    >
      <Cover></Cover>
      <div
        css={{
          flex: "0 0 92%",
          margin: "4%",
          display: "flex",
          flexFlow: "column wrap",
          marginBottom: "8%"
        }}
      >
        <Ingredients></Ingredients>
        {/* tags */}
        <Tags></Tags>
      </div>

      <Steps></Steps>
      <div
        css={{
          flex: "0 0 92%",
          marginLeft: "4%",
          marginBottom: "4%"
        }}
      >
        <button className="button-outline primary">Edit</button>
        <button className="button-outline danger" css={{ marginLeft: "2%" }}>
          Delete
        </button>
      </div>
      {/* <Link to="/">home</Link> */}
    </motion.div>
  );
}
