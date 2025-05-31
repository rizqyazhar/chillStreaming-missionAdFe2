import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='max-w-screen bottom-0 border-t border-bodyBackground bg-pageHeaderBackground h-48 md:h-[284px] p-5 md:px-10 xl:px-20 md:py-[60px] font-lato text-white flex flex-col gap-7 md:gap-0 md:grid md:auto-cols-3'>
      <div className='flex flex-col gap-4 md:gap-[26px] justify-center'>
        <div>
          <img src='/logo/chill-logo.svg' className='w-[84px] md:w-[163px]' />
        </div>
        <p className='text-poppins text-xs md:text-base'>
          @2023 Chill All Rights Reserved.
        </p>
      </div>
      <div className='flex flex-col gap-2 md:col-start-2 md:col-end-3 md:grid md:auto-cols-4'>
        <div className='col-start-1 col-end-4 flex flex-col gap-[15px]'>
          <div className='flex justify-between items-center'>
            <h4 className='font-bold tracking-[.2px] cursor-default'>Genre</h4>
            <div className='md:hidden'>
              <MdKeyboardArrowRight className='text-2xl' />
            </div>
          </div>
          <div className='hidden md:grid md:grid-cols-[repeat(4,max-content)] md:gap-x-7 md:gap-y-2.5 md:tracking-[.2px]'>
            <a href=''>Aksi</a>
            <a href=''>Drama</a>
            <a href=''>Komedi</a>
            <a href=''>Sains & Alam</a>
            <a href=''>Anak-anak</a>
            <a href=''>Fantasi Ilmiah & Fantasi</a>
            <a href=''>Petualangan</a>
            <a href=''>Thriller</a>
            <a href=''>Anime</a>
            <a href=''>Kejahatan</a>
            <a href=''>Perang</a>
            <a href=''>Britania</a>
            <a href=''>KDrama</a>
            <a href=''>Romantis</a>
          </div>
        </div>
      </div>
      <div className='col-start-3 col-end-4 flex flex-col gap-[15px] -mt-5'>
        <div className='flex justify-between items-center'>
          <h4 className='font-bold tracking-[.2px] cursor-default'>Bantuan</h4>
          <div className='md:hidden'>
            <MdKeyboardArrowRight className='text-2xl' />
          </div>
        </div>
        <div className='hidden md:grid md:grid-rows-4 md:gap-2.5 md:font-medium'>
          <a href=''>FAQ</a>
          <a href=''>Kontak Kami</a>
          <a href=''>Privasi</a>
          <a href=''>Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
