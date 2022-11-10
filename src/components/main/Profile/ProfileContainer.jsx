import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile, updateStatus, getStatus } from '../../../redux/profileReducer'
import Profile from './Profile'
import { Navigate, useLocation, useNavigate, useParams, } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }

   return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.router.params.userId
      if (!userId) userId = 2
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
   }

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}
const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status
   }
}
const mapDispatchToProps = { getUserProfile, getStatus, updateStatus }

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter,)(ProfileContainer)

