import React, { Component } from 'react';

class ProfileStatus extends Component {
   state = {
      editMode: false,
      status: this.props.status
   }
   activeState = () => {
      this.setState({
         editMode: true,
      })
   }
   deactiveState = () => {
      this.setState({
         editMode: false
      })
      this.props.updateStatus(this.state.status)
   }
   onStatusChange = (e) => {
      console.log(e.target.value);
      this.setState({
         status: e.target.value
      })
   }
   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }
   render() {
      return (
         <div>
            {this.state.editMode
               ? <div> <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveState} value={this.state.status} /> </div>
               : <div> <span onDoubleClick={this.activeState} >{this.props.status}</span> </div>
            }
         </div>
      );
   }
}

export default ProfileStatus;
