import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="bg-stone-800 min-h-screen">
      <main className="bg-stone-800 flex items-center justify-center p-4 w-full h-auto min-h-screen">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
