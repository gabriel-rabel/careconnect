export default function ItemForm() {
  return (
    <div>
      <form className="">
        <label>Empréstimo ou Doação?</label>
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
        <label>Descrição e detalhes do Equipamento:</label>
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
