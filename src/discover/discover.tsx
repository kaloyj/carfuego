import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { CarouselItem } from "../components/carousel/carousel-item";

export function Discover() {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        flexFlow: "row nowrap",
        marginTop: "2%"
      }}
    >
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
    </div>
  );
}
