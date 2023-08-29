import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import Login from "./components/Login";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Body />}>
        <Route index element={<Home />} />
        {/* <Route path="login" index element={<Login />} /> */}
        <Route path="browse" element={<Browse />} />
      </Route>
    )
  );
  return (
    <Provider store={store}>
      {/* <Body /> */}
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
