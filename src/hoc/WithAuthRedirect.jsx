import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"


const mapStateToPropsForRedirect = (state) => {
   return {
      isLogin: state.auth.isLogin,
   }
}

export const WithAuthRedirect = (Component) => {

   const RedirectComponent = (props) => {
      if (!props.isLogin) return <Navigate to={'/login'} />
      return <Component {...props} />
   }
   const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

   return ConnectedAuthRedirectComponent
}




// export const WithAuthRedirect = (Component) => {
//    class RedirectComponent extends React.Component {
//       render() {
//          if (!this.props.isLogin) return <Navigate to={'/login'} />
//          return <Component {...this.props} />
//       }
//    }
//    return RedirectComponent
// }
