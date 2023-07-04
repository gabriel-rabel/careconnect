import TermsAndConditions from "../pages/TermsPage";
import { Link } from "react-router-dom";
export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-700 text-white text-center min-h-[5vh] left-0 bottom-0 min-w-full">
      <div className="flex justify-center">
        <p className="company-name">Developed by Gabriel Rabel ©{currentYear} | {<Link to={`/Termos/`}>Termos e condições</Link>}</p>
      </div>
    </footer>
  );
}
