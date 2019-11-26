/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ReactNode } from "react";
import { RouteComponentProps } from "@reach/router";
import Discover from "../discover/discover";

interface IHomeProps extends RouteComponentProps {
  children: ReactNode;
}

export default function Home({ children }: IHomeProps) {
  return (
    <div
      css={{
        height: "100%",
        width: "100%"
      }}
    >
      <Discover></Discover>
      {children}
    </div>
  );
}
