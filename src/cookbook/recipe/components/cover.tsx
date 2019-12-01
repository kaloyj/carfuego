/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mainFontColor, whiteBase } from "../../../global-styles";
import { Link } from "react-router-dom";

export default function Cover() {
  return (
    <div
      css={{
        backgroundColor: mainFontColor,
        flex: "0 0 100%",
        height: "30vh",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <div
        css={{
          flex: "0 0 100%",
          position: "absolute",
          top: "10px",
          left: "0",
          color: whiteBase,
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          span: {
            color: "inherit",
            marginLeft: "10px"
          }
        }}
      >
        <Link to="/" css={{ zIndex: 1 }}>
          <div
            css={{
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "center",
              color: whiteBase,
              paddingLeft: 0
            }}
          >
            <span css={{ fontSize: "20px" }}>{"<"}</span>
            <span className="light-font" css={{ fontSize: "12px" }}>
              Back
            </span>
          </div>
        </Link>
      </div>
      {true ? (
        <div css={{ width: "100%", height: "100%" }}>
          <div
            css={{
              width: "100%",
              height: "100%",
              position: "absolute",
              background: "rgb(130,2,99)",
              background:
                "linear-gradient(180deg, rgba(130,2,99,0.3) 70%, rgba(255,241,208,1) 100%)"
            }}
          ></div>
          <img
            src="https://picsum.photos/200/300"
            css={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="recipe preview"
          ></img>
        </div>
      ) : (
        <span
          css={{
            color: whiteBase,
            fontSize: "40px"
          }}
        >
          R
        </span>
      )}
    </div>
  );
}
