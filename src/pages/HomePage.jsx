import ItemListHome from "../components/ItemListHome";
import doctorImg from "../assets/doctor-woman.png";
import menImg from "../assets/men.png";
import bg from "../assets/bg_blue_n.png";

export default function HomePage() {
  return (
    <div>
      <section
        className={`flex lg:flex-row flex-col mt-20 relative`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center flex-col w-3/5 gap-10 ml-6">
          <div className="flex lg:justify-start">
            <h1 className="text-center text-6xl lg:text-left font-bold">
              Promovemos solidariedade na área da{" "}
              <span className="text-sky-700">Saúde</span>
            </h1>
          </div>
          <div className="flex flex-col  gap-3 ">
            <p className="flex text-center lg:text-left text-gray-600">
              Através de um simples cadastro, você pode disponibilizar para
              empréstimo ou doação aqueles equipamentos de saúde que você não
              utiliza mais, ajudando assim as pessoas que necessitam de auxílio
              nesses momentos. <br />
              <br />
              Além da possibilidade de compartilhar seus equipamentos, também
              oferecemos a oportunidade de doar um pouco do seu tempo para
              ajudar aqueles que mais precisam. <br />
              <br />
              Seja acompanhando alguém em uma consulta, oferecendo suporte
              emocional ou prestando auxílio em atividades diárias, cada pequeno
              gesto faz a diferença. Buscamos criar uma rede de apoio
              comunitário, conectando pessoas dispostas a ajudar com aquelas que
              necessitam de suporte na área da saúde.
            </p>
          </div>
          <div className="flex p-8 align-top"></div>
        </div>
        <div className="flex w-2/5">
          <img className="hidden lg:block" src={doctorImg} />
        </div>
      </section>
      <section>
        <div className="md:p-10">
          <h4 className="text-sky-700 font-bold ">Equipamentos em</h4>
          <h2 className="font-bold text-gray-600 text-4xl">Destaque</h2>
        </div>
        <div className="m-3 p-3">
          <ItemListHome />
        </div>
      </section>
      <section>
        <div className="lg:p-4">
          <h4 className="text-sky-700 font-bold ">Somos muitos</h4>
          <h2 className="font-bold text-gray-600 text-4xl">Em números</h2>
        </div>
        <div className="grid justify-center md:grid-cols-3 gap-5 md:mx-20">
          <div className="flex flex-col  p-3 justify-center w-full max-w-sm min-h-[200px] rounded-b-lg shadow border-t-4 border-blue-600">
            <div>
              <p className="font-bold text-5xl">1350+</p>
              </div>
              <div>
              <p>Equipamentos</p>
              <p className="font-thin">Fornecidos</p>
            </div>
          </div>
          <div className="flex flex-col  p-3 justify-center w-full max-w-sm min-h-[200px] rounded-b-lg shadow border-t-4 border-blue-600">
          <div>
              <p className="font-bold text-5xl">1700+</p>
              </div>
              <div>
              <p>Pessoas</p>
              <p className="font-thin">Cadastradas</p>
            </div>
          </div>
          <div className="flex flex-col  p-3 justify-center w-full max-w-sm min-h-[200px] rounded-b-lg shadow border-t-4 border-blue-600">
          <div>
              <p className="font-bold text-5xl">95%</p>
              </div>
              <div>
              <p>Satisfação</p>
              <p className="font-thin">Entre os Clientes</p>
            </div>
          </div>
        </div>
        <div className="md:p-10 border shadow-lg m-6 rounded-md">
          <h3 className="font-bold mt-3 text-gray-600 text-3xl">
            Ajudar pessoas é a nossa missão
          </h3>
          <h5 className="font-thin text-sm">
            O pouco que temos, podemos oferecer...
          </h5>
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="flex w-2/5 items-center justify-center">
              <img className="min-w-[300px]" src={menImg} />
            </div>

            <div className="flex flex-col w-2/4 justify-center gap-4">
              <p className="font-extralight items-center text-2xl">
                "Ao compartilhar o que temos, podemos aliviar o sofrimento de
                pessoas lutando contra doenças, idosos e indivíduos em
                recuperação. Cada pequeno gesto de bondade importa e o impacto
                que você pode ter na vida de alguém é imensurável."
              </p>
              <p className="font-thin italic">Mr.Rabel - Fundador</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
