import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//redux
import { Provider } from "react-redux";
import store from "./store/index.js";

//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "shopping-list",
        element: <ShoppingList />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
