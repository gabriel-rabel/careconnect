import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="shadow mx-auto flex max-w-full m-auto items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="lg:ml-20 max-w-[300px]" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="customLink hover:text-blue-500">
            Home
          </Link>{" "}
          <Link to="/QueroAjudar" className="customLink hover:text-blue-500">
            Quero Ajudar
          </Link>{" "}
          <Link to="/PrecisoDeAjuda" className="customLink hover:text-blue-500">
            Preciso de Ajuda
          </Link>{" "}
          <Link to="/Contato" className="customLink hover:text-blue-500">
            Contato
          </Link>{" "}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/QueroAjudar" className="customLink">
            <button className="bg-sky-700  hover:bg-sky-500 text-white rounded-md p-2 w-40">
              Faça seu cadastro
            </button>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="shadow fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">CareConnect</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/*mobile menu*/}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className=" flex flex-col gap-4 space-y-2 py-6">
                <Link to="/" className="customLink hover:text-blue-500">
                  Home
                </Link>{" "}
                <Link
                  to="/QueroAjudar"
                  className="customLink hover:text-blue-500"
                >
                  Quero Ajudar
                </Link>{" "}
                <Link
                  to="/PrecisoDeAjuda"
                  className="customLink hover:text-blue-500"
                >
                  Preciso de Ajuda
                </Link>{" "}
                <Link to="/Contato" className="customLink hover:text-blue-500">
                  Contato
                </Link>{" "}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
