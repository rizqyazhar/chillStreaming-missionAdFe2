const Input = ({ id, name, type, value, onChange, placeholder }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete='off'
      className='px-3 md:px-5 py-2 md:py-3.5 border border-outlineBorder outline-none rounded-3xl text-light-secondary text-[9px] md:text-[16px] placeholder:text-light-secondary placeholder:font-lato'
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
