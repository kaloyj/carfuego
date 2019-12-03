import React from "react";
import { Global, css } from "@emotion/core";

export function FlexStyles() {
  return (
    <Global
      styles={css`
        .col-1-1,
        .col-1-2,
        .col-1-3,
        .col-1-4 {
          display: flex;
          flex-flow: row wrap;
        }

        .col-1-1 {
          flex: 0 0 100%;
        }
      `}
    ></Global>
  );
}
