webpackJsonp([1,4],{"/fcW":function(l,n){function t(l){throw new Error("Cannot find module '"+l+"'.")}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="/fcW"},0:function(l,n,t){l.exports=t("x35b")},"0qxD":function(l,n,t){"use strict";var e=t("3j3K"),u=t("Gvdl"),r=(t.n(u),t("E7Yq")),i=(t.n(r),t("iIfT")),o=(t.n(i),t("+pb+")),c=(t.n(o),t("SSeX")),s=(t.n(c),t("wUn1")),a=(t.n(s),t("/lY3"));t.n(a);t.d(n,"a",function(){return f});var h={sH:0,sT:0,cH:0},f=function(){function l(l){var n=this;this.elm=l,this.scrollPercent=70,this.isUserScrollingDown=function(l){return l[0].sT<l[1].sT},this.isScrollExpectedPercent=function(l){return(l.sT+l.cH)/l.sH>n.scrollPercent/100}}return l.prototype.ngAfterViewInit=function(){this.registerScrollEvent(),this.streamScrollEvents(),this.requestCallbackOnScroll()},l.prototype.registerScrollEvent=function(){this.scrollEvent$=u.Observable.fromEvent(this.elm.nativeElement,"scroll")},l.prototype.streamScrollEvents=function(){var l=this;this.userScrolledDown$=this.scrollEvent$.map(function(l){return{sH:l.target.scrollHeight,sT:l.target.scrollTop,cH:l.target.clientHeight}}).pairwise().filter(function(n){return l.isUserScrollingDown(n)&&l.isScrollExpectedPercent(n[1])})},l.prototype.requestCallbackOnScroll=function(){var l=this;this.requestOnScroll$=this.userScrolledDown$,this.immediateCallback&&(this.requestOnScroll$=this.requestOnScroll$.startWith([h,h])),this.requestOnScroll$.exhaustMap(function(){return l.scrollCallback()}).subscribe(function(l){},function(l){return console.log(l)})},l.ctorParameters=function(){return[{type:e.Z}]},l}()},"1A80":function(l,n,t){"use strict";function e(l){return o._16(0,[(l()(),o._17(0,null,null,7,"li",[],null,null,null,null,null)),(l()(),o._18(null,["\n      "])),(l()(),o._17(0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o._18(null,["",""])),(l()(),o._18(null,["\n      "])),(l()(),o._17(0,null,null,1,"app-news-author",[],null,null,null,c.a,c.b)),o._19(114688,null,0,s.a,[a.a,h.a],{id:[0,"id"]},null),(l()(),o._18(null,["\n    "]))],function(l,n){l(n,6,0,n.context.$implicit.user)},function(l,n){l(n,3,0,n.context.$implicit.title)})}function u(l){return o._16(0,[(l()(),o._17(0,null,null,45,"div",[],null,null,null,null,null)),(l()(),o._18(null,["\n  "])),(l()(),o._17(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),o._18(null,["",""])),(l()(),o._18(null,["\n  "])),(l()(),o._17(0,null,null,16,"div",[],null,null,null,null,null)),(l()(),o._18(null,["\n    "])),(l()(),o._17(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),o._18(null,["Github Repo: "])),(l()(),o._17(0,null,null,1,"a",[["href","https://github.com/ashwin-sureshkumar/angular-cache-service-blog"],["target","_blank"]],null,null,null,null,null)),(l()(),o._18(null,["Angular Cache Service with RxJS"])),(l()(),o._18(null,["\n    "])),(l()(),o._17(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),o._18(null,["Blog Post: "])),(l()(),o._17(0,null,null,1,"a",[["href","https://medium.com/@Sureshkumar_Ash/angular-2-simple-infinite-scroller-directive-with-rxjs-observables-a989b12d4fb1"]],null,null,null,null,null)),(l()(),o._18(null,["Angular  —  Simple In Memory Cache Service on the UI with RxJS"])),(l()(),o._18(null,["\n    "])),(l()(),o._17(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),o._18(null,["Stackblitz Url : "])),(l()(),o._17(0,null,null,1,"a",[["href","https://stackblitz.com/edit/angular-simple-cache-service-with-rxjs"]],null,null,null,null,null)),(l()(),o._18(null,["https://stackblitz.com/edit/angular-simple-cache-service-with-rxjs"])),(l()(),o._18(null,["\n  "])),(l()(),o._18(null,["\n  "])),(l()(),o._17(0,null,null,5,"ul",[["appInfiniteScroller",""],["id","infinite-scroller"],["scrollPerecnt","70"]],null,null,null,null,null)),o._19(4210688,null,0,f.a,[o.Z],{scrollCallback:[0,"scrollCallback"],immediateCallback:[1,"immediateCallback"]},null),(l()(),o._18(null,["\n    "])),(l()(),o._20(16777216,null,null,1,null,e)),o._19(802816,null,0,d.f,[o._2,o._3,o.m],{ngForOf:[0,"ngForOf"]},null),(l()(),o._18(null,["\n  "])),(l()(),o._18(null,["\n  "])),(l()(),o._17(0,null,null,14,"div",[],null,null,null,null,null)),(l()(),o._18(null,["\n      "])),(l()(),o._17(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._18(null,["Related Blogs"])),(l()(),o._18(null,["\n      "])),(l()(),o._17(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),o._18(null,["Github Repo: "])),(l()(),o._17(0,null,null,1,"a",[["href","https://github.com/ashwin-sureshkumar/angular-infinite-scroller"],["target","_blank"]],null,null,null,null,null)),(l()(),o._18(null,["Angular Infinite Scroller"])),(l()(),o._18(null,["\n      "])),(l()(),o._17(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),o._18(null,["Blog Post: "])),(l()(),o._17(0,null,null,1,"a",[["href","https://medium.com/@Sureshkumar_Ash/angular-2-simple-infinite-scroller-directive-with-rxjs-observables-a989b12d4fb1"]],null,null,null,null,null)),(l()(),o._18(null,[" Angular —Simple Infinite scroller directive with RxJS Observables"])),(l()(),o._18(null,["\n    "])),(l()(),o._18(null,["\n"])),(l()(),o._18(null,["\n"]))],function(l,n){var t=n.component;l(n,24,0,t.scrollCallback,!0),l(n,27,0,t.news)},function(l,n){l(n,3,0,n.component.title)})}function r(l){return o._16(0,[(l()(),o._17(0,null,null,1,"app-root",[],null,null,null,u,g)),o._19(49152,null,0,p.a,[a.a],null,null)],null,null)}var i=t("l0Vc"),o=t("3j3K"),c=t("o9hC"),s=t("7GK9"),a=t("GHPw"),h=t("z5ZJ"),f=t("0qxD"),d=t("2Je8"),p=t("YWx4");t.d(n,"a",function(){return b});var _=[i.a],g=o._15({encapsulation:0,styles:_,data:{}}),b=o._21("app-root",p.a,r,{},{},[])},"7GK9":function(l,n,t){"use strict";var e=t("z5ZJ"),u=t("GHPw");t.d(n,"a",function(){return r});var r=function(){function l(l,n){this.hackerNewsService=l,this.cacheService=n}return Object.defineProperty(l.prototype,"id",{set:function(l){this.user=this.cacheService.get(l,this.hackerNewsService.getUser(l))},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:u.a},{type:e.a}]},l}()},"9eGz":function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=[""]},GHPw:function(l,n,t){"use strict";var e=t("Fzro");t.d(n,"a",function(){return r});var u="https://node-hnapi.herokuapp.com",r=function(){function l(l){this.http=l}return l.prototype.getLatestStories=function(l){return void 0===l&&(l=1),this.http.get(u+"/news?page="+l).map(function(l){return l.json()})},l.prototype.getUser=function(l){return this.http.get(u+"/user/"+l).map(function(l){return l.json()})},l.ctorParameters=function(){return[{type:e.i}]},l}()},Iksp:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},YWx4:function(l,n,t){"use strict";var e=t("GHPw");t.d(n,"a",function(){return u});var u=function(){function l(l){var n=this;this.hackerNewsSerivce=l,this.title="Angular Cache Service with RxJS",this.currentPage=1,this.news=[],this.processData=function(l){n.currentPage++,n.news=n.news.concat(l)},this.scrollCallback=this.getStories.bind(this)}return l.prototype.getStories=function(){return this.hackerNewsSerivce.getLatestStories(this.currentPage).do(this.processData)},l.ctorParameters=function(){return[{type:e.a}]},l}()},kZql:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e={production:!0}},kke6:function(l,n,t){"use strict";var e=t("3j3K"),u=t("Iksp"),r=t("YWx4"),i=t("1A80"),o=t("2Je8"),c=t("Qbdm"),s=t("NVOs"),a=t("Fzro"),h=t("GHPw"),f=t("z5ZJ");t.d(n,"a",function(){return d});var d=e.b(u.a,[r.a],function(l){return e.c([e.d(512,e.e,e.f,[[8,[i.a]],[3,e.e],e.g]),e.d(5120,e.h,e.i,[[3,e.h]]),e.d(4608,o.a,o.b,[e.h]),e.d(4608,e.j,e.j,[]),e.d(5120,e.k,e.l,[]),e.d(5120,e.m,e.n,[]),e.d(5120,e.o,e.p,[]),e.d(4608,c.b,c.c,[c.d]),e.d(6144,e.q,null,[c.b]),e.d(4608,c.e,c.f,[]),e.d(5120,c.g,function(l,n,t,e){return[new c.h(l),new c.i(n),new c.j(t,e)]},[c.d,c.d,c.d,c.e]),e.d(4608,c.k,c.k,[c.g,e.r]),e.d(135680,c.l,c.l,[c.d]),e.d(4608,c.m,c.m,[c.k,c.l]),e.d(6144,e.s,null,[c.m]),e.d(6144,c.n,null,[c.l]),e.d(4608,e.t,e.t,[e.r]),e.d(4608,c.o,c.o,[c.d]),e.d(4608,c.p,c.p,[c.d]),e.d(4608,s.a,s.a,[]),e.d(4608,a.a,a.a,[]),e.d(4608,a.b,a.c,[]),e.d(5120,a.d,a.e,[]),e.d(4608,a.f,a.f,[a.a,a.b,a.d]),e.d(4608,a.g,a.h,[]),e.d(5120,a.i,a.j,[a.f,a.g]),e.d(4608,h.a,h.a,[a.i]),e.d(4608,f.a,f.a,[]),e.d(512,o.c,o.c,[]),e.d(1024,e.u,c.q,[]),e.d(1024,e.v,function(l,n){return[c.r(l,n)]},[[2,c.s],[2,e.w]]),e.d(512,e.x,e.x,[[2,e.v]]),e.d(131584,e.y,e.y,[e.r,e.z,e.A,e.u,e.e,e.x]),e.d(2048,e.B,null,[e.y]),e.d(512,e.C,e.C,[e.B]),e.d(512,c.t,c.t,[[3,c.t]]),e.d(512,s.b,s.b,[]),e.d(512,s.c,s.c,[]),e.d(512,a.k,a.k,[]),e.d(512,u.a,u.a,[])])})},l0Vc:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=["#infinite-scroller[_ngcontent-%COMP%]{height:600px;width:800px;border:1px solid #f5ad7c;overflow:scroll;padding:0;list-style:none}#infinite-scroller[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 5px;line-height:1.5}#infinite-scroller[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd){background:#ffe8d8}#infinite-scroller[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n){background:#f5ad7c}"]},o9hC:function(l,n,t){"use strict";function e(l){return o._16(0,[(l()(),o._17(0,null,null,7,null,null,null,null,null,null,null)),(l()(),o._18(null,["\n  "])),(l()(),o._17(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o._18(null,["\n     by: ",", "])),(l()(),o._17(0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o._18(null,["karma: ",""])),(l()(),o._18(null,["\n  "])),(l()(),o._18(null,["\n"]))],null,function(l,n){l(n,3,0,n.context.$implicit.id),l(n,5,0,n.context.$implicit.karma)})}function u(l){return o._16(0,[(l()(),o._20(16777216,null,null,2,null,e)),o._19(16384,null,0,c.g,[o._2,o._3],{ngIf:[0,"ngIf"]},null),o._22(131072,c.h,[o._10]),(l()(),o._18(null,["\n"]))],function(l,n){var t=n.component;l(n,1,0,o._23(n,1,0,o._24(n,2).transform(t.user)))},null)}function r(l){return o._16(0,[(l()(),o._17(0,null,null,1,"app-news-author",[],null,null,null,u,d)),o._19(114688,null,0,s.a,[a.a,h.a],null,null)],function(l,n){l(n,1,0)},null)}var i=t("9eGz"),o=t("3j3K"),c=t("2Je8"),s=t("7GK9"),a=t("GHPw"),h=t("z5ZJ");t.d(n,"b",function(){return d}),n.a=u;var f=[i.a],d=o._15({encapsulation:0,styles:f,data:{}});o._21("app-news-author",s.a,r,{id:"id"},{},[])},x35b:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("3j3K"),u=t("kZql"),r=t("Qbdm"),i=t("kke6");u.a.production&&t.i(e.a)(),t.i(r.a)().bootstrapModuleFactory(i.a)},z5ZJ:function(l,n,t){"use strict";var e=t("rCTf"),u=(t.n(e),t("Gvdl"));t.n(u);t.d(n,"a",function(){return r});var r=function(){function l(){this.cache=new Map,this.inFlightObservables=new Map,this.DEFAULT_MAX_AGE=3e5}return l.prototype.get=function(l,n,t){var r=this;return this.hasValidCachedValue(l)?(console.log("%cGetting from cache "+l,"color: green"),e.Observable.of(this.cache.get(l).value)):(t||(t=this.DEFAULT_MAX_AGE),this.inFlightObservables.has(l)?this.inFlightObservables.get(l):n&&n instanceof e.Observable?(this.inFlightObservables.set(l,new u.Subject),console.log("%c Calling api for "+l,"color: purple"),n.do(function(n){r.set(l,n,t)})):e.Observable.throw("Requested key is not available in Cache"))},l.prototype.set=function(l,n,t){void 0===t&&(t=this.DEFAULT_MAX_AGE),this.cache.set(l,{value:n,expiry:Date.now()+t}),this.notifyInFlightObservers(l,n)},l.prototype.has=function(l){return this.cache.has(l)},l.prototype.notifyInFlightObservers=function(l,n){if(this.inFlightObservables.has(l)){var t=this.inFlightObservables.get(l);t.observers.length&&(console.log("%cNotifying "+t.observers.length+" flight subscribers for "+l,"color: blue"),t.next(n)),t.complete(),this.inFlightObservables.delete(l)}},l.prototype.hasValidCachedValue=function(l){return!!this.cache.has(l)&&(!(this.cache.get(l).expiry<Date.now())||(this.cache.delete(l),!1))},l}()}},[0]);