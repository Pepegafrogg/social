import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      addFriend: (userId) => {
         dispatch(followAC(userId))
      },
      deleteFriend: (userId) => {
         dispatch(unFollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      }
   }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer