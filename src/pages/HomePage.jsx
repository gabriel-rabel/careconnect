import doctorImg from "../assets/doctor-woman.png";
import bg from "../assets/bg_blue_n.png"

export default function HomePage() {
  return (
    <div>
    <section className={`flex md:flex-row flex-col mt-20 relative`} style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col w-3/5 gap-10">
        <div className="flex justify-start">
          <h1 className="text-6xl text-left font-bold">
            Promovemos solidariedade na área da{" "}
            <span className="text-blue-700">Saúde</span>
          </h1>
        </div>
        <div className="flex flex-col  gap-3 ">
          <p className="flex text-left text-gray-600">
            Através de um simples cadastro, você pode disponibilizar para
            empréstimo ou doação aqueles equipamentos de saúde que você não
            utiliza mais, ajudando assim as pessoas que necessitam de auxílio
            nesses momentos. <br />
            <br />
            Além da possibilidade de compartilhar seus equipamentos, também
            oferecemos a oportunidade de doar um pouco do seu tempo para ajudar
            aqueles que mais precisam. <br />
            <br />
            Seja acompanhando alguém em uma consulta, oferecendo suporte
            emocional ou prestando auxílio em atividades diárias, cada pequeno
            gesto faz a diferença. Buscamos criar uma rede de apoio comunitário,
            conectando pessoas dispostas a ajudar com aquelas que necessitam de
            suporte na área da saúde.
          </p>
          <button className="bg-primary text-white rounded-md p-2 w-40">
            Faça seu cadastro
          </button>
        </div>
        <div className="flex p-8 align-top">
          
        </div>
      </div>
      <div className="flex w-2/5">
        <img src={doctorImg} />
      </div>
    </section>
    <section>
      <div className="md:p-20">
      <h4 className="text-blue-700 font-bold ">Equipamentos</h4>
      <h2 className="font-bold text-4xl">Disponíves</h2>
      </div>
    </section>
    </div>
  );
}
