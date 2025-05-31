import { Link } from "react-router-dom";
import Button from "../elements/Button";
import AuthLayout from "../layouts/AuthLayout";
import ButtonFields from "../fragments/ButtonFields";
import InputFields from "../fragments/InputFields";
import { BiSolidHide } from "react-icons/bi";

const LoginPage = () => {
  return (
    <AuthLayout title='Masuk' subTitle='Selamat Datang Kembali!' bgSrc='login'>
      <InputFields
        id='username'
        type='text'
        placeholder='Masukkan username'
        htmlFor='username'
        labelText='Username'
      />
      <InputFields
        id='password'
        type='password'
        placeholder='Masukkan kata sandi'
        htmlFor='password'
        labelText='Kata Sandi'>
        <BiSolidHide className='absolute top-[29px] md:top-[50px] right-3 md:right-5 text-xs md:text-2xl text-light-disabled cursor-pointer' />
        <div className='w-full flex justify-between font-lato mt-1.5'>
          <p className='text-light-secondary text-[10px] md:text-base tracking-[.2px] cursor-default'>
            Belum punya akun?{" "}
            <Link
              to='/register'
              className='text-white text-[10px] md:text-sm cursor-pointer'>
              Daftar
            </Link>
          </p>
          <p className='text-white text-[10px] md:text-base cursor-pointer'>
            <Link to='register'>Lupa kata sandi?</Link>
          </p>
        </div>
      </InputFields>
      <ButtonFields />
    </AuthLayout>
  );
};

export default LoginPage;
