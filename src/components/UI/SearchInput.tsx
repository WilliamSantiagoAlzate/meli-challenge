type InputProps = {
  value: string
  onChange(value: string): void
}

const SearchInput: React.FC<InputProps> = ({
  value,
  onChange
}) =>  (
  <div className="search-input">
    <input
      className="search-input__container" 
      type="text" 
      placeholder="Nunca dejes de buscar" 
      value={value} 
      onChange={({ target }) => onChange(target.value)}
    />
    <section className="search-input__icon">
      <img src="https://i.ibb.co/m8WVXGg/search-icon.png" alt="Icono de lupa" />
    </section>
  </div>
)

export default SearchInput;
