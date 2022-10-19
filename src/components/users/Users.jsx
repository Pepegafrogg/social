import axios from 'axios';
import React from 'react';
import UsersItem from './userItem/usersItem';
import classes from './Users.module.css';

class Users extends React.Component {
   constructor(props) {
      super(props)
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   getUsers = () => {
      {
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
               this.props.setUsers(response.data.items)
            })
      }
   }

   render() {
      return (
         <div className={classes.users}>
            <button onClick={this.getUsers}>Get users</button>
            {this.props.users.map(u =>
               <UsersItem
                  key={u.id}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  id={u.id}
                  photo={u.photos.small}
                  followed={u.followed}
                  name={u.name}
                  status={u.status}
               // // country={u.location.country}
               // // city={u.location.city}
               />)}
         </div>
      );
   }
}

export default Users;
