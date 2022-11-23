import { connect } from "react-redux";
import { followTC, unFollowTC, setCurrentPage, setUsers, setClicked, requestUsersTC } from "../../redux/usersReducer";
import Users from './Users';
import React from 'react';
import PreLoader from "../common/preLoader/preLoader";
import { compose } from "redux";
import { getCurrentPage, getIsClicked, getIsFetching, getPageSize, getTotalCount, getUsers } from "../../redux/usersSelectors";
import { useEffect } from "react";



const UsersContainer = (props) => {
   useEffect(() => {
      props.requestUsersTC(props.currentPage, props.pageSize)
   }, []);
   const changePage = (pageNumber) => {
      props.setCurrentPage(pageNumber)
      props.requestUsersTC(pageNumber, props.pageSize)
   }
   return (props.isFetching
      ? <PreLoader />
      : <Users {...props} changePage={changePage} />
   )
}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalCount: getTotalCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      isClicked: getIsClicked(state),
   }

}
const mapDispatchToProps = { followTC, unFollowTC, setUsers, setCurrentPage, setClicked, requestUsersTC }


export default compose(connect(mapStateToProps, mapDispatchToProps),)(UsersContainer)