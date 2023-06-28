export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white p-6 text-center fixed left-0 bottom-0 min-w-full">
      <div className="flex justify-center">
        <p className="company-name">Developed by Gabriel Rabel ©{currentYear} | Termos e condições</p>
      </div>
    </footer>
  );
}
