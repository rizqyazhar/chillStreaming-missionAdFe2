const AuthLayout = ({ title, subTitle, children, bgSrc }) => {
  return (
    <div
      style={{ backgroundImage: `url('/img/bg-img/bg-${bgSrc}.jpg')` }}
      className='relative min-h-screen bg-cover bg-center flex justify-center items-center'>
      <div className='absolute inset-0 bg-black/30'></div>
      <div className='container relative z-10 py-44 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-5 md:gap-[37px] rounded-2xl bg-pageHeaderBackground/85 w-[306px] md:w-[529px] p-10'>
          <div>
            <img src='/logo/chill-logo.svg' className='w-[94px] md:w-full' />
          </div>

          <div className='flex flex-col justify-center items-center font-lato'>
            <h1 className='text-lg md:text-3xl font-bold text-white'>
              {title}
            </h1>
            <p className='text-[10px] md:text-lg font-normal text-white tracking[.2px]'>
              {subTitle}
            </p>
          </div>
          <form className='w-full flex flex-col justify-center items-center gap-5 md:gap-[37px]'>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
