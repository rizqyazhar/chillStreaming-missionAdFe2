import { Link } from "react-router-dom";
import Button from "../elements/Button";
import AuthLayout from "../layouts/AuthLayout";
import ButtonFields from "../fragments/ButtonFields";
import InputFields from "../fragments/InputFields";
import { BiSolidHide } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/redux/authSlice";
import { useNavigate } from "react-router-dom";
import { updateUsers } from "../services/api";
import PopupMessage from "../elements/popupMessage/PopupMessage";

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const [showNotification, setShowNotification] = useState(false);
  const [boolFor, setBoolFor] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const matchUser = await user.users.find(
      (user) =>
        user.username === inputValue.username &&
        user.password === inputValue.password
    );

    if (!matchUser) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 1000);
      setBoolFor(false);
    } else {
      try {
        setShowNotification(true);
        setBoolFor(true);
        await updateUsers(matchUser.id, { ...matchUser, isLogin: true });
        navigate("/home");
      } catch (error) {
        console.error(error);
      }
    }
    setInputValue({ username: "", password: "" });
  };

  return (
    <AuthLayout title='Masuk' subTitle='Selamat Datang Kembali!' bgSrc='login'>
      {showNotification && (
        <PopupMessage
          text={boolFor ? "Login Successful" : "Login Failed"}
          boolForIcon={boolFor ? true : false}
        />
      )}
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
          id='password'
          name='password'
          type='password'
          value={inputValue.password}
          onChange={handleChange}
          placeholder='Masukkan kata sandi'
          htmlFor='password'
          labelText='Kata Sandi'>
          <BiSolidHide className='absolute top-[29px] md:top-[50px] right-3 md:right-5 text-xs md:text-2xl text-light-disabled cursor-pointer' />
          <div className='w-full flex justify-between font-lato mt-1.5'>
            <p className='text-light-secondary text-[10px] md:text-base tracking-[.2px] cursor-default'>
              Belum punya akun?
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
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
