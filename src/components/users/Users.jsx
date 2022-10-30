import React from 'react';
import UsersItem from './userItem/usersItem';
import classes from './Users.module.css';

const Users = (props) => {
   const pagesCount = Math.ceil(props.totalCount / props.pageSize)
   const pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div className={classes.users}>
         <div className={classes.usersNav}>
            {pages.map(i => {
               return (
                  <span className={props.currentPage === i
                     ? classes.selectedPage
                     : classes.otherPage
                  }
                     onClick={(e) => props.changePage(i)}
                  >
                     {i}
                  </span>
               )
            })}
         </div>
         <div className={classes.usersPage}>
            {props.users.map(u =>
               <UsersItem
                  setClicked={props.setClicked}
                  isClicked={props.isClicked}
                  key={u.id}
                  follow={props.followTC}
                  unFollow={props.unFollowTC}
                  id={u.id}
                  photo={u.photos.small}
                  followed={u.followed}
                  name={u.name}
                  status={u.status}
               />)}
         </div>
      </div>
   );
}

export default Users;
