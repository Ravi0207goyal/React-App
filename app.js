// React.createElement() and ReactDOM.createRoot() both are javaScript Object
const heading = React.createElement(
  "div",
  {
    id: "parent",
    className: "primary",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
        className: "primary",
      },
      [
        React.createElement(
          "h1",
          {
            id: "title",
            className: "primary",
          },
          "Hello from React H1!"
        ),
        React.createElement(
          "h2",
          {
            id: "title",
            className: "primary",
          },
          "Hello from React H2!"
        ),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
        className: "primary",
      },
      [
        React.createElement(
          "h1",
          {
            id: "title",
            className: "primary",
          },
          "Hello from React H1!"
        ),
        React.createElement(
          "h2",
          {
            id: "title",
            className: "primary",
          },
          "Hello from React H2!"
        ),
      ]
    ),
  ]
);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root);
root.render(heading);
