/** @jsx jsx */
import { jsx } from "@emotion/core";

export default function Ingredients() {
  return (
    <div
      css={{
        flex: "0 0 60%",
        ul: {
          listStyle: "none",
          margin: "0",
          marginLeft: "4%",
          marginTop: "4%",
          padding: "0"
        }
      }}
    >
      <h4 className="accent-font">Ingredients</h4>
      <div>
        <ul>
          <li>
            <span className="medium">1/2 kg</span>
            <span className="light-font"> hello</span>
          </li>
          <li>
            <span className="medium">1/2 kg</span>
            <span className="light-font"> hello</span>
          </li>
          <li>
            <span className="medium">1/2 kg</span>
            <span className="light-font"> hello</span>
          </li>
          <li>
            <span className="medium">1/2 kg</span>
            <span className="light-font"> hello</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
