import { FaCircleCheck } from "react-icons/fa6";
import { FaFaceMeh } from "react-icons/fa6";

const PopupMessage = ({ text, boolForIcon }) => {
  return (
    <div className='fixed flex justify-center items-center top-6 left-1/2 -translate-x-1/2 gap-2 px-3 md:px-5 py-1 md:py-2 rounded-full text-pageHeaderBackground z-50 bg-white'>
      {boolForIcon ? (
        <FaCircleCheck className='text-sm md:text-lg' />
      ) : (
        <FaFaceMeh className='text-sm md:text-lg' />
      )}
      <p className='text-xs md:text-sm font-medium'>{text}</p>
    </div>
  );
};

export default PopupMessage;
