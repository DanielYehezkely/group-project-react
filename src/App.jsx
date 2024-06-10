import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SinglePokemon from "./pages/SinglePokemon/SinglePokemon";
import UploadPokemon from "./pages/UploadPokemon/UploadPokemon";

import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "pokemon",
        element: <SinglePokemon />,
      },
      {
        path: "add",
        element: <UploadPokemon />,
      },
      {
        path: "*",
        element: <NotFound />
      }
    ],
  }
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
