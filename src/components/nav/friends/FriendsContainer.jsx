import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import FriendsItem from './friendsItem/FriendsItem';


const mapStateToProps = (state) => {

   const friendsElements = state.navFriends.friendsData.map(friend => <FriendsItem id={friend.id} name={friend.name} key={friend.id} />)
   return {
      friendsElements: friendsElements
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
   }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer;
