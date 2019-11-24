import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

export function CarouselItem() {
  return (
    <div
      css={{
        border: "3px solid black",
        flex: "0 0 70%",
        marginRight: "5%",
        height: "150px",
        borderRadius: "20px",
        overflow: "hidden"
      }}
    >
      <img
        src="https://picsum.photos/200/300"
        css={{ width: "100%", height: "100%", objectFit: "cover" }}
      ></img>
    </div>
  );
}
