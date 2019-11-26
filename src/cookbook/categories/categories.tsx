/** @jsx jsx */
import { jsx } from "@emotion/core";
import MiniCarouselItem from "../../components/carousel/mini-carousel-item";

export default function Categories() {
  return (
    <div css={{ marginBottom: "8%" }}>
      <div
        css={{
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h4 className="accent-font" css={{ textTransform: "capitalize" }}>
          Category 1
        </h4>
        <div
          css={{
            flex: "0 1 auto",
            display: "flex",
            alignItems: "center"
          }}
        >
          <button>
            <span>{"<"}</span>
          </button>
          <button>
            <span>{">"}</span>
          </button>
        </div>
      </div>

      <div
        css={{
          width: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          marginTop: "2%"
        }}
      >
        <MiniCarouselItem />
        <MiniCarouselItem />
        <MiniCarouselItem />
        <MiniCarouselItem />
      </div>
    </div>
  );
}
