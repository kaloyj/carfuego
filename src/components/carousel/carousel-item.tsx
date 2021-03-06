/** @jsx jsx */
import { jsx } from "@emotion/core";

export default function CarouselItem() {
  return (
    <div
      css={{
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
        alt="recipe sneakpeek"
      />
    </div>
  );
}
