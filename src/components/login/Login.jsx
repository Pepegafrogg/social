import React from 'react';
import { useForm } from "react-hook-form";
import { login, logout } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './Login.module.css'


const Login = (props) => {
   const dispatch = useDispatch()
   const { isLogin, captchaUrl } = useSelector(state => state.auth)
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data => {
      dispatch(login(data.email, data.password, data.rememberMe, data.captcha))

   }
   if (isLogin) {
      return <Navigate to={'/profile'} />
   }
   return (
      <form className={s.login} onSubmit={handleSubmit(onSubmit)}>
         <input placeholder='Email' {...register("email")} />
         <input placeholder='Password' type={'password'} {...register("password")} />
         <input type={'checkbox'}  {...register("rememberMe")} />Remember me
         {captchaUrl && <img src={captchaUrl} />}
         {captchaUrl && <input className={s.loginCaptcha} placeholder='Write captcha' {...register("captcha")} />}
         <button className={s.loginButton}>Login</button>
      </form>
   );
}
export default Login