import { Link } from "react-router-dom";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center bg-sky-700 text-white text-center min-h-[5vh] left-0 bottom-0 min-w-full">
      <div className="flex">
        <p className="company-name">
          Developed by Gabriel Rabel ©{currentYear} |{" "}
          {<Link to={`/Termos/`}>Termos e condições</Link>}
        </p>
      </div>
    </footer>
  );
}
