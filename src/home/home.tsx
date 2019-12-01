/** @jsx jsx */
import { jsx } from "@emotion/core";
import Discover from "../discover/discover";
import { motion } from "framer-motion";
import { RouteComponentProps } from "react-router-dom";
import Cookbook from "../cookbook/cookbook";

interface IHomeProps extends RouteComponentProps {}

// eslint-disable-next-line no-unused-vars
export default function Home(props: IHomeProps) {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        padding: "4%",
        overflowX: "hidden"
      }}
      key="home"
      initial={{ x: "-100vh" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.2 }}
      exit={{ x: "-40%", zIndex: 0, opacity: 0 }}
    >
      <Discover></Discover>
      <Cookbook></Cookbook>
    </motion.div>
  );
}
