(self.webpackChunkv1=self.webpackChunkv1||[]).push([[678],{2402:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o,r=n(7294),a=n(2448),i=n(4910),l=n(1428),u=n(1880),c=n(4854),s=n(1804),f=n.n(s),d=n(8655);const{colors:p,fontSizes:g,fonts:m}=l.theme,x=(0,i.ZP)(l.or).withConfig({displayName:"blogs__StyledMainContainer",componentId:"sc-1q7lq0t-0"})(["& > header{text-align:center;margin-bottom:100px;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",";margin-top:20px;width:100%;}"],l.tA.flexBetween),h=i.ZP.div.withConfig({displayName:"blogs__StyledGrid",componentId:"sc-1q7lq0t-1"})(["margin-top:50px;.posts{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;",";}"],l.BC.desktop(o||(o=(0,u.Z)(["grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));"])))),v=i.ZP.div.withConfig({displayName:"blogs__StyledPostInner",componentId:"sc-1q7lq0t-2"})(["",";",";flex-direction:column;align-items:flex-start;position:relative;padding:2rem 1.75rem;height:100%;border-radius:",";transition:",";background-color:",";header,a{width:100%;}"],l.tA.boxShadow,l.tA.flexBetween,l.theme.borderRadius,l.theme.transition,p.lightNavy),y=i.ZP.div.withConfig({displayName:"blogs__StyledPost",componentId:"sc-1q7lq0t-3"})(["transition:",";cursor:default;&:hover,&:focus{outline:0;","{transform:translateY(-5px);}}"],l.theme.transition,v),b=i.ZP.div.withConfig({displayName:"blogs__StyledPostHeader",componentId:"sc-1q7lq0t-4"})(["",";margin-bottom:30px;"],l.tA.flexBetween),E=i.ZP.div.withConfig({displayName:"blogs__StyledFolder",componentId:"sc-1q7lq0t-5"})(["color:",";svg{width:40px;height:40px;}"],p.green),w=i.ZP.h5.withConfig({displayName:"blogs__StyledPostName",componentId:"sc-1q7lq0t-6"})(["margin:0 0 10px;font-size:",";color:",";"],g.xxl,p.lightestSlate),S=i.ZP.div.withConfig({displayName:"blogs__StyledPostDescription",componentId:"sc-1q7lq0t-7"})(["font-size:17px;color:",";"],p.lightSlate),A=i.ZP.span.withConfig({displayName:"blogs__StyledDate",componentId:"sc-1q7lq0t-8"})(["text-transform:uppercase;font-family:",";font-size:",";color:",";"],m.SFMono,g.xs,p.lightSlate),_=i.ZP.ul.withConfig({displayName:"blogs__StyledTags",componentId:"sc-1q7lq0t-9"})(["display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{font-family:",";font-size:",";color:",";line-height:1.75;margin-right:15px;&:last-of-type{margin-right:0;}a{",";}}"],m.SFMono,g.xs,p.green,l.tA.inlineLink),C=(0,i.ZP)(l.zx).withConfig({displayName:"blogs__StyledMoreButton",componentId:"sc-1q7lq0t-10"})(["margin:100px auto 0;align-items:flex-end"]);var I=e=>{let{data:t}=e;return r.createElement(x,{id:"blogs"},r.createElement(l.X6,null,"Follow my journey of trying new tech everyday,"),r.createElement(h,null,r.createElement("div",{className:"posts"},t.length>0&&t.map(((e,t)=>{let{node:n}=e;const{frontmatter:o}=n,{title:a,description:i,slug:l,date:u,tags:s}=o,p=new Date(u);return r.createElement(y,{key:t,tabIndex:"0"},r.createElement(v,null,r.createElement("header",null,r.createElement(c.Link,{to:l},r.createElement(b,null,r.createElement(E,null,r.createElement(d.BX,null))),r.createElement(w,null,a),r.createElement(S,null,i))),r.createElement("footer",null,r.createElement(A,null,""+p.toLocaleDateString()),r.createElement(_,null,s.map(((e,t)=>r.createElement("li",{key:t},r.createElement(c.Link,{to:"/pensieve/tags/"+f()(e)+"/"},"#",e))))))))})))),r.createElement(C,{onClick:()=>(0,c.navigate)("/pensieve")},"Show More"))};const j=(0,i.ZP)(l.or).withConfig({displayName:"pages__StyledMainContainer",componentId:"sc-1ppsr5x-0"})(["counter-reset:section;"]);var N=e=>{let{location:t,data:n}=e;return r.createElement(a.Ar,{location:t},r.createElement(j,{className:"fillHeight"},r.createElement(a.VM,{data:n.hero.edges}),r.createElement(a.CL,{data:n.about.edges}),r.createElement(a.pe,{data:n.jobs.edges}),r.createElement(I,{data:n.blogs.edges}),r.createElement(a.g4,{data:n.featured.edges}),r.createElement(a.pj,{data:n.projects.edges}),r.createElement(a.r8,{data:n.contact.edges})))}},2705:function(e,t,n){var o=n(5639).Symbol;e.exports=o},9932:function(e){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},2663:function(e){e.exports=function(e,t,n,o){var r=-1,a=null==e?0:e.length;for(o&&a&&(n=e[++r]);++r<a;)n=t(n,e[r],r,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var o=n(2705),r=n(9607),a=n(2333),i=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?r(e):a(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var o=n(2705),r=n(9932),a=n(1469),i=n(3448),l=o?o.prototype:void 0,u=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(i(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var o=n(2663),r=n(3816),a=n(8748),i=RegExp("['’]","g");e.exports=function(e){return function(t){return o(a(r(t).replace(i,"")),e,"")}}},9389:function(e,t,n){var o=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=o},1957:function(e,t,n){var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=o},9607:function(e,t,n){var o=n(2705),r=Object.prototype,a=r.hasOwnProperty,i=r.toString,l=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,l),n=e[l];try{e[l]=void 0;var o=!0}catch(u){}var r=i.call(e);return o&&(t?e[l]=n:delete e[l]),r}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var o=n(1957),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},2757:function(e){var t="\\ud800-\\udfff",n="\\u2700-\\u27bf",o="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+a+"]",l="\\d+",u="["+n+"]",c="["+o+"]",s="[^"+t+a+l+n+o+r+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",g="(?:"+c+"|"+s+")",m="(?:"+p+"|"+s+")",x="(?:['’](?:d|ll|m|re|s|t|ve))?",h="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",b=y+v+("(?:\\u200d(?:"+["[^"+t+"]",f,d].join("|")+")"+y+v+")*"),E="(?:"+[u,f,d].join("|")+")"+b,w=RegExp([p+"?"+c+"+"+x+"(?="+[i,p,"$"].join("|")+")",m+"+"+h+"(?="+[i,p+g,"$"].join("|")+")",p+"?"+g+"+"+x,p+"+"+h,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",l,E].join("|"),"g");e.exports=function(e){return e.match(w)||[]}},3816:function(e,t,n){var o=n(9389),r=n(9833),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(a,o).replace(i,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var o=n(4239),r=n(7005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},1804:function(e,t,n){var o=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=o},9833:function(e,t,n){var o=n(531);e.exports=function(e){return null==e?"":o(e)}},8748:function(e,t,n){var o=n(9029),r=n(3157),a=n(9833),i=n(2757);e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?r(e)?i(e):o(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---src-pages-index-js-1274d8539f9c0d5e69ee.js.map