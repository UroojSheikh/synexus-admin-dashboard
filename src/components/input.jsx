function Input({ label, id, type = 'text', value, onChange, placeholder, error }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'invalid' : ''}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default Input;