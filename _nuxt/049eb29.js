(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2],{6911:function(t,e,r){"use strict";r.r(e);var n={props:["articles"]},c=r(3),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.articles?t._l(t.articles,(function(article){return r("article",{staticClass:"card card-side bordered mb-4"},[r("figure",[article.image?r("NuxtImg",{staticStyle:{width:"200px",height:"200px","object-fit":"cover"},attrs:{src:article.image,width:"200",height:"200"}}):t._e()],1),r("div",{staticClass:"card-body"},[r("header",[r("h2",{staticClass:"card-title"},[r("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),article.date?r("time",{attrs:{datetime:article.date}},[t._v(t._s(t._f("toLocaleString")(article.date)))]):t._e()]),article.description?r("div",[r("p",[t._v(t._s(article.description))])]):t._e()])])})):r("div",{staticClass:"text-center"},[r("span",{staticClass:"text-2xl text-secondary"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},6933:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(31),{layout:"docs",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r().fetch().catch((function(){}));case 3:return n=e.sent,e.next=6,r("",{deep:!0}).where({$and:[{draft:{$ne:!0}},{dir:{$ne:"/"}},{redirect:{$type:"undefined"}}]}).sortBy("date","desc").fetch().catch((function(){}));case 6:return c=e.sent,e.abrupt("return",{pages:n,articles:c});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{titleTemplate:null}}}),l=c,o=r(3),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[t.articles?r("TntBlogList",{attrs:{articles:t.articles}}):t._e(),t.pages?r("footer",{staticClass:"hidden"},t._l(t.pages,(function(e){return r("NuxtLink",{key:e.slug,attrs:{to:e}},[t._v(t._s(e.title))])})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntBlogList:r(6911).default})}}]);