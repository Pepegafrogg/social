import { connect } from "react-redux";
import { followTC, unFollowTC, setCurrentPage, setUsers, setClicked, getUsersTC } from "../../redux/usersReducer";
import Users from './Users';
import React from 'react';
import PreLoader from "../common/preLoader/preLoader";
import { compose } from "redux";

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
   }
   changePage = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.getUsersTC(pageNumber, this.props.pageSize)
   }
   render() {
      return (this.props.isFetching
         ? <PreLoader />
         : <Users {...this.props} changePage={this.changePage} />
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
      isClicked: state.usersPage.isClicked,
   }

}
const mapDispatchToProps = { followTC, unFollowTC, setUsers, setCurrentPage, setClicked, getUsersTC }


export default compose(connect(mapStateToProps, mapDispatchToProps),)(UsersContainer)