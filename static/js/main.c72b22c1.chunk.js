(this["webpackJsonphow-much-do-i-earn"]=this["webpackJsonphow-much-do-i-earn"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(1),c=t.n(r),u=(t(13),t(3)),o=t(5);t(14);var s=function(){var e=[{value:"second",label:"Per Second"},{value:"minute",label:"Per Minute"},{value:"hour",label:"Per Hour"},{value:"day",label:"Per Day"},{value:"week",label:"Per Week"},{value:"month",label:"Per Month"},{value:"year",label:"Per Year"}],a=Object(n.useState)(""),t=Object(u.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),m=i[0],b=i[1],h=Object(n.useState)(0),v=Object(u.a)(h,2),d=v[0],y=v[1],f=Object(n.useState)(0),k=Object(u.a)(f,2),p=k[0],E=k[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"How much do I earn?")),l.a.createElement("div",{className:"form-questions"},l.a.createElement(o.a,{placeholder:"Salary Type",value:e.find((function(e){return e.value===m})),options:e,onChange:function(e){b(e.value)}}),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=function(e,a,t){switch(a){case"year":e/=12;break;case"month":e=e;break;case"week":e*=4;break;case"day":e*=30;break;case"hour":e=24*e*30;break;case"minute":e=60*e*24*30;break;case"second":e=60*e*60*24*30}switch(t){case"year":e*=12;break;case"month":e=e;break;case"week":e/=4;break;case"day":e/=30;break;case"hour":e=e/24/30;break;case"minute":e=e/60/24/30;break;case"second":e=e/60/60/24/30}return e}(d,r,m);E(a)}},l.a.createElement("label",{htmlFor:"salary"},"My Salary is"),l.a.createElement("input",{type:"text",name:"Salary",id:"salary",placeholder:"Your Salary",onChange:function(e){console.log(d),console.log("value: "+e.target.value),y(parseFloat(e.target.value)),console.log(d)}}),l.a.createElement(o.a,{placeholder:"Salary Type",value:e.find((function(e){return e.value===r})),options:e,onChange:function(e){c(e.value)},className:"select"}),l.a.createElement("button",{type:"submit"},"Calculate!"))),l.a.createElement("div",{className:"result"},l.a.createElement("h1",null,"Result = ",p)))};var i=function(){return l.a.createElement(s,null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null)),document.getElementById("root"))},8:function(e,a,t){e.exports=t(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.c72b22c1.chunk.js.map