import { connect } from "react-redux";
import { follow, setCurrentPage, setFetching, setTotalCount, setUsers, unFollow } from "../../redux/usersReducer";
import axios from 'axios';
import Users from './Users';
import React from 'react';
import PreLoader from "../common/preLoader/preLoader";


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.setFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
         })
   }
   changePage = (pageNumber) => {
      this.props.setFetching(true)
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setFetching(false)
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return (this.props.isFetching
         ? <PreLoader />
         : <Users props={this.props} changePage={this.changePage} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   }

}
const mapDispatchToProps = { follow, unFollow, setUsers, setCurrentPage, setTotalCount, setFetching, }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
