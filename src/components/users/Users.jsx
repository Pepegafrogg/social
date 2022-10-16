import React from 'react';
import UsersItem from './userItem/usersItem';
import classes from './Users.module.css'

const Users = (props) => {
   const users = props.users.map(u =>
      <UsersItem
         key={u.id}
         addFriend={props.addFriend}
         deleteFriend={props.deleteFriend}
         id={u.id}
         avatar={u.avatar}
         friend={u.friend}
         name={u.name}
         status={u.status}
         country={u.location.country}
         city={u.location.city} />)

   return (
      <div className={classes.users}>
         {users}
      </div>
   );
}

export default Users;
