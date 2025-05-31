import { IoPerson } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateUsers } from "../services/api";
import { useSelector } from "react-redux";

const DropdownProfile = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleLogoutClick = async (e) => {
    e.preventDefault();

    if (!user || !Array.isArray(user.users)) {
      console.error("Data user tidak tersedia atau tidak valid.");
      return;
    }

    const searchUser = user.users.find((user) => user.isLogin === true);

    if (!searchUser) {
      console.warn("Tidak ada user yang sedang login.");
      return;
    }

    try {
      await updateUsers(searchUser.id, { ...searchUser, isLogin: false });
      navigate("/");
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };
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
      <button
        onClick={handleLogoutClick}
        className='text-xs md:text-sm flex items-center w-full  hover:bg-extraBackground transition duration-700 gap-1.5 px-3 py-2'>
        <RiLogoutBoxRLine className='text-sm md:text-lg' />
        Keluar
      </button>
    </div>
  );
};

export default DropdownProfile;
