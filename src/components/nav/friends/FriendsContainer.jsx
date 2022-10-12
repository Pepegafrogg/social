import React from 'react';
import { connect } from 'react-redux';
import Friends from './friendsItem/FriendsItem';
import FriendsItem from './friendsItem/FriendsItem';


const mapStateToProps = (state) => {

   const postsElements = state.navFriends.friendsData.map(friend => <FriendsItem id={friend.id} name={friend.name} key={friend.id} />)
   return {
      postsElements: postsElements
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
   }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer;
