import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Login from "./components/Login";
import RestaurentMenu from "./components/RestaurentMenu";

// single element structure <h1>Hello World from React..</h1>
//const heading = React.createElement("h1", {id : "heading", class : "basic"}, "Hello World from React..");

/**
 * <div id = "parent">
 *  <div id = "child">
 *      <h1></h1>
 *      <h2></h2>
 *  </div>
 * </div>
 */
// const parent = React.createElement("div", {id : "parent"},
//     React.createElement("div", {id : "child"}, [
//         React.createElement("h1", {}, "I'm nested h1 tag"), React.createElement("h2", {}, "Hi I'm h2 tag")]
//         )
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// -------------------------------- Next episode ---------------------------------

// JSX - HTML like structure

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurents/:restId",
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
