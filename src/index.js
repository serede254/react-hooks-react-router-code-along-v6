import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }, 
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/profile/:id",
      element: <UserProfile />
    }
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);