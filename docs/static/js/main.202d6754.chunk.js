(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{13:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),a=n(6),r=n.n(a),s=(n(13),n(2)),u=n(8),o=n(0),l=function(t){var e=t.setCategories,n=Object(i.useState)(""),c=Object(s.a)(n,2),a=c[0],r=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.length>2&&(e((function(t){return[a].concat(Object(u.a)(t))})),r(""))},children:Object(o.jsx)("input",{type:"text",value:a,onChange:function(t){r(t.target.value)}})})},j=n(7),d=function(t){var e=t.title,n=t.url;return Object(o.jsx)("li",{className:"listaGif",children:Object(o.jsxs)("div",{className:"listaGif-content animate__animated animate__fadeInUp",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("h3",{children:e})]})})},f=function(t){var e=Object(i.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(i.useEffect)((function(){setTimeout((function(){(function(t){var e="https://api.giphy.com/v1/gifs/search?api_key=".concat("rV8bYTQ31V0v1VT0Te3cLj3nuf7Kymb9","&q=").concat(encodeURI(t),"&limit=8");return fetch(e).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}}))}))})(t).then((function(t){a({data:t,loading:!1})}))}),1e3)}),[t]),c},b=function(t){var e=t.category,n=f(e),i=n.data,c=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"animate__animated animate__pulse",children:e}),c?"Loading...":null,Object(o.jsx)("ul",{className:"list-items-grid",children:i.map((function(t){return Object(o.jsx)(d,{id:t.id,title:t.title,url:t.url},t.id)}))})]})};b.protoTypes={category:n.n(j).a.string.isRequired};var p=function(){var t=Object(i.useState)([""]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"GifExpertApp"}),Object(o.jsx)("p",{style:{color:"#61DBFB"},children:"Bucador de Gifs"}),Object(o.jsx)(l,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ul",{className:"list-category-grid",children:n.map((function(t){return Object(o.jsx)(b,{category:t},t)}))})]})};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.202d6754.chunk.js.map