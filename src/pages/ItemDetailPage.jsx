import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function ItemDetailPage() {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const [reload, setReload] = useState(false);

  const [itemForm, setItemForm] = useState({
    service_type: "",
    type: "",
    status: "",
    title: "",
    description: "",
    img: "",
    availability: "",
    phone: "",
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        `https://webdev103.cyclic.app/careconnect/${params.id}`
      );
      setItem(response.data);
      setItemForm(response.data); //Preenche o form do edit
    }
    fetch();
  }, [params.id, reload]);
  // <--show item

  // delete item -->

  async function handleDelete(e) {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `https://webdev103.cyclic.app/careconnect/${params.id}`
      );
      console.log(response);
      toast.success("Item deletado com sucesso!");

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar o item!");
    }
  }

  // <-- delete item

  // edit item -->

  function handleChange(e) {
    setItemForm({
      ...itemForm,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://webdev103.cyclic.app/careconnect/${params.id}`,
        itemForm
      );
      console.log(response.data);
      toast.success("Item editado com sucesso!");
      setShowForm(false);
      setReload(!reload);
    } catch (error) {
      console.error(error);
      toast.error("Falha ao editar o item!");
    }
  }

  // <-- edit item

  return (
    <div className="flex flex-col justify-between items-center">
      {/*Items detail*/}

      <div
        onClick={() => setShowForm(!showForm)}
        className="flex w-full justify-end p-6 gap-3 items-end"
      >
        <button>
          <PencilSquareIcon className="h-6 w-6 text-sky-700" title="Editar" />
        </button>

        <button onClick={handleDelete}>
          <TrashIcon className="h-6 w-6 text-sky-700" title="Deletar" />
        </button>
      </div>
      <div className="flex flex-col max-w-lg gap-4 p-6 items-center rounded-sm">
        <h1 className="text-sky-700">{item.title}</h1>
        <img className="rounded shadow max-w-[400px]" src={item.img} />
        <p>{item.description}</p>
        <p>Tipo: {item.service_type}</p>
        <p>
        Disponíevel para: {item.type} 
        </p>
        <p>Estado: {item.status}</p>
        <p>Telefone para contato: {item.phone}</p>
        <p>{item.service}</p>
      </div>

      {/*Edit Item Form*/}
      {showForm === true && (
        <div className="flex flex-col items-center">
          <h1 className="flex lg:text-3xl text-sky-700">Edição de cadastro</h1>
          <form
            onSubmit={handleSubmit}
            className="flex p-8 flex-col gap-3 shadow rounded-sm md:min-w-[600px] items-start"
          >
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Título do Anúncio:
            </label>
            <input
              onChange={handleChange}
              className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
              type="text"
              name="title"
              value={itemForm.title}
            />

            <div className="flex flex-col lg:flex-row gap-3 text-sm font-semibold leading-6 text-gray-900">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
              Estado do Equipamento:{" "}
              </label>
              <div className="flex gap-3">
              <input
                onChange={handleChange}
                className=""
                type="radio"
                name="type"
                value="Doação"
                checked={itemForm.type === "Doação"}
              />
              <label
                className="block text-sm font-semibold leading-6 text-gray-900 -ml-2"
                htmlFor="new"
              >
                Doação
              </label>
              <input
                onChange={handleChange}
                className=""
                type="radio"
                name="type"
                value="Empréstimo"
                checked={itemForm.type === "Empréstimo"}
              />
              <label
                className="block text-sm font-semibold leading-6 text-gray-900 -ml-2"
                htmlFor="new"
              >
                Empréstimo
              </label>
            </div>
            </div>

            <div className="flex gap-3 text-sm font-semibold leading-6 text-gray-900">
              <label>Tipo do Equipamento:</label>
              <select
                onChange={handleChange}
                className="shadow-md border rounded-sm"
                name="service_type"
              >
                <option value="Cama">Cama</option>
                <option value="Cadeira">Cadeira</option>
                <option value="Muleta">Muleta</option>
                <option value="Andador">Andador</option>
                <option value="Equipamento">Equipamento</option>
              </select>
</div>
<div className="flex gap-3">
              <input
                onChange={handleChange}
                className=""
                type="radio"
                id="new"
                name="status"
                value="Novo"
                checked={itemForm.status === "Novo"}
              />
              <label
                className="block text-sm font-semibold leading-6 text-gray-900 -ml-2"
                htmlFor="new"
              >
                Novo
              </label>

              <input
                onChange={handleChange}
                className=""
                type="radio"
                id="used"
                name="status"
                value="Usado"
                checked={itemForm.status === "Usado"}
              />
              <label
                className="block text-sm font-semibold leading-6 text-gray-900 -ml-2"
                htmlFor="used"
              >
                Usado
              </label>
            </div>

            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Descrição do Equipamento:
            </label>
            <textarea
              onChange={handleChange}
              className=" -mt-3 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
              rows="5"
              type="text"
              name="description"
              value={itemForm.description}
            />
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Foto do Equipamento:{" "}
              <span className="font-extralight text-gray-500">
                (inserir link)
              </span>
            </label>
            <input
              onChange={handleChange}
              className="-mt-3 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
              type="url"
              name="img"
              value={itemForm.img}
            />
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Telefone:
            </label>
            <input
              onChange={handleChange}
              className="-mt-3 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
              type="phone"
              name="phone"
              value={itemForm.phone}
            />
            <button
              className="flex text-white bg-sky-700 border-none hover:bg-sky-300 rounded-md p-2 shadow-md"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
