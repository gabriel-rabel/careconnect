import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="flex justify-around items-center min-w-full min-h-[10vh]">
      <div className="flex">
        <span className="text-black text-4xl">Care</span>
        <span className="text-primary text-4xl">Connect</span>
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
    </nav>
  );
}
