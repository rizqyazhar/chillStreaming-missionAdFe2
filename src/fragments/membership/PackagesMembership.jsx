import React from "react";
import PackageCard from "../../elements/PackageCard";

const PackagesMembership = () => {
  return (
    <section className='w-11/12 md:w-full flex flex-col gap-10 items-center mx-auto mt-5 md:mt-20 p-10 bg-paperBackground font-lato text-light-primary'>
      <div className='flex flex-col items-center gap-1.5 md:gap-3'>
        <h3 className='text-xl md:text-[32px] font-bold'>Pilih Paketmu</h3>
        <p className='text-sm md:text-lg font-medium'>
          Temukan paket sesuai kebutuhanmu!
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:gap-[72px]'>
        <PackageCard
          packageTitle='Individual'
          packagePrice='49,990'
          packageAmountAccount='1'
          packageQualityDesc='720p'
        />
        <PackageCard
          packageTitle='Berdua'
          packagePrice='79,990'
          packageAmountAccount='2'
          packageQualityDesc='1080p'
        />
        <PackageCard
          packageTitle='Keluarga'
          packagePrice='159,990'
          packageAmountAccount='5-7'
          packageQualityDesc='4K'
        />
      </div>
    </section>
  );
};

export default PackagesMembership;
