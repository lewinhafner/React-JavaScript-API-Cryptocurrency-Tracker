(this["webpackJsonpreact-javascript-api-cryptocurrency-tracker"]=this["webpackJsonpreact-javascript-api-cryptocurrency-tracker"]||[]).push([[0],{37:function(e,c,a){},38:function(e,c,a){},39:function(e,c,a){"use strict";a.r(c);var t=a(0),n=a(2),r=a.n(n),s=a(13),i=a.n(s),o=a(4),l=a(14),p=a.n(l),j=(a(37),a(38),function(e){var c=e.name,a=e.price,n=e.symbol,r=e.marketcap,s=e.volume,i=e.image,o=e.priceChange;return Object(t.jsx)("div",{className:"coin-container",children:Object(t.jsxs)("div",{className:"coin-row",children:[Object(t.jsxs)("div",{className:"coin",children:[Object(t.jsx)("img",{src:i,alt:"crypto"}),Object(t.jsx)("h1",{children:c}),Object(t.jsx)("p",{className:"coin-symbol",children:n})]}),Object(t.jsxs)("div",{className:"coin-data",children:[Object(t.jsxs)("p",{className:"coin-price",children:["$",a]}),Object(t.jsxs)("p",{className:"coin-volume",children:["$",s.toLocaleString()]}),o<0?Object(t.jsxs)("p",{className:"coin-percent red",children:[o.toFixed(2),"%"]}):Object(t.jsxs)("p",{className:"coin-percent green",children:[o.toFixed(2),"%"]}),Object(t.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",r.toLocaleString()]})]})]})})});var m=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),a=c[0],r=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],m=i[1];Object(n.useEffect)((function(){p.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((function(e){r(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=a.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(t.jsxs)("div",{className:"coin-app",children:[Object(t.jsxs)("div",{className:"coin-search",children:[Object(t.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(t.jsx)("form",{children:Object(t.jsx)("input",{className:"coin-input",type:"text",onChange:function(e){m(e.target.value)},placeholder:"Search"})})]}),d.map((function(e){return Object(t.jsx)(j,{name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.market_cap,volume:e.total_volume,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.287ef583.chunk.js.map