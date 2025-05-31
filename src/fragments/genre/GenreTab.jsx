import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import GenreList from "./GenreList";

const GenreTab = ({ width }) => {
  const [showGenre, setShowGenre] = useState(false);
  return (
    <div
      className='relative flex items-center gap-0.5 cursor-pointer md:hidden'
      onClick={() => {
        setShowGenre(!showGenre);
      }}>
      <span>Genre</span>
      <MdKeyboardArrowDown className='h-full' />
      {showGenre && <GenreList width={width} />}
    </div>
  );
};

export default GenreTab;
