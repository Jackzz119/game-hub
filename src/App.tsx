import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameCollection from "./pages/GameCollection";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        // click to path, need <Link>
        path: "/h",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <GameCollection />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
