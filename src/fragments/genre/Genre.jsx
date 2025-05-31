import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import GenreList from "./GenreList";
import { useState } from "react";

const Genre = ({ width }) => {
  const [showGenre, setShowGenre] = useState(false);
  return (
    <div
      className='hidden md:relative md:flex md:justify-center md:items-center md:gap-2 md:w-28 md:h-11 md:rounded-lg md:mb-24 md:bg-paperBackground cursor-pointer'
      onClick={() => {
        setShowGenre(!showGenre);
      }}>
      <p className='font-bold tracking-[.2px]'>Genre</p>
      <MdOutlineKeyboardArrowDown className='text-xs w-6 h-6' />
      {showGenre && <GenreList width={width} />}
    </div>
  );
};

export default Genre;
