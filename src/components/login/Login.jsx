import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validator';
import { Input } from '../common/FormsControls/FormsControls'
import { login, logout } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
const Login = styled.div`
padding: 0 20px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
position: relative;
`
const LoginHeader = styled.div`
font-size: 28px;
font-weight: 700;
top: 20%;
position: absolute;
margin: 0 auto;
`
const LoginItem = styled.div`
& input{
   margin: 0;
   margin-bottom: 10px;
}
`;
const LoginBtn = styled.button`
border-radius: 30px;
display: block;
width: 100%;
padding: 5px;
background-color: rgb(35, 53, 212);
color: white;
`;
const FormSummaryError = styled.div`
margin:  5px 0;
border: 1px red solid;
padding: 10px;
color: red;
`;

const maxLength25 = maxLengthCreator(25)

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <LoginItem >
            <Field placeholder={'Email'} component={Input} name={'email'} validate={[required, maxLength25]} />
         </LoginItem>
         <LoginItem>
            <Field placeholder={'Password'} type={'password'} component={Input} name={'password'} validate={[required, maxLength25]} />
         </LoginItem>
         <LoginItem>
            <Field type={'checkbox'} component={Input} name={'rememberMe'} /> Remember me
         </LoginItem>
         {props.captchaUrl && <img src={props.captchaUrl} />}
         {props.captchaUrl &&
            <LoginItem>
               <Field placeholder={'Write captcha'} component={'input'} name={'captcha'} />
            </LoginItem>}
         {props.error && <FormSummaryError> {props.error} </FormSummaryError>}
         <LoginItem>
            <LoginBtn>login</LoginBtn>
         </LoginItem>
      </form>
   );
}
const LoginReduxForm = reduxForm({ form: 'login', })(LoginForm)
const LoginContainer = (props) => {
   const onSubmit = (formData) => {
      const { email, password, rememberMe, captcha } = formData
      props.login(email, password, rememberMe, captcha)
   }
   if (props.isLogin) {
      return <Navigate to={'/profile'} />
   }
   return (
      <Login>
         <LoginHeader >Login </LoginHeader>
         <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </Login>
   )
}
const mapStateToProps = (state) => ({
   isLogin: state.auth.isLogin,
   captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, { login, logout })(LoginContainer);
