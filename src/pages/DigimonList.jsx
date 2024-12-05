import { useState } from "react";
import { useDigimonData } from "../api/api";

export const DigimonList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, isError } = useDigimonData(currentPage);

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const { content, pageable } = data;

  return (
    <div className="pt-16 w-full h-auto xl:w-4/5">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {content.map((digimon) => (
          <li
            key={digimon.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
          >
            <img
              src={digimon.image}
              alt={digimon.name}
              className="w-32 h-32"
              loading="lazy"
            />
            <h3
              className="text-lg text-center font-semibold w-full overflow-hidden whitespace-nowrap text-ellipsis"
              title={digimon.name}
            >
              {digimon.name}
            </h3>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm py-1 px-2 rounded">
              {digimon.name}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={!pageable.previousPage}
          className="px-4 py-2 bg-orange-300 hover:bg-orange-500 text-white rounded disabled:bg-gray-300"
        >
          上一頁
        </button>
        <span className="text-white">
          第 {pageable.currentPage + 1} 頁 / 共 {pageable.totalPages} 頁
        </span>
        <button
          className="px-4 py-2 bg-orange-300 hover:bg-orange-500  rounded disabled:bg-gray-300"
          onClick={() =>
            setCurrentPage((prev) => (pageable.nextPage ? prev + 1 : prev))
          }
          disabled={!pageable.nextPage}
        >
          下一頁
        </button>
      </div>
    </div>
  );
};
