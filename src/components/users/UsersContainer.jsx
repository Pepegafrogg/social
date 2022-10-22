import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC } from "../../redux/usersReducer";
import axios from 'axios';
import Users from './Users';
import React from 'react';



class UsersContainer extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setCount(response.data.totalCount)
         })
   }
   changePage = (pageNumber) => {
      this.props.setPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return (
         <Users props={this.props} changePage={this.changePage} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unFollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setPage: (page) => {
         dispatch(setCurrentPageAC(page))
      },
      setCount: (count) => {
         dispatch(setTotalCountAC(count))
      }

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
