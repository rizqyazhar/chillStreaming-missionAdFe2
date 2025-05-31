import Input from "../elements/Input";
import Label from "../elements/Label";

const InputFields = ({
  id,
  type,
  value,
  name,
  onChange,
  placeholder,
  htmlFor,
  labelText,
  children,
}) => {
  return (
    <div className='relative flex flex-col gap-1 md:gap-1.5 w-full'>
      <Label htmlFor={htmlFor} labelText={labelText} />
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};

export default InputFields;
