import { connect } from "react-redux";
import { followTC, unFollowTC, setCurrentPage, setUsers, setClicked, requestUsersTC } from "../../redux/usersReducer";
import Users from './Users';
import React from 'react';
import PreLoader from "../common/preLoader/preLoader";
import { compose } from "redux";
import { getCurrentPage, getIsClicked, getIsFetching, getPageSize, getTotalCount, getUsers } from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.requestUsersTC(this.props.currentPage, this.props.pageSize)
   }
   changePage = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.requestUsersTC(pageNumber, this.props.pageSize)
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