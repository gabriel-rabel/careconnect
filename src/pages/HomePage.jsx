export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1>teste de titulo</h1>
      <form className="flex flex-col shadow rounded-md md:min-w-[600px] items-start">
        <label>Tipo do Equipamento:</label>
        <select name="service">
          <option value="bed">Cama</option>
          <option value="chair">Cadeira</option>
          <option value="crutch">Muleta</option>
          <option value="walker">Andador</option>
          <option value="equipment">Equipamento</option>
        </select>
        <input type="radio" id="new" name="status" value="new" />
        <label htmlFor="new">Novo</label>
        <input type="radio" id="used" name="status" value="used" />
        <label htmlFor="used">Usado</label>
        <label>Título do Anúncio:</label>
        <input type="text" />
        <label>Descrição do Equipamento:</label>
        <textarea type="text" />
        <label>Foto do Equipamento:</label>
        <input type="url" />
        <label>Telefone:</label>
        <input type="phone" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
