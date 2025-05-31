import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropdownProfile from "./DropdownProfile";
import { useState } from "react";

const Navbar = ({ genreTab }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className='max-w-screen px-5 py-1.5 md:px-20 md:py-6 bg-pageHeaderBackground flex justify-between'>
        <div className='flex items-center gap-3 md:gap-20'>
          <Link to='/home'>
            <picture>
              <source
                srcSet='/logo/chill-logo.svg'
                media='(min-width: 768px)'
              />
              <img src='/logo/mobile-chilllogo.svg' className='w-full' />
            </picture>
          </Link>
          <div className='font-lato font-medium text-[10px] md:text-lg tracking-[.2px] text-white flex gap-3 md:gap-20'>
            <Link to='/series'>Series</Link>
            <Link to='/films'>Film</Link>
            <Link to='/mylist'>Daftar Saya</Link>
            {genreTab}
          </div>
        </div>
        <div
          className='relative flex gap-1 md:gap-2 items-center cursor-pointer'
          onClick={(e) => {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }}>
          <img src='/img/icon/avatar.svg' className='w-5 md:w-10' />
          <MdKeyboardArrowDown className='text-base md:text-3xl text-white ' />
          {showDropdown && <DropdownProfile />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
