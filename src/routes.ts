import { createBrowserRouter } from "react-router"
import Root from "./components/Root"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import About from "./pages/About"
import Submit from "./pages/Submit"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "catalog", Component: Catalog },
      { path: "about", Component: About },
      { path: "submit", Component: Submit },
    ],
  },
])
