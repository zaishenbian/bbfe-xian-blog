(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4],{221:function(t,e,r){var content=r(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("0c380a33",content,!0,{sourceMap:!1})},222:function(t,e,r){"use strict";r(221)},223:function(t,e,r){var n=r(22)(!1);n.push([t.i,'.home{padding-bottom:30px}.article-item{margin:40px 0;line-height:1.6em}.article-item .article-title a{letter-spacing:1px;font-weight:600;color:#34495e;font-size:1.6em;text-decoration:none}.article-item .article-title a:hover{border-bottom:2px solid #0049b0}.article-item .article-date{margin:10px 0;line-height:18px;color:#7f8c8d;font-size:.9em}.article-item .article-tags .tag{display:inline-block;margin-right:4px;padding:3px 5px;font-family:"Roboto Mono",Monaco,courier,monospace;font-size:.8em;background-color:#f8f8f8;color:#0049b0;border-radius:2px;cursor:pointer}.article-item .article-description{margin:10px 0;color:#34495e;overflow-y:auto;overflow-x:hidden}.article-item .read-more{text-decoration:none;color:#0049b0;font-weight:700;cursor:pointer}.article-item:last-child{margin-bottom:0;border:none}',""]),t.exports=n},224:function(t,e,r){"use strict";r.r(e);var n={props:{articles:{type:Array,default:function(){return[]}}},methods:{formatDate:function(t){return new Date(t).toLocaleTimeString("zh",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}},o=(r(222),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"home"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"article-item"},[r("div",{staticClass:"article-title"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1),t._v(" "),r("div",{staticClass:"article-date"},[t._v("\n      "+t._s(t.formatDate(article.createdAt))+"\n    ")]),t._v(" "),r("div",{staticClass:"article-tags"},t._l(article.tags,(function(e){return r("span",{key:e,staticClass:"tag"},[r("NuxtLink",{attrs:{to:"/blog/tag/"+e}},[t._v("\n          "+t._s(e)+"\n        ")])],1)})),0),t._v(" "),r("div",{staticClass:"article-description"},[t._v(t._s(article.description))]),t._v(" "),r("div",{staticClass:"read-more"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v("\n        Read more\n      ")])],1)])})),0)}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(30),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("articles").only(["title","description","slug","tags","author","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()}}),l=r(10),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ArticleList",{attrs:{articles:t.articles}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleList:r(224).default})}}]);