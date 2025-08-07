// // JAVASCRIPT
// const heading = document.createElement("h2");
// heading.textContent = "Script Heading"
// heading.className = "header"

// document.getElementById("root").append(heading);

// REACT with JS

// const reactHeading = React.createElement("h1",{className : "header"},"Hello React");

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading)

// console.log(reactHeading)

// REACT WITH JSX

const jsxheading = (<><h1>JSX Heading</h1><p>This is created using jsx</p><h3>React Features</h3><ul type="circle"><li>JS library to build UI</li>
                                                                                            <li>It offers many features</li>
                                                                                            <li>It is declarative</li>
                                                                                            </ul></>)
                                                                                            

ReactDOM.createRoot(document.getElementById("root")).render(jsxheading);
