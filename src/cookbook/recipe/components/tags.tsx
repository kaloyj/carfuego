/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mainFontColor } from "../../../global-styles/general";

export default function Tags() {
  return (
    <div
      css={{
        flex: "0 0 40%",
        maxWidth: "40%",
        display: "flex",
        flexFlow: "row wrap",
        marginTop: "1%",
        ul: {
          listStyle: "none",
          margin: 0,
          padding: 0,
          flex: "0 0 100%",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-end",
          alignItems: "flex-start"
        },
        li: {
          flex: "0 1 auto",
          outline: `1px solid ${mainFontColor}`,
          fontSize: "10px",
          padding: "5px",
          marginLeft: "5%",
          marginBottom: "5%"
        }
      }}
    >
      <ul>
        <li>Dinner</li>
        <li>Quick Meal</li>
        <li>5 Star Chef Rated</li>
        <li>Easy</li>
      </ul>
    </div>
  );
}
