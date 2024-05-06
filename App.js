// single element structure <h1>Hello World from React..</h1>
const heading = React.createElement("h1", {id : "heading", class : "basic"}, "Hello World from React..");

/**
 * <div id = "parent">
 *  <div id = "child">
 *      <h1></h1>
 *      <h2></h2>
 *  </div>
 * </div>
 */
const parent = React.createElement("div", {id : "parent"}, 
    React.createElement("div", {id : "child"}, [
        React.createElement("h1", {}, "I'm nested h1 tag"), React.createElement("h2", {}, "Hi I'm h2 tag")]
        )
    );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);