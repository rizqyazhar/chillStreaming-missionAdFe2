import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const NextArrow = ({ onClick, isLandscape }) => {
  return (
    <div
      style={{
        inset: isLandscape && "40% 0",
        insetInlineStart: "100%",
        insetInlineEnd: "100%",
      }}
      className='hidden md:absolute md:inset-y-9/20 md:-translate-x-7 md:z-10 md:flex md:items-center md:justify-center md:w-11 md:h-11 md:bg-bodyBackground md:border md:border-outlineBorder md:rounded-full md:cursor-pointer'
      onClick={onClick}>
      <FaArrowRight className='text-light-primary text-lg' />
    </div>
  );
};

export const PrevArrow = ({ onClick, isLandscape }) => {
  return (
    <div
      style={{ inset: isLandscape && "40% 0" }}
      className='hidden md:absolute md:inset-y-9/20 md:-translate-x-3 md:z-10 md:flex md:items-center md:justify-center md:w-11 md:h-11 md:bg-bodyBackground md:border md:border-outlineBorder md:rounded-full md:cursor-pointer'
      onClick={onClick}>
      <FaArrowLeft className='text-light-primary text-lg' />
    </div>
  );
};
