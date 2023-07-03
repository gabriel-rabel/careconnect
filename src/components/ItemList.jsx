import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      const response = await axios.get(
        "https://webdev103.cyclic.app/careconnect"
      );
      setItems(response.data);
      setLoaded(true);
    }
    fetchItems();
  }, []);

  console.log(items);

  return (
    <div>
      <h1> Equipamentos Disponíveis</h1>
      <div className="flex grid-cols-3 gap-4 p-6">
        {loaded &&
          items.map((item) => (
            <div className="flex flex-col shadow rounded-sm p-4" key={item._id}>
              <h3>{item.title}</h3>
              <img className="flex max-h-40" src={item.img} />
              <p>{item.availability}</p>
            <Link to={`/Detalhes/${item._id}`}>
              <button
                className="bg-primary rounded-md p-2  justify-self-stretch text-white"
                type="submit"
              >
                
                Ver Detalhes
              </button>
              </Link>
            </div>
          ))}
      </div>
      <h3>Teste </h3>
    </div>
  );
}
