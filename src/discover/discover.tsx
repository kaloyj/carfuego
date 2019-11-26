/** @jsx jsx */
import { jsx } from "@emotion/core";
import CarouselItem from "../components/carousel/carousel-item";
import { RouteComponentProps } from "@reach/router";

// eslint-disable-next-line no-unused-vars
export default function Discover(props: RouteComponentProps) {
  return (
    <div>
      <h2 className="accent-font" css={{ textTransform: "capitalize" }}>
        Discovered
      </h2>{" "}
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
    </div>
  );
}
