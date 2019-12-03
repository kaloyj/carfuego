/** @jsx jsx */
import { jsx } from "@emotion/core";
import { RouteComponentProps } from "react-router-dom";
import { motion } from "framer-motion";
import CoverField from './cover-field';

// eslint-disable-next-line no-unused-vars
export default function RecipeEdit(props: RouteComponentProps) {
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
      <CoverField></CoverField>
    </motion.div>
  );
}
