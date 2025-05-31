const Label = ({ htmlFor, labelText }) => {
  return (
    <label
      htmlFor={htmlFor}
      className='font-lato font-medium text-[10px] md:text-lg text-white tracking-[.2px]'>
      {labelText}
    </label>
  );
};

export default Label;
