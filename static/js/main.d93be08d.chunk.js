(this["webpackJsonpwp-react"]=this["webpackJsonpwp-react"]||[]).push([[0],{115:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(55),o=a.n(r),s=(a(65),a(15)),l=a(16),i=a(19),d=a(17),m=a(20),p=a(18),u=a(56),f=a.n(u),E=a(30),h=a.n(E),v=a(57),b=a.n(v),y=(a(115),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0,posts:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://derrickstrong.com/100daysofcode/wp-json/wp/v2/posts").then((function(t){console.log(t),e.setState({posts:t.data,loading:!1})}))}},{key:"render",value:function(){var e=this.state.posts;return console.warn("state",this.state),c.a.createElement("div",null,this.state.loading?c.a.createElement("div",null,c.a.createElement("p",{className:"center"},"STILLLL Loading...")):c.a.createElement("div",{className:"app container"},c.a.createElement("div",{className:"app jumbotron"},c.a.createElement("h1",{className:"display-4"},"100 Days of Code"),c.a.createElement("p",null,"By D. Strong")),c.a.createElement("div",{className:"deck"},e.map((function(e,t){return c.a.createElement("div",{className:"app card",key:e.id},c.a.createElement("div",{className:"app card-header"},c.a.createElement(p.b,{to:"/post/".concat(e.id)},"Day ",t," - ",h()(e.title.rendered))),c.a.createElement("div",{id:"card",className:"card-body"},c.a.createElement("p",{className:"card-text"},h()(e.excerpt.rendered)," ")),c.a.createElement("div",{className:"card-footer small"},"Posted ",c.a.createElement(b.a,{fromNow:!0},e.date)))})))))}}]),t}(n.Component)),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p.a,null,c.a.createElement(y,{exact:!0,path:"/"})))}}]),t}(n.Component);o.a.render(c.a.createElement(j,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a(120)},65:function(e,t,a){},94:function(e,t){},96:function(e,t){}},[[60,1,2]]]);
//# sourceMappingURL=main.d93be08d.chunk.js.map