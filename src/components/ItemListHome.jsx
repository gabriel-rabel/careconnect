import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ItemListHome() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [showItems, setShowItems] = useState(5);

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
    <div className="flex flex-col">
      <div className="grid justify-center md:grid-cols-5 gap-4 md:-mt-4">
        {loaded &&
          items.map((item) => (
            <div
              className="w-full max-w-sm rounded-b-lg shadow border-t-4 border-blue-600"
              key={item._id}
            >
              <div className="px-5 pb-5">
                <h3 className="text-normal font-bold tracking-tight text-gray-700 dark:text-white mt-3">
                  {item.title.toUpperCase()}
                </h3>
              </div>
              <img className="p-1 rounded-t-lg" src={item.img} />

              <div>
                <div className="flex items-center justify-between p-3">
                  <span className="font-bold text-green-500 dark:text-white">
                    {item.status.toUpperCase()}
                  </span>
                  <Link to={`/Detalhes/${item._id}`}>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      DETALHES
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          VER MAIS RESULTADOS
        </button>
      </div>
    </div>
  );
}