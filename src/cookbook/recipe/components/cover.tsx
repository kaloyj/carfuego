/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { mainFontColor, whiteBase } from "../../../global-styles/general";
import { Link } from "react-router-dom";

export const coverContainerStyles = css`
  background-color: ${mainFontColor};
  height: 30vh;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const coverNavStylea = css`
  position: absolute;
  top: 10px;
  left: 0;
  color: whiteBase;
  align-items: center;
  span {
    color: inherit;
    margin-left: 10px;
  }
`;

export const coverGradientStyle = css`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(130, 2, 99);
  background: linear-gradient(
    180deg,
    rgba(130, 2, 99, 0.3) 70%,
    rgba(255, 241, 208, 1) 100%
  );
`;

export default function Cover() {
  return (
    <div css={coverContainerStyles} className="col-1-1">
      <div css={coverNavStylea} className="col-1-1">
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
          <div css={coverGradientStyle}></div>
          <img
            src="https://picsum.photos/200/300"
            css={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="recipe preview"
          ></img>
          <div
            css={{
              width: "92%",
              position: "absolute",
              bottom: "8%",
              marginLeft: "4%",
              zIndex: 1,
              "h1,span": {
                color: whiteBase
              }
            }}
          >
            <h1 className="accent-font">Pasta de Carne</h1>
            <div>
              <span className="extra-light-font">recipe by </span>
              <span
                className="semi-bold"
                css={{ fontSize: "15px", fontStyle: "italic" }}
              >
                Jane Doe
              </span>
            </div>
          </div>
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
