import Button from "../elements/Button";

const ButtonFields = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <Button buttonText='Masuk' />
      <p className='font-lato tracking-[.2px] text-light-secondary text-[10px] md:text-sm my-2  cursor-default'>
        Atau
      </p>
      <Button buttonText='Masuk dengan Google'>
        <img
          src='/logo/google-icon.svg'
          className='w-2.5 mr-3 md:mr-5 md:w-[18px]'
        />
      </Button>
    </div>
  );
};

export default ButtonFields;
