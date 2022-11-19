import React from 'react';
import Paginator from '../common/paginator/Paginator';
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
         <Paginator currentPage={props.currentPage} totalCount={props.totalCount} pageSize={props.pageSize} changePage={props.changePage} portionSize={10} />
         <div className={classes.usersPage}>
            {props.users.map(u =>
               <UsersItem
                  {...props}
                  {...u}
                  key={u.id}
               />)}
         </div>
      </div>
   );
}

export default Users;
