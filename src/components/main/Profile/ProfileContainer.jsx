import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../../../redux/profileReducer'
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
   }

   render() {
      if (!this.props.isLogin) return <Navigate to={'/login'} />
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}
const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
   }
}
const mapDispatchToProps = { getUserProfile }

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, WithAuthRedirect)(ProfileContainer)

