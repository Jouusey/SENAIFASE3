import { createBrowserRouter } from "react-router-dom";
import Avisos from "../pages/Avisos";
import Homes from "../pages/Homes";
import Produtos from "../pages/Produtos";
import Contato from "../pages/Contato";

const router = createBrowserRouter([
    {path: "/", element: <Homes/>},
    {path: "/contato", element: <Contato/>},
    {path: "/avisos", element: <Avisos/>},
    {path: "/produtos", element: <Produtos/>},
])

export default router;