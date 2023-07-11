import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ItemForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    service_type: "",
    type: "",
    status: "",
    title: "",
    description: "",
    img: "",
    availability: "",
    phone: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://webdev103.cyclic.app/careconnect",
        form
      );
      console.log(response.data);
      navigate("/");
      toast.success("Equipamento cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col mt-10 items-center">
      <h1 className="flex text-3xl text-sky-700">Cadastro de equipamento</h1>
      <form
        onSubmit={handleSubmit}
        className="flex p-8 flex-col gap-3 shadow rounded-sm md:min-w-[600px] items-start"
      >
        <label
          title="Digite aqui seu titulo"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Título do Anúncio:
        </label>
        <input
          onChange={handleChange}
          className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="title"
          value={form.title}
        />

        <div className="flex gap-3 text-sm font-semibold leading-6 text-gray-900">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Estado do Equipamento:{" "}
          </label>
          <input
            onChange={handleChange}
            className=""
            type="radio"
            name="type"
            value="Doação"
            checked={form.type === "Doação"}
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
            checked={form.type === "Empréstimo"}
          />
          <label
            className="block text-sm font-semibold leading-6 text-gray-900 -ml-2"
            htmlFor="new"
          >
            Empréstimo
          </label>
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
            checked={form.status === "Novo"}
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
            checked={form.status === "Usado"}
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
          className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          rows="5"
          type="text"
          name="description"
          value={form.description}
        />
        <label className="block text-sm font-semibold leading-6 text-gray-900">
          Foto do Equipamento:
        </label>
        <input
          onChange={handleChange}
          className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="url"
          name="img"
          placeholder="https://..."
          value={form.img}
        />
        <label className="block text-sm font-semibold leading-6 text-gray-900">
          Telefone:
        </label>
        <input
          onChange={handleChange}
          className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="phone"
          name="phone"
          value={form.phone}
          placeholder="(00) 00000-0000" 
          required
        />
        <button
          className="flex w-full justify-center text-white bg-sky-700 border-none hover:bg-sky-500 rounded-md p-2 shadow-md"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
