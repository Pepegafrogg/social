import React, { Component, useEffect, useState } from 'react';


const ProfileStatus = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status)
   }, [props.status]);

   const activeState = () => {
      setEditMode(true)
   }
   const deactiveState = () => {
      setEditMode(false)
      props.updateStatus(status)
   }
   const onStatusChange = (e) => {
      setStatus(e.target.value)
   }

   return (
      <div>
         {editMode
            ? <div> <input onChange={onStatusChange} autoFocus={true} onBlur={deactiveState} value={status} /> </div>
            : <div> <span onDoubleClick={activeState} >{props.status}</span> </div>
         }
      </div>
   )
}


export default ProfileStatus;


   // state = {
   //    editMode: false,
   //    status: this.props.status
   // }
   // activeState = () => {
   //    this.setState({
   //       editMode: true,
   //    })
   // }
   // deactiveState = () => {
   //    this.setState({
   //       editMode: false
   //    })
   //    this.props.updateStatus(this.state.status)
   // }
   // onStatusChange = (e) => {
   //    console.log(e.target.value);
   //    this.setState({
   //       status: e.target.value
   //    })
   // }
   // componentDidUpdate(prevProps, prevState) {
   //    if (prevProps.status !== this.props.status) {
   //       this.setState({
   //          status: this.props.status
   //       })
   //    }
   // }
   // render() {