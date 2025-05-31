import React from "react";

const HeroContent = () => {
  return (
    <section className='w-11/12 flex flex-col items-center mx-auto p-5'>
      <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
        Kenapa Harus Berlangganan?
      </h3>
      <div className='grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-x-10 md:gap-x-20 gap-y-5 md:gap-y-28 mt-6 md:mt-[72px] text-center text-sm md:text-xl font-lato text-light-secondary font-bold'>
        <div className='flex flex-col items-center gap-6'>
          <img src='/img/icon/download.svg' className='w-7 md:w-12' />
          <p>Download Konten pilihan</p>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <img src='/img/icon/advertisements-off.svg' className='w-7 md:w-12' />
          <p>Tidak Ada Iklan</p>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <img src='/img/icon/movie-roll.svg' className='w-7 md:w-12' />
          <p>Tonton Semua Konten</p>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <img src='/img/icon/video-4k-box.svg' className='w-7 md:w-12' />
          <p>Kualitas Maksimal Sampai Dengan 4k</p>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <img src='/img/icon/tablet-cellphone.png' className='w-7 md:w-12' />
          <p>Tonton di Tv, Tablet, Mobile, dan Laptop</p>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <img src='/img/icon/message-reply-text.svg' className='w-7 md:w-12' />
          <p>Subtitle Untuk Konten pilihan</p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
