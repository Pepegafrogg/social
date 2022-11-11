import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Login.module.css';

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div className={classes.loginItem}>
            <Field className={classes.loginInput} placeholder={'Login'} component={'input'} name={'login'} />
         </div>
         <div className={classes.loginItem}>
            <Field placeholder={'Password'} component={'input'} name={'password'} />
         </div>
         <div className={classes.loginItem}>
            <Field type={'checkbox'} component={'input'} name={'remember me'} /> Remember me
         </div>
         <div className={classes.loginItem}>
            <button className={classes.loginBtn}>login</button>
         </div>
      </form>
   );
}
const LoginReduxForm = reduxForm({ form: 'login', })(LoginForm)
const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData);
   }
   return (
      <div className={classes.login}>
         <div className={classes.loginHeader} >Login </div>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}
export default Login;
