/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";

export default function MiniCarouselItem() {
  return (
    <div
      css={{
        flex: "0 0 28%",
        marginRight: "4%",
        height: "90px",
        borderRadius: "10px",
        overflow: "hidden"
      }}
    >
      <Link to="/cookbook/1">
        <img
          src="https://picsum.photos/200/300"
          css={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="cookbook item"
        />
      </Link>
    </div>
  );
}
