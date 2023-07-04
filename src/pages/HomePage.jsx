import ItemListHome from "../components/ItemListHome";
import doctorImg from "../assets/doctor-woman.png";
import bg from "../assets/bg_blue_n.png";

export default function HomePage() {
  return (
    <div>
      <section
        className={`flex md:flex-row flex-col mt-20 relative`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col w-3/5 gap-10 ml-6">
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
          <img className="hidden md:block" src={doctorImg} />
        </div>
      </section>
      <section>
        <div className="md:p-10">
          <h4 className="text-blue-700 font-bold ">Equipamentos em</h4>
          <h2 className="font-bold text-gray-600 text-4xl">Destaque</h2>
        </div>
        <div className="m-3 p-3">
          <ItemListHome />
        </div>
      </section>
      <section>
        <h3 className="font-bold text-gray-600 text-3xl">Ajudar pessoas é a nossa missão</h3>
        <h5 className="font-thin text-sm">O pouco que temos, podemos oferecer</h5>
        <div className="flex bg-gray-200">
          <div className="flex w-2/4">
        imagem
          </div>
          <div className="flex flex-col w-2/4">
          <p>
            Ao compartilhar o que temos, podemos aliviar o sofrimento de pessoas
            lutando contra doenças, idosos e indivíduos em recuperação. Cada
            pequeno gesto de bondade importa e o impacto que você pode ter na
            vida de alguém é imensurável.
          </p>
          <p>
            Convidamos você a se juntar a nós nessa jornada de solidariedade. Ao
            doar ou emprestar materiais médicos, você faz a diferença real na
            vida de alguém. Vamos criar uma cultura de apoio mútuo, cuidando uns
            dos outros e valorizando a dignidade e o bem-estar de todos. Juntos,
            podemos trazer esperança, alívio e sorrisos para quem mais precisa.
            Junte-se a nós hoje mesmo e faça parte dessa mudança positiva!
          </p>
          </div>
        </div>
      </section>
    </div>
  );
}
