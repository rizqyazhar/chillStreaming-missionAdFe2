const PurchaseCountDown = () => {
  return (
    <div className='flex flex-col items-center gap-2 lg:gap-5 p-6 lg:px-20 font-lato text-light-primary bg-paperBackground rounded-xl'>
      <p className='font-normal text-sm lg:text-base'>
        Lakukan Pembayaran Sebelum
      </p>
      <div className='flex flex-row gap-2 lg:gap-4 items-center'>
        <p className='flex items-center gap-1 bg-chipBg rounded-lg px-4 py-2.5 font-bold text-base lg:text-2xl'>
          00
          <span className='font-medium text-xs lg:text-lg text-light-secondary'>
            Jam
          </span>
        </p>
        <p className='font-bold lg:text-xl'>:</p>
        <p className='flex items-center gap-1 bg-chipBg rounded-lg px-4 py-2.5 font-bold text-base lg:text-2xl'>
          14
          <span className='font-medium text-xs lg:text-lg text-light-secondary'>
            Menit
          </span>
        </p>
        <p className='font-bold lg:text-xl'>:</p>
        <p className='flex items-center gap-1 bg-chipBg rounded-lg px-4 py-2.5 font-bold text-base lg:text-2xl'>
          58
          <span className='font-medium text-xs lg:text-lg text-light-secondary'>
            Detik
          </span>
        </p>
      </div>
    </div>
  );
};

export default PurchaseCountDown;
