webpackJsonp([0],{"/z9y":function(l,n,u){"use strict";(function(l){u.d(n,"a",function(){return t});var e="undefined"!=typeof window?window:"undefined"!=typeof l?l:"undefined"!=typeof self?self:{};!function(l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},u=function(){var l=/\blang(?:uage)?-(\w+)\b/i,u=0,e=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(l){return l instanceof t?new t(l.type,e.util.encode(l.content),l.alias):"Array"===e.util.type(l)?l.map(e.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++u}),l.__id},clone:function(l){switch(e.util.type(l)){case"Object":var n={};for(var u in l)l.hasOwnProperty(u)&&(n[u]=e.util.clone(l[u]));return n;case"Array":return l.map(function(l){return e.util.clone(l)})}return l}},languages:{extend:function(l,n){var u=e.util.clone(e.languages[l]);for(var t in n)u[t]=n[t];return u},insertBefore:function(l,n,u,t){var a=(t=t||e.languages)[l];if(2==arguments.length){for(var s in u=arguments[1])u.hasOwnProperty(s)&&(a[s]=u[s]);return a}var o={};for(var r in a)if(a.hasOwnProperty(r)){if(r==n)for(var s in u)u.hasOwnProperty(s)&&(o[s]=u[s]);o[r]=a[r]}return e.languages.DFS(e.languages,function(n,u){u===t[l]&&n!=l&&(this[n]=o)}),t[l]=o},DFS:function(l,n,u,t){for(var a in t=t||{},l)l.hasOwnProperty(a)&&(n.call(l,a,l[a],u||a),"Object"!==e.util.type(l[a])||t[e.util.objId(l[a])]?"Array"!==e.util.type(l[a])||t[e.util.objId(l[a])]||(t[e.util.objId(l[a])]=!0,e.languages.DFS(l[a],n,a,t)):(t[e.util.objId(l[a])]=!0,e.languages.DFS(l[a],n,null,t)))}},plugins:{},highlightAll:function(l,n){e.highlightAllUnder(document,l,n)},highlightAllUnder:function(l,n,u){var t={callback:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};e.hooks.run("before-highlightall",t);for(var a,s=t.elements||l.querySelectorAll(t.selector),o=0;a=s[o++];)e.highlightElement(a,!0===n,t.callback)},highlightElement:function(u,t,a){for(var s,o,r=u;r&&!l.test(r.className);)r=r.parentNode;r&&(s=(r.className.match(l)||[,""])[1].toLowerCase(),o=e.languages[s]),u.className=u.className.replace(l,"").replace(/\s+/g," ")+" language-"+s,u.parentNode&&/pre/i.test((r=u.parentNode).nodeName)&&(r.className=r.className.replace(l,"").replace(/\s+/g," ")+" language-"+s);var i={element:u,language:s,grammar:o,code:u.textContent};if(e.hooks.run("before-sanity-check",i),!i.code||!i.grammar)return i.code&&(e.hooks.run("before-highlight",i),i.element.textContent=i.code,e.hooks.run("after-highlight",i)),void e.hooks.run("complete",i);if(e.hooks.run("before-highlight",i),t&&n.Worker){var c=new Worker(e.filename);c.onmessage=function(l){i.highlightedCode=l.data,e.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,a&&a.call(i.element),e.hooks.run("after-highlight",i),e.hooks.run("complete",i)},c.postMessage(JSON.stringify({language:i.language,code:i.code,immediateClose:!0}))}else i.highlightedCode=e.highlight(i.code,i.grammar,i.language),e.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,a&&a.call(u),e.hooks.run("after-highlight",i),e.hooks.run("complete",i)},highlight:function(l,n,u){var a=e.tokenize(l,n);return t.stringify(e.util.encode(a),u)},matchGrammar:function(l,n,u,t,a,s,o){var r=e.Token;for(var i in u)if(u.hasOwnProperty(i)&&u[i]){if(i==o)return;var c=u[i];c="Array"===e.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],_=g.inside,p=!!g.lookbehind,h=!!g.greedy,m=0,f=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var w=t,k=a;w<n.length;k+=n[w].length,++w){var b=n[w];if(n.length>l.length)return;if(!(b instanceof r)){g.lastIndex=0;var v=1;if(!(F=g.exec(b))&&h&&w!=n.length-1){if(g.lastIndex=k,!(F=g.exec(l)))break;for(var x=F.index+(p?F[1].length:0),S=F.index+F[0].length,j=w,A=k,O=n.length;j<O&&(A<S||!n[j].type&&!n[j-1].greedy);++j)x>=(A+=n[j].length)&&(++w,k=A);if(n[w]instanceof r||n[j-1].greedy)continue;v=j-w,b=l.slice(k,A),F.index-=k}if(F){p&&(m=F[1].length),S=(x=F.index+m)+(F=F[0].slice(m)).length;var F,I=b.slice(0,x),L=b.slice(S),P=[w,v];I&&(++w,k+=I.length,P.push(I));var E=new r(i,_?e.tokenize(F,_):F,f,F,h);if(P.push(E),L&&P.push(L),Array.prototype.splice.apply(n,P),1!=v&&e.matchGrammar(l,n,u,w,k,!0,i),s)break}else if(s)break}}}}},tokenize:function(l,n,u){var t=[l],a=n.rest;if(a){for(var s in a)n[s]=a[s];delete n.rest}return e.matchGrammar(l,t,n,0,0,!1),t},hooks:{all:{},add:function(l,n){var u=e.hooks.all;u[l]=u[l]||[],u[l].push(n)},run:function(l,n){var u=e.hooks.all[l];if(u&&u.length)for(var t,a=0;t=u[a++];)t(n)}}},t=e.Token=function(l,n,u,e,t){this.type=l,this.content=n,this.alias=u,this.length=0|(e||"").length,this.greedy=!!t};if(t.stringify=function(l,n,u){if("string"==typeof l)return l;if("Array"===e.util.type(l))return l.map(function(u){return t.stringify(u,n,l)}).join("");var a={type:l.type,content:t.stringify(l.content,n,u),tag:"span",classes:["token",l.type],attributes:{},language:n,parent:u};if(l.alias){var s="Array"===e.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(a.classes,s)}e.hooks.run("wrap",a);var o=Object.keys(a.attributes).map(function(l){return l+'="'+(a.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(o?" "+o:"")+">"+a.content+"</"+a.tag+">"},!n.document)return n.addEventListener?(e.disableWorkerMessageHandler||n.addEventListener("message",function(l){var u=JSON.parse(l.data),t=u.language,a=u.immediateClose;n.postMessage(e.highlight(u.code,e.languages[t],t)),a&&n.close()},!1),n.Prism):n.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(e.filename=a.src,e.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(e.highlightAll):window.setTimeout(e.highlightAll,16):document.addEventListener("DOMContentLoaded",e.highlightAll))),n.Prism}();l.exports&&(l.exports=u),"undefined"!=typeof e&&(e.Prism=u),u.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},u.languages.markup.tag.inside["attr-value"].inside.entity=u.languages.markup.entity,u.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),u.languages.xml=u.languages.markup,u.languages.html=u.languages.markup,u.languages.mathml=u.languages.markup,u.languages.svg=u.languages.markup,u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},u.languages.css.atrule.inside.rest=u.util.clone(u.languages.css),u.languages.markup&&(u.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:u.languages.css,alias:"language-css",greedy:!0}}),u.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:u.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:u.languages.css}},alias:"language-css"}},u.languages.markup.tag)),u.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},u.languages.javascript=u.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),u.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"}}),u.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:u.languages.javascript}},string:/[\s\S]+/}}}),u.languages.markup&&u.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:u.languages.javascript,alias:"language-javascript",greedy:!0}}),u.languages.js=u.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var e,t=n.getAttribute("data-src"),a=n,s=/\blang(?:uage)?-(?!\*)(\w+)\b/i;a&&!s.test(a.className);)a=a.parentNode;if(a&&(e=(n.className.match(s)||[,""])[1]),!e){var o=(t.match(/\.(\w+)$/)||[,""])[1];e=l[o]||o}var r=document.createElement("code");r.className="language-"+e,n.textContent="",r.textContent="Loading\u2026",n.appendChild(r);var i=new XMLHttpRequest;i.open("GET",t,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?(r.textContent=i.responseText,u.highlightElement(r)):r.textContent=i.status>=400?"\u2716 Error "+i.status+" while fetching file: "+i.statusText:"\u2716 Error: File does not exist or is empty")},i.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}({exports:{}});var t=function(){}}).call(n,u("fRUx"))},GwMn:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=function(){},a=u("Un6q"),s=u("7kov"),o=function(l){this.platformPickerService=l,this.os=l.is.bind(l)},r=e._3({encapsulation:0,styles:[[".pad[_ngcontent-%COMP%]{padding:3em 3em 0 3em;overflow:hidden}.docs-markdown-code[_ngcontent-%COMP%]{display:block;padding:0 0 1em 1em;white-space:pre-line}pre[_ngcontent-%COMP%]{white-space:pre}"]],data:{}});function i(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    Though this guide is for the Ubuntu linux; it should be easy to retrofit to others.\n  "]))],null,null)}function c(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    Though this guide has been tested on macOS High Sierra; it will probably work on older versions.\n  "]))],null,null)}function d(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    Follow this guide on Windows 7+.\n  "]))],null,null)}function g(l){return e._24(0,[(l()(),e._5(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._23(-1,null,["Command Prompt ("])),(l()(),e._5(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["cmd.exe"])),(l()(),e._23(-1,null,[")"]))],null,null)}function _(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e._23(-1,null,["Terminal"]))],null,null)}function p(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      sudo apt update\n      sudo apt install build-essential git-core tcl\n    "]))],null,null)}function h(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://developer.apple.com/downloads"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Latest XCode and Command Line Tools\n    "]))],null,null)}function m(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,['\n      /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n      brew update\n      brew install git\n    ']))],null,null)}function f(l){return e._24(0,[(l()(),e._5(0,0,null,null,22,"section",[["class","docs-guide-content"]],null,null,null,null,null)),(l()(),e._23(-1,null,['\n      Ensure you check "Add to PATH" whenever asked:\n      '])),(l()(),e._5(2,0,null,null,13,"ol",[],null,null,null,null,null)),(l()(),e._23(-1,null,["\n        "])),(l()(),e._5(4,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e._5(5,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n          Build Tools for Visual Studio 2017\n        "])),(l()(),e._23(-1,null,["\n        "])),(l()(),e._5(8,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e._5(9,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://git-scm.com/download/win"]],null,null,null,null,null)),(l()(),e._23(-1,null,["git"])),(l()(),e._23(-1,null,["\n        "])),(l()(),e._5(12,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e._5(13,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://www.python.org/downloads/windows"]],null,null,null,null,null)),(l()(),e._23(-1,null,["Python 2.7"])),(l()(),e._23(-1,null,["\n      "])),(l()(),e._23(-1,null,["\n      "])),(l()(),e._5(17,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["Test that it installed correctly with:"])),(l()(),e._23(-1,null,["\n      "])),(l()(),e._5(20,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n        git --version\n        cl /?\n        python --version\n      "])),(l()(),e._23(-1,null,["\n    "]))],null,null)}function y(l){return e._24(0,[(l()(),e._5(0,0,null,null,13,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Extract "])),(l()(),e._5(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["etcd"])),(l()(),e._23(-1,null,[" and "])),(l()(),e._5(5,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["etcdctl"])),(l()(),e._23(-1,null,[" from "])),(l()(),e._5(8,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/coreos/etcd/releases/download/v2.3.8/etcd-v2.3.8-linux-amd64.tar.gz"]],null,null,null,null,null)),(l()(),e._23(-1,null,["etcd-v2.3.8-linux-amd64.tar.gz"])),(l()(),e._23(-1,null,["\n      into somewhere in your PATH; e.g.: "])),(l()(),e._5(11,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["/usr/local/bin"])),(l()(),e._23(-1,null,[".\n    "]))],null,null)}function w(l){return e._24(0,[(l()(),e._5(0,0,null,null,13,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Extract "])),(l()(),e._5(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["etcd"])),(l()(),e._23(-1,null,[" and "])),(l()(),e._5(5,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["etcdctl"])),(l()(),e._23(-1,null,[" from "])),(l()(),e._5(8,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/coreos/etcd/releases/download/v2.3.8/etcd-v2.3.8-darwin-amd64.zip"]],null,null,null,null,null)),(l()(),e._23(-1,null,["etcd-v2.3.8-darwin-amd64.zip"])),(l()(),e._23(-1,null,["\n      into somewhere in your PATH; e.g.: "])),(l()(),e._5(11,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["/usr/local/bin"])),(l()(),e._23(-1,null,[".\n    "]))],null,null)}function k(l){return e._24(0,[(l()(),e._5(0,0,null,null,10,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Extract "])),(l()(),e._5(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["etcd.exe"])),(l()(),e._23(-1,null,[" and "])),(l()(),e._5(5,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["etcdctl.exe"])),(l()(),e._23(-1,null,[" from "])),(l()(),e._5(8,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/coreos/etcd/releases/download/v2.3.8/etcd-v2.3.8-windows-amd64.zip"]],null,null,null,null,null)),(l()(),e._23(-1,null,["etcd-v2.3.8-windows-amd64.zip"])),(l()(),e._23(-1,null,["\n      into somewhere in your PATH.\n    "]))],null,null)}function b(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      cd offscale\n      set VENV=path/to/your/virtualenv\n      pip_install_all\n      pip_install_all\n      pip_install_all\n    "]))],null,null)}function v(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      cd offscale\n      set VENV=path\\to\\your\\virtualenv\n      pip_install_all\n      pip_install_all\n      pip_install_all\n    "]))],null,null)}function x(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"code",[["class","lang-json docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,['\n      etcdctl set /unclustered/any-cluster-myosversion-myremotehostname "$(cat random_node.json)"\n    ']))],null,null)}function S(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"code",[["class","lang-json docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(1,null,["\n      set /p RN=",'random_node.json\n      etcdctl set /unclustered/any-cluster-myosversion-myremotehostname "%RN%"\n    ']))],null,function(l,n){l(n,1,0,"<")})}function j(l){return e._24(0,[(l()(),e._5(0,0,null,null,217,"div",[["class","docs-markdown pad"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n  "])),(l()(),e._5(2,0,null,null,1,"h5",[["class","docs-markdown-h5"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    Provision nodes onto 50+ public and private clouds, and deploy to them.\n  "])),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._5(5,0,null,null,10,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    At its core,\n    "])),(l()(),e._5(7,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/offscale"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      offscale\n    "])),(l()(),e._23(-1,null,[" is based around two major Python libraries: "])),(l()(),e._5(10,0,null,null,1,"a",[["class","docs-markdown-a"],["href","http://www.fabfile.org"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["Fabric"])),(l()(),e._23(-1,null,[" and\n    "])),(l()(),e._5(13,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://libcloud.apache.org"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["Apache Libcloud"])),(l()(),e._23(-1,null,[".\n  "])),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._0(16777216,null,null,1,null,i)),e._4(18,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._0(16777216,null,null,1,null,c)),e._4(21,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._0(16777216,null,null,1,null,d)),e._4(24,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._5(26,0,null,null,7,"em",[],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    All grey background assumes you are running in an active\n    "])),(l()(),e._0(16777216,null,null,1,null,g)),e._4(29,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n    "])),(l()(),e._0(16777216,null,null,1,null,_)),e._4(32,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n    session\n  "])),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._5(35,0,null,null,28,"section",[["id","step-0-install-build-dependencies"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(37,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Step 0: Install build dependencies\n    "])),(l()(),e._23(-1,null,["\n    "])),(l()(),e._0(16777216,null,null,1,null,p)),e._4(41,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._0(16777216,null,null,1,null,h)),e._4(44,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n    "])),(l()(),e._0(16777216,null,null,1,null,m)),e._4(47,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._0(16777216,null,null,1,null,f)),e._4(50,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(52,0,null,null,7,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,['\n      Now ensure this outputs something like "Python 2.7.14". If >3, switch to '])),(l()(),e._5(54,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["python2"])),(l()(),e._23(-1,null,[" and\n      "])),(l()(),e._5(57,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["pip2"])),(l()(),e._23(-1,null,[" executables for rest of guide."])),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(61,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      python --version\n    "])),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._5(65,0,null,null,19,"section",[["id","step-1-install-etcd"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(67,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Step 1: Install etcd\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._0(16777216,null,null,1,null,y)),e._4(71,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n    "])),(l()(),e._0(16777216,null,null,1,null,w)),e._4(74,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n    "])),(l()(),e._0(16777216,null,null,1,null,k)),e._4(77,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(79,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["Test that it installed correctly\u2014and has executable permissions\u2014with:"])),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(82,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      etcd --version\n      etcdctl --version\n    "])),(l()(),e._23(-1,null,["\n  "])),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._5(86,0,null,null,35,"section",[["id","step-2-prepare-libraries"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(88,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Step 2: Prepare Python libraries\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(91,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Let's begin by cloning all the repositories of the offscale organisation, we'll use "])),(l()(),e._5(93,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["gitim"])),(l()(),e._23(-1,null,[" which I\n      extended with organisation support:\n    "])),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(97,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      pip install https://api.github.com/repos/SamuelMarks/gitim/tarball/v2#egg=gitim\n      python -m gitim -u $YOUR_GITHUB_USERNAME -o offscale -d offscale\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(100,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Now install them all. "])),(l()(),e._5(102,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://virtualenv.pypa.io"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["virtualenv"])),(l()(),e._23(-1,null,["\n      is highly recommended.\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(106,0,null,null,8,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Since we're in development mode, let's skip the "])),(l()(),e._5(108,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["requirements.txt"])),(l()(),e._23(-1,null,[" and just brute-force install them\n      all locally. Pick the right "])),(l()(),e._5(111,0,null,null,2,"a",[["class","docs-markdown-a"],["href","https://gist.github.com/SamuelMarks/6555ca996ce11787515af25f1d2d2a83"],["target","_blank"]],null,null,null,null,null)),(l()(),e._5(112,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["pip_install_all"])),(l()(),e._23(-1,null,[" script for\n      your OS, then run:\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._0(16777216,null,null,1,null,b)),e._4(117,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n    "])),(l()(),e._0(16777216,null,null,1,null,v)),e._4(120,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n  "])),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._5(123,0,null,null,28,"section",[["id","step-3-using-offstrategy"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(125,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Step 3: Using offstrategy\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(128,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Part of the offscale fabric, "])),(l()(),e._5(130,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/offscale/offstrategy"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["offstrategy"])),(l()(),e._23(-1,null,[" handles: creation of nodes across multiple\n      providers.\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(134,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      First, ensure you are running the "])),(l()(),e._5(136,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["etcd"])),(l()(),e._23(-1,null,[" server, e.g.: by running:\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(140,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      etcd\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(143,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      See its "])),(l()(),e._5(145,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/offscale/offstrategy/blob/master/README.md"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["README.md"])),(l()(),e._23(-1,null,[" and run this for more information:\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(149,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      python -m offstrategy -h\n    "])),(l()(),e._23(-1,null,["\n  "])),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._5(153,0,null,null,25,"section",[["id","step-4-using-offregister"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(155,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Step 4: Using offregister\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(158,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Part of the offscale fabric, "])),(l()(),e._5(160,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/offscale/offregister"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["offregister"])),(l()(),e._23(-1,null,[" handles: the deployment of technology onto already\n      deployed nodes.\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(164,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      See its "])),(l()(),e._5(166,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/offscale/offregister/blob/master/README.md"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["README.md"])),(l()(),e._23(-1,null,[" and run this for more information:\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(170,0,null,null,1,"code",[["class","lang-bash docs-markdown-code"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      python -m offregister -h\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(173,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Configuration based deployments, you write little JSON files to specify what to deploy, where, and with what\n      customisations.\n      Here are my "])),(l()(),e._5(175,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/offscale/offregister/tree/master/offregister/_config"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["sample configs"])),(l()(),e._23(-1,null,[".\n    "])),(l()(),e._23(-1,null,["\n  "])),(l()(),e._23(-1,null,["\n\n\n  "])),(l()(),e._5(180,0,null,null,22,"section",[["id","appendix"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    "])),(l()(),e._5(182,0,null,null,1,"h3",[["class","docs-header-link docs-markdown-h3"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Appendix\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(185,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Note that you don't need to of deployed your nodes with offstrategy, add arbitrary nodes like so:\n    "])),(l()(),e._23(-1,null,["\n\n    random_node.json\n    "])),(l()(),e._5(188,0,null,null,1,"pre",[["style","background-color: rgba(0, 0, 0, 0.03); font-family: 'Roboto Mono', monospace;"]],null,null,null,null,null)),(l()(),e._23(189,null,["\n ",'\n   "id": "any-cluster-myosversion-myremotehostname",\n   "name": "any-cluster-myosversion-myremotehostname",\n   "uuid": "any-cluster-myosversion-myremotehostname",\n   "private_ips": [\n     "255.255.255.255"\n   ],\n   "public_ips": [\n     "255.255.255.255"\n   ],\n   "extra": ','\n     "user_hostname_port": "myremoteusername@255.255.255.255:22",\n     "ssh_config": ','\n       "IdentityFile": "/Users/mylocalusername/.ssh/verysecure.pem",\n       "LogLevel": "FATAL",\n       "HostName": "255.255.255.255",\n       "IdentitiesOnly": "yes",\n       "PasswordAuthentication": "no",\n       "Host": "any-cluster-myosversion-myremotehostname",\n       "UserKnownHostsFile": "/dev/null",\n       "User": "myremoteusername",\n       "StrictHostKeyChecking": "yes",\n       "Port": "22"\n     ',',\n     "user": "myremoteusername",\n     "provider": "azure_arm"\n   ',',\n   "driver": "AzureNodeDriver",\n   "state": "running"\n ',"\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._5(191,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n      Then you can add it to "])),(l()(),e._5(193,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._23(-1,null,["etcd"])),(l()(),e._23(-1,null,[" with:\n    "])),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._0(16777216,null,null,1,null,x)),e._4(198,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n\n    "])),(l()(),e._0(16777216,null,null,1,null,S)),e._4(201,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._23(-1,null,["\n  "])),(l()(),e._23(-1,null,["\n\n  "])),(l()(),e._5(204,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e._23(-1,null,["\n  "])),(l()(),e._5(206,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    Now you have everything you need to orchestrate with offscale.\n  "])),(l()(),e._23(-1,null,["\n  "])),(l()(),e._5(209,0,null,null,4,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,["\n    Take a look around my "])),(l()(),e._5(211,0,null,null,1,"a",[["class","docs-markdown-a"],["href","https://github.com/offscale"],["target","_blank"]],null,null,null,null,null)),(l()(),e._23(-1,null,["offregister-\n    prefixed projects"])),(l()(),e._23(-1,null,["; and you'll see how easy it is to build your own.\n  "])),(l()(),e._23(-1,null,["\n  "])),(l()(),e._5(215,0,null,null,1,"p",[["class","docs-markdown-p"]],null,null,null,null,null)),(l()(),e._23(-1,null,['\n    Tried to make it as straightforward to develop with as possible; with littler variation from everyone\'s "Getting\n    Started" guides needed to enable deployment through offregister. Enjoy :)\n  '])),(l()(),e._23(-1,null,["\n"])),(l()(),e._23(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,18,0,u.os("Linux")),l(n,21,0,u.os("macOS")),l(n,24,0,u.os("Windows")),l(n,29,0,u.os("Windows")),l(n,32,0,u.os("macOS")||u.os("Linux")),l(n,41,0,u.os("Linux")),l(n,44,0,u.os("macOS")),l(n,47,0,u.os("macOS")),l(n,50,0,u.os("Windows")),l(n,71,0,u.os("Linux")),l(n,74,0,u.os("macOS")),l(n,77,0,u.os("Windows")),l(n,117,0,u.os("macOS")||u.os("Linux")),l(n,120,0,u.os("Windows")),l(n,198,0,u.os("macOS")||u.os("Linux")),l(n,201,0,u.os("Windows"))},function(l,n){l(n,189,0,"{","{","{","}","}","}")})}var A=e._1("app-getting-started",o,function(l){return e._24(0,[(l()(),e._5(0,0,null,null,1,"app-getting-started",[],null,null,null,j,r)),e._4(1,49152,null,0,o,[s.a],null,null)],null,null)},{},{},[]),O=u("UHIZ"),F=u("/z9y");u.d(n,"GettingStartedModuleNgFactory",function(){return I});var I=e._2(t,[],function(l){return e._14([e._15(512,e.j,e.Y,[[8,[A]],[3,e.j],e.w]),e._15(4608,a.l,a.k,[e.t,[2,a.t]]),e._15(512,a.b,a.b,[]),e._15(512,O.n,O.n,[[2,O.s],[2,O.k]]),e._15(512,F.a,F.a,[]),e._15(512,t,t,[]),e._15(1024,O.i,function(){return[[{path:"",component:o}]]},[])])})}});