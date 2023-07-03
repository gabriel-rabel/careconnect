import { useState } from "react";
import axios from "axios";

export default function ItemForm() {
  const [form, setForm] = useState({
    service_type: "",
    type: "",
    status: "",
    title: "",
    description: "",
    img: "",
    availability: "",
    phone: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://webdev103.cyclic.app/careconnect",
        form
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="flex text-3xl">CADASTRO DE EQUIPAMENTO</h1>
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
          value={form.title}
        />
       
        <div className="flex gap-3">
        <label>Estado do Equipamento: </label>
          <input
            onChange={handleChange}
            className="shadow"
            type="radio"
            name="type"
            value="DONATION"
            checked={form.type === "DONATION"}
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
            checked={form.type === "LOAN"}
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
            checked={form.status === "NEW"}
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
            checked={form.status === "USED"}
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
          value={form.description}
        />
        <label>Foto do Equipamento:</label>
        <input
          onChange={handleChange}
          className="shadow-md border rounded-sm"
          type="url"
          name="img"
          value={form.img}
        />
        <label>Telefone:</label>
        <input
          onChange={handleChange}
          className="shadow-md border rounded-sm"
          type="phone"
          name="phone"
          value={form.phone}
        />
        <button
          className="flex bg-primary border-none hover:bg-blue-300 rounded-md p-2 shadow-md"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
