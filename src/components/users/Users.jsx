import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsersTC, setCurrentPage } from '../../redux/usersReducer';
import Paginator from '../common/paginator/Paginator';
import PreLoader from '../common/preLoader/preLoader';
import UsersItem from './userItem/usersItem';
import classes from './Users.module.css';

const Users = (props) => {
   const dispatch = useDispatch()
   const { users, pageSize, totalCount, currentPage, isFetching, isClicked } = useSelector(state => state.usersPage)
   const pagesCount = Math.ceil(props.totalCount / props.pageSize)
   const pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   useEffect(() => {
      dispatch(requestUsersTC(currentPage, pageSize))
   }, []);
   const changePage = (pageNumber) => {
      dispatch(setCurrentPage(pageNumber))
      dispatch(requestUsersTC(pageNumber, pageSize))
   }
   return (
      (isFetching
         ? <PreLoader />
         :
         <div className={classes.users}>
            <Paginator currentPage={currentPage} totalCount={totalCount} pageSize={pageSize} changePage={changePage} portionSize={10} />
            <div className={classes.usersPage}>
               {users.map(u =>
                  <UsersItem
                     isClicked={isClicked}
                     {...u}
                     key={u.id}
                  />)}
            </div>
         </div>
      )
   )
}

export default Users;
