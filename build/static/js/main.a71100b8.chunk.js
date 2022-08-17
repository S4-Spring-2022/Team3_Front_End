(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(12),a=n.n(c),i=(n(20),n(3)),o=(n(21),n(2)),j=n(5),u=n(0),l=function(e){return Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{children:"Search OurBnB"}),Object(u.jsxs)("nav",{children:[null===e.user?Object(u.jsx)(j.b,{to:"/",children:"Login"}):Object(u.jsx)(j.b,{to:"/",children:"Logout"}),Object(u.jsx)(j.b,{to:"/register",children:"Register"})]})]})},b=function(){return Object(u.jsxs)("footer",{id:"footer",children:[Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"Coded by: Ashley Fillmore, Michael O'Reilly, and Stephen Squire"}),Object(u.jsx)("p",{children:" \xa9 Copyright 2022, All Rights Reserved "}),Object(u.jsx)("p",{children:"Built using create-react-app"})]})},d=n(7),h=n(6),O=n.n(h),x=function(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(""),l=Object(i.a)(a,2),b=l[0],h=l[1],x=Object(r.useState)(""),p=Object(i.a)(x,2),f=p[0],g=p[1],v=Object(o.f)();Object(r.useEffect)((function(){e.setUser(null),e.setIsLoggedIn(!1)}),[]);var m=function(){var t=Object(d.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),g(""),""!==s&&""!==b){t.next=5;break}return g("Please enter a username and password"),t.abrupt("return");case 5:return t.next=7,fetch("http://finalspringboot-env.eba-psqhnabc.us-east-1.elasticbeanstalk.com/users/userName?userName=".concat(s),{method:"GET",headers:{"Content-Type":"application/json",mode:"cors","Access-Control-Allow-Origin":"*"}}).then((function(e){return console.log(e),200===e.status?e.json():void g("User does not exist")})).catch((function(e){g("User does not exist")})).then((function(t){console.log(t),t[0].password===b?(e.setUser(s),e.setIsLoggedIn(!0),v("/search")):g("Password is incorrect")})).catch((function(e){console.log(e),g("User does not exist and exit on error")}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{id:"login",children:"Login"}),Object(u.jsxs)("form",{id:"registerForm",onSubmit:m,children:[Object(u.jsx)("label",{id:"username",children:"Username:"}),Object(u.jsx)("input",{type:"text",name:"username",value:s,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{id:"password",children:"Password:"}),Object(u.jsx)("input",{type:"password",name:"password",value:b,onChange:function(e){return h(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:"submit",type:"submit",value:"Login"})]}),f?Object(u.jsx)("p",{className:"error",children:f}):null,Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["Don't have an account? ",Object(u.jsx)(j.b,{to:"/register",children:" Register here."})]})})]})},p=n(8),f=n(9),g=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(""),a=Object(i.a)(c,2),l=a[0],b=a[1],h=Object(r.useState)(),x=Object(i.a)(h,2),g=x[0],v=x[1],m=Object(r.useState)(""),y=Object(i.a)(m,2),S=y[0],w=y[1],C=Object(r.useState)(""),k=Object(i.a)(C,2),I=k[0],L=k[1],P=Object(o.f)(),R=Object(p.a)((function e(t,n,r){Object(f.a)(this,e),this.userName=t,this.password=n,this.personId=r})),T=function(){var e=Object(d.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),L(""),""!==n&&""!==l&&""!==S){e.next=6;break}L("Please enter a username and password"),e.next=20;break;case 6:if(l===S){e.next=10;break}L("Passwords do not match"),e.next=20;break;case 10:return L(null),r=new R(n,l,g),e.next=14,fetch("http://finalspringboot-env.eba-psqhnabc.us-east-1.elasticbeanstalk.com/users/add",{method:"POST",headers:{"Content-Type":"application/json",mode:"cors","Access-Control-Allow-Origin":"*"},body:JSON.stringify(r)}).catch((function(e){window.alert(e)}));case 14:window.alert("User created, returning to login"),s(""),b(""),w(""),v(1),P("/");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{id:"register",children:"Register"}),Object(u.jsxs)("form",{id:"registerForm",onSubmit:T,children:[Object(u.jsx)("label",{id:"registerinfo",children:"Username:"}),Object(u.jsx)("input",{type:"text",name:"username",value:n,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{id:"registerinfo",children:"Person Id"}),Object(u.jsx)("input",{type:"personId",name:"personId",value:g,onChange:function(e){return v(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{id:"registerinfo",children:"Password:"}),Object(u.jsx)("input",{type:"password",name:"password",value:l,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{id:"registerinfo",children:"Confirm Password:"}),Object(u.jsx)("input",{type:"password",name:"password",value:S,onChange:function(e){return w(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:"submit",type:"submit",value:"Register"})]}),I?Object(u.jsx)("p",{className:"error",children:I}):null,Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["Already have an account? ",Object(u.jsx)(j.b,{to:"/",children:" Login here."})]})})]})},v=function(e){var t=e.results,n=Object(r.useState)([]),s=Object(i.a)(n,2),c=s[0],a=s[1];if(Object(r.useEffect)((function(){a(t)}),[]),t.length>0)return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{id:"results",children:"Results"}),Object(u.jsx)("hr",{}),c.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{class:"rentalTitle",children:e.rentalDescription}),Object(u.jsx)("hr",{}),Object(u.jsxs)("h3",{id:"rentalinfo",children:["Availability: ",e.rentalStatus]}),Object(u.jsxs)("h3",{id:"rentalinfo",children:["Rental type: ",e.rentalType]}),Object(u.jsxs)("h3",{id:"rentalinfo",children:["Rating: ",e.rentalScore," Stars"]}),Object(u.jsxs)("h3",{id:"rentalinfo",children:["Nightly Rate: $",e.rentalPrice,".00"]}),Object(u.jsxs)("h3",{id:"rentalinfo",children:["Renting Since: ",e.rentalListDate]})]})}))]})},m=function(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(null),j=Object(i.a)(a,2),l=j[0],b=j[1],h=Object(r.useState)("businessName"),x=Object(i.a)(h,2),p=x[0],f=x[1],g=Object(o.f)(),m=function(){var e=Object(d.a)(O.a.mark((function e(){var t,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(null),e.next=3,fetch("http://finalspringboot-env.eba-psqhnabc.us-east-1.elasticbeanstalk.com/search/rental/".concat(p,"/").concat(p,"?").concat(p,"=").concat(s));case 3:if((t=e.sent).ok){e.next=8;break}return n="An error occurred: ".concat(t.statusText),console.log(n),e.abrupt("return");case 8:return e.next=10,t.json();case 10:r=e.sent,console.log(r.toString()),b(r),c(""),g("/search");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){e.isLoggedIn||g("/")}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{id:"search",children:"Search"}),Object(u.jsxs)("form",{id:"searchForm",onSubmit:function(e){e.preventDefault(),console.log(s),console.log(p),m()},children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{id:"radiobuttons",children:[Object(u.jsx)("input",{type:"radio",name:"searchBy",value:"province",onChange:function(e){return f(e.target.value)}}),"Province"]}),Object(u.jsxs)("label",{id:"radiobuttons",children:[Object(u.jsx)("input",{type:"radio",name:"searchBy",value:"city",onChange:function(e){return f(e.target.value)}}),"City"]}),Object(u.jsxs)("label",{id:"radiobuttons",children:[Object(u.jsx)("input",{type:"radio",name:"searchBy",value:"street",onChange:function(e){return f(e.target.value)}}),"Street"]}),Object(u.jsxs)("label",{id:"radiobuttons",children:[Object(u.jsx)("input",{type:"radio",name:"searchBy",value:"rentalType",onChange:function(e){return f(e.target.value)}}),"Rental Type"]}),Object(u.jsx)("br",{})]}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:"submit",type:"text",placeholder:"Search",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{id:"submit",type:"submit",children:"Submit Search"})]}),Object(u.jsx)("br",{}),l?Object(u.jsx)("div",{children:Object(u.jsx)(v,{results:l,user:e.user})}):null]})};var y=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(!1),a=Object(i.a)(c,2),j=a[0],d=a[1];return Object(u.jsxs)("main",{children:[Object(u.jsx)(l,{user:n,setUser:s}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",element:Object(u.jsx)(x,{setUser:s,setIsLoggedIn:d})}),Object(u.jsx)(o.a,{path:"/register",element:Object(u.jsx)(g,{})}),Object(u.jsx)(o.a,{path:"/search",element:Object(u.jsx)(m,{user:n,isLoggedIn:j})})," // this wont be a link but a result of a login"]}),Object(u.jsx)(b,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(y,{})})}),document.getElementById("root")),S(console.log)}},[[24,1,2]]]);
//# sourceMappingURL=main.a71100b8.chunk.js.map