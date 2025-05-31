const PurchaseTutorial = () => {
  return (
    <div className='flex flex-col gap-3 lg:gap-2 font-lato'>
      <h5 className='text-light-primary font-semibold text-base lg:text-lg'>
        Tata Cara Pembayaran
      </h5>
      <div className='flex flex-col gap-1 lg:gap-0.5 text-light-secondary font-normal text-xs lg:text-base'>
        <p>
          1. Buka aplikasi BCA Mobile Banking atau akses BCA Internet Banking.
        </p>
        <p>2. Login ke akun Anda.</p>
        <p>3. Pilih menu "Transfer" atau "Pembayaran".</p>
        <p>4. Pilih opsi "Virtual Account" atau "Virtual Account Number".</p>
        <p>
          5. Masukkan nomor virtual account dan jumlah pembayaran, lalu
          konfirmasikan pembayaran.
        </p>
      </div>
    </div>
  );
};

export default PurchaseTutorial;
