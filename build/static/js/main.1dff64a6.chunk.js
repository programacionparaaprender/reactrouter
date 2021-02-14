(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(77)},50:function(e,t,a){},52:function(e,t,a){},68:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),l=a(7),c=a(6),s=a(8),o=a(0),i=a.n(o),u=a(17),m=(a(45),a(76),a(50),a(11)),h=a(13),E=function(e){var t=e.match;return i.a.createElement("p",null,t.params.id)},p=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){this.props.match.url;return i.a.createElement("div",null,i.a.createElement("h1",null,"Users"),i.a.createElement("strong",null,"select a user"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(h.a,{to:"/users/1"},"User 1 ")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/users/2"},"User 2 ")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/users/3"},"User 3 "))),i.a.createElement(m.a,{path:"/users/:id",component:E}))}}]),t}(i.a.Component),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).onSubmit=function(){a.props.history.push("/")},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("form",null,i.a.createElement("input",{placeholder:"name",type:"name"}),i.a.createElement("input",{placeholder:"email",type:"email"}),i.a.createElement("button",{onClick:this.onSubmit},"Submit"))}}]),t}(i.a.Component),b=function(){return i.a.createElement("h1",null,"Not found")},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT":return console.log("increment"),e+=1;case"DECREMENT":return e-=1,console.log("decrement"),e;default:return e}},f=a(24),g=Object(f.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),O=(i.a.Component,a(38));a(52);function j(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(O.a)(t[a],3),r=n[0],l=n[1],c=n[2];if(e[r]&&e[r]===e[l]&&e[r]===e[c])return e[r]}return null}function y(e){return i.a.createElement("button",{style:{margin:"0.5em",paddingLeft:0,listStyle:"none",width:"100px",height:"100px"},className:"square",onClick:e.onClick},e.value)}var k=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"renderSquare",value:function(e){var t=this;return i.a.createElement(y,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){var e={float:"left",width:"100%"},t={float:"left",width:"33.33%"};return i.a.createElement("div",{style:{float:"left",width:"300px",display:"block"}},i.a.createElement("div",{style:e,className:"board-row"},i.a.createElement("div",{style:t},this.renderSquare(0)),i.a.createElement("div",{style:t},this.renderSquare(1)),i.a.createElement("div",{style:t},this.renderSquare(2))),i.a.createElement("div",{style:e,className:"board-row"},i.a.createElement("div",{style:t},this.renderSquare(3)),i.a.createElement("div",{style:t},this.renderSquare(4)),i.a.createElement("div",{style:t},this.renderSquare(5))),i.a.createElement("div",{style:e,className:"board-row"},i.a.createElement("div",{style:t},this.renderSquare(6)),i.a.createElement("div",{style:t},this.renderSquare(7)),i.a.createElement("div",{style:t},this.renderSquare(8))))}}]),t}(i.a.Component),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();j(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],r=j(n.squares),l=a.map(function(e,a){var n=a?"Go to move #"+a:"Go to game start";return i.a.createElement("li",{key:a},i.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},n))});return e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),i.a.createElement("div",{className:"game"},i.a.createElement("div",{className:"game-board"},i.a.createElement(k,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),i.a.createElement("div",{style:{float:"left",width:"100%"},className:"game-info"},i.a.createElement("div",null,e),i.a.createElement("ol",null,l)))}}]),t}(i.a.Component),N=a(16),C=a(21),w=function(e){function t(e){var a;Object(n.a)(this,t);return(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={markers:[]},a.onMapa=a.onMapa.bind(Object(N.a)(a)),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"onMapa",value:function(e,t,a){var n=a.latLng,r=n.lat(),l=n.lng();console.log(r+", "+l);var c;c={lat:r,lng:l};var s=[];for(var o in this.state.markers)s.push(this.state.markers[o]);s.push({lat:c.lat,lng:c.lng}),this.setState({markers:s})}},{key:"render",value:function(){return o.createElement(C.Map,{onClick:this.onMapa,google:this.props.google,initialCenter:{lat:37.77484758908875,lng:-122.44252162500497},zoom:14},this.state.markers.map(function(e){return o.createElement(C.Marker,{position:{lat:e.lat,lng:e.lng}})}),o.createElement(C.Polygon,{paths:this.state.markers}))}}]),t}(o.Component),S=Object(C.GoogleApiWrapper)({apiKey:"AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w"})(w),q=a(80),_=a(79),I=a(81),T=a(82),M=a(84),D=a(83),R=(a(68),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a.toggle=a.toggle.bind(Object(N.a)(a)),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.createElement("header",null,o.createElement(_.a,{className:"navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3",light:!0},o.createElement(q.a,null,o.createElement(I.a,{tag:h.a,to:"/"},"ReactRedux"),o.createElement(T.a,{onClick:this.toggle,className:"mr-2"}),o.createElement(M.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:this.state.isOpen,navbar:!0},o.createElement("ul",{className:"navbar-nav flex-grow"},o.createElement(D.a,{exact:!0,class:"nav-item nav-link",to:"/"},"Home"),o.createElement(D.a,{exact:!0,class:"nav-item nav-link",to:"/googlemaps"},"Google maps"),o.createElement(D.a,{exact:!0,class:"nav-item nav-link",to:"/vieja"},"Vieja"),o.createElement(D.a,{class:"nav-item nav-link",to:"/users"},"Users"),o.createElement(D.a,{class:"nav-item nav-link",to:"/contact"},"Contact"),o.createElement(D.a,{class:"nav-item nav-link",to:"/counter"},"Counter Redux"))))))}}]),t}(o.Component)),U=(o.PureComponent,function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.createElement("div",null,"Contador ejemplo")}}]),t}(o.Component)),X=a(12);a.d(t,"Menu",function(){return P});var A=document.getElementsByTagName("base")[0].getAttribute("href"),G=Object(X.a)({basename:A}),P=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.b,{history:G},i.a.createElement("header",null,i.a.createElement("div",{className:"navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3",light:!0},i.a.createElement("nav",null,i.a.createElement("ul",{class:"nav nav-pills float-right"},i.a.createElement("li",null,i.a.createElement(h.b,{exact:!0,class:"nav-item nav-link",to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(h.b,{exact:!0,class:"nav-item nav-link",to:"/googlemaps"},"Google maps")),i.a.createElement("li",null,i.a.createElement(h.b,{exact:!0,class:"nav-item nav-link",to:"/vieja"},"Vieja")),i.a.createElement("li",null,i.a.createElement(h.b,{class:"nav-item nav-link",to:"/users"},"Users")),i.a.createElement("li",null,i.a.createElement(h.b,{class:"nav-item nav-link",to:"/contact"},"Contact")),i.a.createElement("li",null,i.a.createElement(h.b,{class:"nav-item nav-link",to:"/counter"},"Counter Redux")))),i.a.createElement("hr",null),i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/",component:U}),i.a.createElement(m.a,{path:"/googlemaps",component:S}),i.a.createElement(m.a,{path:"/vieja",component:x}),i.a.createElement(m.a,{path:"/users",component:p}),i.a.createElement(m.a,{path:"/contact",component:v}),i.a.createElement(m.a,{path:"/counter",component:U}),i.a.createElement(m.a,{component:b}))))))}}]),t}(i.a.PureComponent),L=i.a.createElement(i.a.Fragment,null,i.a.createElement(P,null));u.render(L,document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1dff64a6.chunk.js.map