import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [showItems, setShowItems] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchItems() {
      const response = await axios.get(
        "https://webdev103.cyclic.app/careconnect"
      );
      setItems(response.data.slice(0, showItems));
      setLoaded(true);
    }
    fetchItems();
  }, [showItems]);

  function handleShowItems(e) {
    setShowItems((showItems) => showItems + 5);
  }

  console.log(items);

  return (
    <div className="mt-10">
      <div className="flex flex-col lg:flex-row p-4 gap-3 md:justify-end">
        <label className="flex items-center">
          Pesquise por equipamento:
        </label>
        {/* search bar*/}
        <div className="md:w-1/3 w-full flex items-center">
          <MagnifyingGlassIcon className="h-6 w-6 text-sky-700 absolute ml-2" />
          <input
            type="search"
            name="search"
            value={search}
            placeholder="Cadeira de rodas..."
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border-none focus:outline-none w-full shadow pl-10"
          />
        </div>
        {/* search bar*/}
      </div>
      <div className="flex flex-col p-3">
        <div className="grid justify-center lg:grid-cols-5 gap-4">
          {loaded &&
            items
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <div
              className="flex flex-col justify-between items-center w-full max-w-sm rounded-b-lg shadow border-t-4 border-blue-600"
              key={item._id}
            >
              <div className="px-5 pb-5">
                <h3 className="text-sky-700 font-bold tracking-tight mt-3">
                  {item.title.toUpperCase()}
                </h3>
              </div>
              <img className="p-1 fontrounded-t-lg max-h-64" src={item.img} />

              <div>
                <div className="flex items-center gap-5 p-3">
                  <span className="font-bold text-green-500">
                    {item.status.toUpperCase()}
                  </span>
                  <Link to={`/Detalhes/${item._id}`}>
                    <button
                      type="submit"
                      className="text-white bg-sky-700  hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                    >
                      Detalhes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
              ))}
        </div>
        <div className="flex justify-center m-4">
          <button
            onClick={handleShowItems}
            className="text-white bg-sky-700 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
          >
            Ver mais resultados
          </button>
        </div>
      </div>
    </div>
  );
}
