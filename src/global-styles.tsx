import React from "react";
import { Global, css } from "@emotion/core";

// global color scheme
export const mainBackground = "#FFF1D0";
export const accentColor = "#9381FF";

export const mainFontColor = "#820263";
export const greyBase = "#B3B3B3";
export const whiteBase = "#FFFFFF";
export const redBase = "#FF1B1C";

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:after,
        *:before {
          font-family: "Poppins", sans-serif;
          color: ${mainFontColor};
          box-sizing: border-box;
        }

        .light-font {
          font-weight: 300;
        }

        .medium {
          font-weight: 500;
        }

        .semi-bold {
          font-weight: 600;
        }

        .bold {
          font-weight: 700;
        }

        .accent-font {
          font-family: "Playfair Display", serif;
        }

        h1 {
          font-size: 36px;
        }

        h2 {
          font-size: 30px;
        }

        h3 {
          font-size: 24px;
        }

        h4 {
          font-size: 18px;
        }

        body {
          margin: 0;
          background-color: ${mainBackground};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        .button-outline {
          background-color: transparent;
          border: none;
          font-size: 14px;
          width: 70px;
          height: 40px;
          border-radius: 5px;
        }

        .button-outline.primary {
          color: ${accentColor};
          border: 1px solid ${accentColor};
        }

        .button-outline.danger {
          color: ${redBase};
          border: 1px solid ${redBase};
        }
      `}
    ></Global>
  );
}
