(function(t){function e(e){for(var c,a,i=e[0],l=e[1],s=e[2],b=0,f=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(c=!1)}c&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var c={},o={app:0},r=[];function a(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=c,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)a.d(n,c,function(e){return t[e]}.bind(null,c));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/restcountries-interview/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"13ff":function(t,e,n){"use strict";n("8547")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=n("bc3a"),r=n.n(o),a=n("130e"),i={id:"nav"},l=Object(c["g"])("Home"),s={class:"container"};function u(t,e){var n=Object(c["v"])("router-link"),o=Object(c["v"])("router-view");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",i,[Object(c["h"])(n,{to:"/"},{default:Object(c["B"])((function(){return[l]})),_:1})]),Object(c["f"])("div",s,[Object(c["h"])(o)])],64)}n("13ff");var b=n("6b0d"),f=n.n(b);const d={},O=f()(d,[["render",u]]);var j=O,y=n("6c02"),p={class:"home"};function m(t,e,n,o,r,a){var i=Object(c["v"])("ContryCard");return Object(c["q"])(),Object(c["e"])("div",p,[Object(c["h"])(i)])}n("5377"),n("b0c0");var h=Object(c["f"])("label",{for:"contryName",class:"me-2"},"搜尋國家",-1),v={class:"row g-3"},g={class:"card"},C=["src","alt"],x={class:"card-body"},k=["onClick"],w={class:"list-unstyled text-start mt-3"},q={class:"mb-2"},M={class:"mb-2"},S={key:0,class:"mb-2"},N={class:"mb-2"};function P(t,e,n,o,r,a){var i=Object(c["v"])("ContryModal");return Object(c["q"])(),Object(c["e"])(c["a"],null,[h,Object(c["C"])(Object(c["f"])("input",{id:"contryName",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.countryName=t}),placeholder:"按下 enter 搜尋",onKeypress:e[1]||(e[1]=Object(c["D"])((function(){return a.filterContry&&a.filterContry.apply(a,arguments)}),["enter"]))},null,544),[[c["z"],r.countryName]]),Object(c["f"])("button",{type:"button",class:"btn btn-primary mx-3",onClick:e[2]||(e[2]=function(){return a.sortContry&&a.sortContry.apply(a,arguments)})}," 正序 "),Object(c["f"])("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=function(){return a.reverseSortContry&&a.reverseSortContry.apply(a,arguments)})}," 倒序 "),Object(c["f"])("div",v,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["u"])(a.allCountries,(function(t){return Object(c["q"])(),Object(c["e"])("div",{class:"col-3",key:t.flags.png},[Object(c["f"])("div",g,[Object(c["f"])("img",{class:"card-img-top",src:t.flags.png,alt:t.name.official,height:"200"},null,8,C),Object(c["f"])("div",x,[Object(c["f"])("a",{href:"#",class:"card-link",onClick:Object(c["E"])((function(e){return a.getDetail(t)}),["prevent"])},Object(c["x"])(t.name.official),9,k),Object(c["f"])("ul",w,[Object(c["f"])("li",q,"2位國家代碼(cca2)："+Object(c["x"])(t.cca2),1),Object(c["f"])("li",M,"3位國家代碼(cca3)："+Object(c["x"])(t.cca3),1),t.translations.zho?(Object(c["q"])(),Object(c["e"])("li",S," 母語名稱："+Object(c["x"])(t.translations.zho.official),1)):Object(c["d"])("",!0),Object(c["f"])("li",N,"替代國家名稱(altSpellings)："+Object(c["x"])(t.altSpellings[0]),1),Object(c["f"])("li",null,"國際電話區號(idd)："+Object(c["x"])(t.idd.root),1)])])])])})),128))]),Object(c["h"])(i,{ref:"contryModal",country:r.contry},null,8,["country"])],64)}n("4e82");var _={class:"modal",tabindex:"-1",ref:"modal"},$={class:"modal-dialog"},z={class:"modal-content"},A={class:"modal-header"},D={key:0,class:"modal-title"},H=Object(c["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),T={class:"modal-body"},J={key:0},B={key:1},E={key:2},G={key:3},K={key:4},L={key:5},U=["href"],V=Object(c["f"])("div",{class:"modal-footer"},[Object(c["f"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 關閉 ")],-1);function F(t,e,n,o,r,a){return Object(c["q"])(),Object(c["e"])("div",_,[Object(c["f"])("div",$,[Object(c["f"])("div",z,[Object(c["f"])("div",A,[n.country.name?(Object(c["q"])(),Object(c["e"])("h5",D,Object(c["x"])(n.country.name.official),1)):Object(c["d"])("",!0),H]),Object(c["f"])("div",T,[n.country.name?(Object(c["q"])(),Object(c["e"])("p",J,"地區："+Object(c["x"])(n.country.region),1)):Object(c["d"])("",!0),n.country.name?(Object(c["q"])(),Object(c["e"])("p",B,"國際稱呼："+Object(c["x"])(n.country.name.official),1)):Object(c["d"])("",!0),n.country.name?(Object(c["q"])(),Object(c["e"])("p",E,"普遍稱呼："+Object(c["x"])(n.country.name.common),1)):Object(c["d"])("",!0),n.country.name?(Object(c["q"])(),Object(c["e"])("p",G,"人口："+Object(c["x"])(n.country.population),1)):Object(c["d"])("",!0),n.country.name?(Object(c["q"])(),Object(c["e"])("p",K,"首都："+Object(c["x"])(n.country.cioc),1)):Object(c["d"])("",!0),n.country.name?(Object(c["q"])(),Object(c["e"])("p",L,"是否獨立："+Object(c["x"])(n.country.independent?"是":"否"),1)):Object(c["d"])("",!0),n.country.maps?(Object(c["q"])(),Object(c["e"])("a",{key:6,target:"_blank",href:n.country.maps.googleMaps},"Google 地圖",8,U)):Object(c["d"])("",!0)]),V])])],512)}var I=n("7c2b"),Q=n.n(I),R={props:["country"],data:function(){return{modal:""}},methods:{openModal:function(){this.modal.show()}},mounted:function(){this.modal=new Q.a(this.$refs.modal,{backdrop:"static"})}};const W=f()(R,[["render",F]]);var X=W,Y={name:"ContryCard",data:function(){return{countries:[],contry:{},pageSize:25,currPage:1,countryName:"",sort:!0}},components:{ContryModal:X},computed:{allCountries:function(){return this.countries}},methods:{getAllcontry:function(){var t=this;this.$http.get("https://restcountries.com/v3.1/all").then((function(e){t.countries=e.data}))},filterContry:function(){var t=this;this.countryName.toLowerCase(),this.countryName?this.$http.get("https://restcountries.com/v3.1/name/".concat(this.countryName)).then((function(e){console.log(e.data),t.countries=e.data})):this.getAllcontry()},sortContry:function(){this.countries.sort((function(t,e){return t.name.official[0]<e.name.official[0]?-1:t.name.official[0]>e.name.official[0]?1:void 0}))},reverseSortContry:function(){this.countries.reverse()},getDetail:function(t){var e=this;this.contry={},this.$refs.contryModal.openModal(),this.$http.get("https://restcountries.com/v3.1/name/".concat(t.name.official,"?fullText=true")).then((function(t){console.log(t.data),e.contry=t.data[0]}))}},created:function(){this.countryName="",this.getAllcontry()}};const Z=f()(Y,[["render",P]]);var tt=Z,et={name:"Home",data:function(){return{text:"文字"}},components:{ContryCard:tt}};const nt=f()(et,[["render",m]]);var ct=nt,ot=[{path:"/",name:"Home",component:ct}],rt=Object(y["a"])({history:Object(y["b"])(),routes:ot}),at=rt,it=Object(c["c"])(j);it.use(a["a"],r.a),it.use(at),it.mount("#app")},8547:function(t,e,n){}});
//# sourceMappingURL=app.cce2b559.js.map