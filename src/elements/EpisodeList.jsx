const EpisodeList = () => {
  return (
    <div className='bg-pageHeaderBackground text-light-primary px-5 py-2.5 md:px-16 md:py-6 flex flex-col gap-2 md:gap-7'>
      <h6 className='font-bold text-xs md:text-2xl'>Episode</h6>
      <div className='flex flex-col'>
        <div className='flex items-center gap-3 md:gap-6 px-2 py-2.5 md:px-6 md:py-5 hover:bg-grey-800 rounded-sm'>
          <p className='text-light-primary font-normal md:font-semibold text-xs md:text-lg'>
            1
          </p>
          <img src='/img/landscape/img-32.png' className='w-24 md:w-[170px]' />
          <div className='flex flex-col gap-1 md:gap-2.5'>
            <div className='flex justify-between items-center'>
              <p className='text-light-primary font-semibold text-xs md:text-lg'>
                Pilot
              </p>
              <p className='text-light-primary font-normal md:font-semibold text-xs md:text-sm'>
                30 min
              </p>
            </div>
            <p className='font-normal text-xs md:text-lg overflow-hidden'>
              American football coach Ted Lasso is hired by a wealthy divorcee
              to coach the English soccer team AFC Richmond
            </p>
          </div>
        </div>
        <div className='flex items-center gap-3 md:gap-6 px-2 py-2.5 md:px-6 md:py-5 hover:bg-grey-800 rounded-sm'>
          <p className='text-light-primary font-normal md:font-semibold text-xs md:text-lg'>
            2
          </p>
          <img src='/img/landscape/img-33.png' className='w-24 md:w-[170px]' />
          <div className='flex flex-col gap-2.5'>
            <div className='flex justify-between items-center'>
              <p className='text-light-primary font-semibold text-xs md:text-lg'>
                Biscuits
              </p>
              <p className='text-light-primary font-normal md:font-semibold text-xs md:text-sm'>
                29 min
              </p>
            </div>
            <p className='font-normal text-xs md:text-lg overflow-hidden'>
              It’s Ted’s first day of coaching, and fans aren’t happy. He makes
              little headway but remains undeterred as the team...
            </p>
          </div>
        </div>
        <div className='flex items-center gap-3 md:gap-6 px-2 py-2.5 md:px-6 md:py-5 hover:bg-grey-800 rounded-sm'>
          <p className='text-light-primary font-normal md:font-semibold text-xs md:text-lg'>
            3
          </p>
          <img src='/img/landscape/img-34.png' className='w-24 md:w-[170px]' />
          <div className='flex flex-col gap-2.5'>
            <div className='flex justify-between items-center'>
              <p className='text-light-primary font-semibold text-xs md:text-lg'>
                Trent Crimm: Independent
              </p>
              <p className='text-light-primary font-normal md:font-semibold text-xs md:text-sm'>
                30 min
              </p>
            </div>
            <p className='font-normal text-xs md:text-lg overflow-hidden'>
              To arrange an in-depth exposé, Rebecca pairs cynical journalist
              Trent Crimm with Ted for a day. Ted and Roy...
            </p>
          </div>
        </div>
        <div className='flex items-center gap-3 md:gap-6 px-2 py-2.5 md:px-6 md:py-5 hover:bg-grey-800 rounded-sm'>
          <p className='text-light-primary font-normal md:font-semibold text-xs md:text-lg'>
            4
          </p>
          <img src='/img/landscape/img-35.png' className='w-24 md:w-[170px]' />
          <div className='flex flex-col gap-2.5'>
            <div className='flex justify-between items-center'>
              <p className='text-light-primary font-semibold text-xs md:text-lg'>
                For The Children
              </p>
              <p className='text-light-primary font-normal md:font-semibold text-xs md:text-sm'>
                33 min
              </p>
            </div>
            <p className='font-normal text-xs md:text-lg overflow-hidden'>
              Rebecca hosts the team’s annual charity benefit, where Ted stages
              a reconciliation between Roy and Jamie.
            </p>
          </div>
        </div>
        <div className='flex items-center gap-3 md:gap-6 px-2 py-2.5 md:px-6 md:py-5 hover:bg-grey-800 rounded-sm'>
          <p className='text-light-primary font-normal md:font-semibold text-xs md:text-lg'>
            5
          </p>
          <img src='/img/landscape/img-36.png' className='w-24 md:w-[170px]' />
          <div className='flex flex-col gap-2.5'>
            <div className='flex justify-between items-center'>
              <p className='text-light-primary font-semibold text-xs md:text-lg'>
                Tan Lines
              </p>
              <p className='text-light-primary font-normal md:font-semibold text-xs md:text-sm'>
                31 min
              </p>
            </div>
            <p className='font-normal text-xs md:text-lg overflow-hidden'>
              With his wife and son visiting from America, Ted makes drastic
              changes to the lineup during a critical match.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeList;
