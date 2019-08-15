import React, { useState } from "react";

export const Display = props => {
  let [viewType, changeType] = useState("beautify");
  return (
    <div style={viewType === "beautify" ? { whiteSpace: "pre-wrap" } : {}}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button
          className={
            "btn btn-primary " + (viewType === "beautify" ? "disabled" : "")
          }
          onClick={() => changeType("beautify")}
        >
          View Beautify
        </button>
        <button
          className={
            "btn btn-primary " + (viewType === "raw" ? "disabled" : "")
          }
          onClick={() => changeType("raw")}
        >
          View Raw
        </button>
      </div>
      <div>{JSON.stringify(props.value, null, 1)}</div>
    </div>
  );
};
