const firstHeading = React.createElement(
  // React helper function used to create HTML elements. In the end , React.createElement (Your Code) : Object ==> HTML Element (Browser) : Understands
  "h1", // html element
  { id: "heading" }, // attributes
  "I am the first heading!!!" // props or children
);

const secondHeading = React.createElement(
  "h2", // html element
  { id: "heading" }, // attributes
  "I am the second heading!!!" // props or children
);

const firstChild = React.createElement(
  "div", // html element
  { id: "child1" }, // attributes
  [firstHeading, secondHeading] // props or children
);

const secondChild = React.createElement(
  "div", // html element
  { id: "child2" }, // attributes
  [firstHeading, secondHeading] // props or children
);

const thirdChild = React.createElement(
  "div", // html element
  { id: "child3" }, // attributes
  [firstHeading, secondHeading] // props or children
);

const parent = React.createElement(
  "div", // html element
  { id: "parent" }, // attributes
  [firstChild, secondChild, thirdChild] // props or children
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // root.render powerful function to inject your React Code inside the given element. Note - It will replace whatever you already have inside the given element. Does Not Append, But Replaces.

// In the end , React JS is a lightweight JavaScript library used to create interactive UI components for your Application. React works independently, i.e. You can have only a small portion of your app using React, Like just a Header or Footer or Sidebar.