import { useState } from "react";
import PackageCard from "../../elements/PackageCard";
import PurchaseTutorial from "../../elements/PurchaseTutorial";
import PurchaseCountDown from "../../elements/PurchaseCountDown";

const PurchaseContent = () => {
  const [purchaseClick, setPurchaseClick] = useState(false);
  const handleClick = () => {
    setPurchaseClick((prev) => !prev);
  };

  return (
    <section className='flex flex-col gap-5 md:gap-10 p-10 lg:px-20 font-lato text-light-primary'>
      {purchaseClick && <PurchaseCountDown />}
      <h3 className='font-bold text-xl md:text-[32px] cursor-default'>
        Ringkasan Pembayaran
      </h3>
      <div className='flex flex-col lg:flex-row gap-5'>
        <PackageCard
          packageTitle='Individual'
          packagePrice='49,990'
          packageAmountAccount='1'
          packageQualityDesc='720p'
          cardWidth='w-full lg:w-1/6'
          buttonWidth='w-3/4 md:w-full'
        />
        <form className='w-full lg:w-2/4 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p className='text-base lg:text-base font-semibold'>
              Metode Pembayaran
            </p>
            <div className='flex flex-col lg:flex-row gap-4 text-sm lg:text-base'>
              <label
                htmlFor='credit-card'
                className='w-full flex gap-2 items-center border border-grey-300 rounded-md px-2.5 py-1'>
                <input
                  type='radio'
                  name='purchase-method'
                  id='credit-card'
                  value='credit-card'
                />
                Kartu Debit/Kredit
              </label>
              <label
                htmlFor='bca-va'
                className='w-full flex gap-2 border border-grey-300 rounded-md px-2.5 py-1'>
                <input
                  type='radio'
                  name='purchase-method'
                  id='bca-va'
                  value='bca-va'
                />
                BCA Virtual Account
              </label>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='font-semibold text-base lg:text-lg'>
              Kode Voucher (Jika Ada)
            </p>
            <div className='flex gap-4'>
              <input
                type='text'
                name='redeem-voucher'
                id='redeem-voucher'
                placeholder='Masukkan kode voucher'
                className='w-full border border-[#C8CCD0] rounded-md px-2.5 py-1 placeholder:text-xs placeholder:font-normal placeholder:-translate-y-0.5'
              />
              <button className='bg-bodyBackground rounded-full px-3 py-2 cursor-pointer font-bold text-sm'>
                Gunakan
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-semibold text-base lg:text-lg'>
              Ringkasan Transaksi
            </p>
            <div className='w-full lg:w-1/2 flex flex-col gap-2 text-light-secondary font-normal text-xs lg:text-base'>
              <p className='flex justify-between'>
                Paket Premium Individual
                <span className='text-light-primary'>Rp49.000</span>
              </p>
              <p className='flex justify-between'>
                Biaya Admin <span className='text-light-primary'>Rp3.000</span>
              </p>
              <p className='flex justify-between text-sm lg:text-lg'>
                Total Pembayaran
                <span className='text-light-primary text-base lg:text-lg font-semibold'>
                  Rp52.000
                </span>
              </p>
            </div>
          </div>
          {purchaseClick && <PurchaseTutorial />}

          <button
            type='button'
            onClick={handleClick}
            className='place-self-start bg-primary-400 rounded-full px-4 py-2 text-sm lg:text-base font-bold'>
            Bayar
          </button>
        </form>
      </div>
    </section>
  );
};

export default PurchaseContent;
