const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Hello H1") , "Hiiii"]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
