import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from '../ProfileDataReduxForm/ProfileDataReduxForm.module.css'
import ProfileStatus from '../ProfileStatus/ProfileStatus'

const ProfileDataForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={classes.profileInfo}>
         <button onClick={props.deactivateEditMode}>Save</button>
         {props.isOwner && <button onClick={props.activateEditMode}>Edit</button>}
         {props.error && <div className={classes.formSummaryError}> {props.error} </div>}
         <div className={classes.profileName}>
            <b>Full name: </b> <Field component={'input'} name={'fullName'} />
         </div>
         <div className={classes.profileOtherInfo}>
            <ProfileStatus class={classes.profileItem} status={props.status} profile={props.profile} updateStatus={props.updateStatus} />
            <div className={classes.profileItem}><b>Looking for a job: </b><Field component={'input'} name={'lookingForAJob'} type={'checkbox'} /></div>
            <div className={classes.profileItem}><b>My proffesional skills: </b><Field component={'textarea'} name={'lookingForAJobDescription'} /></div>
            <div className={classes.profileItem}><b>About me: </b><Field component={'textarea'} name={'aboutMe'} /></div>
            <div className={classes.profileItem}><b>Contacts: </b>  {Object.keys(props.profile.contacts).map(key => {
               return <div className={classes.contactItem} key={key}><b>{key}: <Field component={'input'} name={`contacts.${key}`} /></b></div>
            })}
            </div>
         </div>
      </form>
   )
}
const ProfileDataReduxForm = reduxForm({ form: 'editProfile', })(ProfileDataForm)

export default ProfileDataReduxForm
