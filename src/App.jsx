import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="bg-stone-800 min-h-screen">
      <main className="bg-stone-800 flex items-center justify-center w-full h-auto min-h-screen">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
