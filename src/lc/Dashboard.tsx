import React from "react";

export const Dashboard = (props: { tagline: string }) => {
  return (
    <div>
      Hello, LC dashboard!
      <div>{props.tagline}</div>
    </div>
  );
};
