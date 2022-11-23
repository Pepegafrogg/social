import React from 'react'
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileContact from '../ProfileContact/ProfileContact';
import classes from './ProfileData.module.css'

export default function ProfileData(props) {
   return (
      <div className={classes.profileInfo}>
         {props.isOwner && <button onClick={props.activateEditMode}>Edit</button>}
         <div className={classes.profileName}>
            <b>Full name: </b>{props.profile.fullName}
         </div>
         <div className={classes.profileOtherInfo}>
            <ProfileStatus class={classes.profileItem} status={props.status} profile={props.profile} updateStatus={props.updateStatus} />
            <div className={classes.profileItem}><b>Looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div className={classes.profileItem}><b>My proffesional skills: </b>{props.profile.lookingForAJobDescription}</div>
            <div className={classes.profileItem}><b>About me: </b>{props.profile.aboutMe}</div>
            <div className={classes.profileItem}><b>Contacts: </b>  {Object.keys(props.profile.contacts).map(key => {
               return <ProfileContact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
            </div>
         </div>
      </div>
   )
}
