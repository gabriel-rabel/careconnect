import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import  toast  from "react-hot-toast"
import { TrashIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

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
      toast.success("Item editado com sucesso!")
      setShowForm(false);
      setReload(!reload);
    } catch (error) {
      console.error(error);
      toast.error("Falha ao editar o item!")
      

    }
  }

  // <-- edit item

  return (
    <div>
      {/*Detalhes do Item*/}

      <div
        onClick={() => setShowForm(!showForm)}
        className="flex w-full justify-end p-6 gap-3 items-end"
      >
        <button >
        <PencilSquareIcon className="h-6 w-6" title="Editar" />
        </button>
        
        <button
          onClick={handleDelete}
        >
          <TrashIcon className="h-6 w-6" title="Deletar" />
        </button>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <h1>{item.title}</h1>
        <img className="" src={item.img} />
        <p>{item.description}</p>
        <p>
          Tipo: {item.type} - {item.status}
        </p>
        <p>Disponíevel para: {item.service_type}</p>
        <p>Telefone para contato: {item.phone}</p>
        <p>{item.service}</p>
      </div>

      {/*Formulario de edição do Item*/}
      {showForm === true && (
        <div className="flex flex-col items-center">
          <h1 className="flex text-3xl">Edição de cadastro</h1>
          <form
            onSubmit={handleSubmit}
            className="flex p-8 flex-col gap-3 shadow rounded-sm md:min-w-[600px] items-start"
          >
            <label>Título do Anúncio:</label>
            <input
              onChange={handleChange}
              className="shadow-md bg-slate-100 border-none rounded-sm w-full p-1"
              type="text"
              name="title"
              value={itemForm.title}
            />

            <div className="flex gap-3">
              <label>Estado do Equipamento: </label>
              <input
                onChange={handleChange}
                className="shadow"
                type="radio"
                name="type"
                value="DONATION"
                checked={itemForm.type === "DONATION"}
              />
              <label className="shadow" htmlFor="new">
                Doação
              </label>
              <input
                onChange={handleChange}
                className="shadow"
                type="radio"
                name="type"
                value="LOAN"
                checked={itemForm.type === "LOAN"}
              />
              <label className="shadow" htmlFor="new">
                Empréstimo
              </label>
            </div>

            <div className="flex gap-3">
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
                className="shadow"
                type="radio"
                id="new"
                name="status"
                value="NEW"
                checked={itemForm.status === "NEW"}
              />
              <label className="shadow" htmlFor="new">
                Novo
              </label>

              <input
                onChange={handleChange}
                className="shadow"
                type="radio"
                id="used"
                name="status"
                value="USED"
                checked={itemForm.status === "USED"}
              />
              <label className="shadow" htmlFor="used">
                Usado
              </label>
            </div>

            <label>Descrição do Equipamento:</label>
            <textarea
              onChange={handleChange}
              className="shadow-md border rounded-sm"
              rows="5"
              type="text"
              name="description"
              value={itemForm.description}
            />
            <label>Foto do Equipamento:</label>
            <input
              onChange={handleChange}
              className="shadow-md border rounded-sm"
              type="url"
              name="img"
              value={itemForm.img}
            />
            <label>Telefone:</label>
            <input
              onChange={handleChange}
              className="shadow-md border rounded-sm"
              type="phone"
              name="phone"
              value={itemForm.phone}
            />
            <button
              className="flex bg-primary border-none hover:bg-blue-300 rounded-md p-2 shadow-md"
              type="submit"
            >
              Salvar edição
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
