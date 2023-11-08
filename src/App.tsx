import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameCollection from "./pages/GameCollection";
import Navbar from "./components/Navbar";
import Index from "./pages/game/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        // click to path, need <Link>
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/collection",
        element: <GameCollection />,
      },
    ],
  },
  {
    path: "/game101",
    element: <Index />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
