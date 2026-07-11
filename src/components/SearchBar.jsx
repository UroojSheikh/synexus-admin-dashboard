function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="search-input"
    />
  );
}

export default SearchBar;