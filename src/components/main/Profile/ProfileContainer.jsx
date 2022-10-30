import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../../../redux/profileReducer'
import Profile from './Profile'
import { useLocation, useNavigate, useParams, } from 'react-router-dom';

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
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile
   }

}
const mapDispatchToProps = { getUserProfile }
let url = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(url)
