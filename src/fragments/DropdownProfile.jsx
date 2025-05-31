import { IoPerson } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const DropdownProfile = () => {
  return (
    <div className='absolute -bottom-[100px] md:-bottom-[132px] -right-2 md:-right-5 z-20 w-32 md:w-[156px] rounded-sm py-1 font-lato text-white bg-pageHeaderBackground'>
      <Link
        to='/profile'
        className='text-xs md:text-sm flex items-center w-full  hover:bg-extraBackground transition duration-700 gap-1.5 px-3 py-2'>
        <IoPerson className='text-sm md:text-lg' />
        Profil Saya
      </Link>
      <Link
        to='/membership'
        className='text-xs md:text-sm flex items-center w-full  hover:bg-extraBackground transition duration-700 gap-1.5 px-3 py-2'>
        <MdOutlineStar className='text-sm md:text-lg' />
        Ubah Premium
      </Link>
      <Link
        to='/'
        className='text-xs md:text-sm flex items-center w-full  hover:bg-extraBackground transition duration-700 gap-1.5 px-3 py-2'>
        <RiLogoutBoxRLine className='text-sm md:text-lg' />
        Keluar
      </Link>
    </div>
  );
};

export default DropdownProfile;
