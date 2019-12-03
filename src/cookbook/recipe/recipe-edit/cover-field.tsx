/** @jsx jsx */
import { jsx } from "@emotion/core";
import { motion } from "framer-motion";
import Cover from "../components/cover";

export default function CoverField() {
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
      <Cover />
    </motion.div>
  );
}
