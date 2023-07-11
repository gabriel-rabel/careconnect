import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ContactForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://webdev103.cyclic.app/contact",
        form
      );
      console.log(response.data);
      navigate("/");
      toast.success("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col mt-10 items-center">
      <h1 className="flex text-3xl text-sky-700">Envie-nos sua mensagem</h1>
      <form
        onSubmit={handleSubmit}
        className="flex p-8 flex-col gap-3 shadow rounded-sm md:min-w-[600px] items-start"
      >
<label className="block text-sm font-semibold leading-6 text-gray-900">
          Nome completo:
        </label>
        <input
          onChange={handleChange}
          className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="name"
          value={form.name}
        />
        <div className="flex w-full gap-3 justify-between">
          <div className="flex flex-col gap-2 w-full">
        <label className="text-left w-full text-sm font-semibold leading-6 text-gray-900">
          Cidade:
        </label>
        <input
          onChange={handleChange}
          className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="city"
          value={form.city}
        />
        </div>
        <div className="flex flex-col gap-2 w-full">
        <label className="text-left block w-full text-sm font-semibold leading-6 text-gray-900">
          Telefone:
        </label>
        <input
          onChange={handleChange}
          className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="phone"
          value={form.phone}
        />
        </div>
        </div>
        <label className="block text-sm font-semibold leading-6 text-gray-900">
          Email:
        </label>
        <input
          onChange={handleChange}
          className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="email"
          value={form.email}
        />
        <label className="block text-sm font-semibold leading-6 text-gray-900">
          Mensagem:
        </label>
        <textarea
          onChange={handleChange}
          className="block w-full -mt-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          rows="5"
          type="text"
          name="message"
          value={form.message}
        />
        <button
          className="flex text-white w-full justify-center bg-sky-700 border-none hover:bg-sky-500 rounded-md p-2 shadow-md"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
