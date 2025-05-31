const PackageCard = ({
  packageTitle,
  packagePrice,
  packageAmountAccount,
  packageQualityDesc,
  cardWidth = "w-full",
  buttonWidth = "w-full",
}) => {
  return (
    <div
      className={`${cardWidth} h-fit flex flex-col gap-6 p-6 rounded-xl bg-linear-to-r from-[#537cd4]/100 from-1% to-primary-100 to-99% font-lato text-light-primary`}>
      <h5 className='w-fit rounded-full bg-extraBackground px-5 py-2.5 font-semibold text-base'>
        {packageTitle}
      </h5>
      <div className='flex flex-col gap-1 text-xs font-normal'>
        <p>Mulai dari Rp{packagePrice}/bulan</p>
        <p>{packageAmountAccount} Akun</p>
      </div>
      <div className='flex flex-col gap-2 font-normal text-sm'>
        <p className='flex gap-2 items-center'>
          <img src='/public/img/icon/check.svg' className='w-5' />
          Tidak ada iklan
        </p>
        <p className='flex gap-2 items-center'>
          <img src='/public/img/icon/check.svg' className='w-5' />
          Kualitas {packageQualityDesc}
        </p>
        <p className='flex gap-2 items-center'>
          <img src='/public/img/icon/check.svg' className='w-5' />
          Download konten pilihan
        </p>
      </div>
      <div className='border border-outlineBorder'></div>
      <div className='flex flex-col items-center gap-1'>
        <button
          className={`${buttonWidth} flex items-center rounded-full justify-center px-[26px] py-2.5 bg-light-primary text-primary-300 font-bold text-sm cursor-pointer`}>
          Langganan
        </button>
        <p className='text-light-primary font-normal text-xs'>
          Syarat dan Ketentuan Berlaku
        </p>
      </div>
    </div>
  );
};

export default PackageCard;
