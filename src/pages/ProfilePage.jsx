import SeeAll from "../elements/SeeAll";
import Content from "../fragments/Content";
import Mylist from "../fragments/Mylist";

const ProfilePage = () => {
  return (
    <>
      <Content>
        <section className='w-11/12 mb-20 relative grid auto-rows-2 md:auto-rows-1 md:grid-cols-2 mx-auto gap-5 md:gap-10 py-5 md:py-10'>
          <div className='row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3 w-full flex flex-col gap-6 md:gap-8'>
            <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
              Profile Saya
            </h3>
            <div className='flex items-center gap-12'>
              <img
                src='/img/icon/big-avatar.svg'
                className='w-20 h-20 md:w-[140px] md:h-[140px]'
              />
              <div className='flex flex-col gap-2.5'>
                <button className='flex bg-transparent border rounded-full px-3 py-2 md:px-[22px] md:py-2.5 border-primary-default text-primary-default cursor-pointer'>
                  Ubah Foto
                </button>
                <p className='flex items-center md:gap-1'>
                  <img src='/img/icon/file-upload-outline.svg' />
                  <span className='font-lato font-normal text-xs md:text-sm text-light-secondary cursor-default'>
                    Maksimal 2MB
                  </span>
                </p>
              </div>
            </div>
            <form className='flex flex-col gap-8 items-start'>
              <label
                htmlFor='usernameProfile'
                className='w-full flex flex-col border border-outlineBorder rounded-lg text-sm md:text-base px-4 py-2 bg-paperBackground text-light-disabled'>
                Nama Pengguna
                <input
                  type='text'
                  name='usernameProfile'
                  id='usernameProfile'
                  className='outline-none text-light-primary text-base md:text-lg font-medium font-lato'
                />
              </label>
              <label
                htmlFor='emailProfile'
                className='w-full flex flex-col border border-outlineBorder rounded-lg text-sm md:text-base px-4 py-2 bg-paperBackground text-light-disabled'>
                Email
                <input
                  type='text'
                  name='emailProfile'
                  id='emailProfile'
                  className='outline-none text-light-primary text-base md:text-lg font-medium font-lato'
                />
              </label>
              <label
                htmlFor='passwordProfile'
                className='w-full flex flex-col border border-outlineBorder rounded-lg text-sm md:text-base px-4 py-2 bg-paperBackground text-light-disabled'>
                Kata Sandi
                <input
                  type='text'
                  name='passwordProfile'
                  id='passwordProfile'
                  className='outline-none text-light-primary text-base md:text-lg font-medium font-lato'
                />
              </label>
              <button
                type='submit'
                className='px-[26px] py-2.5 rounded-full font-lato font-bold text-base text-light-primary bg-primary-400 cursor-pointer'>
                Simpan
              </button>
            </form>
          </div>
          <div className='w-fit h-fit md:w-96 xl:w-[558px] 2xl:w-full md:mt-[77px] row-start-1 row-end-2 md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-3 flex gap-3 md:gap-5 p-4 md:p-6 rounded-xl bg-extraBackground'>
            <img src='/img/icon/warning.svg' className='md:w-[78px] h-fit' />
            <div className='w-full flex flex-col gap-3 font-lato text-light-primary'>
              <h4 className='font-bold text-lg md:text-2xl'>
                Saat ini anda belum berlangganan
              </h4>
              <p className='font-normal text-sm md:text-lg'>
                Dapatkan Akses Tak Terduga ke Ribuan Film dan Series Kesukaan
                Kamu!
              </p>
              <button className='md:mt-2 px-[22px] py-1.5 place-self-end rounded-full bg-bodyBackground text-xs md:text-base font-bold cursor-pointer'>
                Mulai Berlangganan
              </button>
            </div>
          </div>
        </section>
        <Mylist toggle={<SeeAll />} />
      </Content>
    </>
  );
};

export default ProfilePage;
