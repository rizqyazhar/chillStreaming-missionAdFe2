import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoVolumeMuteSharp } from "react-icons/io5";

const Hero = ({ children }) => {
  return (
    <header className='relative max-w-screen flex flex-col justify-center'>
      <div className='w-full'>
        <picture>
          <source srcSet='/img/landscape/hero.svg' media='(min-width: 768px)' />
          <img
            src='/img/landscape/hero-mobile.svg'
            className='w-full h-auto object-cover'
          />
        </picture>
      </div>
      <div className='absolute w-full bottom-10 md:bottom-20 px-5 md:px-20 flex flex-col gap-3 md:gap-10 font-lato text-white'>
        {children}
        <div className='w-80 h-[118px] md:w-[668px] md:h-[148px] flex flex-col gap-3 md:gap-10'>
          <h3 className='font-bold text-2xl md:text-5xl'>Duty After School</h3>
          <p className='text-xs md:text-lg'>
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-2.5'>
            <button className='w-14 md:w-[93px] h-6 md:h-[45px] font-bold text-xs md:text-base bg-primary-300 rounded-full cursor-pointer'>
              Mulai
            </button>
            <button className='flex justify-center gap-2 rounded-full items-center font-bold text-xs md:text-base tracking-wide w-[120px] md:w-[185px] h-[25px] md:h-[45px] bg-paperBackground cursor-pointer'>
              <span>
                <IoMdInformationCircleOutline className='text-xs md:text-2xl' />
              </span>
              Selengkapnya
            </button>
            <span className='w-[30px] md:w-[52px] h-[25px] md:h-[45px] flex justify-center items-center border border-light-secondary rounded-full text-xs md:text-lg cursor-default'>
              18+
            </span>
          </div>
          <div>
            <button className='w-6 md:w-11 h-6 md:h-11 rounded-full border border-light-secondary flex justify-center items-center cursor-pointer'>
              <IoVolumeMuteSharp className='w-3 h-3 md:w-[18px] md:h-[18px]' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
