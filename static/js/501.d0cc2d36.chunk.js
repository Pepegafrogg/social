"use strict";(self.webpackChunkwhat=self.webpackChunkwhat||[]).push([[501],{501:function(s,t,e){e.r(t),e.d(t,{default:function(){return z}});var i=e(2791),n="Header_header__GS3ez",r="Header_header__img__RH0XN",o=e(184),a=function(){return(0,o.jsx)("div",{className:n,children:(0,o.jsx)("img",{className:r,src:"http://green-forest36.ru/wp-content/uploads/2020/04/2-1.jpg",alt:""})})},u="Main_main__sqtny",l=e(8687),c=e(6508),f=e(6139),d=e(704),p=e(77),h=e(5558),_="MyPost_post__M2UW-",j="MyPost_postText__+AQNl",x="MyPost_postLikes__Ly3YA",m=function(s){return(0,o.jsxs)("div",{className:_,children:[(0,o.jsx)("div",{className:j,children:s.post}),(0,o.jsxs)("div",{className:x,children:["likes: ",s.likes]})]})},v="MyPosts_main__V2bPk",g="MyPosts_formname__UdwmH",P="MyPosts_form__kk4D-",N="MyPosts_listOfPosts__suJiJ",k=(0,p.D)(5),y=(0,d.Z)({form:"addPost"})((function(s){return(0,o.jsxs)("form",{onSubmit:s.handleSubmit,className:P,children:[(0,o.jsx)(f.Z,{component:h.Kx,name:"postText",placeholder:"Write your post",validate:[p.C,k]}),(0,o.jsx)("button",{children:"add post"})]})})),b=function(s){var t=s.posts.map((function(s){return(0,o.jsx)(m,{id:s.id,post:s.post,likes:s.likes},s.id)}));return(0,o.jsxs)("div",{className:v,children:[(0,o.jsx)("div",{className:g,children:"My posts"}),(0,o.jsx)(y,{onSubmit:function(t){s.addPost(t.postText)}}),(0,o.jsx)("div",{className:N,children:t})]})},Z={addPost:c.q2},M=(0,l.$j)((function(s){return{posts:s.profilePage.postsData}}),Z)(b),S=e(5671),C=e(3144),I=e(136),U=e(516),w=e(8683),D=e(2442),L=e(8163),H="Profile_profile__RVcGJ",J="Profile_profileImg__RbAgh",A="Profile_profileName__shgpi",O="Profile_profileInfo__h+uBQ",R="Profile_profileOtherInfo__Y6-nb",T="ProfileItem_profileOtherinfoItem__CdfQa",q=function(s){return(0,o.jsx)("div",{className:T,children:s.value})},F=e(885),Q=function(s){var t=(0,i.useState)(!1),e=(0,F.Z)(t,2),n=e[0],r=e[1],a=(0,i.useState)(s.status),u=(0,F.Z)(a,2),l=u[0],c=u[1];(0,i.useEffect)((function(){c(s.status)}),[s.status]);return(0,o.jsx)("div",{children:n?(0,o.jsxs)("div",{children:[" ",(0,o.jsx)("input",{onChange:function(s){c(s.target.value)},autoFocus:!0,onBlur:function(){r(!1),s.updateStatus(l)},value:l})," "]}):(0,o.jsxs)("div",{children:[" ",(0,o.jsx)("span",{onDoubleClick:function(){r(!0)},children:s.status})," "]})})},$=function(s){return s.profile?(0,o.jsxs)("div",{className:H,children:[(0,o.jsx)("div",{className:J,children:(0,o.jsx)("img",{src:s.profile.photos.large||L.C,alt:""})}),(0,o.jsxs)("div",{className:O,children:[(0,o.jsx)("div",{className:A,children:s.profile.fullName}),(0,o.jsxs)("div",{className:R,children:[(0,o.jsx)(Q,{status:s.status,profile:s.profile,updateStatus:s.updateStatus}),(0,o.jsx)(q,{value:"Date of birth: 2january"}),(0,o.jsx)(q,{value:"City: Minsk"}),(0,o.jsx)(q,{value:"Job: ".concat(s.profile.lookingForAJob)}),(0,o.jsx)(q,{value:"Status: ".concat(s.profile.aboutMe)})]})]})]}):(0,o.jsx)(D.Z,{})},B=e(7689),G=(e(1466),e(7781));var V=function(s){(0,I.Z)(e,s);var t=(0,U.Z)(e);function e(){return(0,S.Z)(this,e),t.apply(this,arguments)}return(0,C.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.router.params.userId;s||(s=this.props.authUserId)||(s=2),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"render",value:function(){return(0,o.jsx)($,(0,w.Z)((0,w.Z)({},this.props),{},{profile:this.props.profile}))}}]),e}(i.Component),W={getUserProfile:c.et,getStatus:c.lR,updateStatus:c.Nf},Y=(0,G.qC)((0,l.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authUserId:s.auth.userId,isLogin:s.auth.Islogin}}),W),(function(s){return function(t){var e=(0,B.TH)(),i=(0,B.s0)(),n=(0,B.UO)();return(0,o.jsx)(s,(0,w.Z)((0,w.Z)({},t),{},{router:{location:e,navigate:i,params:n}}))}}))(V),z=function(s){return(0,o.jsxs)("div",{className:u,children:[(0,o.jsx)(a,{}),(0,o.jsx)(Y,{}),(0,o.jsx)(M,{})]})}},1466:function(s,t,e){e.d(t,{e:function(){return u}});var i=e(8683),n=(e(2791),e(8687)),r=e(7689),o=e(184),a=function(s){return{isLogin:s.auth.isLogin}},u=function(s){return(0,n.$j)(a)((function(t){return t.isLogin?(0,o.jsx)(s,(0,i.Z)({},t)):(0,o.jsx)(r.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=501.d0cc2d36.chunk.js.map