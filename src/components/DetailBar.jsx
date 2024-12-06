import { useNavigate, useLocation } from "react-router-dom";

export const DetailBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const title = location.pathname === "/pokemon" ? "Digimon" : "Pokémon";

  return (
    <>
      <header className="h-16 flex items-center justify-between fixed top-0 left-0 w-full bg-transparent px-4 z-10 ">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="text-lg text-white font-bold"
          >
            ← {title}
          </button>
        </div>
      </header>
    </>
  );
};
