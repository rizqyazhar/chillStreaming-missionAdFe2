import { Link } from "react-router-dom";
import Button from "../elements/Button";
import AuthLayout from "../layouts/AuthLayout";
import ButtonFields from "../fragments/ButtonFields";
import InputFields from "../fragments/InputFields";
import { BiSolidHide } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUsers } from "../services/api";
import { fetchUsers } from "../store/redux/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isLogin: false,
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim()) {
      setInputValue((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const matchUser = user.users.find(
      (user) => user.email === inputValue.email
    );
    if (inputValue.password === inputValue.confirmPassword) {
      console.log(matchUser);
      if (!matchUser) {
        const dataToSend = {
          username: inputValue.username,
          email: inputValue.email,
          password: inputValue.password,
          isLogin: inputValue.isLogin,
        };
        try {
          await postUsers(dataToSend);
          console.log(matchUser);
          navigate("/");
        } catch (error) {
          console.error(error);
        }
        console.log("ready");
      }
    } else {
      console.log("unmatch");
    }
  };

  return (
    <AuthLayout title='Daftar' subTitle='Selamat Datang!' bgSrc='register'>
      <form
        className='w-full flex flex-col justify-center items-center gap-5 md:gap-[37px]'
        onSubmit={handleSubmit}>
        <InputFields
          id='username'
          name='username'
          type='text'
          value={inputValue.username}
          onChange={handleChange}
          placeholder='Masukkan username'
          htmlFor='username'
          labelText='Username'
        />
        <InputFields
          id='email'
          name='email'
          type='email'
          value={inputValue.email}
          onChange={handleChange}
          placeholder='Masukkan email'
          htmlFor='email'
          labelText='Email'
        />
        <InputFields
          id='password'
          name='password'
          type='password'
          value={inputValue.password}
          onChange={handleChange}
          placeholder='Masukkan kata sandi'
          htmlFor='password'
          labelText='Kata Sandi'>
          <BiSolidHide className='absolute top-7 md:top-[50px] right-3 md:right-5 text-xs md:text-2xl text-light-disabled cursor-pointer' />
        </InputFields>
        <InputFields
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          value={inputValue.confirmPassword}
          onChange={handleChange}
          placeholder='Masukkan kata sandi'
          htmlFor='password'
          labelText='Konfirmasi Kata Sandi'>
          <BiSolidHide className='absolute top-[29px] md:top-[50px] right-3 md:right-5 text-xs md:text-2xl text-light-disabled cursor-pointer' />
          <div className='w-full flex justify-between font-lato mt-1.5'>
            <p className='text-light-secondary text-[10px] md:text-base tracking-[.2px] cursor-default'>
              Sudah punya akun?
              <Link
                to='/'
                className='text-white text-[10px] md:text-sm cursor-pointer'>
                Masuk
              </Link>
            </p>
          </div>
        </InputFields>
        <ButtonFields />
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
