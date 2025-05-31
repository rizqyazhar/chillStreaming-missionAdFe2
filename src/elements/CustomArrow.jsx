import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NextArrow = ({ onClick, nextBottom }) => {
  return (
    <div
      style={{ bottom: nextBottom }}
      className={`absolute md:-right-4 w-11 h-11 hidden md:flex md:justify-center md:items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer`}
      onClick={onClick}>
      <FaArrowRight className='text-lg text-white' />
    </div>
  );
};

export const PrevArrow = ({ onClick, prevBottom }) => {
  return (
    <div
      style={{ bottom: prevBottom }}
      className={`absolute md:-left-6 w-11 h-11 hidden z-10 md:flex md:justify-center md:items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer`}
      onClick={onClick}>
      <FaArrowLeft className='text-lg text-white ' />
    </div>
  );
};
