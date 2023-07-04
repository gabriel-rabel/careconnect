import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function NavBar() {
  return (
    <nav className="flex justify-around items-center min-w-full min-h-[10vh] shadow-md">
      <div className="flex">
      <Link to="/" className="customLink">
        <img className="max-w-[300px]"src={logo}/>
        </Link>
      </div>
      <div className="flex gap-4 font-medium">
      <Link to="/" className="customLink">
        Home
      </Link>{" "}
      <Link to="/QueroAjudar" className="customLink">
        Quero Ajudar
      </Link>{" "}
      <Link to="/PrecisoDeAjuda" className="customLink">
        Preciso de Ajuda
      </Link>{" "}
      <Link to="/Contato" className="customLink">
        Contato
      </Link>{" "}
      </div>
      <div>
      <Link to="/QueroAjudar" className="customLink">
      <button className="bg-blue-700 text-white rounded-md p-2 w-40">
            Faça seu cadastro
      </button>
      </Link>
      </div>
    </nav>
  );
}
