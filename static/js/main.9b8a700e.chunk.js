(this.webpackJsonpaxonista_technical_test=this.webpackJsonpaxonista_technical_test||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/branding@2x.29c7b80a.png"},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),i=(n(67),n(9)),l=(n(68),n(40)),u=n(38),s=n.n(u),m=(n(86),n(87),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],c=n[1],l=function(){document.getElementById("form-input").value="";var t=!1;if(e.activeCities.map((function(e){r==e.name&&(t=!0)})),t)console.log("City already in list");else{var n=!1,a=JSON.parse(localStorage.getItem("cities"));if(a)for(var o=0;o<a.length;o++)if(a[o].name==r){var c=a[o].dt,i=Math.floor(Date.now()/1e3);if(console.log(c),console.log(i),console.log(i-c),i-c>3e3){console.log("Outdated Local Storage Data");break}console.log("Using Local Storage Data"),n=!0,e.getWeather(a[o],n);break}n||function(e){return s.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("d5da07007a3e259986014d6b28d1dd29")).then((function(e){try{return e.data}catch(t){console.log(t)}})).catch((function(e){return console.log(e)}))}(r).then((function(t){e.getWeather(t,n)}))}};return o.a.createElement("div",{id:"form-wrapper"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l()}},o.a.createElement("label",{htmlFor:"city"},"Enter a City"),o.a.createElement("input",{type:"text",id:"form-input",name:"city",placeholder:"...",onChange:function(e){c(e.target.value)}}),o.a.createElement("button",{type:"submit"},"Search")))}),d=function(e){return(e-273.16).toFixed(0)},f=function(e){return(1.8*e-459.67).toFixed(0)},p=(n(52),n(90),n(53)),g=n(39),E=(n(91),n(54)),v=n.n(E),h=n(56),b=n.n(h),w=(n(92),function(e){var t=Object(a.useState)(0),n=Object(i.a)(t,2),r=(n[0],n[1],Object(a.useState)(0)),c=Object(i.a)(r,2),l=(c[0],c[1],Object(a.useState)(0)),u=Object(i.a)(l,2),s=(u[0],u[1],Object(a.useState)(0)),m=Object(i.a)(s,2),d=m[0],f=m[1];return Object(a.useEffect)((function(){var t=e.sunset-e.sunrise;console.log("Denominator: "+t);var n=e.sunset-Math.floor(Date.now()/1e3);console.log("Numerator: "+n),f((100*(1-n/t)).toPrecision(2))}),[]),o.a.createElement("div",{id:"suntrack-wrapper"},o.a.createElement("div",{className:"suntrack-icons"},o.a.createElement(v.a,{style:{color:"#FFFF00"}})),o.a.createElement("div",{id:"suntrack-container"},o.a.createElement(g.a,{value:d,text:"".concat(d,"%"),circleRatio:.5,styles:Object(g.b)(Object(p.a)({trailColor:"#ffff00",pathColor:"#ffff00",textColor:"#0C1642",textSize:"26px",rotation:3/4,strokeLinecap:"rount"},"trailColor","#eee"))})),o.a.createElement("div",{className:"suntrack-icons"},o.a.createElement(b.a,{style:{color:"#ffff00"}})))}),O=function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1],l=function(t){var n,a,o=new Date;console.log("Getting Users Position at:"+o.toUTCString());try{(n=t.coords.latitude,a=t.coords.longitude,s.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(a,"&appid=").concat("d5da07007a3e259986014d6b28d1dd29")).then((function(e){return console.log(e),e.data})).catch((function(e){console.log("Something went wrong:"),console.log(e)}))).then((function(t){console.log(t),c(t),e.temp(t.main.temp)}))}catch(u){console.log(u)}},u=function(e){console.warn("Error: ".concat(e.code,", ").concat(e.message))},m={enableHighAccuracy:!1,timeout:5e3,maximumAge:6e4};return Object(a.useEffect)((function(){navigator.geolocation?navigator.geolocation.watchPosition(l,u,m):console.log("Navigation not enabled by your browser")}),[]),o.a.createElement("div",{id:"userTile-wrapper"},null!=r?o.a.createElement("div",{id:"userTile-container"},o.a.createElement("div",{id:"userTile-container_text"},o.a.createElement("h3",null,r.name),e.unit?o.a.createElement("h2",null,d(r.main.temp),"\xb0C"):o.a.createElement("h2",null,f(r.main.temp),"\xb0F"),o.a.createElement("h4",null,r.weather[0].description)),o.a.createElement("div",{id:"userTile-container_img"},o.a.createElement("div",{id:"weather-icon"},o.a.createElement("i",{className:"owf owf-"+r.weather[0].id+" owf-5x"})),o.a.createElement("div",{id:"suntrack-holder"},o.a.createElement(w,{sunrise:r.sys.sunrise,sunset:r.sys.sunset})))):o.a.createElement("h3",null,"Make sure to enable Location Services"))},j=(n(97),function(e){var t=function(){if(e.unit){var t=(e.data.main.temp-e.userTemp).toFixed(0);return t<=0?t:"+"+t}var n=(f(e.data.main.temp)-f(e.userTemp)).toFixed(0);return n<=0?n:"+"+n};return o.a.createElement("div",{id:"card-wrapper"},o.a.createElement("div",{id:"card-container"},o.a.createElement("div",{id:"card-container_text"},o.a.createElement("h3",null,e.data.name),e.unit?o.a.createElement("h2",null,d(e.data.main.temp),"\xb0C",o.a.createElement("span",{id:t()<=0?"negative":"positive"},"(",t(),"\xb0C)")):o.a.createElement("h2",null,f(e.data.main.temp),"\xb0F",o.a.createElement("span",{id:t()<=0?"negative":"positive"},"(",t(),"\xb0F)")),o.a.createElement("h4",null,e.data.weather[0].description)),o.a.createElement("div",{id:"card-container_img"},o.a.createElement("div",{id:"weather-icon"},o.a.createElement("i",{className:"owf owf-"+e.data.weather[0].id+" owf-5x"})),o.a.createElement("div",{id:"suntrack-holder"},o.a.createElement(w,{sunrise:e.data.sys.sunrise,sunset:e.data.sys.sunset})))))}),C=n(57),y=n.n(C),S=(n(98),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],c=n[1];return o.a.createElement("div",{className:"tag-container",id:r?"tag-hover":""},o.a.createElement("h5",null,e.data),o.a.createElement(y.a,{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onClick:function(){console.log("Handle Click"),e.close(e.index)},fontSize:"small"}))}),x=(n(99),function(e){var t=Object(a.useState)(0),n=Object(i.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)([]),s=Object(i.a)(u,2),d=s[0],f=s[1],p=function(e){var t=Object(l.a)(d);console.log(e),t.splice(e,1),f(t)};return o.a.createElement("div",{id:"home-wrapper"},o.a.createElement(m,{getWeather:function(e,t){if(f((function(t){return[].concat(Object(l.a)(t),[e])})),console.log(d),!t){var n=d;n.push(e),localStorage.setItem("cities",JSON.stringify(n))}},activeCities:d}),o.a.createElement("div",{id:"tags-wrapper"},d.map((function(e,t){return o.a.createElement(S,{key:t,index:t,data:e.name,close:p})}))),o.a.createElement(O,{unit:e.unit,temp:function(e){return c(e)}}),d.map((function(t,n){return o.a.createElement(j,{key:n,unit:e.unit,data:t,userTemp:r})})))}),k=(n(100),n(58)),T=n.n(k),F=n(59),N=n.n(F),_=n(132),L=n(134),D=n(135),M=n(133),W=(n(101),function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),r=n[0],c=n[1],l=Boolean(r),u=function(t){console.log("Handle Close"),console.log(t.currentTarget.innerText.toLowerCase()),"celsius"===t.currentTarget.innerText.toLowerCase()?e.unit(!0):e.unit(!1),c(null)};return o.a.createElement("div",{id:"nav-wrapper"},o.a.createElement("div",{id:"nav-wrapper_img"},o.a.createElement("img",{src:T.a,alt:"Ediflo"})),o.a.createElement("div",{id:"nav-wrapper_menu"},o.a.createElement(_.a,{"aria-controls":"fade-menu",onClick:function(e){console.log("Handle Click"),c(e.currentTarget)}},o.a.createElement(N.a,null)),o.a.createElement(L.a,{id:"fade-menu",anchorEl:r,keepMounted:!0,open:l,onClose:u,TransitionComponent:M.a},o.a.createElement(D.a,{onClick:u},"Celsius"),o.a.createElement(D.a,{onClick:u},"Fahrenheit"))))});var B=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement(W,{unit:function(e){console.log(e),r(e)}}),o.a.createElement(x,{unit:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,n){},58:function(e,t,n){e.exports=n.p+"static/media/newLogo2.db3e16da.png"},63:function(e,t,n){e.exports=n(102)},67:function(e,t,n){},68:function(e,t,n){},86:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.9b8a700e.chunk.js.map