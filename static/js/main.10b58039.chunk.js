(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(52)},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),l=n(16),i=n(11),d=n(24),u=n(8),s=n(7),m=n(22),p=n(26),f=n.n(p),b=n(27),O=n(13),E=n(34),y=n(10),v={allIds:[],byIds:{}},j=Object(s.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var n=t.payload,a=n.id,o=n.content;return Object(y.a)({},e,{allIds:[].concat(Object(E.a)(e.allIds),[a]),byIds:Object(y.a)({},e.byIds,Object(O.a)({},a,{content:o,completed:!1}))});case"TOGGLE_TODO":var r=t.payload.id;return Object(y.a)({},e,{byIds:Object(y.a)({},e.byIds,Object(O.a)({},r,Object(y.a)({},e.byIds[r],{completed:!e.byIds[r].completed})))});case"DELETE_TODO":var c=t.payload.id,l=Object(y.a)({},e,{allIds:e.allIds.filter(function(e){return e!==c})});return delete l.byIds[c],l;default:return e}}}),T={key:"root",storage:f.a},I=Object(m.a)(T,j),h=n(28),L=n(29),D=n(35),g=n(30),N=n(36),_=n(31),A=n.n(_),k=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(D.a)(this,Object(g.a)(t).call(this,e))).updateInput=function(e){n.setState({input:e})},n.handleAddTodo=function(e){e.preventDefault();var t=n.state.input.trim();t&&(n.props.addTodo(t),n.setState({input:""}))},n.state={input:""},n}return Object(N.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.handleAddTodo},o.a.createElement("input",{onChange:function(t){return e.updateInput(t.target.value)},value:this.state.input}),o.a.createElement("input",{type:"submit",className:"add-todo",value:"Add Todo"}))}}]),t}(o.a.Component),C=Object(u.b)(null,{addTodo:function(e){return{type:"ADD_TODO",payload:{id:A()(),content:e}}}})(k),w=n(32),x=n.n(w),G=Object(u.b)(null,{toggleTodo:function(e){return{type:"TOGGLE_TODO",payload:{id:e}}},deleteTodo:function(e){return{type:"DELETE_TODO",payload:{id:e}}}})(function(e){var t=e.todo,n=e.toggleTodo,a=e.deleteTodo;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("span",{onClick:function(){return n(t.id)},className:x()("todo-item__text",t&&t.completed&&"todo-item__text--completed")},t&&t.completed?"\ud83d\udc4c":"\ud83d\udc4b"," ",t.content)," ",o.a.createElement("span",{onClick:function(){return a(t.id)},className:"todo-item__delete"},"[x]"))}),M={ALL:"all",COMPLETED:"completed",INCOMPLETE:"incomplete"},P=function(e){return e.todos},S=function(e){return function(e){return P(e)?P(e).allIds:[]}(e).map(function(t){return function(e,t){return P(e)?Object(y.a)({},P(e).byIds[t],{id:t}):{}}(e,t)})},J=Object(u.b)(function(e,t){return{todos:function(e,t){var n=S(e);switch(t){case M.COMPLETED:return n.filter(function(e){return e.completed});case M.INCOMPLETE:return n.filter(function(e){return!e.completed});case M.ALL:default:return n}}(e,t.filter)}})(function(e){var t=e.todos;return o.a.createElement("ul",{className:"todo-list"},t&&t.length?t.map(function(e,t){return o.a.createElement(G,{key:"todo-".concat(e.id),todo:e})}):"No todos, yay!")}),B=Object(u.b)()(function(e){e.filter;return o.a.createElement("div",{className:"visibility-filters"},Object.keys(M).map(function(e){var t=M[e];return o.a.createElement(l.b,{key:"visibility-filter-".concat(t),exact:!0,to:t===M.ALL?"/":"/".concat(t),className:"filter",activeClassName:"filter--active"},t)}))});n(51);var R=function(){var e=Object(s.createStore)(I,Object(b.composeWithDevTools)());return{store:e,persistor:Object(m.b)(e)}}(),W=R.store,q=R.persistor,z=document.getElementById("root");c.a.render(o.a.createElement(u.a,{store:W},o.a.createElement(d.a,{loading:null,persistor:q},o.a.createElement(l.a,null,o.a.createElement(i.a,{path:"/:filter?",component:function(e){var t=e.match.params;return o.a.createElement("div",{className:"todo-app"},o.a.createElement("h1",null,"Todo List"),o.a.createElement(C,null),o.a.createElement(J,{filter:t.filter||M.ALL}),o.a.createElement(B,{filter:t.filter||M.ALL}))}})))),z)}},[[37,1,2]]]);
//# sourceMappingURL=main.10b58039.chunk.js.map