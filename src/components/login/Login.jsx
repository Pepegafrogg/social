import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validator';
import { Input } from '../common/FormsControls/FormsControls'
import classes from './Login.module.css';
import { login, logout } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom';

const maxLength5 = maxLengthCreator(25)

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div className={classes.loginItem}>
            <Field className={classes.loginInput} placeholder={'Emal'} component={Input} name={'email'} validate={[required, maxLength5]} />
         </div>
         <div className={classes.loginItem}>
            <Field placeholder={'Password'} type={'password'} component={Input} name={'password'} validate={[required, maxLength5]} />
         </div>
         <div className={classes.loginItem}>
            <Field type={'checkbox'} component={Input} name={'rememberMe'} /> Remember me
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
      const { email, password, rememberMe } = formData
      props.login(email, password, rememberMe)
   }
   if (props.isLogin) {
      return <Navigate to={'/profile'} />
   }
   return (
      <div className={classes.login}>
         <div className={classes.loginHeader} >Login </div>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}
const mapStateToProps = (state) => ({
   isLogin: state.auth.isLogin
})
export default connect(mapStateToProps, { login, logout })(Login);
