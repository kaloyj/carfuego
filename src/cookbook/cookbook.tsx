/** @jsx jsx */
import { jsx } from "@emotion/core";
import { greyBase } from "../global-styles";
import Categories from "./categories/categories";
import { RouteComponentProps } from "@reach/router";

// eslint-disable-next-line no-unused-vars
export default function Cookbook(props: RouteComponentProps) {
  return (
    <div>
      <div
        css={{
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "8%",
          marginBottom: "2%"
        }}
      >
        <h3 className="accent-font" css={{ textTransform: "capitalize" }}>
          My cookbook
        </h3>
        <div>
          <input
            placeholder="Search"
            css={{
              border: "none",
              borderRadius: "30px",
              paddingLeft: "10px",
              color: greyBase
            }}
          />
        </div>
      </div>

      <Categories></Categories>
      <Categories></Categories>
      <Categories></Categories>
      <Categories></Categories>
      <Categories></Categories>
    </div>
  );
}
