import React from 'react';
import { Field } from 'redux-form';
import classes from './FormsControls.module.css'

export const FormControl = ({ input, meta, element, ...props }) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
         {props.children}
         {hasError && <span>{meta.error}</span>}
      </div>
   );
}



export const TextArea = (props) => {
   const { input, meta, element, ...restProps } = props
   return (<FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>)
}
export const Input = (props) => {
   const { input, meta, element, ...restProps } = props
   return (<FormControl {...props}><input {...input} {...restProps}></input></FormControl>)
}
// export const createField = (placeholder, component, name, validators, WrappedClassName, props, className,) => {
//    <div className={WrappedClassName}>
//       <Field className={className} placeholder={placeholder} component={component} name={name} validate={validators} {...props} />
//    </div>
// }
