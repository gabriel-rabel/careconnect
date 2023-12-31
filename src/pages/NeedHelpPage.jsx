import ItemList from "../components/ItemList";
import img from "../assets/help.png"

export default function NeedHelpPage() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center p-4 lg:ml-20 lg:mr-20">
        <div>
        <img className="max-h-[400px]" src={img}/>
        </div>
        <div>
          <h2 className="text-sky-700 text-3xl p-5">"Todos unidos por uma causa."</h2>
        <p className="flex text-lg text-center p-5 text-gray-800">
          Encontre uma variedade de equipamentos médicos disponíveis para
          empréstimo e doação. Nossa lista inclui camas, cadeiras de rodas,
          muletas, andadores e muito mais. Faça parte da nossa comunidade e
          ajude aqueles que precisam de suporte na área da saúde. Juntos,
          podemos fazer a diferença!
        </p>
        </div>
      </div>
      <ItemList />
    </div>
  );
}