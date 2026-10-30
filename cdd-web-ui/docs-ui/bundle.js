// node_modules/marked/lib/marked.esm.js
function v() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var y = v();
function ee(a3) {
  y = a3;
}
var B = { exec: () => null };
function I(a3) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), s = e[n];
    return s || (s = a3(n), e[n] = s), s;
  };
}
function c(a3, e = "") {
  let t = typeof a3 == "string" ? a3 : a3.source, n = { replace: (s, r) => {
    let o = typeof r == "string" ? r : r.source;
    return o = o.replace(T.caret, "$1"), t = t.replace(s, o), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var Me = ((a3 = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + a3);
  } catch {
    return false;
  }
})();
var T = { codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, endingSpaceTabChar: /[ \t]$/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, leadingSpaceTab: /^[ \t]+/, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, blockquoteMarkerWhitespace: /^( {0,3}>)([ \t]+)/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/, numericCharacterReferenceOrAmpersand: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (a3) => new RegExp(`^( {0,3}${a3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: I((a3) => new RegExp(`^ {0,${a3}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: I((a3) => new RegExp(`^ {0,${a3}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)), fencesBeginRegex: I((a3) => new RegExp(`^ {0,${a3}}(?:\`\`\`|~~~)`)), headingBeginRegex: I((a3) => new RegExp(`^ {0,${a3}}#{1,6}(?:\\s|$)`)), pedanticHeadingBeginRegex: I((a3) => new RegExp(`^ {0,${a3}}#`)), htmlBeginRegex: I((a3) => new RegExp(`^ {0,${a3}}(?:</?(?:${K})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`, "i")), blockquoteBeginRegex: I((a3) => new RegExp(`^ {0,${a3}}>`)) };
var Ce = /^(?:[ \t]*(?:\n|$))+/;
var Ee = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Ie = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var U = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Be = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var ne = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
var me = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var xe = c(me).replace(/bull/g, ne).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var De = c(me).replace(/bull/g, ne).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var re = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
var qe = /^[^\n]+/;
var se = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var Ze = c(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", se).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var ve = c(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, ne).getRegex();
var K = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var ie = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var He = c("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ie).replace("tag", K).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var be = (a3) => c(re).replace("hr", U).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", a3).replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", K).getRegex();
var Ge = be(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
var Ne = be(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
var Qe = c(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph", Ne).getRegex();
var oe = { blockquote: Qe, code: Ee, def: Ze, fences: Ie, heading: Be, hr: U, html: He, lheading: xe, list: ve, newline: Ce, paragraph: Ge, table: B, text: qe };
var ke = c("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", U).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", K).getRegex();
var je = { ...oe, lheading: De, table: ke, paragraph: c(re).replace("hr", U).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ke).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", K).getRegex() };
var Fe = { ...oe, html: c(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ie).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: B, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: c(re).replace("hr", U).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", xe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Ue = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var Ke = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var Re = /^( {2,}|\\)\n(?!\s*$)[ \t]*/;
var We = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var $ = /[\p{P}\p{S}]/u;
var H = /[\s\p{P}\p{S}]/u;
var W = /[^\s\p{P}\p{S}]/u;
var Xe = c(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, H).getRegex();
var Ve = /[\p{Pi}\p{Ps}"']/u;
var Te = /(?!~)[\p{P}\p{S}]/u;
var Je = /(?!~)[\s\p{P}\p{S}]/u;
var Ye = /(?:[^\s\p{P}\p{S}]|~)/u;
var et = c(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Me ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var Oe = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
var tt = c(Oe, "u").replace(/punct/g, $).getRegex();
var nt = c(Oe, "u").replace(/punct/g, Te).getRegex();
var rt = /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/;
var st = c(rt, "u").replace(/openQuote/g, Ve).replace(/punct/g, $).getRegex();
var we = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var it = c(we, "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, $).getRegex();
var ot = c(we, "gu").replace(/notPunctSpace/g, Ye).replace(/punctSpace/g, Je).replace(/punct/g, Te).getRegex();
var at = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)";
var lt = c(at, "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, $).getRegex();
var ut = c("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, $).getRegex();
var pt = "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)";
var ct = c(pt, "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, $).getRegex();
var ht = c(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, $).getRegex();
var dt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)";
var kt = c(dt, "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, $).getRegex();
var gt = c(/\\(punct)/, "gu").replace(/punct/g, $).getRegex();
var ft = c(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/, "gu").replace(/punct/g, $).getRegex();
var mt = c(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var xt = c(ie).replace("(?:-->|$)", "-->").getRegex();
var bt = c("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", xt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var Pe = /\[(?:\\[\s\S]|[^\[\]\\])*\]/;
var Y = c(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", Pe).getRegex();
var Rt = c(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label", Y).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var Tt = c(/^!?\[(label)\]\[(ref)\]/).replace("label", Y).replace("ref", se).getRegex();
var Ot = c(/^!?\[(ref)\](?:\[\])?/).replace("ref", se).getRegex();
var ge = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/;
var wt = c(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", Pe).getRegex();
var Pt = c("reflink|nolink(?!\\()", "g").replace("reflink", c(/^!?\[(label)\]\[(ref)\]/).replace("label", wt).replace("ref", ge).getRegex()).replace("nolink", c(/^!?\[(ref)\](?:\[\])?/).replace("ref", ge).getRegex()).getRegex();
var fe = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var yt = /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/;
var St = c(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, yt).getRegex();
var ae = { _backpedal: B, anyPunctuation: gt, anyPunctuationOutsideCode: ft, autolink: mt, blockSkip: et, br: Re, code: Ke, del: B, delLDelim: B, delRDelim: B, emStrongLDelim: tt, emStrongRDelimAst: it, emStrongRDelimUnd: ut, escape: Ue, link: Rt, nolink: Ot, punctuation: Xe, reflink: Tt, reflinkSearch: Pt, tag: bt, text: We, url: B };
var _t = { ...ae, emStrongLDelim: st, emStrongRDelimAst: lt, emStrongRDelimUnd: ct, link: c(/^!?\[(label)\]\((.*?)\)/).replace("label", Y).getRegex(), reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Y).getRegex() };
var te = { ...ae, emStrongRDelimAst: ot, emStrongLDelim: nt, delLDelim: ht, delRDelim: kt, url: c(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol", St).replace("protocol", fe).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: c(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol", fe).replace(/emailProtocol/g, /(?:mailto|xmpp):/).getRegex() };
var $t = { ...te, br: c(Re).replace("{2,}", "*").getRegex(), text: c(te.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var X = { normal: oe, gfm: je, pedantic: Fe };
var G = { normal: ae, gfm: te, breaks: $t, pedantic: _t };
var Lt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ye = (a3) => Lt[a3];
function P(a3, e) {
  if (e) {
    if (T.escapeTest.test(a3)) return a3.replace(T.escapeReplace, ye);
  } else if (T.escapeTestNoEncode.test(a3)) return a3.replace(T.escapeReplaceNoEncode, ye);
  return a3;
}
function Se(a3) {
  return T.numericCharacterReference.test(a3) ? a3.replace(T.numericCharacterReferenceOrAmpersand, (e, t, n) => {
    if (t === void 0 && n === void 0) return "&amp;";
    let s = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
    return s === 0 || s > 1114111 || s >= 55296 && s <= 57343 ? "\uFFFD" : s === 38 ? "&amp;" : String.fromCodePoint(s);
  }) : a3;
}
function le(a3) {
  try {
    a3 = encodeURI(a3).replace(T.percentDecode, "%");
  } catch {
    return null;
  }
  return a3;
}
function ue(a3, e) {
  let t = a3.replace(T.findPipe, (r, o, i) => {
    let l = false, u = o;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), n = t.split(T.splitPipe), s = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; s < n.length; s++) n[s] = n[s].trim().replace(T.slashPipe, "|");
  return n;
}
function z(a3, e, t) {
  let n = a3.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n; ) {
    let r = a3.charAt(n - s - 1);
    if (r === e && !t) s++;
    else if (r !== e && t) s++;
    else break;
  }
  return a3.slice(0, n - s);
}
function pe(a3) {
  let e = a3.split(`
`), t = e.length - 1;
  for (; t >= 0 && T.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? a3 : e.slice(0, t + 1).join(`
`);
}
function N(a3) {
  return a3.trim().toLowerCase().toUpperCase().toLowerCase();
}
function ce(a3, e) {
  if (a3.indexOf(e[0]) === -1 && a3.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < a3.length; n++) if (a3[n] === "\\") n++;
  else if (a3[n] === e[0]) t++;
  else if (a3[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function V(a3, e = 0) {
  let t = e, n = "";
  for (let s of a3) if (s === "	") {
    let r = 4 - t % 4;
    n += " ".repeat(r), t += r;
  } else n += s, t++;
  return n;
}
function _e(a3, e, t, n, s) {
  let r = e.href, o = e.title || null, i = a3[1].replace(s.other.outputLinkReplace, "$1"), l = a3[0].charAt(0) === "!", u = n.state.inLink, h = n.state.linkEmitted, p = n.state.inRawBlock;
  n.state.inLink = true, n.state.linkEmitted = false;
  let d = n.inlineTokens(i), g = n.state.linkEmitted;
  if (n.state.linkEmitted = h, n.state.inLink = u, !l) {
    if (g) {
      n.state.inRawBlock = p;
      return;
    }
    n.state.linkEmitted = true;
  }
  return { type: l ? "image" : "link", raw: t, href: r, title: o, text: i, tokens: d };
}
function At(a3, e, t) {
  let n = a3.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let s = n[1];
  return e.split(`
`).map((r) => {
    let o = r.match(t.other.beginningSpace);
    if (o === null) return r;
    let [i] = o;
    return r.slice(Math.min(i.length, s.length));
  }).join(`
`);
}
function $e(a3, e, t, n) {
  if (!e.includes("<")) return false;
  for (let s = 0; s < e.length; s++) {
    if (e[s] === "\\") {
      s++;
      continue;
    }
    if (e[s] === "`") {
      let i = n.inline.code.exec(e.slice(s));
      if (i) {
        s += i[0].length - 1;
        continue;
      }
    }
    if (e[s] !== "<") continue;
    let r = a3.slice(t + s), o = n.inline.tag.exec(r) || n.inline.autolink.exec(r);
    if (o) {
      if (o[0].length > e.length - s) return true;
      s += o[0].length - 1;
    }
  }
  return false;
}
var _ = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || y;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = this.options.pedantic ? t[0] : pe(t[0]), s = n.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: n, codeBlockStyle: "indented", text: s };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], s = At(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let s = z(n, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceTabChar.test(s)) && (n = s.trim());
      }
      return { type: "heading", raw: z(t[0], `
`), depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: z(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = z(t[0], `
`).split(`
`), s = "", r = "", o = [];
      for (; n.length > 0; ) {
        let i = false, l = [], u;
        for (u = 0; u < n.length; u++) if (this.rules.other.blockquoteStart.test(n[u])) l.push(n[u]), i = true;
        else if (!i) l.push(n[u]);
        else break;
        n = n.slice(u);
        let h = l.join(`
`), p = h.replace(this.rules.other.blockquoteMarkerWhitespace, (k, b, x) => b + V(x, b.length)).replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${h}` : h, r = r ? `${r}
${p}` : p;
        let d = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(p, o, true), this.lexer.state.top = d, n.length === 0) break;
        let g = o.at(-1);
        if (g?.type === "code" || g?.type === "heading" || g?.type === "hr" || g?.type === "html") break;
        if (g?.type === "blockquote") {
          let k = g, b = n.join(`
`), x = k.raw + `
` + b.replace(this.rules.other.blockquoteSetextReplace2, ""), f = this.blockquote(x);
          o[o.length - 1] = f;
          let S = x.substring(f.raw.length).replace(/^\n/, ""), R = S ? S.split(`
`).length : 0, C = R ? n.slice(0, -R) : n;
          C.length > 0 && (s = `${s}
${C.join(`
`)}`), r = r.substring(0, r.length - k.text.length) + f.text;
          break;
        } else if (g?.type === "list") {
          let k = g, b = k.raw + `
` + n.join(`
`), x = this.list(b);
          o[o.length - 1] = x;
          let f = x.raw.length > k.raw.length ? b.slice(k.raw.length + 1, x.raw.length).split(`
`).length : 0;
          if (f > 0) {
            let S = n.slice(0, f).join(`
`);
            s = `${s}
${S}`, r = `${r}
${S}`;
          }
          n = n.slice(f);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: o, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = e, s = () => n.length - e.length, r = t[1].trim(), o = r.length > 1, i = { type: "list", raw: "", ordered: o, start: o ? +r.slice(0, -1) : "", loose: false, items: [] };
      r = o ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = o ? r : "[*+-]");
      let l = this.rules.other.listItemRegex(r), u = false;
      for (; e; ) {
        let p = false, d = "";
        if (!(t = l.exec(e)) || this.rules.block.hr.test(e)) break;
        let g = s();
        e = e.substring(t[0].length);
        let k = t[2].split(`
`, 1)[0], b = t[1].length, x = this.options.pedantic ? V(k, b) : k.replace(this.rules.other.leadingSpaceTab, (Q) => V(Q, b)), f = e.split(`
`, 1)[0], S = !x.trim(), R = 0;
        if (this.options.pedantic ? (R = 2, d = x.trimStart()) : S ? R = b + 1 : (R = x.search(this.rules.other.nonSpaceChar), R = R > 4 ? 1 : R, d = x.slice(R), R += b), S && this.rules.other.blankLine.test(f) && (e = e.substring(f.length + 1), p = true), !p) {
          let Q = this.rules.other.nextBulletRegex(R), E = this.rules.other.hrRegex(R), j = this.rules.other.fencesBeginRegex(R), F = this.options.pedantic ? this.rules.other.pedanticHeadingBeginRegex(R) : this.rules.other.headingBeginRegex(R), Le = this.rules.other.htmlBeginRegex(R), Ae = this.rules.other.blockquoteBeginRegex(R);
          for (; e; ) {
            let he = e.split(`
`, 1)[0], Z;
            if (f = he, this.options.pedantic ? (f = f.replace(this.rules.other.listReplaceNesting, "  "), Z = f) : Z = f.replace(this.rules.other.leadingSpaceTab, (de) => V(de)), j.test(f) || F.test(f) || Le.test(f) || Ae.test(f) || Q.test(f) || E.test(f)) break;
            if (Z.search(this.rules.other.nonSpaceChar) >= R || !f.trim()) d += `
` + Z.slice(R);
            else {
              if (S || x.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || j.test(x) || F.test(x) || E.test(x)) break;
              let ze = !this.options.pedantic && /^ {0,3}(?:=+|-+) *$/.test(f) && this.rules.block.lheading.test(`${x}
${f}`) ? `    ${Z.replace(/^ {0,3}/, "")}` : f;
              d += `
` + ze;
            }
            S = !f.trim(), e = e.substring(he.length + 1), x = Z.slice(R);
          }
        }
        let C = n.slice(g, s());
        i.loose || (u ? i.loose = true : this.rules.other.doubleBlankLine.test(C) && (u = true)), i.items.push({ type: "list_item", raw: C, task: !!this.options.gfm && this.rules.other.listIsTask.test(d), loose: false, text: d, tokens: [] });
      }
      let h = i.items.at(-1);
      if (h) h.raw = h.raw.trimEnd(), h.text = h.text.trimEnd();
      else return;
      i.raw = n.slice(0, s()).trimEnd();
      for (let p of i.items) if (this.lexer.state.top = false, p.tokens = this.lexer.blockTokens(p.text, []), !i.loose) {
        let d = p.tokens.filter((k) => k.type === "space"), g = d.length > 0 && d.some((k) => this.rules.other.anyLine.test(k.raw));
        i.loose = g;
      }
      for (let p of i.items) {
        let d = p.tokens[0];
        if (p.task && (d?.type === "text" || d?.type === "paragraph")) {
          p.text = p.text.replace(this.rules.other.listReplaceTask, ""), d.raw = d.raw.replace(this.rules.other.listReplaceTask, ""), d.text = d.text.replace(this.rules.other.listReplaceTask, "");
          for (let k = this.lexer.inlineQueue.length - 1; k >= 0; k--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[k].src)) {
            this.lexer.inlineQueue[k].src = this.lexer.inlineQueue[k].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let g = this.rules.other.listTaskCheckbox.exec(p.raw);
          if (g) {
            let k = { type: "checkbox", raw: g[0] + " ", checked: g[0] !== "[ ]" };
            p.checked = k.checked, i.loose ? p.tokens[0] && ["paragraph", "text"].includes(p.tokens[0].type) && "tokens" in p.tokens[0] && p.tokens[0].tokens ? (p.tokens[0].raw = k.raw + p.tokens[0].raw, p.tokens[0].text = k.raw + p.tokens[0].text, p.tokens[0].tokens.unshift(k)) : p.tokens.unshift({ type: "paragraph", raw: k.raw, text: k.raw, tokens: [k] }) : p.tokens.unshift(k);
          }
        } else p.task && (p.task = false);
      }
      if (i.loose) for (let p of i.items) {
        p.loose = true;
        for (let d of p.tokens) d.type === "text" && (d.type = "paragraph");
      }
      return i;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) {
      let n = pe(t[0]);
      return { type: "html", block: true, raw: n, pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: n };
    }
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      if (!this.rules.other.startAngleBracket.test(t[2]) && ce(t[2], "()") !== -1) return;
      let n = N(t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: z(t[0], `
`), href: s, title: r };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = ue(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = { type: "table", raw: z(t[0], `
`), header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (let i of s) this.rules.other.tableAlignRight.test(i) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(i) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(i) ? o.align.push("left") : o.align.push(null);
      for (let i = 0; i < n.length; i++) o.header.push({ text: n[i], tokens: this.lexer.inline(n[i]), header: true, align: o.align[i] });
      for (let i of r) o.rows.push(ue(i, o.header.length).map((l, u) => ({ text: l, tokens: this.lexer.inline(l), header: false, align: o.align[u] })));
      return o;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) {
      let n = t[1].trim();
      return { type: "heading", raw: z(t[0], `
`), depth: t[2].charAt(0) === "=" ? 1 : 2, text: n, tokens: this.lexer.inline(n) };
    }
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    if (this.lexer.state.linkParenPossible === false) return;
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[0].charAt(0) === "!" ? 2 : 1;
      if (!this.options.pedantic && $e(e, t[1], n, this.rules)) return;
      let s = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
        if (!this.rules.other.endAngleBracket.test(s)) return;
        let i = z(s.slice(0, -1), "\\");
        if ((s.length - i.length) % 2 === 0) return;
      } else {
        let i = ce(t[2], "()");
        if (i === -2) return;
        if (i > -1) {
          let u = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, u).trim(), t[3] = "";
        }
      }
      let r = t[2], o = "";
      if (this.options.pedantic) {
        let i = this.rules.other.pedanticHrefTitle.exec(r);
        i && (r = i[1], o = i[3]);
      } else o = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), _e(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let s = n[0].charAt(0) === "!" ? 2 : 1;
      if (!this.options.pedantic && $e(e, n[1], s, this.rules)) return;
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = t[N(r)];
      if (!o) {
        let i = n[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return _e(n, o, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || !s[1] && !s[2] && !s[3] && !s[4]) return;
    let r = s[0][0], o = n === r, i = t.length - e.length, l = i;
    for (; !this.options.pedantic && l > 0 && t[l - 1] === r; ) l--;
    let u = [...t.slice(Math.max(0, l - 2), l)].at(-1) ?? "", h = u === "*" || u === "_" || !!this.rules.inline.punctuation.exec(u);
    l < i && (n = u);
    let p = l < i ? h : !!this.rules.inline.punctuation.exec(n);
    if (s[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    let d = s[1] || s[3] || "";
    if (!d || !n || p) {
      let g = [...s[0]].length - 1, k, b, x = g, f = 0, S = i - l + g, R = !this.options.pedantic && !!u.trim() && (!!d || r === "*" && !h), C = r === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (C.lastIndex = 0, t = t.slice(-1 * e.length + g); (s = C.exec(t)) !== null; ) {
        if (k = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !k) continue;
        if (b = [...k].length, s[3] || s[4]) {
          x += b;
          continue;
        } else if (s[5] || s[6] || R) {
          if (o && (s[5] || s[6])) break;
          if (S % 3 && !((S + b) % 3)) {
            f += b;
            continue;
          }
        }
        if (x -= b, x > 0) continue;
        b = Math.min(b, b + x + f);
        let Q = [...s[0]][0].length, E = e.slice(0, g + s.index + Q + b);
        if (Math.min(g, b) % 2) {
          let F = E.slice(1, -1);
          return { type: "em", raw: E, text: F, tokens: this.lexer.inlineTokens(F) };
        }
        let j = E.slice(2, -2);
        return { type: "strong", raw: E, text: j, tokens: this.lexer.inlineTokens(j) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return s && r && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e, t, n = "") {
    let s = this.rules.inline.delLDelim.exec(e);
    if (!s) return;
    if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let o = [...s[0]].length - 1, i, l, u = o, h = this.rules.inline.delRDelim;
      for (h.lastIndex = 0, t = t.slice(-1 * e.length + o); (s = h.exec(t)) !== null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i || (l = [...i].length, l !== o)) continue;
        if (s[3] || s[4]) {
          u += l;
          continue;
        }
        if (u -= l, u > 0) continue;
        l = Math.min(l, l + u);
        let p = [...s[0]][0].length, d = e.slice(0, o + s.index + p + l), g = d.slice(o, -o);
        return { type: "del", raw: d, text: g, tokens: this.lexer.inlineTokens(g) };
      }
    }
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), { type: "link", raw: t[0], text: n, href: s, autolink: true, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, s;
      if (t[2] === "@") n = t[0], s = "mailto:" + n;
      else {
        let r;
        do
          r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (r !== t[0]);
        n = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: s, autolink: true, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: n ? t[0] : Se(t[0]), escaped: n };
    }
  }
};
var O = class a {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || y, this.options.tokenizer = this.options.tokenizer || new _(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, linkEmitted: false, linkParenPossible: true, top: true };
    let t = { other: T, block: X.normal, inline: G.normal };
    this.options.pedantic ? (t.block = X.pedantic, t.inline = G.pedantic) : this.options.gfm && (t.block = X.gfm, this.options.breaks ? t.inline = G.breaks : t.inline = G.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: X, inline: G };
  }
  static lex(e, t) {
    return new a(t).lex(e);
  }
  static lexInline(e, t) {
    return new a(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(T.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.state.inRawBlock = false, this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(T.tabCharGlobal, "    ").replace(T.spaceLine, ""));
    let s = 1 / 0;
    for (; e; ) {
      if (e.length < s) s = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let r;
      if (this.options.extensions?.block?.some((i) => (r = i.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let i = t.at(-1);
        r.raw.length === 1 && i !== void 0 ? i.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let i = t.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.text, this.inlineQueue.at(-1).src = i.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let i = t.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.raw, this.inlineQueue.at(-1).src = i.text) : (this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }), t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let o = e;
      if (this.options.extensions?.startBlock) {
        let i = 1 / 0, l = e.slice(1), u;
        this.options.extensions.startBlock.forEach((h) => {
          u = h.call({ lexer: this }, l), typeof u == "number" && u >= 0 && (i = Math.min(i, u));
        }), i < 1 / 0 && i >= 0 && (o = e.substring(0, i + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(o))) {
        let i = t.at(-1);
        n && i?.type === "paragraph" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : t.push(r), n = o.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let i = t.at(-1);
        i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : t.push(r);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  linkInText(e) {
    if (!e.includes("[")) return false;
    let t = this.tokenizer.rules.inline.link;
    for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (t.test(n[0]) && e.charAt(n.index - 1) !== "!") return true;
    for (let n of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
      let s = n[0], r = s.lastIndexOf("[");
      if (!(s.charAt(0) === "!" || !Object.hasOwn(this.tokens.links, N(s.slice(r + 1, -1)))) && !(r > 1 && this.linkInText(s.slice(1, r - 1)))) return true;
    }
    return false;
  }
  inlineTokens(e, t = []) {
    this.tokenizer.lexer = this;
    let n = this.state.linkParenPossible;
    this.state.linkParenPossible = n && e.includes(")");
    try {
      return this.#e(e, t);
    } finally {
      this.state.linkParenPossible = n;
    }
  }
  #e(e, t) {
    let n = e.includes("*") || e.includes("_") || e.includes("~") || this.options.hooks?.emStrongMask || this.tokenizer.emStrong !== _.prototype.emStrong || this.tokenizer.del !== _.prototype.del ? this.#t(e) : e, s = false, r = "", o = 1 / 0;
    for (; e; ) {
      if (e.length < o) o = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      s || (r = ""), s = false;
      let i;
      if (this.options.extensions?.inline?.some((u) => (i = u.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), true) : false)) continue;
      if (i = this.tokenizer.escape(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.tag(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.link(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(i.raw.length);
        let u = t.at(-1);
        i.type === "text" && u?.type === "text" ? (u.raw += i.raw, u.text += i.text) : t.push(i);
        continue;
      }
      if (i = this.tokenizer.emStrong(e, n, r)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.codespan(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.br(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.del(e, n, r)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.autolink(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (!this.state.inLink && (i = this.tokenizer.url(e))) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      let l = e;
      if (this.options.extensions?.startInline) {
        let u = 1 / 0, h = e.slice(1), p;
        this.options.extensions.startInline.forEach((d) => {
          p = d.call({ lexer: this }, h), typeof p == "number" && p >= 0 && (u = Math.min(u, p));
        }), u < 1 / 0 && u >= 0 && (l = e.substring(0, u + 1));
      }
      if (i = this.tokenizer.inlineText(l)) {
        e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (r = i.raw.slice(-1)), s = true;
        let u = t.at(-1);
        u?.type === "text" ? (u.raw += i.raw, u.text += i.text) : t.push(i);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return t;
  }
  #t(e) {
    let t = e;
    if (this.tokens.links && e.includes("[")) {
      let n = this.tokenizer.rules.inline.reflinkSearch, s = (r) => {
        let o = r.lastIndexOf("[");
        if (!Object.hasOwn(this.tokens.links, N(r.slice(o + 1, -1)))) return r;
        if (o > 1 && r.charAt(0) !== "!") {
          let i = r.slice(1, o - 1);
          if (this.linkInText(i)) return "[" + i.replace(n, s) + "][" + "a".repeat(r.length - o - 2) + "]";
        }
        return "[" + "a".repeat(r.length - 2) + "]";
      };
      t = t.replace(n, s);
    }
    return t = t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode, (n, s, r) => r ? "+".repeat(n.length) : s ? s + n.slice(s.length, -s.length).replace(/`/g, "+") + s : n), t = t.replace(this.tokenizer.rules.inline.blockSkip, (n, s, r) => {
      let o = r ? r.length : 0;
      return n.slice(0, o) + "[" + "a".repeat(n.length - o - 2) + "]";
    }), t = this.options.hooks?.emStrongMask?.call({ lexer: this }, t) ?? t, t;
  }
  infiniteLoopError(e) {
    let t = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(t);
    else throw new Error(t);
  }
};
var L = class {
  options;
  parser;
  constructor(e) {
    this.options = e || y;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let s = (t || "").match(T.notSpaceStart)?.[0], r = e ? e.replace(T.endingNewline, "") + `
` : "";
    return s ? '<pre><code class="language-' + P(s) + '">' + (n ? r : P(r, true)) + `</code></pre>
` : "<pre><code>" + (n ? r : P(r, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, s = "";
    for (let i = 0; i < e.items.length; i++) {
      let l = e.items[i];
      s += this.listitem(l);
    }
    let r = t ? "ol" : "ul", o = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + o + `>
` + s + "</" + r + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
    t += this.tablerow({ text: n });
    let s = "";
    for (let r = 0; r < e.rows.length; r++) {
      let o = e.rows[r];
      n = "";
      for (let i = 0; i < o.length; i++) n += this.tablecell(o[i]);
      s += this.tablerow({ text: n });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${P(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, text: n, tokens: s, autolink: r }) {
    let o = r ? P(n, true) : this.parser.parseInline(s), i = le(e);
    if (i === null) return o;
    e = P(i, r);
    let l = '<a href="' + e + '"';
    return t && (l += ' title="' + P(t) + '"'), l += ">" + o + "</a>", l;
  }
  image({ href: e, title: t, text: n, tokens: s }) {
    s && (n = this.parser.parseInline(s, this.parser.textRenderer));
    let r = le(e);
    if (r === null) return P(n);
    e = r;
    let o = `<img src="${P(e)}" alt="${P(n)}"`;
    return t && (o += ` title="${P(t)}"`), o += ">", o;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : P(e.text);
  }
};
var M = class {
  parser;
  strong({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  em({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  image({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  br() {
    return "";
  }
  checkbox({ raw: e }) {
    return e;
  }
};
var w = class a2 {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || y, this.options.renderer = this.options.renderer || new L(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new M(), this.textRenderer.parser = this;
  }
  static parse(e, t) {
    return new a2(t).parse(e);
  }
  static parseInline(e, t) {
    return new a2(t).parseInline(e);
  }
  parse(e) {
    this.renderer.parser = this;
    let t = "";
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let o = s, i = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (i !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "checkbox", "html", "def", "paragraph", "text"].includes(o.type)) {
          t += i || "";
          continue;
        }
      }
      let r = s;
      switch (r.type) {
        case "space": {
          t += this.renderer.space(r);
          break;
        }
        case "hr": {
          t += this.renderer.hr(r);
          break;
        }
        case "heading": {
          t += this.renderer.heading(r);
          break;
        }
        case "code": {
          t += this.renderer.code(r);
          break;
        }
        case "table": {
          t += this.renderer.table(r);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(r);
          break;
        }
        case "list": {
          t += this.renderer.list(r);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(r);
          break;
        }
        case "html": {
          t += this.renderer.html(r);
          break;
        }
        case "def": {
          t += this.renderer.def(r);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(r);
          break;
        }
        case "text": {
          t += this.renderer.text(r);
          break;
        }
        default: {
          let o = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    this.renderer.parser = this;
    let n = "";
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (this.options.extensions?.renderers?.[r.type]) {
        let i = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (i !== false || !["escape", "html", "link", "image", "checkbox", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          n += i || "";
          continue;
        }
      }
      let o = r;
      switch (o.type) {
        case "escape": {
          n += t.text(o);
          break;
        }
        case "html": {
          n += t.html(o);
          break;
        }
        case "link": {
          n += t.link(o);
          break;
        }
        case "image": {
          n += t.image(o);
          break;
        }
        case "checkbox": {
          n += t.checkbox(o);
          break;
        }
        case "strong": {
          n += t.strong(o);
          break;
        }
        case "em": {
          n += t.em(o);
          break;
        }
        case "codespan": {
          n += t.codespan(o);
          break;
        }
        case "br": {
          n += t.br(o);
          break;
        }
        case "del": {
          n += t.del(o);
          break;
        }
        case "text": {
          n += t.text(o);
          break;
        }
        default: {
          let i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return n;
  }
};
var A = class {
  options;
  block;
  constructor(e) {
    this.options = e || y;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer(e = this.block) {
    return e ? O.lex : O.lexInline;
  }
  provideParser(e = this.block) {
    return e ? w.parse : w.parseInline;
  }
};
function D(a3, e) {
  if (Array.isArray(e)) for (let t = 0; t < e.length; t++) a3.push(e[t]);
  else a3.push(e);
}
var J = class {
  defaults = v();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = w;
  Renderer = L;
  TextRenderer = M;
  Lexer = O;
  Tokenizer = _;
  Hooks = A;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let s of e) switch (D(n, t.call(this, s)), s.type) {
      case "table": {
        let r = s;
        for (let o of r.header) D(n, this.walkTokens(o.tokens, t));
        for (let o of r.rows) for (let i of o) D(n, this.walkTokens(i.tokens, t));
        break;
      }
      case "list": {
        let r = s;
        D(n, this.walkTokens(r.items, t));
        break;
      }
      default: {
        let r = s;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((o) => {
          let i = r[o].flat(1 / 0);
          D(n, this.walkTokens(i, t));
        }) : r.tokens && D(n, this.walkTokens(r.tokens, t));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let s = { ...n };
      if (s.async = this.defaults.async || s.async || false, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          let o = t.renderers[r.name];
          o ? t.renderers[r.name] = function(...i) {
            let l = r.renderer.apply(this, i);
            return l === false && (l = o.apply(this, i)), l;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let o = t[r.level];
          o ? o.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), s.extensions = t), n.renderer) {
        let r = this.defaults.renderer || new L(this.defaults);
        for (let o in n.renderer) {
          if (!(o in r)) throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o)) continue;
          let i = o, l = n.renderer[i], u = r[i];
          r[i] = (...h) => {
            let p = l.apply(r, h);
            return p === false && (p = u.apply(r, h)), p || "";
          };
        }
        s.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new _(this.defaults);
        for (let o in n.tokenizer) {
          if (!(o in r)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          let i = o, l = n.tokenizer[i], u = r[i];
          r[i] = (...h) => {
            let p = l.apply(r, h);
            return p === false && (p = u.apply(r, h)), p;
          };
        }
        s.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new A();
        for (let o in n.hooks) {
          if (!(o in r)) throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o)) continue;
          let i = o, l = n.hooks[i], u = r[i];
          A.passThroughHooks.has(o) ? r[i] = (h) => {
            if (r.options.async && A.passThroughHooksRespectAsync.has(o)) return (async () => {
              let d = await l.call(r, h);
              return u.call(r, d);
            })();
            let p = l.call(r, h);
            return u.call(r, p);
          } : r[i] = (...h) => {
            if (r.options.async) return (async () => {
              let d = await l.apply(r, h);
              return d === false && (d = await u.apply(r, h)), d;
            })();
            let p = l.apply(r, h);
            return p === false && (p = u.apply(r, h)), p;
          };
        }
        s.hooks = r;
      }
      if (n.walkTokens) {
        let r = this.defaults.walkTokens, o = n.walkTokens;
        s.walkTokens = function(i) {
          let l = [];
          return l.push(o.call(this, i)), r && D(l, r.call(this, i)), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return O.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return w.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, s) => {
      let r = { ...s }, o = { ...this.defaults, ...r }, i = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === true && r.async === false) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (o.hooks && (o.hooks.options = o, o.hooks.block = e), o.async) return (async () => {
        let l = o.hooks ? await o.hooks.preprocess(n) : n, h = await (o.hooks ? await o.hooks.provideLexer(e) : e ? O.lex : O.lexInline)(l, o), p = o.hooks ? await o.hooks.processAllTokens(h) : h;
        o.walkTokens && await Promise.all(this.walkTokens(p, o.walkTokens));
        let g = await (o.hooks ? await o.hooks.provideParser(e) : e ? w.parse : w.parseInline)(p, o);
        return o.hooks ? await o.hooks.postprocess(g) : g;
      })().catch(i);
      try {
        o.hooks && (n = o.hooks.preprocess(n));
        let u = (o.hooks ? o.hooks.provideLexer(e) : e ? O.lex : O.lexInline)(n, o);
        o.hooks && (u = o.hooks.processAllTokens(u)), o.walkTokens && this.walkTokens(u, o.walkTokens);
        let p = (o.hooks ? o.hooks.provideParser(e) : e ? w.parse : w.parseInline)(u, o);
        return o.hooks && (p = o.hooks.postprocess(p)), p;
      } catch (l) {
        return i(l);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let s = "<p>An error occurred:</p><pre>" + P(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(s) : s;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
};
var q = new J();
function m(a3, e) {
  return q.parse(a3, e);
}
m.options = m.setOptions = function(a3) {
  return q.setOptions(a3), m.defaults = q.defaults, ee(m.defaults), m;
};
m.getDefaults = v;
m.defaults = y;
function zt(...a3) {
  return q.use(...a3), m.defaults = q.defaults, ee(m.defaults), m;
}
m.use = zt;
m.walkTokens = function(a3, e) {
  return q.walkTokens(a3, e);
};
m.parseInline = q.parseInline;
m.Parser = w;
m.parser = w.parse;
m.Renderer = L;
m.TextRenderer = M;
m.Lexer = O;
m.lexer = O.lex;
m.Tokenizer = _;
m.Hooks = A;
m.parse = m;
var Tn = m.options;
var On = m.setOptions;
var wn = m.walkTokens;
var Pn = m.parseInline;
var Sn = w.parse;
var _n = O.lex;

// src/openapi-types.ts
var STANDARD_HTTP_METHODS = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace",
  "query"
];

// src/arazzo-types.ts
var RUNTIME_ROOT_PREFIXES = [
  "$request.header",
  "$request.query",
  "$request.path",
  "$request.body",
  "$response.header",
  "$response.query",
  "$response.path",
  "$response.body",
  "$message.header",
  "$message.payload",
  "$message.body",
  "$sourceDescriptions",
  "$components",
  "$workflows",
  "$outputs",
  "$inputs",
  "$steps",
  "$statusCode",
  "$method",
  "$url"
];

// src/types.ts
var defaultTranslations = {
  locale: "en",
  searchPlaceholder: "Search endpoints...",
  copy: "Copy",
  copied: "Copied!",
  tryItOut: "Try It Out",
  execute: "Execute",
  response: "Response",
  status: "Status",
  loading: "Loading...",
  error: "Error",
  settings: "Settings",
  darkMode: "Dark Mode",
  language: "Language",
  includeImports: "Include Imports",
  includeWrapping: "Include Wrapping",
  paths: "Paths",
  schemas: "Schemas",
  parameters: "Parameters",
  requestBody: "Request Body (JSON)",
  noExampleFor: "No example for",
  arrayOf: "Array of:",
  tableHeaderProperty: "Property",
  tableHeaderType: "Type",
  tableHeaderDescription: "Description",
  tableHeaderName: "Name",
  tableHeaderIn: "In",
  termsOfService: "Terms of Service",
  contactPrefix: "Contact: ",
  apiSupport: "API Support",
  appearanceHeading: "Appearance",
  tocNavLabel: "Table of Contents",
  tabCurl: "cURL",
  tabSdk: "SDK",
  workflowsHeading: "Workflows",
  sourceDescriptionsHeading: "Source Descriptions",
  workflowInputsHeading: "Workflow Inputs",
  workflowOutputsHeading: "Workflow Outputs",
  workflowDependsOnHeading: "Prerequisites (dependsOn)",
  stepsHeading: "Workflow Steps",
  stepParametersHeading: "Step Parameters",
  stepRequestBodyHeading: "Step Request Body & Replacements",
  successCriteriaHeading: "Success Criteria",
  onSuccessHeading: "On Success Actions",
  onFailureHeading: "On Failure Actions",
  stepOutputsHeading: "Step Outputs",
  runWorkflowBtn: "Run Workflow",
  arazzoComponentsHeading: "Arazzo Components",
  webhooksHeading: "Webhooks"
};

// node_modules/js-yaml/dist/js-yaml.mjs
var NOT_RESOLVED = /* @__PURE__ */ Symbol("NOT_RESOLVED");
function defineScalarTag(tagName, options) {
  return {
    tagName,
    nodeKind: "scalar",
    implicit: options.implicit ?? false,
    matchByTagPrefix: options.matchByTagPrefix ?? false,
    implicitFirstChars: options.implicitFirstChars ?? null,
    resolve: options.resolve,
    identify: options.identify,
    represent: options.represent ?? ((data) => String(data)),
    representTagName: options.representTagName ?? (() => tagName)
  };
}
function defineSequenceTag(tagName, options) {
  const carrierIsResult = options.finalize === void 0;
  return {
    tagName,
    nodeKind: "sequence",
    implicit: false,
    matchByTagPrefix: options.matchByTagPrefix ?? false,
    create: options.create,
    addItem: options.addItem,
    finalize: options.finalize ?? ((carrier) => carrier),
    carrierIsResult,
    identify: options.identify,
    represent: options.represent ?? ((data) => data),
    representTagName: options.representTagName ?? (() => tagName)
  };
}
function defineMappingTag(tagName, options) {
  const carrierIsResult = options.finalize === void 0;
  return {
    tagName,
    nodeKind: "mapping",
    implicit: false,
    matchByTagPrefix: options.matchByTagPrefix ?? false,
    create: options.create,
    addPair: options.addPair,
    has: options.has,
    keys: options.keys,
    get: options.get,
    finalize: options.finalize ?? ((carrier) => carrier),
    carrierIsResult,
    identify: options.identify,
    represent: options.represent ?? ((data) => data),
    representTagName: options.representTagName ?? (() => tagName)
  };
}
var strTag = defineScalarTag("tag:yaml.org,2002:str", {
  resolve: (source) => source,
  identify: (data) => typeof data === "string"
});
var NULL_VALUES$1 = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
];
var nullCoreTag = defineScalarTag("tag:yaml.org,2002:null", {
  implicit: true,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (source) => {
    if (NULL_VALUES$1.indexOf(source) !== -1) return null;
    return NOT_RESOLVED;
  },
  identify: (object) => object === null,
  represent: () => "null"
});
var nullJsonTag = defineScalarTag("tag:yaml.org,2002:null", {
  implicit: true,
  implicitFirstChars: ["n"],
  resolve: (source, isExplicit) => {
    if (source === "null" || isExplicit && source === "") return null;
    return NOT_RESOLVED;
  },
  identify: (object) => object === null,
  represent: () => "null"
});
var NULL_VALUES = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
];
var nullYaml11Tag = defineScalarTag("tag:yaml.org,2002:null", {
  implicit: true,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (source) => {
    if (NULL_VALUES.indexOf(source) !== -1) return null;
    return NOT_RESOLVED;
  },
  identify: (object) => object === null,
  represent: () => "null"
});
var TRUE_VALUES$2 = [
  "true",
  "True",
  "TRUE"
];
var FALSE_VALUES$2 = [
  "false",
  "False",
  "FALSE"
];
var boolCoreTag = defineScalarTag("tag:yaml.org,2002:bool", {
  implicit: true,
  implicitFirstChars: [
    "t",
    "T",
    "f",
    "F"
  ],
  resolve: (source) => {
    if (TRUE_VALUES$2.indexOf(source) !== -1) return true;
    if (FALSE_VALUES$2.indexOf(source) !== -1) return false;
    return NOT_RESOLVED;
  },
  identify: (object) => Object.prototype.toString.call(object) === "[object Boolean]",
  represent: (object) => object ? "true" : "false"
});
var TRUE_VALUES$1 = ["true"];
var FALSE_VALUES$1 = ["false"];
var boolJsonTag = defineScalarTag("tag:yaml.org,2002:bool", {
  implicit: true,
  implicitFirstChars: ["t", "f"],
  resolve: (source) => {
    if (TRUE_VALUES$1.indexOf(source) !== -1) return true;
    if (FALSE_VALUES$1.indexOf(source) !== -1) return false;
    return NOT_RESOLVED;
  },
  identify: (object) => Object.prototype.toString.call(object) === "[object Boolean]",
  represent: (object) => object ? "true" : "false"
});
var TRUE_VALUES = [
  "true",
  "True",
  "TRUE",
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON"
];
var FALSE_VALUES = [
  "false",
  "False",
  "FALSE",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
var boolYaml11Tag = defineScalarTag("tag:yaml.org,2002:bool", {
  implicit: true,
  implicitFirstChars: [
    "y",
    "Y",
    "n",
    "N",
    "t",
    "T",
    "f",
    "F",
    "o",
    "O"
  ],
  resolve: (source) => {
    if (TRUE_VALUES.indexOf(source) !== -1) return true;
    if (FALSE_VALUES.indexOf(source) !== -1) return false;
    return NOT_RESOLVED;
  },
  identify: (object) => Object.prototype.toString.call(object) === "[object Boolean]",
  represent: (object) => object ? "true" : "false"
});
var YAML_INTEGER_IMPLICIT_PATTERN$1 = /* @__PURE__ */ new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
var YAML_INTEGER_EXPLICIT_PATTERN$1 = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function parseYamlInteger$2(source) {
  let value = source;
  let sign = 1;
  if (value[0] === "-" || value[0] === "+") {
    if (value[0] === "-") sign = -1;
    value = value.slice(1);
  }
  if (value.startsWith("0b")) return sign * parseInt(value.slice(2), 2);
  if (value.startsWith("0o")) return sign * parseInt(value.slice(2), 8);
  if (value.startsWith("0x")) return sign * parseInt(value.slice(2), 16);
  return sign * parseInt(value, 10);
}
function resolveYamlInteger$2(source, isExplicit) {
  if (isExplicit) {
    if (!YAML_INTEGER_EXPLICIT_PATTERN$1.test(source)) return NOT_RESOLVED;
  } else if (!YAML_INTEGER_IMPLICIT_PATTERN$1.test(source)) return NOT_RESOLVED;
  const result = parseYamlInteger$2(source);
  return Number.isFinite(result) ? result : NOT_RESOLVED;
}
var intCoreTag = defineScalarTag("tag:yaml.org,2002:int", {
  implicit: true,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: resolveYamlInteger$2,
  identify: (object) => Number.isInteger(object) && !Object.is(object, -0) && object.toString(10).indexOf("e") < 0,
  represent: (object) => object.toString(10)
});
var YAML_INTEGER_IMPLICIT_PATTERN = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)$");
var YAML_INTEGER_EXPLICIT_PATTERN = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function parseYamlInteger$1(source) {
  let value = source;
  let sign = 1;
  if (value[0] === "-" || value[0] === "+") {
    if (value[0] === "-") sign = -1;
    value = value.slice(1);
  }
  if (value.startsWith("0b")) return sign * parseInt(value.slice(2), 2);
  if (value.startsWith("0o")) return sign * parseInt(value.slice(2), 8);
  if (value.startsWith("0x")) return sign * parseInt(value.slice(2), 16);
  return sign * parseInt(value, 10);
}
function resolveYamlInteger$1(source, isExplicit) {
  if (isExplicit) {
    if (!YAML_INTEGER_EXPLICIT_PATTERN.test(source)) return NOT_RESOLVED;
  } else if (!YAML_INTEGER_IMPLICIT_PATTERN.test(source)) return NOT_RESOLVED;
  const result = parseYamlInteger$1(source);
  return Number.isFinite(result) ? result : NOT_RESOLVED;
}
var intJsonTag = defineScalarTag("tag:yaml.org,2002:int", {
  implicit: true,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: resolveYamlInteger$1,
  identify: (object) => Number.isInteger(object) && !Object.is(object, -0) && object.toString(10).indexOf("e") < 0,
  represent: (object) => object.toString(10)
});
var YAML_INTEGER_PATTERN = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");
function parseYamlInteger(source) {
  let value = source.replace(/_/g, "");
  let sign = 1;
  if (value[0] === "-" || value[0] === "+") {
    if (value[0] === "-") sign = -1;
    value = value.slice(1);
  }
  if (value.startsWith("0b")) return sign * parseInt(value.slice(2), 2);
  if (value.startsWith("0x")) return sign * parseInt(value.slice(2), 16);
  if (value.includes(":")) {
    let result = 0;
    for (const part of value.split(":")) result = result * 60 + Number(part);
    return sign * result;
  }
  if (value !== "0" && value[0] === "0") return sign * parseInt(value, 8);
  return sign * parseInt(value, 10);
}
function resolveYamlInteger(source) {
  if (!YAML_INTEGER_PATTERN.test(source)) return NOT_RESOLVED;
  const result = parseYamlInteger(source);
  return Number.isFinite(result) ? result : NOT_RESOLVED;
}
var intYaml11Tag = defineScalarTag("tag:yaml.org,2002:int", {
  implicit: true,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: resolveYamlInteger,
  identify: (object) => Number.isInteger(object) && !Object.is(object, -0) && object.toString(10).indexOf("e") < 0,
  represent: (object) => object.toString(10)
});
var YAML_FLOAT_PATTERN$1 = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
var YAML_FLOAT_SPECIAL_PATTERN$1 = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat$2(source) {
  if (!YAML_FLOAT_PATTERN$1.test(source)) return NOT_RESOLVED;
  let value = source.toLowerCase();
  const sign = value[0] === "-" ? -1 : 1;
  if ("+-".includes(value[0])) value = value.slice(1);
  if (value === ".inf") return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (value === ".nan") return NaN;
  const result = sign * parseFloat(value);
  if (Number.isFinite(result) || YAML_FLOAT_SPECIAL_PATTERN$1.test(source)) return result;
  return NOT_RESOLVED;
}
function representYamlFloat$2(object) {
  if (isNaN(object)) return ".nan";
  if (object === Number.POSITIVE_INFINITY) return ".inf";
  if (object === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(object, -0)) return "-0.0";
  const result = object.toString(10);
  return /^[-+]?[0-9]+e/.test(result) ? result.replace("e", ".e") : result;
}
var floatCoreTag = defineScalarTag("tag:yaml.org,2002:float", {
  implicit: true,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: resolveYamlFloat$2,
  identify: (object) => typeof object === "number" && (!Number.isInteger(object) || Object.is(object, -0) || object.toString(10).indexOf("e") >= 0),
  represent: representYamlFloat$2
});
var YAML_FLOAT_IMPLICIT_PATTERN = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$");
var YAML_FLOAT_EXPLICIT_PATTERN = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat$1(source, isExplicit) {
  if (isExplicit) {
    if (!YAML_FLOAT_EXPLICIT_PATTERN.test(source)) return NOT_RESOLVED;
    let value = source.toLowerCase();
    const sign = value[0] === "-" ? -1 : 1;
    if ("+-".includes(value[0])) value = value.slice(1);
    if (value === ".inf") return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    if (value === ".nan") return NaN;
    const result2 = sign * parseFloat(value);
    return Number.isFinite(result2) ? result2 : NOT_RESOLVED;
  }
  if (!YAML_FLOAT_IMPLICIT_PATTERN.test(source)) return NOT_RESOLVED;
  const result = Number(source);
  if (Number.isFinite(result)) return result;
  return NOT_RESOLVED;
}
function representYamlFloat$1(object) {
  if (isNaN(object)) return ".nan";
  if (object === Number.POSITIVE_INFINITY) return ".inf";
  if (object === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(object, -0)) return "-0.0";
  const result = object.toString(10);
  return /^[-+]?[0-9]+e/.test(result) ? result.replace("e", ".e") : result;
}
var floatJsonTag = defineScalarTag("tag:yaml.org,2002:float", {
  implicit: true,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: resolveYamlFloat$1,
  identify: (object) => typeof object === "number" && (!Number.isInteger(object) || Object.is(object, -0) || object.toString(10).indexOf("e") >= 0),
  represent: representYamlFloat$1
});
var YAML_FLOAT_PATTERN = /* @__PURE__ */ new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
var YAML_FLOAT_SPECIAL_PATTERN = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(source) {
  if (!YAML_FLOAT_PATTERN.test(source)) return NOT_RESOLVED;
  let value = source.toLowerCase().replace(/_/g, "");
  const sign = value[0] === "-" ? -1 : 1;
  if ("+-".includes(value[0])) value = value.slice(1);
  if (value === ".inf") return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (value === ".nan") return NaN;
  let result = 0;
  if (value.includes(":")) {
    for (const part of value.split(":")) result = result * 60 + Number(part);
    result *= sign;
  } else result = sign * parseFloat(value);
  if (Number.isFinite(result) || YAML_FLOAT_SPECIAL_PATTERN.test(source)) return result;
  return NOT_RESOLVED;
}
function representYamlFloat(object) {
  if (isNaN(object)) return ".nan";
  if (object === Number.POSITIVE_INFINITY) return ".inf";
  if (object === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(object, -0)) return "-0.0";
  const result = object.toString(10);
  return /^[-+]?[0-9]+e/.test(result) ? result.replace("e", ".e") : result;
}
var floatYaml11Tag = defineScalarTag("tag:yaml.org,2002:float", {
  implicit: true,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: resolveYamlFloat,
  identify: (object) => typeof object === "number" && (!Number.isInteger(object) || Object.is(object, -0) || object.toString(10).indexOf("e") >= 0),
  represent: representYamlFloat
});
var mergeTag = defineScalarTag("tag:yaml.org,2002:merge", {
  implicit: true,
  implicitFirstChars: ["<"],
  resolve: (source, isExplicit) => {
    if (source === "<<" || isExplicit && source === "") return "<<";
    return NOT_RESOLVED;
  },
  identify: () => false
});
var BASE64_PATTERN = /^[A-Za-z0-9+/]*={0,2}$/;
function resolveYamlBinary(source) {
  const input = source.replace(/\s/g, "");
  if (input.length % 4 !== 0 || !BASE64_PATTERN.test(input)) return NOT_RESOLVED;
  const binary = atob(input);
  const result = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index++) result[index] = binary.charCodeAt(index);
  return result;
}
function representYamlBinary(object) {
  let binary = "";
  for (let index = 0; index < object.length; index++) binary += String.fromCharCode(object[index]);
  return btoa(binary);
}
var binaryTag = defineScalarTag("tag:yaml.org,2002:binary", {
  resolve: resolveYamlBinary,
  identify: (object) => Object.prototype.toString.call(object) === "[object Uint8Array]",
  represent: representYamlBinary
});
var YAML_DATE_REGEXP = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
var YAML_TIMESTAMP_REGEXP = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function makeUtcDate(year, month, day, hour = 0, minute = 0, second = 0, fraction = 0) {
  const date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  date.setUTCFullYear(year, month, day);
  return date;
}
function resolveYamlTimestamp(source) {
  let match = YAML_DATE_REGEXP.exec(source);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(source);
  if (match === null) return NOT_RESOLVED;
  const year = +match[1];
  const month = +match[2] - 1;
  const day = +match[3];
  if (!match[4]) {
    const date2 = makeUtcDate(year, month, day);
    if (date2.getUTCFullYear() !== year || date2.getUTCMonth() !== month || date2.getUTCDate() !== day) return NOT_RESOLVED;
    return date2;
  }
  const hour = +match[4];
  const minute = +match[5];
  const second = +match[6];
  let fraction = 0;
  if (hour > 23 || minute > 59 || second > 59) return NOT_RESOLVED;
  if (match[7]) {
    let value = match[7].slice(0, 3);
    while (value.length < 3) value += "0";
    fraction = +value;
  }
  const date = makeUtcDate(year, month, day, hour, minute, second, fraction);
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month || date.getUTCDate() !== day) return NOT_RESOLVED;
  if (match[9]) {
    const offsetHour = +match[10];
    const offsetMinute = +(match[11] || 0);
    if (offsetHour > 23 || offsetMinute > 59) return NOT_RESOLVED;
    const offset = (offsetHour * 60 + offsetMinute) * 6e4;
    date.setTime(date.getTime() - (match[9] === "-" ? -offset : offset));
  }
  return date;
}
var timestampTag = defineScalarTag("tag:yaml.org,2002:timestamp", {
  implicit: true,
  implicitFirstChars: [..."0123456789"],
  resolve: resolveYamlTimestamp,
  identify: (object) => object instanceof Date,
  represent: (object) => object.toISOString()
});
var seqTag = defineSequenceTag("tag:yaml.org,2002:seq", {
  create: () => [],
  addItem: (container, item) => {
    container.push(item);
  },
  identify: Array.isArray
});
function isPlainObject(data) {
  if (data === null || typeof data !== "object" || Array.isArray(data)) return false;
  const prototype = Object.getPrototypeOf(data);
  return prototype === null || prototype === Object.prototype;
}
function pick(object, keys) {
  const result = {};
  for (const key of keys) if (object[key] !== void 0) result[key] = object[key];
  return result;
}
var omapTag = defineSequenceTag("tag:yaml.org,2002:omap", {
  create: () => ({
    list: [],
    seen: /* @__PURE__ */ new Set()
  }),
  addItem: (carrier, item) => {
    let key;
    if (item instanceof Map) {
      if (item.size !== 1) return "cannot resolve an ordered map item";
      key = item.keys().next().value;
    } else if (isPlainObject(item)) {
      const itemKeys = Object.keys(item);
      if (itemKeys.length !== 1) return "cannot resolve an ordered map item";
      key = itemKeys[0];
    } else return "cannot resolve an ordered map item";
    if (carrier.seen.has(key)) return "duplicate key in ordered map";
    carrier.seen.add(key);
    carrier.list.push(item);
    return "";
  },
  finalize: (carrier) => carrier.list,
  identify: () => false
});
var pairsTag = defineSequenceTag("tag:yaml.org,2002:pairs", {
  create: () => [],
  addItem: (container, item) => {
    if (item instanceof Map) {
      if (item.size !== 1) return "cannot resolve a pairs item";
      container.push(item.entries().next().value);
      return "";
    }
    if (Object.prototype.toString.call(item) !== "[object Object]") return "cannot resolve a pairs item";
    const object = item;
    const keys = Object.keys(object);
    if (keys.length !== 1) return "cannot resolve a pairs item";
    container.push([keys[0], object[keys[0]]]);
    return "";
  },
  identify: () => false
});
var mapTag = defineMappingTag("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: isPlainObject,
  represent: (o) => {
    const map = /* @__PURE__ */ new Map();
    for (const key of Object.keys(o)) map.set(key, o[key]);
    return map;
  },
  addPair: (container, key, value) => {
    if (key !== null && typeof key === "object") return "object-based map does not support complex keys";
    const normalizedKey = String(key);
    if (normalizedKey === "__proto__") Object.defineProperty(container, normalizedKey, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    else container[normalizedKey] = value;
    return "";
  },
  has: (container, key) => {
    if (key !== null && typeof key === "object") return false;
    return Object.prototype.hasOwnProperty.call(container, String(key));
  },
  keys: (container) => Object.keys(container),
  get: (container, key) => {
    const normalizedKey = String(key);
    if (!Object.prototype.hasOwnProperty.call(container, normalizedKey)) return null;
    return container[normalizedKey];
  }
});
var setTag = defineMappingTag("tag:yaml.org,2002:set", {
  create: () => /* @__PURE__ */ new Set(),
  identify: (data) => data instanceof Set,
  represent: (data) => {
    const map = /* @__PURE__ */ new Map();
    for (const key of data) map.set(key, null);
    return map;
  },
  addPair: (container, key, value) => {
    if (value !== null) return "cannot resolve a set item";
    container.add(key);
    return "";
  },
  has: (container, key) => container.has(key),
  keys: (container) => container.keys(),
  get: () => null
});
function createTagDefinitionMap() {
  return {
    scalar: /* @__PURE__ */ Object.create(null),
    sequence: /* @__PURE__ */ Object.create(null),
    mapping: /* @__PURE__ */ Object.create(null)
  };
}
function createTagDefinitionListMap() {
  return {
    scalar: [],
    sequence: [],
    mapping: []
  };
}
function compileTags(tags) {
  const result = [];
  for (const tag of tags) {
    let index = result.length;
    for (let previousIndex = 0; previousIndex < result.length; previousIndex++) {
      const previous = result[previousIndex];
      if (previous.nodeKind === tag.nodeKind && previous.tagName === tag.tagName && previous.matchByTagPrefix === tag.matchByTagPrefix) {
        index = previousIndex;
        break;
      }
    }
    result[index] = tag;
  }
  return result;
}
var Schema = class Schema2 {
  tags;
  /** @internal */
  implicitScalarTags;
  /**
  * Dispatch implicit scalar resolvers by `source.charAt(0)`. Each bucket holds
  * the resolvers that may match that key, in schema order; a key absent from
  * the map uses
  * {@link Schema.implicitScalarAnyFirstChar}
  * (resolvers that declared no first-char constraint, so they apply to any
  * first character).
  */
  implicitScalarByFirstChar;
  implicitScalarAnyFirstChar;
  /**
  * The default scalar tag (`!!str`), resolved once so the composer's fallback
  * for unresolved plain scalars avoids a keyed lookup per scalar.
  *
  * @internal
  */
  defaultScalarTag;
  /**
  * The default container tags (`!!seq` / `!!map`), used by the dumper: when a
  * value is identified by its default tag, the tag is implicit and not
  * printed. Undefined if the schema does not define them (then such values
  * can't be dumped).
  *
  * @internal
  */
  defaultSequenceTag;
  /** @internal */
  defaultMappingTag;
  exact;
  prefix;
  constructor(tags) {
    const compiledTags = compileTags(tags);
    const implicitScalarTags = [];
    const exact = createTagDefinitionMap();
    const prefix = createTagDefinitionListMap();
    for (const tag of compiledTags) {
      if (tag.nodeKind === "scalar" && tag.implicit) {
        if (tag.matchByTagPrefix) throw new Error("Implicit scalar tags cannot match by tag prefix");
        implicitScalarTags.push(tag);
      }
      switch (tag.nodeKind) {
        case "scalar":
          if (tag.matchByTagPrefix) prefix.scalar.push(tag);
          else exact.scalar[tag.tagName] = tag;
          break;
        case "sequence":
          if (tag.matchByTagPrefix) prefix.sequence.push(tag);
          else exact.sequence[tag.tagName] = tag;
          break;
        case "mapping":
          if (tag.matchByTagPrefix) prefix.mapping.push(tag);
          else exact.mapping[tag.tagName] = tag;
      }
    }
    const implicitScalarAnyFirstChar = implicitScalarTags.filter((tag) => tag.implicitFirstChars === null);
    const keys = /* @__PURE__ */ new Set();
    for (const tag of implicitScalarTags) if (tag.implicitFirstChars !== null) for (const key of tag.implicitFirstChars) keys.add(key);
    const implicitScalarByFirstChar = /* @__PURE__ */ new Map();
    for (const key of keys) implicitScalarByFirstChar.set(key, implicitScalarTags.filter((tag) => tag.implicitFirstChars === null || tag.implicitFirstChars.indexOf(key) !== -1));
    const defaultScalarTag = exact.scalar["tag:yaml.org,2002:str"];
    if (!defaultScalarTag) throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");
    this.tags = compiledTags;
    this.implicitScalarTags = implicitScalarTags;
    this.implicitScalarByFirstChar = implicitScalarByFirstChar;
    this.implicitScalarAnyFirstChar = implicitScalarAnyFirstChar;
    this.defaultScalarTag = defaultScalarTag;
    this.defaultSequenceTag = exact.sequence["tag:yaml.org,2002:seq"];
    this.defaultMappingTag = exact.mapping["tag:yaml.org,2002:map"];
    this.exact = exact;
    this.prefix = prefix;
  }
  /** @internal */
  lookupScalarTag(tagName) {
    const exactTag = this.exact.scalar[tagName];
    if (exactTag) return exactTag;
    for (const tag of this.prefix.scalar) if (tagName.startsWith(tag.tagName)) return tag;
  }
  /** @internal */
  lookupSequenceTag(tagName) {
    const exactTag = this.exact.sequence[tagName];
    if (exactTag) return exactTag;
    for (const tag of this.prefix.sequence) if (tagName.startsWith(tag.tagName)) return tag;
  }
  /** @internal */
  lookupMappingTag(tagName) {
    const exactTag = this.exact.mapping[tagName];
    if (exactTag) return exactTag;
    for (const tag of this.prefix.mapping) if (tagName.startsWith(tag.tagName)) return tag;
  }
  /** @internal */
  resolveImplicitScalarTag(source) {
    const candidates = this.implicitScalarByFirstChar.get(source.charAt(0)) ?? this.implicitScalarAnyFirstChar;
    for (const tag2 of candidates) {
      const value = tag2.resolve(source, false, tag2.tagName);
      if (value !== NOT_RESOLVED) return {
        value,
        tag: tag2
      };
    }
    const tag = this.defaultScalarTag;
    return {
      value: tag.resolve(source, false, tag.tagName),
      tag
    };
  }
  /**
  * Creates a new schema with the specified tags added. If a tag already
  * exists, it is replaced by the specified tag.
  *
  * @example
  *
  * ```javascript
  * import { CORE_SCHEMA, mergeTag, realMapTag } from 'js-yaml'
  *
  * const schema = CORE_SCHEMA.withTags(mergeTag, realMapTag)
  * ```
  */
  withTags(...tags) {
    let flatTags = [];
    for (const tag of tags) flatTags = flatTags.concat(tag);
    return new Schema2([...this.tags, ...flatTags]);
  }
};
var FAILSAFE_SCHEMA = new Schema([
  strTag,
  seqTag,
  mapTag
]);
var JSON_SCHEMA = new Schema([
  ...FAILSAFE_SCHEMA.tags,
  nullJsonTag,
  boolJsonTag,
  intJsonTag,
  floatJsonTag
]);
var CORE_SCHEMA = new Schema([
  ...FAILSAFE_SCHEMA.tags,
  nullCoreTag,
  boolCoreTag,
  intCoreTag,
  floatCoreTag
]);
var YAML11_SCHEMA = new Schema([
  ...FAILSAFE_SCHEMA.tags,
  nullYaml11Tag,
  boolYaml11Tag,
  intYaml11Tag,
  floatYaml11Tag,
  timestampTag,
  mergeTag,
  binaryTag,
  omapTag,
  pairsTag,
  setTag
]);
var DUMP_SCHEMA = YAML11_SCHEMA.withTags({
  ...intYaml11Tag,
  resolve: (source, isExplicit, tagName) => {
    const result = intYaml11Tag.resolve(source, isExplicit, tagName);
    return result === NOT_RESOLVED ? intCoreTag.resolve(source, isExplicit, tagName) : result;
  }
}, {
  ...floatYaml11Tag,
  resolve: (source, isExplicit, tagName) => {
    const result = floatYaml11Tag.resolve(source, isExplicit, tagName);
    return result === NOT_RESOLVED ? floatCoreTag.resolve(source, isExplicit, tagName) : result;
  }
});
var realMapTag = defineMappingTag("tag:yaml.org,2002:map", {
  create: () => /* @__PURE__ */ new Map(),
  addPair: (container, key, value) => {
    container.set(key, value);
    return "";
  },
  has: (container, key) => container.has(key),
  keys: (container) => container.keys(),
  get: (container, key) => container.get(key),
  identify: (data) => data instanceof Map || isPlainObject(data),
  represent: (data) => {
    if (data instanceof Map) return data;
    const map = /* @__PURE__ */ new Map();
    const obj = data;
    for (const key of Object.keys(obj)) map.set(key, obj[key]);
    return map;
  }
});
function normalizeKey(key) {
  if (Array.isArray(key)) {
    const array = Array.prototype.slice.call(key);
    for (let index = 0; index < array.length; index++) {
      if (Array.isArray(array[index])) return null;
      if (typeof array[index] === "object" && Object.prototype.toString.call(array[index]) === "[object Object]") array[index] = "[object Object]";
    }
    return String(array);
  }
  if (typeof key === "object" && Object.prototype.toString.call(key) === "[object Object]") return "[object Object]";
  return String(key);
}
var legacyMapTag = defineMappingTag("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: isPlainObject,
  represent: (o) => {
    const map = /* @__PURE__ */ new Map();
    for (const key of Object.keys(o)) map.set(key, o[key]);
    return map;
  },
  addPair: (container, key, value) => {
    const normalizedKey = normalizeKey(key);
    if (normalizedKey === null) return "nested arrays are not supported inside keys";
    if (normalizedKey === "__proto__") Object.defineProperty(container, normalizedKey, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    else container[normalizedKey] = value;
    return "";
  },
  has: (container, key) => {
    const normalizedKey = normalizeKey(key);
    return normalizedKey !== null && Object.prototype.hasOwnProperty.call(container, normalizedKey);
  },
  keys: (container) => Object.keys(container),
  get: (container, key) => {
    const normalizedKey = String(key);
    if (!Object.prototype.hasOwnProperty.call(container, normalizedKey)) return null;
    return container[normalizedKey];
  }
});
var DEFAULT_SNIPPET_OPTIONS = {
  maxLength: 79,
  indent: 1,
  linesBefore: 3,
  linesAfter: 2
};
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  let head = "";
  let tail = "";
  const maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position - lineStart > maxHalfLength) {
    head = " ... ";
    lineStart = position - maxHalfLength + head.length;
  }
  if (lineEnd - position > maxHalfLength) {
    tail = " ...";
    lineEnd = position + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
    pos: position - lineStart + head.length
  };
}
function padStart(string, max) {
  return " ".repeat(Math.max(max - string.length, 0)) + string;
}
function makeSnippet(mark, options) {
  if (!mark.buffer) return null;
  const opts = {
    ...DEFAULT_SNIPPET_OPTIONS,
    ...options
  };
  const re2 = /\r?\n|\r|\0/g;
  const lineStarts = [0];
  const lineEnds = [];
  let match;
  let foundLineNo = -1;
  while (match = re2.exec(mark.buffer)) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);
    if (mark.position <= match.index && foundLineNo < 0) foundLineNo = lineStarts.length - 2;
  }
  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
  let result = "";
  const lineNoLength = Math.min(mark.line + opts.linesAfter, lineEnds.length).toString().length;
  const maxLineLength = opts.maxLength - (opts.indent + lineNoLength + 3);
  for (let i = 1; i <= opts.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    const line2 = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
    result = `${" ".repeat(opts.indent)}${padStart((mark.line - i + 1).toString(), lineNoLength)} | ${line2.str}
${result}`;
  }
  const line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += `${" ".repeat(opts.indent)}${padStart((mark.line + 1).toString(), lineNoLength)} | ${line.str}
`;
  result += `${"-".repeat(opts.indent + lineNoLength + 3 + line.pos)}^
`;
  for (let i = 1; i <= opts.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    const line2 = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
    result += `${" ".repeat(opts.indent)}${padStart((mark.line + i + 1).toString(), lineNoLength)} | ${line2.str}
`;
  }
  return result.replace(/\n$/, "");
}
function formatError(exception, compact) {
  let where = "";
  if (!exception.mark) return exception.reason;
  if (exception.mark.name) where += `in "${exception.mark.name}" `;
  where += `(${exception.mark.line + 1}:${exception.mark.column + 1})`;
  if (!compact && exception.mark.snippet) where += `

${exception.mark.snippet}`;
  return `${exception.reason} ${where}`;
}
var YAMLException = class YAMLException2 extends Error {
  reason;
  mark;
  /**
  * Optional `mark` contains source snippet data. Usually, use
  * {@link YAMLException.throwAt} instead of passing it directly.
  */
  constructor(reason, mark) {
    super();
    this.name = "YAMLException";
    this.reason = reason;
    this.mark = mark;
    this.message = formatError(this, false);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
  }
  /**
  * Returns the formatted error, omitting the source snippet in compact mode.
  */
  toString(compact) {
    return `${this.name}: ${formatError(this, compact)}`;
  }
  /**
  * Builds a YAMLException with a source snippet and throws it. `source` is
  * the raw input text; `position` is an offset into it.
  */
  static throwAt(source, position, message, filename = "") {
    let line = 0;
    let lineStart = 0;
    for (let index = 0; index < position; index++) {
      const ch = source.charCodeAt(index);
      if (ch === 10) {
        line++;
        lineStart = index + 1;
      } else if (ch === 13) {
        line++;
        if (source.charCodeAt(index + 1) === 10) index++;
        lineStart = index + 1;
      }
    }
    const mark = {
      name: filename,
      buffer: source,
      position,
      line,
      column: position - lineStart
    };
    mark.snippet = makeSnippet(mark);
    throw new YAMLException2(message, mark);
  }
};
var EVENT_ID = {
  DOCUMENT: 1,
  SEQUENCE: 2,
  MAPPING: 3,
  SCALAR: 4,
  ALIAS: 5,
  POP: 6
};
var SCALAR_STYLE = {
  PLAIN: 1,
  SINGLE_QUOTED: 2,
  DOUBLE_QUOTED: 3,
  LITERAL_BLOCK: 4,
  FOLDED_BLOCK: 5
};
var COLLECTION_STYLE = {
  BLOCK: 1,
  FLOW: 2
};
var CHOMPING_MODE = {
  CLIP: 1,
  STRIP: 2,
  KEEP: 3
};
var NO_RANGE$3 = -1;
function simpleEscapeSequence(c2) {
  switch (c2) {
    case 48:
      return "\0";
    case 97:
      return "\x07";
    case 98:
      return "\b";
    case 116:
      return "	";
    case 9:
      return "	";
    case 110:
      return "\n";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 114:
      return "\r";
    case 101:
      return "\x1B";
    case 32:
      return " ";
    case 34:
      return '"';
    case 47:
      return "/";
    case 92:
      return "\\";
    case 78:
      return "\x85";
    case 95:
      return "\xA0";
    case 76:
      return "\u2028";
    case 80:
      return "\u2029";
    default:
      return "";
  }
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (let i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function charFromCodepoint(c2) {
  if (c2 <= 65535) return String.fromCharCode(c2);
  return String.fromCharCode((c2 - 65536 >> 10) + 55296, (c2 - 65536 & 1023) + 56320);
}
function fromHexCode$1(c2) {
  if (c2 >= 48 && c2 <= 57) return c2 - 48;
  return (c2 | 32) - 97 + 10;
}
function escapedHexLen$1(c2) {
  if (c2 === 120) return 2;
  if (c2 === 117) return 4;
  return 8;
}
function skipFoldedBreaks(input, position, end) {
  let breaks = 0;
  while (position < end) {
    const ch = input.charCodeAt(position);
    if (ch === 10) {
      breaks++;
      position++;
    } else if (ch === 13) {
      breaks++;
      position++;
      if (input.charCodeAt(position) === 10) position++;
    } else if (ch === 32 || ch === 9) position++;
    else break;
  }
  return {
    position,
    breaks
  };
}
function foldedBreaks(count) {
  if (count === 1) return " ";
  return "\n".repeat(count - 1);
}
function getPlainValue(input, start, end) {
  let result = "";
  let position = start;
  let captureStart = start;
  let captureEnd = start;
  while (position < end) {
    const ch = input.charCodeAt(position);
    if (ch === 10 || ch === 13) {
      result += input.slice(captureStart, captureEnd);
      const fold = skipFoldedBreaks(input, position, end);
      result += foldedBreaks(fold.breaks);
      position = captureStart = captureEnd = fold.position;
    } else {
      position++;
      if (ch !== 32 && ch !== 9) captureEnd = position;
    }
  }
  return result + input.slice(captureStart, captureEnd);
}
function getSingleQuotedValue(input, start, end) {
  let result = "";
  let position = start;
  let captureStart = start;
  let captureEnd = start;
  while (position < end) {
    const ch = input.charCodeAt(position);
    if (ch === 39) {
      result += input.slice(captureStart, position) + "'";
      position += 2;
      captureStart = captureEnd = position;
    } else if (ch === 10 || ch === 13) {
      result += input.slice(captureStart, captureEnd);
      const fold = skipFoldedBreaks(input, position, end);
      result += foldedBreaks(fold.breaks);
      position = captureStart = captureEnd = fold.position;
    } else {
      position++;
      if (ch !== 32 && ch !== 9) captureEnd = position;
    }
  }
  return result + input.slice(captureStart, end);
}
function getDoubleQuotedValue(input, start, end) {
  let result = "";
  let position = start;
  let captureStart = start;
  let captureEnd = start;
  while (position < end) {
    const ch = input.charCodeAt(position);
    if (ch === 92) {
      result += input.slice(captureStart, position);
      position++;
      const escaped = input.charCodeAt(position);
      if (escaped === 10 || escaped === 13) position = skipFoldedBreaks(input, position, end).position;
      else if (escaped < 256 && simpleEscapeCheck[escaped]) {
        result += simpleEscapeMap[escaped];
        position++;
      } else {
        let hexLength = escapedHexLen$1(escaped);
        let hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          position++;
          const digit = fromHexCode$1(input.charCodeAt(position));
          hexResult = (hexResult << 4) + digit;
        }
        result += charFromCodepoint(hexResult);
        position++;
      }
      captureStart = captureEnd = position;
    } else if (ch === 10 || ch === 13) {
      result += input.slice(captureStart, captureEnd);
      const fold = skipFoldedBreaks(input, position, end);
      result += foldedBreaks(fold.breaks);
      position = captureStart = captureEnd = fold.position;
    } else {
      position++;
      if (ch !== 32 && ch !== 9) captureEnd = position;
    }
  }
  return result + input.slice(captureStart, end);
}
function getBlockValue(input, start, end, indent, chomping, folded) {
  const textIndent = indent < 0 ? 0 : indent;
  const region = input.slice(start, end).replace(/\r\n?/g, "\n");
  const lines = region === "" ? [] : (region.endsWith("\n") ? region.slice(0, -1) : region).split("\n");
  let result = "";
  let didReadContent = false;
  let emptyLines = 0;
  let atMoreIndented = false;
  for (const line of lines) {
    let column = 0;
    while (column < textIndent && line.charCodeAt(column) === 32) column++;
    if (indent < 0 || column >= line.length) {
      emptyLines++;
      continue;
    }
    const content = line.slice(textIndent);
    const first = content.charCodeAt(0);
    if (folded) {
      if (first === 32 || first === 9) {
        atMoreIndented = true;
        result += "\n".repeat(didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        result += "\n".repeat(emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) result += " ";
      } else result += "\n".repeat(emptyLines);
    } else result += "\n".repeat(didReadContent ? 1 + emptyLines : emptyLines);
    result += content;
    didReadContent = true;
    emptyLines = 0;
  }
  if (chomping === CHOMPING_MODE.KEEP) result += "\n".repeat(didReadContent ? 1 + emptyLines : emptyLines);
  else if (chomping !== CHOMPING_MODE.STRIP) {
    if (didReadContent) result += "\n";
  }
  return result;
}
function getScalarValue(input, scalar) {
  if (scalar.valueStart === NO_RANGE$3) return "";
  const { valueStart, valueEnd } = scalar;
  if (scalar.fast) return input.slice(valueStart, valueEnd);
  switch (scalar.style) {
    case SCALAR_STYLE.SINGLE_QUOTED:
      return getSingleQuotedValue(input, valueStart, valueEnd);
    case SCALAR_STYLE.DOUBLE_QUOTED:
      return getDoubleQuotedValue(input, valueStart, valueEnd);
    case SCALAR_STYLE.LITERAL_BLOCK:
      return getBlockValue(input, valueStart, valueEnd, scalar.indent, scalar.chomping, false);
    case SCALAR_STYLE.FOLDED_BLOCK:
      return getBlockValue(input, valueStart, valueEnd, scalar.indent, scalar.chomping, true);
    default:
      return getPlainValue(input, valueStart, valueEnd);
  }
}
var DEFAULT_TAG_HANDLERS = Object.assign(/* @__PURE__ */ Object.create(null), {
  "!": "!",
  "!!": "tag:yaml.org,2002:"
});
var TAG_SUFFIX_CHARS = "-#;/?:@&=+$_.~*'()";
var TAG_URI_CHARS = TAG_SUFFIX_CHARS + "!,[]";
function tagPercentDecode(source) {
  let result = "";
  let index = 0;
  while (index < source.length) {
    if (source.charCodeAt(index) !== 37) {
      result += source[index++];
      continue;
    }
    let ch = parseInt(source.slice(index + 1, index + 3), 16);
    index += 3;
    if (ch >= 192) {
      let remaining = ch < 224 ? 1 : ch < 240 ? 2 : 3;
      ch &= (1 << 6 - remaining) - 1;
      while (remaining-- > 0) {
        ch = ch << 6 | parseInt(source.slice(index + 1, index + 3), 16) & 63;
        index += 3;
      }
    }
    if (ch < 65536) result += String.fromCharCode(ch);
    else {
      ch -= 65536;
      result += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
    }
  }
  return result;
}
function tagNameFull(rawTag, tagHandlers) {
  if (rawTag.startsWith("!<") && rawTag.endsWith(">")) return tagPercentDecode(rawTag.slice(2, -1));
  const handleEnd = rawTag.indexOf("!", 1);
  const handle = handleEnd === -1 ? "!" : rawTag.slice(0, handleEnd + 1);
  return tagPercentDecode(tagHandlers?.[handle] ?? DEFAULT_TAG_HANDLERS[handle] ?? handle) + tagPercentDecode(rawTag.slice(handle.length));
}
var NO_RANGE$2 = -1;
var MERGE_TAG_NAME = "tag:yaml.org,2002:merge";
var DEFAULT_CONSTRUCTOR_OPTIONS = {
  filename: "",
  schema: CORE_SCHEMA,
  json: false,
  maxTotalMergeKeys: 1e4,
  maxAliases: -1
};
function eventPosition$1(event) {
  if ("tagStart" in event && event.tagStart !== NO_RANGE$2) return event.tagStart;
  if ("anchorStart" in event && event.anchorStart !== NO_RANGE$2) return event.anchorStart;
  if ("valueStart" in event && event.valueStart !== NO_RANGE$2) return event.valueStart;
  if ("start" in event) return event.start;
  return 0;
}
function throwError$1(state, message) {
  YAMLException.throwAt(state.source, state.position, message, state.filename);
}
function finalizeCollection(state, position, tag, carrier) {
  try {
    return tag.finalize(carrier);
  } catch (error) {
    if (error instanceof YAMLException) throw error;
    YAMLException.throwAt(state.source, position, error instanceof Error ? error.message : String(error), state.filename);
  }
}
function constructScalar(state, event) {
  const source = getScalarValue(state.source, event);
  const rawTag = event.tagStart === NO_RANGE$2 ? "" : state.source.slice(event.tagStart, event.tagEnd);
  const strTag2 = state.schema.defaultScalarTag;
  if (rawTag !== "") {
    if (rawTag === "!") return {
      value: source,
      tag: strTag2
    };
    const tagName = tagNameFull(rawTag, state.tagHandlers);
    const scalarTag = state.schema.lookupScalarTag(tagName);
    if (scalarTag) {
      const result = scalarTag.resolve(source, true, tagName);
      if (result === NOT_RESOLVED) throwError$1(state, `cannot resolve a node with !<${tagName}> explicit tag`);
      return {
        value: result,
        tag: scalarTag
      };
    }
    const collectionTagDef = state.schema.lookupMappingTag(tagName) ?? state.schema.lookupSequenceTag(tagName);
    if (collectionTagDef) {
      if (source !== "") throwError$1(state, `cannot resolve a node with !<${tagName}> explicit tag`);
      const carrier = collectionTagDef.create(tagName);
      return {
        value: collectionTagDef.carrierIsResult ? carrier : finalizeCollection(state, state.position, collectionTagDef, carrier),
        tag: collectionTagDef
      };
    }
    throwError$1(state, `unknown scalar tag !<${tagName}>`);
  }
  if (event.style === SCALAR_STYLE.PLAIN) return state.schema.resolveImplicitScalarTag(source);
  return {
    value: strTag2.resolve(source, false, strTag2.tagName),
    tag: strTag2
  };
}
function collectionTagName(state, event, defaultTagName) {
  const rawTag = event.tagStart === NO_RANGE$2 ? "" : state.source.slice(event.tagStart, event.tagEnd);
  return rawTag === "" || rawTag === "!" ? defaultTagName : tagNameFull(rawTag, state.tagHandlers);
}
function isMappingTag(tag) {
  return tag.nodeKind === "mapping";
}
function chargeMergeWork(state) {
  state.totalMergeKeys++;
  if (state.maxTotalMergeKeys !== -1 && state.totalMergeKeys > state.maxTotalMergeKeys) throwError$1(state, `merge keys exceeded maxTotalMergeKeys (${state.maxTotalMergeKeys})`);
}
function mergeKeys(state, frame, source, sourceTag) {
  chargeMergeWork(state);
  for (const sourceKey of sourceTag.keys(source)) {
    chargeMergeWork(state);
    if (frame.tag.has(frame.value, sourceKey)) continue;
    const err = frame.tag.addPair(frame.value, sourceKey, sourceTag.get(source, sourceKey));
    if (err) throwError$1(state, err);
    frame.overridable ??= /* @__PURE__ */ new Set();
    frame.overridable.add(sourceKey);
  }
}
function mergeSource(state, frame, source, sourceTag) {
  state.position = frame.keyPosition;
  if (isMappingTag(sourceTag)) mergeKeys(state, frame, source, sourceTag);
  else if (sourceTag.nodeKind === "sequence" && Array.isArray(source)) {
    if (source.length > 100) throwError$1(state, "abnormal merge sequence size");
    for (const element of source) {
      const elementTag = state.nodeTags.get(element);
      if (!elementTag) throwError$1(state, "cannot merge mappings; the provided source object is unacceptable");
      mergeKeys(state, frame, element, elementTag);
    }
  } else throwError$1(state, "cannot merge mappings; the provided source object is unacceptable");
}
function addMappingValue(state, frame, key, value, tag) {
  state.position = frame.keyPosition;
  if (frame.keyIsMerge) {
    mergeSource(state, frame, value, tag);
    return;
  }
  if (!state.json && frame.tag.has(frame.value, key) && !frame.overridable?.has(key)) throwError$1(state, "duplicated mapping key");
  const err = frame.tag.addPair(frame.value, key, value);
  if (err) throwError$1(state, err);
  frame.overridable?.delete(key);
}
function addValue(state, value, tag) {
  const frame = state.frames[state.frames.length - 1];
  if (frame.kind === "document") {
    frame.value = value;
    frame.hasValue = true;
  } else if (frame.kind === "sequence") {
    if (isMappingTag(tag)) state.nodeTags.set(value, tag);
    const err = frame.tag.addItem(frame.value, value, frame.index++);
    if (err) throwError$1(state, err);
  } else if (frame.hasKey) {
    const key = frame.key;
    frame.key = void 0;
    frame.hasKey = false;
    addMappingValue(state, frame, key, value, tag);
  } else {
    frame.key = value;
    frame.keyPosition = state.position;
    frame.hasKey = true;
    frame.keyIsMerge = tag.tagName === MERGE_TAG_NAME;
  }
}
function storeAnchor(state, event, value, tag, isValueFinal) {
  if (event.anchorStart !== NO_RANGE$2) {
    const anchor = {
      value,
      tag,
      isValueFinal
    };
    state.anchors.set(state.source.slice(event.anchorStart, event.anchorEnd), anchor);
    return anchor;
  }
  return null;
}
function constructFromEvents(events, options) {
  const state = {
    ...DEFAULT_CONSTRUCTOR_OPTIONS,
    ...options,
    events,
    documents: [],
    eventIndex: 0,
    position: 0,
    frames: [],
    anchors: /* @__PURE__ */ new Map(),
    nodeTags: /* @__PURE__ */ new Map(),
    tagHandlers: /* @__PURE__ */ Object.create(null),
    totalMergeKeys: 0,
    aliasCount: 0
  };
  while (state.eventIndex < state.events.length) {
    const event = state.events[state.eventIndex++];
    state.position = eventPosition$1(event);
    switch (event.type) {
      case EVENT_ID.DOCUMENT:
        state.anchors = /* @__PURE__ */ new Map();
        state.nodeTags = /* @__PURE__ */ new Map();
        state.aliasCount = 0;
        state.tagHandlers = /* @__PURE__ */ Object.create(null);
        for (const directive of event.directives) if (directive.kind === "tag") state.tagHandlers[directive.handle] = directive.prefix;
        state.frames.push({
          kind: "document",
          position: state.position,
          value: void 0,
          hasValue: false
        });
        break;
      case EVENT_ID.SCALAR: {
        const { value, tag } = constructScalar(state, event);
        storeAnchor(state, event, value, tag, true);
        addValue(state, value, tag);
        break;
      }
      case EVENT_ID.SEQUENCE: {
        const tagName = collectionTagName(state, event, "tag:yaml.org,2002:seq");
        const tag = state.schema.lookupSequenceTag(tagName);
        if (!tag) throwError$1(state, `unknown sequence tag !<${tagName}>`);
        const value = tag.create(tagName);
        const anchor = storeAnchor(state, event, value, tag, tag.carrierIsResult);
        state.frames.push({
          kind: "sequence",
          position: state.position,
          value,
          tag,
          anchor,
          index: 0
        });
        break;
      }
      case EVENT_ID.MAPPING: {
        const tagName = collectionTagName(state, event, "tag:yaml.org,2002:map");
        const tag = state.schema.lookupMappingTag(tagName);
        if (!tag) throwError$1(state, `unknown mapping tag !<${tagName}>`);
        const value = tag.create(tagName);
        const anchor = storeAnchor(state, event, value, tag, tag.carrierIsResult);
        state.frames.push({
          kind: "mapping",
          position: state.position,
          value,
          tag,
          anchor,
          key: void 0,
          keyPosition: state.position,
          hasKey: false,
          keyIsMerge: false,
          overridable: null
        });
        break;
      }
      case EVENT_ID.ALIAS: {
        if (state.maxAliases !== -1 && ++state.aliasCount > state.maxAliases) throwError$1(state, `aliases exceeded maxAliases (${state.maxAliases})`);
        const name = state.source.slice(event.anchorStart, event.anchorEnd);
        const anchor = state.anchors.get(name);
        if (!anchor) throwError$1(state, `unidentified alias "${name}"`);
        if (!anchor.isValueFinal) throwError$1(state, `recursive alias "${name}" is not supported for tag ${anchor.tag.tagName} because it uses finalize()`);
        addValue(state, anchor.value, anchor.tag);
        break;
      }
      case EVENT_ID.POP: {
        const frame = state.frames.pop();
        if (frame.kind === "mapping" && frame.hasKey) {
          state.position = frame.keyPosition;
          throwError$1(state, "incomplete mapping pair in event stream");
        }
        if (frame.kind === "document") state.documents.push(frame.value);
        else {
          const value = frame.tag.carrierIsResult ? frame.value : finalizeCollection(state, frame.position, frame.tag, frame.value);
          if (frame.anchor) {
            frame.anchor.value = value;
            frame.anchor.isValueFinal = true;
          }
          addValue(state, value, frame.tag);
        }
        break;
      }
    }
  }
  return state.documents;
}
var NO_RANGE$1 = -1;
var HAS_OWN = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]{}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![0-9A-Za-z-]+!)$/;
var NS_URI_CHAR = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`;
var NS_TAG_CHAR = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`;
var PATTERN_TAG_URI = new RegExp(`^(?:${NS_URI_CHAR})*$`);
var PATTERN_TAG_SUFFIX = new RegExp(`^(?:${NS_TAG_CHAR})+$`);
var PATTERN_TAG_PREFIX = new RegExp(`^(?:!(?:${NS_URI_CHAR})*|${NS_TAG_CHAR}(?:${NS_URI_CHAR})*)$`);
var DEFAULT_PARSER_OPTIONS = {
  filename: "",
  maxDepth: 100
};
function addDocumentEvent(state, explicitStart, explicitEnd) {
  state.events.push({
    type: EVENT_ID.DOCUMENT,
    explicitStart,
    explicitEnd,
    directives: state.directives
  });
}
function addSequenceEvent(state, start, anchorStart, anchorEnd, tagStart, tagEnd, style) {
  state.events.push({
    type: EVENT_ID.SEQUENCE,
    start,
    anchorStart,
    anchorEnd,
    tagStart,
    tagEnd,
    style
  });
}
function addMappingEvent(state, start, anchorStart, anchorEnd, tagStart, tagEnd, style) {
  state.events.push({
    type: EVENT_ID.MAPPING,
    start,
    anchorStart,
    anchorEnd,
    tagStart,
    tagEnd,
    style
  });
}
function insertFlowPairMappingEvent(state, snapshot) {
  state.events.splice(snapshot.eventsLength, 0, {
    type: EVENT_ID.MAPPING,
    start: snapshot.position,
    anchorStart: NO_RANGE$1,
    anchorEnd: NO_RANGE$1,
    tagStart: NO_RANGE$1,
    tagEnd: NO_RANGE$1,
    style: COLLECTION_STYLE.FLOW
  });
}
function addScalarEvent(state, valueStart, valueEnd, anchorStart, anchorEnd, tagStart, tagEnd, style, chomping = CHOMPING_MODE.CLIP, indent = -1, fast = false) {
  state.events.push({
    type: EVENT_ID.SCALAR,
    valueStart,
    valueEnd,
    anchorStart,
    anchorEnd,
    tagStart,
    tagEnd,
    style,
    chomping,
    indent,
    fast
  });
}
function addAliasEvent(state, anchorStart, anchorEnd) {
  state.events.push({
    type: EVENT_ID.ALIAS,
    anchorStart,
    anchorEnd
  });
}
function addPopEvent(state) {
  state.events.push({ type: EVENT_ID.POP });
}
function addEmptyScalarEvent(state) {
  addScalarEvent(state, NO_RANGE$1, NO_RANGE$1, NO_RANGE$1, NO_RANGE$1, NO_RANGE$1, NO_RANGE$1, SCALAR_STYLE.PLAIN);
}
function emptyProperties() {
  return {
    anchorStart: NO_RANGE$1,
    anchorEnd: NO_RANGE$1,
    tagStart: NO_RANGE$1,
    tagEnd: NO_RANGE$1
  };
}
function snapshotState(state) {
  return {
    position: state.position,
    line: state.line,
    lineStart: state.lineStart,
    lineIndent: state.lineIndent,
    firstTabInLine: state.firstTabInLine,
    eventsLength: state.events.length
  };
}
function restoreState(state, snapshot) {
  state.position = snapshot.position;
  state.line = snapshot.line;
  state.lineStart = snapshot.lineStart;
  state.lineIndent = snapshot.lineIndent;
  state.firstTabInLine = snapshot.firstTabInLine;
  state.events.length = snapshot.eventsLength;
}
function throwError(state, message) {
  YAMLException.throwAt(state.input.slice(0, state.length), state.position, message, state.filename);
}
function isEol(c2) {
  return c2 === 10 || c2 === 13;
}
function isWhiteSpace(c2) {
  return c2 === 9 || c2 === 32;
}
function isWsOrEol(c2) {
  return isWhiteSpace(c2) || isEol(c2);
}
function isWsOrEolOrEnd(c2) {
  return c2 === 0 || isWsOrEol(c2);
}
function isFlowIndicator(c2) {
  return c2 === 44 || c2 === 91 || c2 === 93 || c2 === 123 || c2 === 125;
}
function fromDecimalCode(c2) {
  return c2 >= 48 && c2 <= 57 ? c2 - 48 : -1;
}
function fromHexCode(c2) {
  if (c2 >= 48 && c2 <= 57) return c2 - 48;
  const lc = c2 | 32;
  if (lc >= 97 && lc <= 102) return lc - 97 + 10;
  return -1;
}
function escapedHexLen(c2) {
  if (c2 === 120) return 2;
  if (c2 === 117) return 4;
  if (c2 === 85) return 8;
  return 0;
}
function isSimpleEscape(c2) {
  return c2 === 48 || c2 === 97 || c2 === 98 || c2 === 116 || c2 === 9 || c2 === 110 || c2 === 118 || c2 === 102 || c2 === 114 || c2 === 101 || c2 === 32 || c2 === 34 || c2 === 47 || c2 === 92 || c2 === 78 || c2 === 95 || c2 === 76 || c2 === 80;
}
function consumeLineBreak(state) {
  if (state.input.charCodeAt(state.position) === 10) state.position++;
  else {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) state.position++;
  }
  state.line++;
  state.lineStart = state.position;
  state.lineIndent = 0;
  state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments) {
  let lineBreaks = 0;
  let ch = state.input.charCodeAt(state.position);
  let hasSeparation = state.position === state.lineStart || isWsOrEol(state.input.charCodeAt(state.position - 1));
  while (ch !== 0) {
    while (isWhiteSpace(ch)) {
      hasSeparation = true;
      if (ch === 9 && state.firstTabInLine === -1) state.firstTabInLine = state.position;
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && hasSeparation && ch === 35) do
      ch = state.input.charCodeAt(++state.position);
    while (!isEol(ch) && ch !== 0);
    if (!isEol(ch)) break;
    consumeLineBreak(state);
    lineBreaks++;
    hasSeparation = true;
    ch = state.input.charCodeAt(state.position);
    while (ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
  }
  return lineBreaks;
}
function testDocumentSeparator(state, position = state.position) {
  const ch = state.input.charCodeAt(position);
  if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(position + 1) && ch === state.input.charCodeAt(position + 2)) {
    const following = state.input.charCodeAt(position + 3);
    return following === 0 || isWsOrEol(following);
  }
  return false;
}
function skipByteOrderMark(state) {
  if (state.position === state.lineStart && state.input.charCodeAt(state.position) === 65279) {
    state.position++;
    state.lineStart = state.position;
  }
}
function testDocumentBoundary(state) {
  if (state.position !== state.lineStart) return false;
  if (testDocumentSeparator(state)) return true;
  if (state.input.charCodeAt(state.position) !== 65279) return false;
  const snapshot = snapshotState(state);
  skipByteOrderMark(state);
  skipSeparationSpace(state, true);
  const ch = state.input.charCodeAt(state.position);
  const result = state.position === state.lineStart && (ch === 37 || ch === 45 && testDocumentSeparator(state));
  restoreState(state, snapshot);
  return result;
}
function skipUntilLineEnd(state) {
  let ch = state.input.charCodeAt(state.position);
  while (ch !== 0 && !isEol(ch)) ch = state.input.charCodeAt(++state.position);
}
function checkPrintable(state, start, end) {
  const match = PATTERN_NON_PRINTABLE.exec(state.input.slice(start, end));
  if (match !== null) {
    state.position = start + match.index + match[0].length - 1;
    throwError(state, "the stream contains non-printable characters");
  }
}
function readTagProperty(state, props, inFlow) {
  if (state.input.charCodeAt(state.position) !== 33) return false;
  if (props.tagStart !== NO_RANGE$1) throwError(state, "duplication of a tag property");
  const start = state.position;
  let isVerbatim = false;
  let isNamed = false;
  let tagHandle = "!";
  let ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  }
  let suffixStart = state.position;
  let tagName;
  if (isVerbatim) {
    while (ch !== 0 && ch !== 62) ch = state.input.charCodeAt(++state.position);
    if (ch !== 62) throwError(state, "unexpected end of the stream within a verbatim tag");
    tagName = state.input.slice(suffixStart, state.position);
    state.position++;
  } else {
    while (ch !== 0 && !isWsOrEol(ch) && !(inFlow && isFlowIndicator(ch))) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(suffixStart - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) throwError(state, "named tag handle cannot contain such characters");
          isNamed = true;
          suffixStart = state.position + 1;
        } else throwError(state, "tag suffix cannot contain exclamation marks");
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(suffixStart, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) throwError(state, "tag suffix cannot contain flow indicator characters");
  }
  if (tagName && !(isVerbatim ? PATTERN_TAG_URI.test(tagName) : PATTERN_TAG_SUFFIX.test(tagName))) throwError(state, `tag name cannot contain such characters: ${tagName}`);
  if (!isVerbatim && tagHandle !== "!" && tagHandle !== "!!" && !HAS_OWN.call(state.tagHandlers, tagHandle)) throwError(state, `undeclared tag handle "${tagHandle}"`);
  props.tagStart = start;
  props.tagEnd = state.position;
  return true;
}
function readAnchorProperty(state, props) {
  if (state.input.charCodeAt(state.position) !== 38) return false;
  if (props.anchorStart !== NO_RANGE$1) throwError(state, "duplication of an anchor property");
  state.position++;
  const start = state.position;
  while (state.input.charCodeAt(state.position) !== 0 && !isWsOrEol(state.input.charCodeAt(state.position)) && !isFlowIndicator(state.input.charCodeAt(state.position))) state.position++;
  if (state.position === start) throwError(state, "name of an anchor node must contain at least one character");
  props.anchorStart = start;
  props.anchorEnd = state.position;
  return true;
}
function readAlias(state, props) {
  if (state.input.charCodeAt(state.position) !== 42) return false;
  if (props.anchorStart !== NO_RANGE$1 || props.tagStart !== NO_RANGE$1) throwError(state, "alias node should not have any properties");
  state.position++;
  const start = state.position;
  while (state.input.charCodeAt(state.position) !== 0 && !isWsOrEol(state.input.charCodeAt(state.position)) && !isFlowIndicator(state.input.charCodeAt(state.position))) state.position++;
  if (state.position === start) throwError(state, "name of an alias node must contain at least one character");
  addAliasEvent(state, start, state.position);
  return true;
}
function readFlowScalarBreak(state, nodeIndent) {
  skipSeparationSpace(state, false);
  if (state.lineIndent < nodeIndent) throwError(state, "deficient indentation");
}
function readSingleQuotedScalar(state, nodeIndent, props) {
  if (state.input.charCodeAt(state.position) !== 39) return false;
  state.position++;
  const start = state.position;
  let simple = true;
  while (state.input.charCodeAt(state.position) !== 0) {
    const ch = state.input.charCodeAt(state.position);
    if (ch === 39) {
      if (state.input.charCodeAt(state.position + 1) === 39) {
        simple = false;
        state.position += 2;
        continue;
      }
      const end = state.position;
      state.position++;
      addScalarEvent(state, start, end, props.anchorStart, props.anchorEnd, props.tagStart, props.tagEnd, SCALAR_STYLE.SINGLE_QUOTED, CHOMPING_MODE.CLIP, -1, simple);
      return true;
    }
    if (isEol(ch)) {
      simple = false;
      readFlowScalarBreak(state, nodeIndent);
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) throwError(state, "unexpected end of the document within a single quoted scalar");
    else if (ch !== 9 && ch < 32) throwError(state, "expected valid JSON character");
    else state.position++;
  }
  throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent, props) {
  if (state.input.charCodeAt(state.position) !== 34) return false;
  state.position++;
  const start = state.position;
  let simple = true;
  while (state.input.charCodeAt(state.position) !== 0) {
    const ch = state.input.charCodeAt(state.position);
    if (ch === 34) {
      const end = state.position;
      state.position++;
      addScalarEvent(state, start, end, props.anchorStart, props.anchorEnd, props.tagStart, props.tagEnd, SCALAR_STYLE.DOUBLE_QUOTED, CHOMPING_MODE.CLIP, -1, simple);
      return true;
    }
    if (ch === 92) {
      simple = false;
      const escaped = state.input.charCodeAt(++state.position);
      if (isEol(escaped)) readFlowScalarBreak(state, nodeIndent);
      else if (isSimpleEscape(escaped)) state.position++;
      else {
        let hexLength = escapedHexLen(escaped);
        if (hexLength === 0) throwError(state, "unknown escape sequence");
        while (hexLength-- > 0) {
          state.position++;
          if (fromHexCode(state.input.charCodeAt(state.position)) < 0) throwError(state, "expected hexadecimal character");
        }
        state.position++;
      }
    } else if (isEol(ch)) {
      simple = false;
      readFlowScalarBreak(state, nodeIndent);
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) throwError(state, "unexpected end of the document within a double quoted scalar");
    else if (ch !== 9 && ch < 32) throwError(state, "expected valid JSON character");
    else state.position++;
  }
  throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readBlockScalar(state, parentIndent, props) {
  const ch = state.input.charCodeAt(state.position);
  let chomping = CHOMPING_MODE.CLIP;
  let indent = -1;
  let detectedIndent = false;
  if (ch !== 124 && ch !== 62) return false;
  const style = ch === 124 ? SCALAR_STYLE.LITERAL_BLOCK : SCALAR_STYLE.FOLDED_BLOCK;
  state.position++;
  while (state.input.charCodeAt(state.position) !== 0) {
    const current = state.input.charCodeAt(state.position);
    const digit = fromDecimalCode(current);
    if (current === 43 || current === 45) {
      if (chomping !== CHOMPING_MODE.CLIP) throwError(state, "repeat of a chomping mode identifier");
      chomping = current === 43 ? CHOMPING_MODE.KEEP : CHOMPING_MODE.STRIP;
      state.position++;
    } else if (digit >= 0) {
      if (digit === 0) throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
      if (detectedIndent) throwError(state, "repeat of an indentation width identifier");
      indent = parentIndent + digit - 1;
      detectedIndent = true;
      state.position++;
    } else break;
  }
  let hadWhitespace = false;
  while (isWhiteSpace(state.input.charCodeAt(state.position))) {
    hadWhitespace = true;
    state.position++;
  }
  if (hadWhitespace && state.input.charCodeAt(state.position) === 35) skipUntilLineEnd(state);
  if (isEol(state.input.charCodeAt(state.position))) consumeLineBreak(state);
  else if (state.input.charCodeAt(state.position) !== 0) throwError(state, "a line break is expected");
  let contentIndent = detectedIndent ? indent : -1;
  let maxLeadingIndent = 0;
  const valueStart = state.position;
  let valueEnd = state.position;
  while (state.input.charCodeAt(state.position) !== 0) {
    const linePosition = state.position;
    let column = 0;
    while (state.input.charCodeAt(linePosition + column) === 32) column++;
    const first = state.input.charCodeAt(linePosition + column);
    if (first === 0) {
      if (contentIndent >= 0) {
        if (column > contentIndent) valueEnd = linePosition + column;
      } else if (column > 0) valueEnd = linePosition + column;
      break;
    }
    if (testDocumentBoundary(state)) break;
    if (!detectedIndent && contentIndent === -1 && isEol(first)) maxLeadingIndent = Math.max(maxLeadingIndent, column);
    if (!detectedIndent && contentIndent === -1 && !isEol(first)) {
      if (first === 9 && column < parentIndent) {
        state.position = linePosition + column;
        throwError(state, "tab characters must not be used in indentation");
      }
      if (column >= parentIndent && column < maxLeadingIndent) {
        state.position = linePosition + column;
        throwError(state, "bad indentation of a mapping entry");
      }
    }
    if (contentIndent === -1 && first !== 0 && !isEol(first) && column < parentIndent) {
      state.lineIndent = column;
      state.position = linePosition + column;
      break;
    }
    if (!detectedIndent && first !== 0 && !isEol(first) && contentIndent === -1) contentIndent = column;
    const requiredIndent = contentIndent === -1 ? parentIndent + 1 : contentIndent;
    if (first !== 0 && !isEol(first) && column < requiredIndent) {
      state.lineIndent = column;
      state.position = linePosition + column;
      break;
    }
    skipUntilLineEnd(state);
    valueEnd = state.position;
    if (isEol(state.input.charCodeAt(state.position))) {
      consumeLineBreak(state);
      valueEnd = state.position;
    }
  }
  checkPrintable(state, valueStart, valueEnd);
  addScalarEvent(state, valueStart, valueEnd, props.anchorStart, props.anchorEnd, props.tagStart, props.tagEnd, style, chomping, contentIndent);
  return true;
}
function canStartPlainScalar(state, nodeContext) {
  const ch = state.input.charCodeAt(state.position);
  const inFlow = nodeContext === CONTEXT_FLOW_IN;
  if (ch === 0 || isWsOrEol(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96 || isFlowIndicator(ch)) return false;
  if (ch === 63 || ch === 45) {
    const following = state.input.charCodeAt(state.position + 1);
    if (isWsOrEolOrEnd(following) || inFlow && isFlowIndicator(following)) return false;
  }
  return true;
}
function readPlainScalar(state, nodeIndent, nodeContext, props) {
  if (!canStartPlainScalar(state, nodeContext)) return false;
  const start = state.position;
  let end = state.position;
  let ch = state.input.charCodeAt(state.position);
  const inFlow = nodeContext === CONTEXT_FLOW_IN;
  let multiline = false;
  while (ch !== 0) {
    if (testDocumentBoundary(state)) break;
    if (ch === 58) {
      const following = state.input.charCodeAt(state.position + 1);
      if (isWsOrEolOrEnd(following) || inFlow && isFlowIndicator(following)) break;
    } else if (ch === 35) {
      if (isWsOrEol(state.input.charCodeAt(state.position - 1))) break;
    } else if (inFlow && isFlowIndicator(ch)) break;
    else if (isEol(ch)) {
      const savedPosition = state.position;
      const savedLine = state.line;
      const savedLineStart = state.lineStart;
      const savedLineIndent = state.lineIndent;
      skipSeparationSpace(state, false);
      if (state.lineIndent >= nodeIndent) {
        multiline = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      }
      state.position = savedPosition;
      state.line = savedLine;
      state.lineStart = savedLineStart;
      state.lineIndent = savedLineIndent;
      break;
    }
    if (!isWhiteSpace(ch)) end = state.position + 1;
    ch = state.input.charCodeAt(++state.position);
  }
  if (end === start) return false;
  checkPrintable(state, start, end);
  addScalarEvent(state, start, end, props.anchorStart, props.anchorEnd, props.tagStart, props.tagEnd, SCALAR_STYLE.PLAIN, CHOMPING_MODE.CLIP, -1, !multiline);
  return true;
}
function skipFlowSeparationSpace(state, nodeIndent) {
  const startLine = state.line;
  skipSeparationSpace(state, true);
  if (state.line > startLine && state.lineIndent < nodeIndent || state.firstTabInLine !== -1 && state.lineIndent < nodeIndent) throwError(state, "deficient indentation");
}
function readFlowCollection(state, nodeIndent, props) {
  const ch = state.input.charCodeAt(state.position);
  const isMapping = ch === 123;
  const start = state.position;
  let readNext = true;
  if (ch !== 91 && ch !== 123) return false;
  const terminator = isMapping ? 125 : 93;
  if (isMapping) addMappingEvent(state, start, props.anchorStart, props.anchorEnd, props.tagStart, props.tagEnd, COLLECTION_STYLE.FLOW);
  else addSequenceEvent(state, start, props.anchorStart, props.anchorEnd, props.tagStart, props.tagEnd, COLLECTION_STYLE.FLOW);
  state.position++;
  while (state.input.charCodeAt(state.position) !== 0) {
    skipFlowSeparationSpace(state, nodeIndent);
    let ch2 = state.input.charCodeAt(state.position);
    if (ch2 === terminator) {
      state.position++;
      addPopEvent(state);
      return true;
    } else if (!readNext) throwError(state, "missed comma between flow collection entries");
    else if (ch2 === 44) throwError(state, "expected the node content, but found ','");
    let isPair = false;
    let isExplicitPair = false;
    if (ch2 === 63 && isWsOrEol(state.input.charCodeAt(state.position + 1))) {
      isPair = isExplicitPair = true;
      state.position += 1;
      skipFlowSeparationSpace(state, nodeIndent);
    }
    const entryLine = state.line;
    const entryStart = snapshotState(state);
    const keyWasRead = parseNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    skipFlowSeparationSpace(state, nodeIndent);
    ch2 = state.input.charCodeAt(state.position);
    if ((isMapping || isExplicitPair || state.line === entryLine) && ch2 === 58) {
      isPair = true;
      state.position++;
      skipFlowSeparationSpace(state, nodeIndent);
      if (!isMapping) {
        insertFlowPairMappingEvent(state, entryStart);
        if (!keyWasRead) addEmptyScalarEvent(state);
      } else if (!keyWasRead) addEmptyScalarEvent(state);
      if (!parseNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true)) addEmptyScalarEvent(state);
      skipFlowSeparationSpace(state, nodeIndent);
      if (!isMapping) addPopEvent(state);
    } else if (isMapping && isPair) {
      if (!keyWasRead) addEmptyScalarEvent(state);
      addEmptyScalarEvent(state);
    } else if (isMapping) addEmptyScalarEvent(state);
    else if (isPair) {
      insertFlowPairMappingEvent(state, entryStart);
      if (!keyWasRead) addEmptyScalarEvent(state);
      addEmptyScalarEvent(state);
      addPopEvent(state);
    }
    ch2 = state.input.charCodeAt(state.position);
    if (ch2 === 44) {
      readNext = true;
      state.position++;
    } else readNext = false;
  }
  throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockSequence(state, nodeIndent, props) {
  if (state.firstTabInLine !== -1 || state.input.charCodeAt(state.position) !== 45 || !isWsOrEolOrEnd(state.input.charCodeAt(state.position + 1))) return false;
  addSequenceEvent(state, state.position, props.anchorStart, props.anchorEnd, props.tagStart, props.tagEnd, COLLECTION_STYLE.BLOCK);
  while (state.input.charCodeAt(state.position) === 45 && isWsOrEolOrEnd(state.input.charCodeAt(state.position + 1))) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    const entryLine = state.line;
    state.position++;
    const hadBreak = skipSeparationSpace(state, true) > 0;
    if (state.firstTabInLine !== -1 && state.input.charCodeAt(state.position) === 45 && isWsOrEolOrEnd(state.input.charCodeAt(state.position + 1))) throwError(state, "bad indentation of a sequence entry");
    if (hadBreak && state.lineIndent <= nodeIndent) addEmptyScalarEvent(state);
    else parseNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    skipSeparationSpace(state, true);
    if (state.lineIndent < nodeIndent || state.position >= state.length) break;
    if (state.lineIndent > nodeIndent) throwError(state, "bad indentation of a sequence entry");
    if (state.line === entryLine && state.input.charCodeAt(state.position) === 45 && isWsOrEolOrEnd(state.input.charCodeAt(state.position + 1))) throwError(state, "bad indentation of a sequence entry");
  }
  addPopEvent(state);
  return true;
}
function readBlockMapping(state, nodeIndent, flowIndent, props) {
  let atExplicitKey = false;
  let detected = false;
  let mappingOpened = false;
  let pendingExplicitKey = false;
  if (state.firstTabInLine !== -1) return false;
  let ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    const following = state.input.charCodeAt(state.position + 1);
    const entryLine = state.line;
    if ((ch === 63 || ch === 58) && isWsOrEolOrEnd(following)) {
      if (!mappingOpened) {
        addMappingEvent(state, state.position, props.anchorStart, props.anchorEnd, props.tagStart, props.tagEnd, COLLECTION_STYLE.BLOCK);
        mappingOpened = true;
      }
      if (ch === 63) {
        if (atExplicitKey) addEmptyScalarEvent(state);
        detected = true;
        atExplicitKey = true;
      } else if (atExplicitKey) atExplicitKey = false;
      else {
        addEmptyScalarEvent(state);
        detected = true;
        atExplicitKey = false;
      }
      state.position += 1;
      pendingExplicitKey = true;
    } else {
      if (atExplicitKey) {
        addEmptyScalarEvent(state);
        atExplicitKey = false;
      }
      const beforeKey = snapshotState(state);
      if (!parseNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) break;
      if (state.line === entryLine) {
        ch = state.input.charCodeAt(state.position);
        while (isWhiteSpace(ch)) ch = state.input.charCodeAt(++state.position);
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!isWsOrEolOrEnd(ch)) throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
          if (!mappingOpened) {
            state.events.splice(beforeKey.eventsLength, 0, {
              type: EVENT_ID.MAPPING,
              start: beforeKey.position,
              anchorStart: props.anchorStart,
              anchorEnd: props.anchorEnd,
              tagStart: props.tagStart,
              tagEnd: props.tagEnd,
              style: COLLECTION_STYLE.BLOCK
            });
            mappingOpened = true;
          }
          detected = true;
          atExplicitKey = false;
          pendingExplicitKey = false;
        } else if (detected) throwError(state, "expected ':' after a mapping key");
        else {
          if (props.anchorStart !== NO_RANGE$1 || props.tagStart !== NO_RANGE$1) {
            restoreState(state, beforeKey);
            return false;
          }
          return true;
        }
      } else if (detected) throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else {
        if (props.anchorStart !== NO_RANGE$1 || props.tagStart !== NO_RANGE$1) {
          restoreState(state, beforeKey);
          return false;
        }
        return true;
      }
    }
    if (parseNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, pendingExplicitKey)) pendingExplicitKey = false;
    if (!atExplicitKey) {
      if (pendingExplicitKey) {
        addEmptyScalarEvent(state);
        pendingExplicitKey = false;
      }
    }
    skipSeparationSpace(state, true);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === entryLine || state.lineIndent > nodeIndent) && ch !== 0) throwError(state, "bad indentation of a mapping entry");
    else if (state.lineIndent < nodeIndent) break;
  }
  if (!detected) return false;
  if (atExplicitKey) addEmptyScalarEvent(state);
  if (mappingOpened) addPopEvent(state);
  return true;
}
function parseNode(state, parentIndent, nodeContext, allowToSeek, allowCompact, allowPropertyMapping = true) {
  if (state.depth >= state.maxDepth) throwError(state, `nesting exceeded maxDepth (${state.maxDepth})`);
  state.depth++;
  let indentStatus = 1;
  let atNewLine = false;
  let hasContent = false;
  let propertyStart = null;
  const props = emptyProperties();
  let allowBlockScalars = nodeContext === CONTEXT_BLOCK_OUT || nodeContext === CONTEXT_BLOCK_IN;
  let allowBlockCollections = allowBlockScalars;
  const allowBlockStyles = allowBlockScalars;
  if (allowToSeek && skipSeparationSpace(state, true)) {
    atNewLine = true;
    if (state.lineIndent > parentIndent) indentStatus = 1;
    else if (state.lineIndent === parentIndent) indentStatus = 0;
    else indentStatus = -1;
  }
  if (indentStatus === 1) while (true) {
    const ch = state.input.charCodeAt(state.position);
    const propertyState = snapshotState(state);
    if (atNewLine && indentStatus !== 1 && (ch === 33 || ch === 38)) break;
    if (atNewLine && allowBlockStyles && (props.tagStart !== NO_RANGE$1 || props.anchorStart !== NO_RANGE$1) && (ch === 33 || ch === 38)) {
      const fallbackState = snapshotState(state);
      const flowIndent = parentIndent + 1;
      if (readBlockMapping(state, state.position - state.lineStart, flowIndent, props) && state.events[fallbackState.eventsLength]?.type === EVENT_ID.MAPPING) {
        state.depth--;
        return true;
      }
      restoreState(state, fallbackState);
    }
    if (atNewLine && (ch === 33 && props.tagStart !== NO_RANGE$1 || ch === 38 && props.anchorStart !== NO_RANGE$1)) break;
    if (!readTagProperty(state, props, nodeContext === CONTEXT_FLOW_IN) && !readAnchorProperty(state, props)) break;
    if (propertyStart === null) propertyStart = propertyState;
    if (skipSeparationSpace(state, true)) {
      atNewLine = true;
      allowBlockCollections = allowBlockStyles;
      if (state.lineIndent > parentIndent) indentStatus = 1;
      else if (state.lineIndent === parentIndent) indentStatus = 0;
      else indentStatus = -1;
    } else allowBlockCollections = false;
  }
  if (allowBlockCollections) allowBlockCollections = atNewLine || allowCompact;
  if (indentStatus === 1 || nodeContext === CONTEXT_BLOCK_OUT) {
    const flowIndent = nodeContext === CONTEXT_FLOW_IN || nodeContext === CONTEXT_FLOW_OUT ? parentIndent : parentIndent + 1;
    const blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent, props) || readBlockMapping(state, blockIndent, flowIndent, props)) || readFlowCollection(state, flowIndent, props)) hasContent = true;
      else {
        const ch = state.input.charCodeAt(state.position);
        if (propertyStart !== null && allowPropertyMapping && allowBlockStyles && !allowBlockCollections && ch !== 124 && ch !== 62) {
          const fallbackState = snapshotState(state);
          const propertyIndent = propertyStart.position - propertyStart.lineStart;
          restoreState(state, propertyStart);
          if (readBlockMapping(state, propertyIndent, flowIndent, emptyProperties()) && state.events[fallbackState.eventsLength]?.type === EVENT_ID.MAPPING) hasContent = true;
          else restoreState(state, fallbackState);
        }
        if (!hasContent && (allowBlockScalars && readBlockScalar(state, flowIndent, props) || readSingleQuotedScalar(state, flowIndent, props) || readDoubleQuotedScalar(state, flowIndent, props) || readAlias(state, props) || readPlainScalar(state, flowIndent, nodeContext, props))) hasContent = true;
      }
    } else if (indentStatus === 0) hasContent = allowBlockCollections && readBlockSequence(state, blockIndent, props);
  }
  allowBlockScalars = allowBlockScalars && !hasContent;
  if (!hasContent && (props.anchorStart !== NO_RANGE$1 || props.tagStart !== NO_RANGE$1 || allowBlockScalars)) {
    addScalarEvent(state, NO_RANGE$1, NO_RANGE$1, props.anchorStart, props.anchorEnd, props.tagStart, props.tagEnd, SCALAR_STYLE.PLAIN);
    hasContent = true;
  }
  state.depth--;
  return hasContent || props.anchorStart !== NO_RANGE$1 || props.tagStart !== NO_RANGE$1;
}
function readDirective(state) {
  if (state.lineIndent > 0 || state.input.charCodeAt(state.position) !== 37) return false;
  state.position++;
  const nameStart = state.position;
  while (state.input.charCodeAt(state.position) !== 0 && !isWsOrEol(state.input.charCodeAt(state.position))) state.position++;
  const name = state.input.slice(nameStart, state.position);
  const args = [];
  if (name.length === 0) throwError(state, "directive name must not be less than one character in length");
  while (state.input.charCodeAt(state.position) !== 0 && !isEol(state.input.charCodeAt(state.position))) {
    while (isWhiteSpace(state.input.charCodeAt(state.position))) state.position++;
    if (state.input.charCodeAt(state.position) === 35 || isEol(state.input.charCodeAt(state.position)) || state.input.charCodeAt(state.position) === 0) break;
    const start = state.position;
    while (state.input.charCodeAt(state.position) !== 0 && !isWsOrEol(state.input.charCodeAt(state.position))) state.position++;
    args.push(state.input.slice(start, state.position));
  }
  if (isEol(state.input.charCodeAt(state.position))) consumeLineBreak(state);
  if (name === "YAML") {
    if (state.directives.some((directive) => directive.kind === "yaml")) throwError(state, "duplication of %YAML directive");
    if (args.length !== 1) throwError(state, "YAML directive accepts exactly one argument");
    const match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) throwError(state, "ill-formed argument of the YAML directive");
    if (parseInt(match[1], 10) !== 1) throwError(state, "unacceptable YAML version of the document");
    state.directives.push({
      kind: "yaml",
      version: args[0]
    });
  } else if (name === "TAG") {
    if (args.length !== 2) throwError(state, "TAG directive accepts exactly two arguments");
    const [handle, prefix] = args;
    if (!PATTERN_TAG_HANDLE.test(handle)) throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
    if (HAS_OWN.call(state.tagHandlers, handle)) throwError(state, `there is a previously declared suffix for "${handle}" tag handle`);
    if (!PATTERN_TAG_PREFIX.test(prefix)) throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
    state.tagHandlers[handle] = prefix;
    state.directives.push({
      kind: "tag",
      handle,
      prefix
    });
  }
  return true;
}
function readDocument(state) {
  state.directives = [];
  state.tagHandlers = /* @__PURE__ */ Object.create(null);
  let hasDirectives = false;
  skipSeparationSpace(state, true);
  while (readDirective(state)) {
    hasDirectives = true;
    skipSeparationSpace(state, true);
  }
  let explicitStart = false;
  let explicitEnd = false;
  let allowCompact = true;
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45 && isWsOrEolOrEnd(state.input.charCodeAt(state.position + 3))) {
    explicitStart = true;
    const markerLine = state.line;
    state.position += 3;
    skipSeparationSpace(state, true);
    allowCompact = state.line > markerLine;
  } else if (hasDirectives) throwError(state, "directives end mark is expected");
  const documentEventIndex = state.events.length;
  if (!explicitStart && state.position === state.lineStart && state.input.charCodeAt(state.position) === 46 && testDocumentSeparator(state)) {
    state.position += 3;
    skipSeparationSpace(state, true);
    return;
  }
  addDocumentEvent(state, explicitStart, false);
  if (!parseNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, allowCompact, allowCompact)) addEmptyScalarEvent(state);
  skipSeparationSpace(state, true);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    explicitEnd = state.input.charCodeAt(state.position) === 46;
    if (explicitEnd) {
      const markerLine = state.line;
      state.position += 3;
      skipSeparationSpace(state, true);
      if (state.line === markerLine && state.position < state.length) throwError(state, "end of the stream or a document separator is expected");
    }
  }
  const documentEvent = state.events[documentEventIndex];
  if (documentEvent?.type === EVENT_ID.DOCUMENT) documentEvent.explicitEnd = explicitEnd;
  addPopEvent(state);
  if (!explicitEnd && state.position < state.length && !testDocumentBoundary(state)) throwError(state, "end of the stream or a document separator is expected");
}
function parseEvents(input, options) {
  const length = input.length;
  const state = {
    ...DEFAULT_PARSER_OPTIONS,
    ...options,
    input: `${input}\0`,
    length,
    position: 0,
    line: 0,
    lineStart: 0,
    lineIndent: 0,
    firstTabInLine: -1,
    depth: 0,
    directives: [],
    tagHandlers: /* @__PURE__ */ Object.create(null),
    events: []
  };
  const nullpos = input.indexOf("\0");
  if (nullpos !== -1) YAMLException.throwAt(input, nullpos, "null byte is not allowed in input", state.filename);
  while (state.position < state.length) {
    skipByteOrderMark(state);
    skipSeparationSpace(state, true);
    if (state.position >= state.length) break;
    const documentStart = state.position;
    readDocument(state);
    if (state.position === documentStart)
      throwError(state, "can not read a document");
  }
  return state.events;
}
var DEFAULT_LOAD_OPTIONS = {
  ...DEFAULT_PARSER_OPTIONS,
  ...DEFAULT_CONSTRUCTOR_OPTIONS
};
function loadDocuments(input, options = {}) {
  const opts = {
    ...DEFAULT_LOAD_OPTIONS,
    ...options
  };
  const source = String(input);
  const PARSER_OPT_KEYS = Object.keys(DEFAULT_PARSER_OPTIONS);
  const CONSTRUCTOR_OPT_KEYS = Object.keys(DEFAULT_CONSTRUCTOR_OPTIONS);
  return constructFromEvents(parseEvents(source, pick(opts, PARSER_OPT_KEYS)), {
    ...pick(opts, CONSTRUCTOR_OPT_KEYS),
    source
  });
}
function load(input, options) {
  const documents = loadDocuments(input, options);
  if (documents.length === 0) throw new YAMLException("expected a document, but the input is empty");
  if (documents.length === 1) return documents[0];
  throw new YAMLException("expected a single document in the stream, but found more");
}
function hasBit(mask, bit) {
  return (mask & 1 << bit) !== 0;
}
var DEFAULT_SCALAR_STYLE_RULES = {
  applyQuoteFlowKeysOption,
  doubleQuoteForInvisibles,
  doubleQuoteWhitespaceOnly,
  applyForceQuotesOption,
  tryLongOrMultilineAsBlock,
  quoteInvalidPlain,
  fallbackToDoubleQuoted
};
function _preferredQuotedStyle(layout) {
  if (layout.presenterOptions.quoteStyle === "single" && hasBit(layout.allowedStylesMask, SCALAR_STYLE.SINGLE_QUOTED)) return SCALAR_STYLE.SINGLE_QUOTED;
  return SCALAR_STYLE.DOUBLE_QUOTED;
}
function applyQuoteFlowKeysOption(layout) {
  if (!layout.presenterOptions.quoteFlowKeys) return;
  if (!layout.isKey || !layout.flowOnly || layout.style !== SCALAR_STYLE.PLAIN) return;
  layout.style = SCALAR_STYLE.DOUBLE_QUOTED;
}
function doubleQuoteForInvisibles(layout) {
  if (layout.style === SCALAR_STYLE.PLAIN && /[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(layout.node.value)) layout.style = SCALAR_STYLE.DOUBLE_QUOTED;
}
function doubleQuoteWhitespaceOnly(layout) {
  if (layout.style === SCALAR_STYLE.PLAIN && /^\s+$/.test(layout.node.value)) layout.style = SCALAR_STYLE.DOUBLE_QUOTED;
}
function applyForceQuotesOption(layout) {
  if (!layout.presenterOptions.forceQuotes) return;
  if (layout.isKey || layout.style !== SCALAR_STYLE.PLAIN) return;
  if (layout.node.tag !== layout.presenterOptions.schema.defaultScalarTag.tagName) return;
  layout.style = layout.node.value.includes("\n") ? SCALAR_STYLE.DOUBLE_QUOTED : _preferredQuotedStyle(layout);
}
function tryLongOrMultilineAsBlock(layout) {
  if (layout.style !== SCALAR_STYLE.PLAIN || layout.isKey) return;
  const value = layout.node.value;
  const multiline = value.indexOf("\n") !== -1;
  if (!hasBit(layout.allowedStylesMask, SCALAR_STYLE.LITERAL_BLOCK)) {
    if (multiline) layout.style = SCALAR_STYLE.DOUBLE_QUOTED;
    return;
  }
  const w2 = layout.presenterOptions.lineWidth;
  if (w2 === -1) {
    if (multiline) layout.style = SCALAR_STYLE.LITERAL_BLOCK;
    return;
  }
  const availableWidth = Math.max(Math.min(w2, 40), w2 - layout.shiftOfContent);
  let position = 0;
  let shouldFold = false;
  while (position <= value.length) {
    let lineEnd = value.length;
    const nextLineBreak = value.indexOf("\n", position);
    if (nextLineBreak !== -1) lineEnd = nextLineBreak;
    const line = value.slice(position, lineEnd);
    if (line.length > availableWidth && line[0] !== " " && / [^ \t]/.test(line)) shouldFold = true;
    if (nextLineBreak === -1) break;
    position = nextLineBreak + 1;
  }
  if (shouldFold) layout.style = SCALAR_STYLE.FOLDED_BLOCK;
  else if (multiline) layout.style = SCALAR_STYLE.LITERAL_BLOCK;
}
function quoteInvalidPlain(layout) {
  if (layout.style === SCALAR_STYLE.PLAIN && !hasBit(layout.allowedStylesMask, SCALAR_STYLE.PLAIN)) layout.style = _preferredQuotedStyle(layout);
}
function fallbackToDoubleQuoted(layout) {
  if (!hasBit(layout.allowedStylesMask, layout.style)) layout.style = SCALAR_STYLE.DOUBLE_QUOTED;
}
var SRC_C_PRINTABLE = "[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]";
var SRC_B_CHAR = "[\\n\\r]";
var SRC_C_BYTE_ORDER_MARK = "\\uFEFF";
var SRC_S_WHITE = "[ \\t]";
var SRC_NB_CHAR = `(?:(?!(?:${SRC_B_CHAR}|${SRC_C_BYTE_ORDER_MARK}))${SRC_C_PRINTABLE})`;
var SRC_NS_CHAR = `(?:(?!${SRC_S_WHITE})${SRC_NB_CHAR})`;
var SRC_NB_JSON = "[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]";
var SRC_C_INDICATOR = "[-?:,\\[\\]{}#&*!|>'\"%@`]";
var SRC_C_FLOW_INDICATOR = "[,\\[\\]{}]";
var SRC_NS_PLAIN_SAFE_FLOW_OUT = SRC_NS_CHAR;
var SRC_NS_PLAIN_SAFE_FLOW_IN = `(?:(?!${SRC_C_FLOW_INDICATOR})${SRC_NS_CHAR})`;
var SRC_NS_PLAIN_FIRST_FLOW_OUT = `(?:(?:(?!${SRC_C_INDICATOR})${SRC_NS_CHAR})|[?:-](?=${SRC_NS_PLAIN_SAFE_FLOW_OUT}))`;
var SRC_NS_PLAIN_FIRST_FLOW_IN = `(?:(?:(?!${SRC_C_INDICATOR})${SRC_NS_CHAR})|[?:-](?=${SRC_NS_PLAIN_SAFE_FLOW_IN}))`;
var SRC_NS_PLAIN_CHAR_FLOW_OUT = `(?:(?:(?![:#])${SRC_NS_PLAIN_SAFE_FLOW_OUT})|:(?=${SRC_NS_PLAIN_SAFE_FLOW_OUT}))#*`;
var SRC_NS_PLAIN_CHAR_FLOW_IN = `(?:(?:(?![:#])${SRC_NS_PLAIN_SAFE_FLOW_IN})|:(?=${SRC_NS_PLAIN_SAFE_FLOW_IN}))#*`;
var SRC_NB_NS_PLAIN_IN_LINE_FLOW_OUT = `(?:${SRC_S_WHITE}*${SRC_NS_PLAIN_CHAR_FLOW_OUT})*`;
var SRC_NB_NS_PLAIN_IN_LINE_FLOW_IN = `(?:${SRC_S_WHITE}*${SRC_NS_PLAIN_CHAR_FLOW_IN})*`;
var SRC_NS_PLAIN_ONE_LINE_FLOW_OUT = `${SRC_NS_PLAIN_FIRST_FLOW_OUT}#*${SRC_NB_NS_PLAIN_IN_LINE_FLOW_OUT}`;
var SRC_NS_PLAIN_ONE_LINE_FLOW_IN = `${SRC_NS_PLAIN_FIRST_FLOW_IN}#*${SRC_NB_NS_PLAIN_IN_LINE_FLOW_IN}`;
var SRC_NS_PLAIN_ONE_LINE_BLOCK_KEY = SRC_NS_PLAIN_ONE_LINE_FLOW_OUT;
var SRC_NS_PLAIN_ONE_LINE_FLOW_KEY = SRC_NS_PLAIN_ONE_LINE_FLOW_IN;
var SRC_S_NS_PLAIN_NEXT_LINE_FLOW_OUT = `\\n+${SRC_NS_PLAIN_CHAR_FLOW_OUT}${SRC_NB_NS_PLAIN_IN_LINE_FLOW_OUT}`;
var SRC_S_NS_PLAIN_NEXT_LINE_FLOW_IN = `\\n+${SRC_NS_PLAIN_CHAR_FLOW_IN}${SRC_NB_NS_PLAIN_IN_LINE_FLOW_IN}`;
var SRC_NS_PLAIN_MULTI_LINE_FLOW_OUT = `${SRC_NS_PLAIN_ONE_LINE_FLOW_OUT}(?:${SRC_S_NS_PLAIN_NEXT_LINE_FLOW_OUT})*`;
var SRC_NS_PLAIN_MULTI_LINE_FLOW_IN = `${SRC_NS_PLAIN_ONE_LINE_FLOW_IN}(?:${SRC_S_NS_PLAIN_NEXT_LINE_FLOW_IN})*`;
var NS_PLAIN_FLOW_OUT = new RegExp(`^(?:${SRC_NS_PLAIN_MULTI_LINE_FLOW_OUT})$`, "u");
var NS_PLAIN_FLOW_IN = new RegExp(`^(?:${SRC_NS_PLAIN_MULTI_LINE_FLOW_IN})$`, "u");
var NS_PLAIN_BLOCK_KEY = new RegExp(`^(?:${SRC_NS_PLAIN_ONE_LINE_BLOCK_KEY})$`, "u");
var NS_PLAIN_FLOW_KEY = new RegExp(`^(?:${SRC_NS_PLAIN_ONE_LINE_FLOW_KEY})$`, "u");
var NB_SINGLE_ONE_LINE = new RegExp(`^(?:${SRC_NB_JSON})*$`, "u");
var NB_SINGLE_MULTI_LINE = new RegExp(`^(?:${SRC_NB_JSON}|\\n)*$`, "u");
var BLOCK_SCALAR_CONTENT = new RegExp(`^(?:${SRC_NB_CHAR}|\\n)*$`, "u");
var DEFAULT_PRESENTER_OPTIONS = {
  indent: 2,
  seqNoIndent: false,
  seqInlineFirst: true,
  lineWidth: 80,
  flowBracketPadding: false,
  flowSkipCommaSpace: false,
  flowSkipColonSpace: false,
  quoteFlowKeys: false,
  quoteStyle: "single",
  forceQuotes: false,
  scalarStyleRules: Object.keys(DEFAULT_SCALAR_STYLE_RULES).map((name) => Reflect.get(DEFAULT_SCALAR_STYLE_RULES, name)),
  tagBeforeAnchor: false
};
var DEFAULT_DUMP_OPTIONS = {
  ...DEFAULT_PRESENTER_OPTIONS,
  schema: DUMP_SCHEMA,
  skipInvalid: false,
  noRefs: false,
  flowLevel: -1,
  sortKeys: false,
  transform: () => {
  }
};
var EVENT_DOCUMENT = EVENT_ID.DOCUMENT;
var EVENT_SEQUENCE = EVENT_ID.SEQUENCE;
var EVENT_MAPPING = EVENT_ID.MAPPING;
var EVENT_SCALAR = EVENT_ID.SCALAR;
var EVENT_ALIAS = EVENT_ID.ALIAS;
var EVENT_POP = EVENT_ID.POP;
var SCALAR_STYLE_PLAIN = SCALAR_STYLE.PLAIN;
var SCALAR_STYLE_SINGLE_QUOTED = SCALAR_STYLE.SINGLE_QUOTED;
var SCALAR_STYLE_DOUBLE_QUOTED = SCALAR_STYLE.DOUBLE_QUOTED;
var SCALAR_STYLE_LITERAL_BLOCK = SCALAR_STYLE.LITERAL_BLOCK;
var SCALAR_STYLE_FOLDED_BLOCK = SCALAR_STYLE.FOLDED_BLOCK;
var COLLECTION_STYLE_BLOCK = COLLECTION_STYLE.BLOCK;
var COLLECTION_STYLE_FLOW = COLLECTION_STYLE.FLOW;
var CHOMPING_CLIP = CHOMPING_MODE.CLIP;
var CHOMPING_STRIP = CHOMPING_MODE.STRIP;
var CHOMPING_KEEP = CHOMPING_MODE.KEEP;

// src/swagger2.ts
function fixRefs(obj) {
  if (Array.isArray(obj)) {
    for (const item of obj) {
      fixRefs(item);
    }
    return;
  }
  if (!isRecord(obj)) return;
  if (typeof obj["$ref"] === "string") {
    obj["$ref"] = obj["$ref"].replace("#/definitions/", "#/components/schemas/").replace("#/parameters/", "#/components/parameters/").replace("#/responses/", "#/components/responses/").replace("#/securityDefinitions/", "#/components/securitySchemes/");
  }
  for (const key of Object.keys(obj)) {
    fixRefs(obj[key]);
  }
}
function upgradeSwagger2ParameterSchema(rawParam) {
  if (rawParam["type"] === "array" && isRecord(rawParam["items"])) {
    rawParam["schema"] = {
      type: "array",
      items: rawParam["items"],
      collectionFormat: rawParam["collectionFormat"]
    };
  } else if (rawParam["type"]) {
    const paramSchema = {
      type: rawParam["type"],
      format: rawParam["format"]
    };
    if (rawParam["default"] !== void 0) paramSchema["default"] = rawParam["default"];
    if (rawParam["enum"] !== void 0) paramSchema["enum"] = rawParam["enum"];
    if (rawParam["maximum"] !== void 0) paramSchema["maximum"] = rawParam["maximum"];
    if (rawParam["minimum"] !== void 0) paramSchema["minimum"] = rawParam["minimum"];
    rawParam["schema"] = paramSchema;
  }
}
function upgradeSwagger2ResponseSchema(resp, produces) {
  if (typeof resp["$ref"] === "string") return;
  if (resp["schema"]) {
    const contentMap = {};
    for (const p of produces) {
      contentMap[p] = { schema: resp["schema"] };
    }
    resp["content"] = contentMap;
    delete resp["schema"];
  }
}
function transformSwagger2ToOpenAPI3(parsed) {
  if (String(parsed["swagger"]) !== "2.0") return;
  parsed["openapi"] = "3.2.0";
  if (parsed["host"] || parsed["basePath"] || parsed["schemes"]) {
    const schemes = Array.isArray(parsed["schemes"]) ? parsed["schemes"].map(String) : ["https"];
    const host = parsed["host"] ? String(parsed["host"]) : "localhost";
    const basePath = parsed["basePath"] ? String(parsed["basePath"]) : "";
    parsed["servers"] = schemes.map((scheme) => ({
      url: `${scheme}://${host}${basePath}`
    }));
  }
  const components = isRecord(parsed["components"]) ? parsed["components"] : {};
  parsed["components"] = components;
  const globalConsumes = Array.isArray(parsed["consumes"]) ? parsed["consumes"].map(String) : ["application/json"];
  const globalProduces = Array.isArray(parsed["produces"]) ? parsed["produces"].map(String) : ["application/json"];
  if (parsed["definitions"]) {
    components["schemas"] = parsed["definitions"];
    delete parsed["definitions"];
  }
  if (isRecord(parsed["parameters"])) {
    for (const paramVal of Object.values(parsed["parameters"])) {
      if (isRecord(paramVal)) {
        upgradeSwagger2ParameterSchema(paramVal);
      }
    }
    components["parameters"] = parsed["parameters"];
    delete parsed["parameters"];
  }
  if (isRecord(parsed["responses"])) {
    for (const respVal of Object.values(parsed["responses"])) {
      if (isRecord(respVal)) {
        upgradeSwagger2ResponseSchema(respVal, globalProduces);
      }
    }
    components["responses"] = parsed["responses"];
    delete parsed["responses"];
  }
  const secDefs = parsed["securityDefinitions"];
  if (isRecord(secDefs)) {
    for (const sd of Object.values(secDefs)) {
      if (!isRecord(sd)) continue;
      if (sd["type"] === "oauth2") {
        const flows = {};
        const scopes = isRecord(sd["scopes"]) ? sd["scopes"] : {};
        if (sd["flow"] === "implicit") {
          flows["implicit"] = { authorizationUrl: sd["authorizationUrl"], scopes };
        } else if (sd["flow"] === "password") {
          flows["password"] = { tokenUrl: sd["tokenUrl"], scopes };
        } else if (sd["flow"] === "application") {
          flows["clientCredentials"] = { tokenUrl: sd["tokenUrl"], scopes };
        } else if (sd["flow"] === "accessCode") {
          flows["authorizationCode"] = {
            authorizationUrl: sd["authorizationUrl"],
            tokenUrl: sd["tokenUrl"],
            scopes
          };
        }
        sd["flows"] = flows;
        delete sd["flow"];
        delete sd["authorizationUrl"];
        delete sd["tokenUrl"];
        delete sd["scopes"];
      } else if (sd["type"] === "basic") {
        sd["type"] = "http";
        sd["scheme"] = "basic";
      }
    }
    components["securitySchemes"] = secDefs;
    delete parsed["securityDefinitions"];
  }
  fixRefs(parsed);
  const paths = parsed["paths"];
  if (isRecord(paths)) {
    for (const [pathKey, pathItem] of Object.entries(paths)) {
      if (!isRecord(pathItem)) {
        delete paths[pathKey];
        continue;
      }
      if (Array.isArray(pathItem["parameters"])) {
        const pathParams = [];
        for (const rawParam of pathItem["parameters"]) {
          if (!isRecord(rawParam)) continue;
          upgradeSwagger2ParameterSchema(rawParam);
          pathParams.push(rawParam);
        }
        pathItem["parameters"] = pathParams;
      }
      for (const method of STANDARD_HTTP_METHODS) {
        const op = pathItem[method];
        if (!isRecord(op)) {
          delete pathItem[method];
          continue;
        }
        const consumes = Array.isArray(op["consumes"]) ? op["consumes"].map(String) : globalConsumes;
        const produces = Array.isArray(op["produces"]) ? op["produces"].map(String) : globalProduces;
        if (Array.isArray(op["parameters"])) {
          const newParams = [];
          let bodyParam = null;
          const formParams = [];
          for (const rawParam of op["parameters"]) {
            if (!isRecord(rawParam)) continue;
            if (rawParam["in"] === "body") {
              bodyParam = rawParam;
            } else if (rawParam["in"] === "formData") {
              formParams.push(rawParam);
            } else {
              upgradeSwagger2ParameterSchema(rawParam);
              newParams.push(rawParam);
            }
          }
          op["parameters"] = newParams;
          if (bodyParam) {
            const contentMap = {};
            for (const c2 of consumes) {
              contentMap[c2] = { schema: bodyParam["schema"] };
            }
            op["requestBody"] = {
              description: bodyParam["description"],
              required: bodyParam["required"],
              content: contentMap
            };
          } else if (formParams.length > 0) {
            const properties = {};
            const required = [];
            for (const fp of formParams) {
              const fpName = String(fp["name"] || "");
              properties[fpName] = fp["type"] === "file" ? { type: "string", format: "binary" } : { type: fp["type"], format: fp["format"] };
              if (fp["required"]) required.push(fpName);
            }
            const schema = {
              type: "object",
              properties
            };
            if (required.length > 0) schema["required"] = required;
            const contentMap = {};
            const consumesToUse = Array.isArray(op["consumes"]) ? op["consumes"].map(String) : ["application/x-www-form-urlencoded", "multipart/form-data"];
            for (const c2 of consumesToUse) {
              contentMap[c2] = { schema };
            }
            op["requestBody"] = {
              content: contentMap
            };
          }
        }
        const responses = op["responses"];
        if (isRecord(responses)) {
          for (const resp of Object.values(responses)) {
            if (!isRecord(resp)) continue;
            upgradeSwagger2ResponseSchema(resp, produces);
          }
        }
      }
    }
  }
}

// src/arazzo-parser.ts
function extractExtensions(rec) {
  const ext = {};
  let hasExt = false;
  for (const [k, v2] of Object.entries(rec)) {
    if (k.startsWith("x-") && v2 !== void 0) {
      ext[k] = toJsonValue(v2);
      hasExt = true;
    }
  }
  return hasExt ? ext : void 0;
}
function isArazzoSpec(parsed) {
  if (!isRecord(parsed)) return false;
  return typeof parsed["arazzo"] === "string" && Array.isArray(parsed["workflows"]);
}
function parseArazzoInfo(obj) {
  if (!isRecord(obj)) throw new Error("Missing Arazzo info object");
  const info = {
    title: String(obj["title"] || ""),
    version: String(obj["version"] || "1.0.0")
  };
  if (obj["summary"]) info.summary = String(obj["summary"]);
  if (obj["description"]) info.description = String(obj["description"]);
  const ext = extractExtensions(obj);
  if (ext) info.extensions = ext;
  return info;
}
function isSourceDescriptionType(val) {
  return val === "openapi" || val === "asyncapi" || val === "arazzo";
}
function parseSourceDescription(obj) {
  const rec = isRecord(obj) ? obj : {};
  const sd = {
    name: String(rec["name"] || "default"),
    url: String(rec["url"] || "")
  };
  if (isSourceDescriptionType(rec["type"])) {
    sd.type = rec["type"];
  }
  const ext = extractExtensions(rec);
  if (ext) sd.extensions = ext;
  return sd;
}
function isReusableObject(obj) {
  return isRecord(obj) && typeof obj["reference"] === "string" && typeof obj["name"] !== "string";
}
function parseReusableObject(obj) {
  const rec = isRecord(obj) ? obj : {};
  const reusable = {
    reference: String(rec["reference"] || "")
  };
  if (rec["value"] !== void 0) {
    reusable.value = toJsonValue(rec["value"]);
  }
  return reusable;
}
function isSelectorObject(obj) {
  return isRecord(obj) && typeof obj["context"] === "string" && typeof obj["selector"] === "string";
}
function isSelectorType(val) {
  return val === "jsonpointer" || val === "jsonpath" || val === "xpath" || val === "regex";
}
function parseCriterionExpressionType(obj) {
  const exprType = {
    type: obj["type"] === "xpath" ? "xpath" : "jsonpath",
    version: String(obj["version"] || "draft-goessner-dispatch-jsonpath-00")
  };
  const ext = extractExtensions(obj);
  if (ext) exprType.extensions = ext;
  return exprType;
}
function parseSelector(obj) {
  const rec = isRecord(obj) ? obj : {};
  const sel = {
    context: String(rec["context"] || "$response.body"),
    selector: String(rec["selector"] || "")
  };
  const typeVal = rec["type"];
  if (isSelectorType(typeVal)) {
    sel.type = typeVal;
  } else if (isRecord(typeVal)) {
    sel.type = parseCriterionExpressionType(typeVal);
  }
  if (rec["version"]) sel.version = String(rec["version"]);
  const ext = extractExtensions(rec);
  if (ext) sel.extensions = ext;
  return sel;
}
function isArazzoParameterIn(val) {
  return val === "path" || val === "query" || val === "querystring" || val === "header" || val === "cookie";
}
function parseArazzoParameter(obj) {
  const rec = isRecord(obj) ? obj : {};
  const rawVal = rec["value"];
  const param = {
    name: String(rec["name"] || ""),
    value: isSelectorObject(rawVal) ? parseSelector(rawVal) : toJsonValue(rawVal ?? "")
  };
  if (isArazzoParameterIn(rec["in"])) {
    param.in = rec["in"];
  }
  const ext = extractExtensions(rec);
  if (ext) param.extensions = ext;
  return param;
}
function parseArazzoParameterOrReusable(obj) {
  if (isReusableObject(obj)) return parseReusableObject(obj);
  return parseArazzoParameter(obj);
}
function parsePayloadReplacement(obj) {
  const rec = isRecord(obj) ? obj : {};
  const rawVal = rec["value"];
  const rep = {
    target: String(rec["target"] || ""),
    value: isSelectorObject(rawVal) ? parseSelector(rawVal) : toJsonValue(rawVal ?? "")
  };
  const ext = extractExtensions(rec);
  if (ext) rep.extensions = ext;
  return rep;
}
function parseArazzoRequestBody(obj) {
  const rec = isRecord(obj) ? obj : {};
  const rb = {};
  if (rec["contentType"]) rb.contentType = String(rec["contentType"]);
  if (rec["payload"] !== void 0) rb.payload = toJsonValue(rec["payload"]);
  if (Array.isArray(rec["replacements"])) {
    rb.replacements = rec["replacements"].map(parsePayloadReplacement);
  }
  const ext = extractExtensions(rec);
  if (ext) rb.extensions = ext;
  return rb;
}
function isCriterionType(val) {
  return val === "simple" || val === "regex" || val === "jsonpath" || val === "xpath";
}
function parseCriterion(obj) {
  const rec = isRecord(obj) ? obj : {};
  const crit = {
    condition: String(rec["condition"] || "")
  };
  if (rec["context"]) crit.context = String(rec["context"]);
  const typeVal = rec["type"];
  if (isCriterionType(typeVal)) {
    crit.type = typeVal;
  } else if (isRecord(typeVal)) {
    crit.type = parseCriterionExpressionType(typeVal);
  }
  const ext = extractExtensions(rec);
  if (ext) crit.extensions = ext;
  return crit;
}
function isSuccessActionType(val) {
  return val === "end" || val === "goto";
}
function parseSuccessAction(obj) {
  const rec = isRecord(obj) ? obj : {};
  const action = {
    name: String(rec["name"] || "defaultSuccess"),
    type: isSuccessActionType(rec["type"]) ? rec["type"] : "end"
  };
  if (rec["workflowId"]) action.workflowId = String(rec["workflowId"]);
  if (rec["stepId"]) action.stepId = String(rec["stepId"]);
  if (Array.isArray(rec["parameters"])) {
    action.parameters = rec["parameters"].map(parseArazzoParameterOrReusable);
  }
  if (Array.isArray(rec["criteria"])) {
    action.criteria = rec["criteria"].map(parseCriterion);
  }
  const ext = extractExtensions(rec);
  if (ext) action.extensions = ext;
  return action;
}
function parseSuccessActionOrReusable(obj) {
  if (isReusableObject(obj)) return parseReusableObject(obj);
  return parseSuccessAction(obj);
}
function isFailureActionType(val) {
  return val === "end" || val === "retry" || val === "goto";
}
function parseFailureAction(obj) {
  const rec = isRecord(obj) ? obj : {};
  const action = {
    name: String(rec["name"] || "defaultFailure"),
    type: isFailureActionType(rec["type"]) ? rec["type"] : "end"
  };
  if (rec["workflowId"]) action.workflowId = String(rec["workflowId"]);
  if (rec["stepId"]) action.stepId = String(rec["stepId"]);
  if (Array.isArray(rec["parameters"])) {
    action.parameters = rec["parameters"].map(parseArazzoParameterOrReusable);
  }
  if (typeof rec["retryAfter"] === "number") action.retryAfter = rec["retryAfter"];
  if (typeof rec["retryLimit"] === "number") action.retryLimit = rec["retryLimit"];
  if (Array.isArray(rec["criteria"])) {
    action.criteria = rec["criteria"].map(parseCriterion);
  }
  const ext = extractExtensions(rec);
  if (ext) action.extensions = ext;
  return action;
}
function parseFailureActionOrReusable(obj) {
  if (isReusableObject(obj)) return parseReusableObject(obj);
  return parseFailureAction(obj);
}
function parseArazzoOutputs(obj) {
  const rec = isRecord(obj) ? obj : {};
  const out = {};
  for (const [k, v2] of Object.entries(rec)) {
    if (isSelectorObject(v2)) {
      out[k] = parseSelector(v2);
    } else {
      out[k] = String(v2 ?? "");
    }
  }
  return out;
}
function isStepActionType(val) {
  return val === "send" || val === "receive";
}
function parseStep(obj) {
  const rec = isRecord(obj) ? obj : {};
  const step = {
    stepId: String(rec["stepId"] || "step")
  };
  if (rec["description"]) step.description = String(rec["description"]);
  if (rec["operationId"]) step.operationId = String(rec["operationId"]);
  if (rec["operationPath"]) step.operationPath = String(rec["operationPath"]);
  if (rec["channelPath"]) step.channelPath = String(rec["channelPath"]);
  if (rec["workflowId"]) step.workflowId = String(rec["workflowId"]);
  if (Array.isArray(rec["parameters"])) {
    step.parameters = rec["parameters"].map(parseArazzoParameterOrReusable);
  }
  if (isRecord(rec["requestBody"])) {
    step.requestBody = parseArazzoRequestBody(rec["requestBody"]);
  }
  if (Array.isArray(rec["successCriteria"])) {
    step.successCriteria = rec["successCriteria"].map(parseCriterion);
  }
  if (Array.isArray(rec["onSuccess"])) {
    step.onSuccess = rec["onSuccess"].map(parseSuccessActionOrReusable);
  }
  if (Array.isArray(rec["onFailure"])) {
    step.onFailure = rec["onFailure"].map(parseFailureActionOrReusable);
  }
  if (isRecord(rec["outputs"])) {
    step.outputs = parseArazzoOutputs(rec["outputs"]);
  }
  if (typeof rec["timeout"] === "number") step.timeout = rec["timeout"];
  if (rec["correlationId"]) step.correlationId = String(rec["correlationId"]);
  if (isStepActionType(rec["action"])) step.action = rec["action"];
  if (Array.isArray(rec["dependsOn"])) {
    step.dependsOn = rec["dependsOn"].map(String);
  }
  const ext = extractExtensions(rec);
  if (ext) step.extensions = ext;
  return step;
}
function parseWorkflow(obj) {
  const rec = isRecord(obj) ? obj : {};
  const wf = {
    workflowId: String(rec["workflowId"] || "workflow"),
    steps: Array.isArray(rec["steps"]) ? rec["steps"].map(parseStep) : []
  };
  if (rec["summary"]) wf.summary = String(rec["summary"]);
  if (rec["description"]) wf.description = String(rec["description"]);
  if (isRecord(rec["inputs"])) {
    wf.inputs = parseSchema(rec["inputs"]);
  }
  if (Array.isArray(rec["dependsOn"])) {
    wf.dependsOn = rec["dependsOn"].map(String);
  }
  if (Array.isArray(rec["successActions"])) {
    wf.successActions = rec["successActions"].map(parseSuccessActionOrReusable);
  }
  if (Array.isArray(rec["failureActions"])) {
    wf.failureActions = rec["failureActions"].map(parseFailureActionOrReusable);
  }
  if (isRecord(rec["outputs"])) {
    wf.outputs = parseArazzoOutputs(rec["outputs"]);
  }
  if (Array.isArray(rec["parameters"])) {
    wf.parameters = rec["parameters"].map(parseArazzoParameterOrReusable);
  }
  const ext = extractExtensions(rec);
  if (ext) wf.extensions = ext;
  return wf;
}
function parseArazzoComponents(obj) {
  const rec = isRecord(obj) ? obj : {};
  const comp = {};
  const inputs = rec["inputs"];
  if (isRecord(inputs)) {
    comp.inputs = {};
    for (const [k, v2] of Object.entries(inputs)) {
      comp.inputs[k] = parseSchema(v2);
    }
  }
  const parameters = rec["parameters"];
  if (isRecord(parameters)) {
    comp.parameters = {};
    for (const [k, v2] of Object.entries(parameters)) {
      comp.parameters[k] = parseArazzoParameter(v2);
    }
  }
  const successActions = rec["successActions"];
  if (isRecord(successActions)) {
    comp.successActions = {};
    for (const [k, v2] of Object.entries(successActions)) {
      comp.successActions[k] = parseSuccessAction(v2);
    }
  }
  const failureActions = rec["failureActions"];
  if (isRecord(failureActions)) {
    comp.failureActions = {};
    for (const [k, v2] of Object.entries(failureActions)) {
      comp.failureActions[k] = parseFailureAction(v2);
    }
  }
  const ext = extractExtensions(rec);
  if (ext) comp.extensions = ext;
  return comp;
}
function parseArazzoSpec(rawSpec) {
  let parsed;
  try {
    parsed = load(rawSpec);
  } catch {
    throw new Error("Invalid Arazzo specification format.");
  }
  if (!isRecord(parsed) || !isArazzoSpec(parsed)) {
    throw new Error("Invalid Arazzo specification format.");
  }
  const spec = {
    arazzo: String(parsed["arazzo"] || "1.1.0"),
    info: parseArazzoInfo(parsed["info"]),
    sourceDescriptions: Array.isArray(parsed["sourceDescriptions"]) ? parsed["sourceDescriptions"].map(parseSourceDescription) : [],
    workflows: parsed["workflows"].map(parseWorkflow)
  };
  if (parsed["$self"]) {
    spec.$self = String(parsed["$self"]);
  }
  if (isRecord(parsed["components"])) {
    spec.components = parseArazzoComponents(parsed["components"]);
  }
  const ext = extractExtensions(parsed);
  if (ext) spec.extensions = ext;
  return spec;
}
function extractComponentKey(reference, category) {
  const prefix = `$components.${category}.`;
  if (reference.startsWith(prefix)) {
    return { key: reference.slice(prefix.length), matchesCategory: true };
  }
  const lastPart = reference.split(".").pop() || reference;
  if (reference.startsWith("$components.")) {
    return { key: lastPart, matchesCategory: false };
  }
  return { key: lastPart, matchesCategory: true };
}
function resolveArazzoReusableParameter(item, components) {
  if (!isReusableObject(item)) {
    return item;
  }
  const { key, matchesCategory } = extractComponentKey(item.reference, "parameters");
  const found = matchesCategory ? components?.parameters?.[key] : void 0;
  if (found) {
    return {
      ...found,
      value: item.value !== void 0 ? item.value : found.value
    };
  }
  return {
    name: key,
    value: item.value !== void 0 ? item.value : item.reference
  };
}
function resolveArazzoSuccessAction(item, components) {
  if (!isReusableObject(item)) {
    return item;
  }
  const { key, matchesCategory } = extractComponentKey(item.reference, "successActions");
  const found = matchesCategory ? components?.successActions?.[key] : void 0;
  if (found) {
    return { ...found };
  }
  return {
    name: key,
    type: "end"
  };
}
function resolveArazzoFailureAction(item, components) {
  if (!isReusableObject(item)) {
    return item;
  }
  const { key, matchesCategory } = extractComponentKey(item.reference, "failureActions");
  const found = matchesCategory ? components?.failureActions?.[key] : void 0;
  if (found) {
    return { ...found };
  }
  return {
    name: key,
    type: "end"
  };
}
function resolveWorkflowInputSchema(inputs, components) {
  if (!inputs) return void 0;
  if (isReference(inputs)) {
    const ref = inputs.$ref;
    const key = ref.startsWith("#/components/inputs/") ? ref.slice("#/components/inputs/".length) : ref.startsWith("$components.inputs.") ? ref.slice("$components.inputs.".length) : ref.split("/").pop() || ref;
    const found = components?.inputs?.[key];
    if (found && !isReference(found)) {
      return found;
    }
    return { type: "object", title: key, description: inputs.description };
  }
  return inputs;
}
function mergeWorkflowAndStepParameters(workflowParams, stepParams, components) {
  const resolvedWf = (workflowParams ?? []).map((p) => resolveArazzoReusableParameter(p, components));
  const resolvedStep = (stepParams ?? []).map((p) => resolveArazzoReusableParameter(p, components));
  const map = /* @__PURE__ */ new Map();
  for (const p of resolvedWf) {
    const key = `${p.in ?? "workflow"}:${p.name}`;
    map.set(key, p);
  }
  for (const p of resolvedStep) {
    const key = `${p.in ?? "workflow"}:${p.name}`;
    map.set(key, p);
  }
  return Array.from(map.values());
}
function parseRuntimeExpression(expr) {
  const trimmed = expr.trim();
  const isTemplate = !trimmed.startsWith("$") && /\{\$[a-zA-Z0-9_.\-#/~]+\}/.test(trimmed);
  let root;
  for (const candidate of RUNTIME_ROOT_PREFIXES) {
    if (trimmed === candidate || trimmed.startsWith(`${candidate}.`) || trimmed.startsWith(`${candidate}#`)) {
      root = candidate;
      break;
    }
  }
  const referencedStepIds = /* @__PURE__ */ new Set();
  const referencedInputs = /* @__PURE__ */ new Set();
  const referencedWorkflows = /* @__PURE__ */ new Set();
  const referencedSources = /* @__PURE__ */ new Set();
  const stepRegex = /\$steps\.([A-Za-z0-9_-]+)/g;
  for (const m2 of trimmed.matchAll(stepRegex)) {
    referencedStepIds.add(String(m2[1]));
  }
  const inputRegex = /\$inputs\.([A-Za-z0-9_-]+)/g;
  for (const m2 of trimmed.matchAll(inputRegex)) {
    referencedInputs.add(String(m2[1]));
  }
  const wfRegex = /\$workflows\.([A-Za-z0-9_-]+)/g;
  for (const m2 of trimmed.matchAll(wfRegex)) {
    referencedWorkflows.add(String(m2[1]));
  }
  const srcRegex = /\$sourceDescriptions\.([A-Za-z0-9_-]+)/g;
  for (const m2 of trimmed.matchAll(srcRegex)) {
    referencedSources.add(String(m2[1]));
  }
  const hashIdx = trimmed.indexOf("#");
  const jsonPointer = hashIdx !== -1 ? trimmed.slice(hashIdx + 1).replace(/\}.*$/, "") : void 0;
  const isExpression = root !== void 0 || isTemplate;
  return {
    raw: expr,
    isExpression,
    isTemplate,
    root,
    referencedStepIds: Array.from(referencedStepIds),
    referencedInputs: Array.from(referencedInputs),
    referencedWorkflows: Array.from(referencedWorkflows),
    referencedSources: Array.from(referencedSources),
    jsonPointer
  };
}
function unescapeJsonPointer(token) {
  return token.replace(/~1/g, "/").replace(/~0/g, "~");
}
function extractStepReferencesFromStep(step, mergedParams) {
  const refs = /* @__PURE__ */ new Set();
  if (step.dependsOn) {
    for (const dep of step.dependsOn) refs.add(dep);
  }
  const inspectString = (s) => {
    const parsed = parseRuntimeExpression(s);
    for (const id of parsed.referencedStepIds) {
      if (id !== step.stepId) refs.add(id);
    }
  };
  const inspectValue = (val) => {
    if (typeof val === "string") {
      inspectString(val);
    } else if (Array.isArray(val)) {
      val.forEach(inspectValue);
    } else if (isSelectorObject(val)) {
      inspectString(val.context);
      inspectString(val.selector);
    } else if (isRecord(val)) {
      for (const v2 of Object.values(val)) inspectValue(v2);
    }
  };
  for (const p of mergedParams) {
    inspectValue(p.value);
  }
  if (step.requestBody) {
    inspectValue(step.requestBody.payload);
    if (step.requestBody.replacements) {
      for (const rep of step.requestBody.replacements) {
        inspectValue(rep.value);
      }
    }
  }
  if (step.successCriteria) {
    for (const crit of step.successCriteria) {
      if (crit.context) inspectString(crit.context);
      inspectString(crit.condition);
    }
  }
  if (step.outputs) {
    for (const outVal of Object.values(step.outputs)) {
      inspectValue(outVal);
    }
  }
  if (step.correlationId) {
    inspectString(step.correlationId);
  }
  return Array.from(refs);
}
function buildWorkflowDag(workflowsOrSpec, components) {
  const workflows = Array.isArray(workflowsOrSpec) ? workflowsOrSpec : workflowsOrSpec.workflows;
  const resolvedComponents = components ?? (!Array.isArray(workflowsOrSpec) ? workflowsOrSpec.components : void 0);
  const workflowEdges = [];
  const stepOrderByWorkflow = {};
  const stepEdgesByWorkflow = {};
  let hasCycles = false;
  const wfIds = new Set(workflows.map((w2) => w2.workflowId));
  const wfAdj = workflows.map((w2) => ({ id: w2.workflowId, targets: /* @__PURE__ */ new Set(), inDegree: 0 }));
  const findWfNode = (id) => wfAdj.find((n) => n.id === id);
  const addWfEdge = (from, to, kind, label) => {
    workflowEdges.push({ from, to, kind, label });
    if (wfIds.has(from) && wfIds.has(to) && from !== to) {
      const fromNode = findWfNode(from);
      const toNode = findWfNode(to);
      if (fromNode && toNode && !fromNode.targets.has(to)) {
        fromNode.targets.add(to);
        toNode.inDegree += 1;
      }
    }
  };
  for (const wf of workflows) {
    if (wf.dependsOn) {
      for (const dep of wf.dependsOn) {
        const parts = dep.split(".workflows.");
        const cleanDep = parts[1] ?? dep;
        addWfEdge(cleanDep, wf.workflowId, "dependsOn");
      }
    }
    const stepEdges = [];
    const stepIds = new Set(wf.steps.map((s) => s.stepId));
    const stepNodes = wf.steps.map((s) => ({ id: s.stepId, targets: /* @__PURE__ */ new Set(), inDegree: 0 }));
    const findStepNode = (id) => stepNodes.find((n) => n.id === id);
    const addStepDep = (from, to) => {
      if (stepIds.has(from) && from !== to) {
        const fromNode = findStepNode(from);
        const toNode = findStepNode(to);
        if (fromNode && toNode && !fromNode.targets.has(to)) {
          fromNode.targets.add(to);
          toNode.inDegree += 1;
        }
      }
    };
    let prevStepId;
    for (const st2 of wf.steps) {
      if (prevStepId !== void 0) {
        stepEdges.push({ from: prevStepId, to: st2.stepId, kind: "sequential" });
        addStepDep(prevStepId, st2.stepId);
      }
      prevStepId = st2.stepId;
      if (st2.workflowId) {
        const wfParts = st2.workflowId.split(".workflows.");
        const targetWf = wfParts[1] ?? st2.workflowId;
        addWfEdge(targetWf, wf.workflowId, "subWorkflow", st2.stepId);
      }
      const mergedParams = mergeWorkflowAndStepParameters(wf.parameters, st2.parameters, resolvedComponents);
      const upstream = extractStepReferencesFromStep(st2, mergedParams);
      for (const upId of upstream) {
        const kind = st2.dependsOn?.includes(upId) ? "dependsOn" : "dataFlow";
        stepEdges.push({ from: upId, to: st2.stepId, kind });
        addStepDep(upId, st2.stepId);
      }
      if (st2.onSuccess) {
        for (const rawAct of st2.onSuccess) {
          const act = resolveArazzoSuccessAction(rawAct, resolvedComponents);
          if (act.type === "goto" && act.stepId) {
            stepEdges.push({ from: st2.stepId, to: act.stepId, kind: "onSuccess", label: act.name });
          }
        }
      }
      if (st2.onFailure) {
        for (const rawAct of st2.onFailure) {
          const act = resolveArazzoFailureAction(rawAct, resolvedComponents);
          if ((act.type === "goto" || act.type === "retry") && act.stepId) {
            stepEdges.push({ from: st2.stepId, to: act.stepId, kind: "onFailure", label: act.name });
          }
        }
      }
    }
    const stepQueue = stepNodes.filter((n) => n.inDegree === 0);
    const sortedSteps = [];
    let currStepNode = stepQueue.shift();
    while (currStepNode !== void 0) {
      sortedSteps.push(currStepNode.id);
      for (const nxtId of currStepNode.targets) {
        for (const candidate of stepNodes) {
          if (candidate.id === nxtId) {
            candidate.inDegree -= 1;
            if (candidate.inDegree === 0) stepQueue.push(candidate);
          }
        }
      }
      currStepNode = stepQueue.shift();
    }
    if (sortedSteps.length < wf.steps.length) {
      hasCycles = true;
      for (const st2 of wf.steps) {
        if (!sortedSteps.includes(st2.stepId)) {
          sortedSteps.push(st2.stepId);
        }
      }
    }
    stepOrderByWorkflow[wf.workflowId] = sortedSteps;
    stepEdgesByWorkflow[wf.workflowId] = stepEdges;
  }
  const wfQueue = wfAdj.filter((n) => n.inDegree === 0);
  const workflowOrder = [];
  let currWfNode = wfQueue.shift();
  while (currWfNode !== void 0) {
    workflowOrder.push(currWfNode.id);
    for (const nxtId of currWfNode.targets) {
      for (const candidate of wfAdj) {
        if (candidate.id === nxtId) {
          candidate.inDegree -= 1;
          if (candidate.inDegree === 0) wfQueue.push(candidate);
        }
      }
    }
    currWfNode = wfQueue.shift();
  }
  if (workflowOrder.length < workflows.length) {
    hasCycles = true;
    for (const wf of workflows) {
      if (!workflowOrder.includes(wf.workflowId)) {
        workflowOrder.push(wf.workflowId);
      }
    }
  }
  return {
    workflowOrder,
    workflowEdges,
    stepOrderByWorkflow,
    stepEdgesByWorkflow,
    hasCycles
  };
}
function linkStepToOpenApiOperation(step, openApiSpec, sourceDescriptions) {
  const defaultSource = sourceDescriptions?.[0]?.name;
  if (step.workflowId) {
    let sourceName = defaultSource;
    let wfId = step.workflowId;
    const match = step.workflowId.match(/^\$sourceDescriptions\.([A-Za-z0-9_-]+)\.workflows\.(.+)$/);
    if (match && match[1] && match[2]) {
      sourceName = match[1];
      wfId = match[2];
    }
    return {
      kind: "workflow",
      sourceName,
      operationId: wfId,
      anchorId: `workflow-${wfId}`
    };
  }
  if (step.channelPath) {
    const parsedExpr = parseRuntimeExpression(step.channelPath);
    const sourceName = parsedExpr.referencedSources[0] ?? defaultSource;
    let channelRoute = step.channelPath;
    if (parsedExpr.jsonPointer) {
      const segments = parsedExpr.jsonPointer.split("/").filter(Boolean).map(unescapeJsonPointer);
      if (segments[0] === "channels" && segments[1]) {
        channelRoute = segments[1];
      } else {
        channelRoute = "/" + segments.join("/");
      }
    }
    return {
      kind: "channel",
      sourceName,
      method: step.action ?? "send",
      route: channelRoute
    };
  }
  if (step.operationPath) {
    const parsedExpr = parseRuntimeExpression(step.operationPath);
    const sourceName = parsedExpr.referencedSources[0] ?? defaultSource;
    let route = step.operationPath;
    let method = "get";
    if (parsedExpr.jsonPointer) {
      const segments = parsedExpr.jsonPointer.split("/").filter(Boolean).map(unescapeJsonPointer);
      if ((segments[0] === "paths" || segments[0] === "webhooks") && segments[1] !== void 0 && segments[2] !== void 0) {
        route = segments[1];
        method = segments[2].toLowerCase();
      }
    }
    let anchorId = `${method}-${route}`;
    let operationId;
    const pathItem = openApiSpec?.paths?.[route] ?? openApiSpec?.webhooks?.[route];
    if (pathItem && !isReference(pathItem)) {
      for (const [m2, op] of getPathOperations(pathItem)) {
        if (m2.toLowerCase() === method) {
          operationId = op.operationId;
          anchorId = op.operationId || `${m2}-${route}`;
          break;
        }
      }
    }
    return {
      kind: "operation",
      sourceName,
      method,
      route,
      operationId,
      anchorId
    };
  }
  if (step.operationId) {
    let sourceName = defaultSource;
    let opId = step.operationId;
    const match = step.operationId.match(/^\$sourceDescriptions\.([A-Za-z0-9_-]+)\.(.+)$/);
    if (match && match[1] && match[2]) {
      sourceName = match[1];
      opId = match[2];
    }
    if (openApiSpec?.paths) {
      for (const [route, pathItem] of Object.entries(openApiSpec.paths)) {
        if (isReference(pathItem)) continue;
        for (const [m2, op] of getPathOperations(pathItem)) {
          if (op.operationId === opId) {
            return {
              kind: "operation",
              sourceName,
              method: m2,
              route,
              operationId: opId,
              anchorId: opId
            };
          }
        }
      }
    }
    if (openApiSpec?.webhooks) {
      for (const [webhookName, pathItem] of Object.entries(openApiSpec.webhooks)) {
        if (isReference(pathItem)) continue;
        for (const [m2, op] of getPathOperations(pathItem)) {
          if (op.operationId === opId) {
            return {
              kind: "operation",
              sourceName,
              method: m2,
              route: webhookName,
              operationId: opId,
              anchorId: opId
            };
          }
        }
      }
    }
    return {
      kind: "operation",
      sourceName,
      operationId: opId,
      anchorId: opId
    };
  }
  return void 0;
}
function generateWorkflowCliPreview(workflow, normalizedSteps, baseUrl = "https://api.example.com") {
  const cleanBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const lines = [`# Workflow: ${workflow.workflowId}`];
  if (workflow.summary) {
    lines.push(`# ${workflow.summary}`);
  }
  if (workflow.dependsOn && workflow.dependsOn.length > 0) {
    lines.push(`# Prerequisites: ${workflow.dependsOn.join(", ")}`);
  }
  for (const [i, ns] of normalizedSteps.entries()) {
    const st2 = ns.step;
    lines.push("");
    lines.push(`# Step ${i + 1}: ${st2.stepId}${st2.description ? ` - ${st2.description}` : ""}`);
    if (ns.linkedTarget?.kind === "workflow") {
      lines.push(`cdd-ctl run-workflow --workflow-id "${ns.linkedTarget.operationId}"`);
      continue;
    }
    if (ns.linkedTarget?.kind === "channel") {
      const action = (st2.action ?? "send").toUpperCase();
      lines.push(`# AsyncAPI ${action} on channel ${ns.linkedTarget.route}`);
      continue;
    }
    const method = (ns.linkedTarget?.method ?? "get").toUpperCase();
    const route = ns.linkedTarget?.route ?? (ns.linkedTarget?.operationId ? `/${ns.linkedTarget.operationId}` : `/${st2.stepId}`);
    const methodFlag = method === "GET" ? "" : `-X ${method} `;
    let cmd = `curl -s ${methodFlag}"${cleanBase}${route}"`;
    for (const p of ns.mergedParameters) {
      if (p.in === "header") {
        const valStr = isSelectorObject(p.value) ? p.value.selector : String(p.value);
        cmd += ` -H "${p.name}: ${valStr}"`;
      }
    }
    if (st2.requestBody) {
      const ct2 = st2.requestBody.contentType || "application/json";
      cmd += ` -H "Content-Type: ${ct2}"`;
      if (st2.requestBody.payload !== void 0) {
        const payloadStr = typeof st2.requestBody.payload === "string" ? st2.requestBody.payload : JSON.stringify(st2.requestBody.payload);
        cmd += ` -d '${payloadStr}'`;
      }
    }
    lines.push(cmd);
  }
  return lines.join("\n");
}
function normalizeArazzoWorkflows(arazzoSpec, openApiSpec) {
  const components = arazzoSpec.components;
  const baseUrl = openApiSpec?.servers?.[0]?.url || "https://api.example.com";
  const dag = buildWorkflowDag(arazzoSpec.workflows, components);
  return arazzoSpec.workflows.map((wf) => {
    const resolvedInputs = resolveWorkflowInputSchema(wf.inputs, components);
    const resolvedParameters = (wf.parameters ?? []).map((p) => resolveArazzoReusableParameter(p, components));
    const resolvedSuccessActions = (wf.successActions ?? []).map((a3) => resolveArazzoSuccessAction(a3, components));
    const resolvedFailureActions = (wf.failureActions ?? []).map((a3) => resolveArazzoFailureAction(a3, components));
    const normalizedSteps = wf.steps.map((st2) => {
      const mergedParameters = mergeWorkflowAndStepParameters(wf.parameters, st2.parameters, components);
      const resolvedOnSuccess = (st2.onSuccess ?? []).map((a3) => resolveArazzoSuccessAction(a3, components));
      const resolvedOnFailure = (st2.onFailure ?? []).map((a3) => resolveArazzoFailureAction(a3, components));
      const linkedTarget = linkStepToOpenApiOperation(st2, openApiSpec, arazzoSpec.sourceDescriptions);
      const upstreamStepIds = extractStepReferencesFromStep(st2, mergedParameters);
      return {
        step: st2,
        mergedParameters,
        resolvedOnSuccess,
        resolvedOnFailure,
        linkedTarget,
        upstreamStepIds
      };
    });
    const cliPreview = generateWorkflowCliPreview(wf, normalizedSteps, baseUrl);
    return {
      workflow: wf,
      resolvedInputs,
      resolvedParameters,
      resolvedSuccessActions,
      resolvedFailureActions,
      normalizedSteps,
      cliPreview,
      stepOrder: dag.stepOrderByWorkflow[wf.workflowId],
      stepEdges: dag.stepEdgesByWorkflow[wf.workflowId],
      hasCycles: dag.hasCycles
    };
  });
}

// src/parser.ts
function isRecord(val) {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}
function isSpecUrl(trimmed, fileExistsCheck) {
  if (!trimmed) return false;
  if (/^https?:\/\//i.test(trimmed)) {
    return true;
  }
  if (fileExistsCheck && fileExistsCheck(trimmed)) return false;
  if (trimmed.startsWith("/")) {
    return true;
  }
  return !trimmed.includes("\n") && !trimmed.startsWith("{") && !trimmed.includes(": ") && /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(trimmed);
}
function normalizeSpecUrl(url) {
  const trimmed = url.trim();
  if (!/^https?:\/\//i.test(trimmed) && !trimmed.startsWith("/")) {
    return "https://" + trimmed;
  }
  return trimmed;
}
function isImportOrPackageLine(trimmed) {
  return /^<\?php\b/.test(trimmed) || /^declare\s*\(\s*strict_types/.test(trimmed) || /^package\s+[A-Za-z0-9_.]+;?$/.test(trimmed) || /^namespace\s+[A-Za-z0-9_\\]+;$/.test(trimmed) || /^#include\s+[<"].+[>"]$/.test(trimmed) || /^import\s+/.test(trimmed) || /^from\s+[A-Za-z0-9_.]+\s+import\s+/.test(trimmed) || /^using\s+[A-Za-z0-9_.]+;$/.test(trimmed) || /^use\s+[A-Za-z0-9_:\\{}*,\s]+;$/.test(trimmed) || /^require(?:_once|_relative)?[\s(]+['"]/.test(trimmed) || /^(?:\.|source)\s+\.?\/[^\s]+$/.test(trimmed);
}
function decomposeFlatCodeString(rawCode) {
  const normalized = rawCode.replace(/\r\n/g, "\n").trim();
  if (!normalized) {
    return { snippet: "" };
  }
  const lines = normalized.split("\n");
  const importLines = [];
  let idx = 0;
  while (idx < lines.length) {
    const line = lines.slice(idx, idx + 1).join("");
    const trimmed = line.trim();
    if (!trimmed) {
      idx++;
      continue;
    }
    if (isImportOrPackageLine(trimmed)) {
      importLines.push(line);
      idx++;
      if (/^import\s*\($/.test(trimmed)) {
        while (idx < lines.length) {
          const impLine = lines.slice(idx, idx + 1).join("");
          importLines.push(impLine);
          idx++;
          if (impLine.trim() === ")") break;
        }
      }
      continue;
    }
    break;
  }
  const bodyLines = lines.slice(idx);
  const wrapperStartLines = [];
  const wrapperEndLines = [];
  if (bodyLines.length >= 3) {
    const firstTrimmed = bodyLines.slice(0, 1).join("").trim();
    const lastTrimmed = bodyLines.slice(-1).join("").trim();
    if (/^(?:async\s+)?def\s+main\s*\(/.test(firstTrimmed)) {
      wrapperStartLines.push(...bodyLines.splice(0, 1));
      if (bodyLines.slice(-1).join("").trim() === "main()") {
        wrapperEndLines.unshift(...bodyLines.splice(-2, 2));
      }
      if (/^\w+\s*=\s*\w*Client\s*\(/.test(bodyLines.slice(0, 1).join("").trim())) {
        wrapperStartLines.push(...bodyLines.splice(0, 1));
      }
    } else if (/^def\s+main\b/.test(firstTrimmed)) {
      wrapperStartLines.push(...bodyLines.splice(0, 1));
      if (/^main\s+if\s+__FILE__\s*==\s*\$0/.test(lastTrimmed)) {
        wrapperEndLines.unshift(...bodyLines.splice(-1, 1));
      }
      while (!bodyLines.slice(-1).join("").trim()) {
        bodyLines.pop();
      }
      wrapperEndLines.unshift(...bodyLines.splice(-1, 1));
      if (/^\w+\s*=\s*\w+\.new\b/.test(bodyLines.slice(0, 1).join("").trim())) {
        wrapperStartLines.push(...bodyLines.splice(0, 1));
      }
    } else if (/^main\s*\(\)\s*\{$/.test(firstTrimmed)) {
      wrapperStartLines.push(...bodyLines.splice(0, 1));
      if (/^main\s+"\$@"$/.test(lastTrimmed)) {
        wrapperEndLines.unshift(...bodyLines.splice(-1, 1));
      }
      while (!bodyLines.slice(-1).join("").trim()) {
        bodyLines.pop();
      }
      wrapperEndLines.unshift(...bodyLines.splice(-1, 1));
    } else if (
      // C / C++ / Go / Rust / Kotlin / TS / Java / C# / Swift brace-delimited main or Example wrapper
      /^(?:int\s+main\s*\(|func\s+main\s*\(|suspend\s+fun\s+main\s*\(|fun\s+main\s*\(|#\[tokio::main\]|async\s+fn\s+main\s*\(|export\s+(?:async\s+)?function\s+(?:execute|ExampleComponent)\s*\(|@Component\b|@main\b|<script\s+setup>|(?:public\s+)?class\s+(?:Example|Program)\b)/.test(
        firstTrimmed
      ) && (lastTrimmed === "}" || lastTrimmed === "<\/script>")
    ) {
      wrapperStartLines.push(...bodyLines.splice(0, 1));
      wrapperEndLines.unshift(...bodyLines.splice(-1, 1));
      while (bodyLines.length >= 3 && /^(?:public\s+static\s+(?:async\s+)?(?:void|Task)\s+Main|public\s+static\s+void\s+main\s*\(|static\s+func\s+main\s*\(|export\s+class\s+\w+|private\s+readonly\s+\w+|async\s+execute\s*\(|async\s+function\s+execute\s*\(|struct\s+Example\b|async\s+fn\s+main\s*\(|try\s*\{)/.test(
        bodyLines.slice(0, 1).join("").trim()
      )) {
        wrapperStartLines.push(...bodyLines.splice(0, 1));
        if (/^\}\s*catch\b/.test(bodyLines.slice(-3, -2).join("").trim())) {
          wrapperEndLines.unshift(...bodyLines.splice(-3, 3));
        } else {
          wrapperEndLines.unshift(...bodyLines.splice(-1, 1));
        }
      }
      if (bodyLines.length >= 2 && /^(?:const|let|var|val|auto|struct\s+\w+)\s+\w+\s*(?:=[^;]+;?|;\s*$)/.test(
        bodyLines.slice(0, 1).join("").trim()
      )) {
        wrapperStartLines.push(...bodyLines.splice(0, 1));
        if (/^api_init\s*\(/.test(bodyLines.slice(0, 1).join("").trim())) {
          wrapperStartLines.push(...bodyLines.splice(0, 1));
        }
      }
      while (bodyLines.length >= 2 && /^(?:return\s+(?:0|CDD_C_SUCCESS)\s*;|Ok\(\(\)\)|api_cleanup\s*\()/.test(
        bodyLines.slice(-1).join("").trim()
      )) {
        wrapperEndLines.unshift(...bodyLines.splice(-1, 1));
      }
    }
  }
  let snippetStr = bodyLines.join("\n").trim();
  if (wrapperStartLines.length > 0) {
    const nonEmptyLines = bodyLines.filter((l) => l.trim().length > 0);
    const minIndent = nonEmptyLines.reduce((min, l) => {
      const trimmedLen = l.trimStart().length;
      return Math.min(min, l.length - trimmedLen);
    }, Infinity);
    snippetStr = bodyLines.map((l) => l.slice(minIndent)).join("\n").trim();
  }
  const result = {
    snippet: snippetStr
  };
  if (importLines.length > 0) {
    result["imports"] = importLines.join("\n").trim();
  }
  if (wrapperStartLines.length > 0) {
    result["wrapper_start"] = wrapperStartLines.join("\n").trim();
  }
  if (wrapperEndLines.length > 0) {
    result["wrapper_end"] = wrapperEndLines.join("\n").trim();
  }
  return result;
}
function isScaffoldingOrNonSnippetFile(filepath) {
  const normalized = filepath.replace(/\\/g, "/").toLowerCase();
  const slashIdx = normalized.lastIndexOf("/");
  const basename = slashIdx !== -1 ? normalized.slice(slashIdx + 1) : normalized;
  if (normalized.startsWith(".github/") || normalized.includes("/.github/") || normalized.includes("/tests/") || normalized.includes("/test/") || normalized.includes("/__tests__/") || normalized.includes("/models/") || normalized.includes("/schemas/")) {
    return true;
  }
  const exactExcludedNames = /* @__PURE__ */ new Set([
    "cargo.toml",
    "cargo.lock",
    "cmakelists.txt",
    "makefile",
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "composer.json",
    "gemfile",
    "build.gradle",
    "build.gradle.kts",
    "settings.gradle",
    "settings.gradle.kts",
    "pom.xml",
    "package.swift",
    "go.mod",
    "go.sum",
    "pyproject.toml",
    "setup.py",
    "requirements.txt",
    "readme.md",
    ".gitignore",
    "dockerfile"
  ]);
  if (exactExcludedNames.has(basename)) {
    return true;
  }
  return /\.(?:md|toml|lock|csproj|sln|ya?ml|spec\.ts|test\.ts)$|(?:_test\.go|_test\.py|test\.java|test\.kt|tests\.cs|tests\.swift)$|^test_/.test(
    basename
  );
}
function extractOperationSnippetFromSdkFile(content, operationId, route, method) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  if (lines.length <= 25) {
    return content;
  }
  const opVariants = [];
  if (operationId) {
    const snake = operationId.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
    const pascal = operationId.charAt(0).toUpperCase() + operationId.slice(1);
    for (const v2 of /* @__PURE__ */ new Set([operationId, snake, pascal])) {
      opVariants.push(v2);
    }
  }
  let matchLineIdx = -1;
  for (const variant of opVariants) {
    const escaped = variant.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const declRegex = new RegExp(
      `(?:\\bfn\\b|\\bfunc\\b|\\bdef\\b|\\bfun\\b|\\bfunction\\b|\\basync\\b|\\bpublic\\b|\\bstatic\\b)\\s+[^\\n]*\\b${escaped}\\b|\\b${escaped}\\s*\\(`,
      "i"
    );
    for (let i = 0; i < lines.length; i++) {
      if (declRegex.test(lines.slice(i, i + 1).join(""))) {
        matchLineIdx = i;
        break;
      }
    }
    if (matchLineIdx !== -1) break;
  }
  if (matchLineIdx === -1) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines.slice(i, i + 1).join("");
      if (line.includes(route)) {
        const windowStart = Math.max(0, i - 6);
        const windowEnd = Math.min(lines.length - 1, i + 6);
        const windowText = lines.slice(windowStart, windowEnd + 1).join("\n").toLowerCase();
        if (windowText.includes(method.toLowerCase())) {
          matchLineIdx = windowStart;
          for (let j = i; j >= windowStart; j--) {
            if (/\b(?:fn|func|def|fun|function|public|async)\b/.test(lines.slice(j, j + 1).join(""))) {
              matchLineIdx = j;
              break;
            }
          }
          break;
        }
      }
    }
  }
  if (matchLineIdx === -1) {
    return null;
  }
  const maxEnd = Math.min(lines.length, matchLineIdx + 15);
  const extracted = [];
  let braceDepth = 0;
  let sawOpenBrace = false;
  for (let i = matchLineIdx; i < maxEnd; i++) {
    const line = lines.slice(i, i + 1).join("");
    extracted.push(line);
    for (const ch of line) {
      if (ch === "{") {
        braceDepth++;
        sawOpenBrace = true;
      } else if (ch === "}") {
        braceDepth--;
      }
    }
    if (sawOpenBrace && braceDepth <= 0) {
      break;
    }
  }
  return extracted.join("\n").trim();
}
function dedentCodeString(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  while (lines.length > 0 && !lines.slice(0, 1).join("").trim()) {
    lines.shift();
  }
  while (lines.length > 0 && !lines.slice(-1).join("").trim()) {
    lines.pop();
  }
  if (lines.length === 0) return "";
  const nonEmptyLines = lines.filter((l) => l.trim().length > 0);
  const minIndent = nonEmptyLines.reduce((min, l) => {
    const trimmedLen = l.trimStart().length;
    return Math.min(min, l.length - trimmedLen);
  }, Infinity);
  return lines.map((l) => l.trim().length > 0 ? l.slice(minIndent) : "").join("\n").trim();
}
function assembleStructuredCodeSnippet(codeRec, includeImports = true, includeWrapping = true) {
  if (typeof codeRec["default"] === "object" && isRecord(codeRec["default"])) {
    return assembleStructuredCodeSnippet(codeRec["default"], includeImports, includeWrapping);
  }
  const parts = [];
  const imports = codeRec["imports"];
  const wrapperStart = codeRec["wrapperStart"] ?? codeRec["wrapper_start"];
  const snippet = codeRec["snippet"] ?? codeRec["code"];
  const wrapperEnd = codeRec["wrapperEnd"] ?? codeRec["wrapper_end"];
  if (includeImports && typeof imports === "string" && imports.trim()) parts.push(imports.trim());
  if (includeWrapping && typeof wrapperStart === "string" && wrapperStart.trim()) parts.push(wrapperStart.trim());
  if (typeof snippet === "string" && snippet.trim()) {
    parts.push(includeWrapping ? snippet.replace(/^\r?\n+|\s+$/g, "") : dedentCodeString(snippet));
  }
  if (includeWrapping && typeof wrapperEnd === "string" && wrapperEnd.trim()) parts.push(wrapperEnd.trim());
  return parts.join("\n");
}
function expandStructuredCodeVariants(codeRec, language, filepath, meta = {}) {
  const targetRec = typeof codeRec["default"] === "object" && isRecord(codeRec["default"]) ? codeRec["default"] : codeRec;
  const hasImports = typeof targetRec["imports"] === "string" && targetRec["imports"].trim().length > 0;
  const wrapperStart = targetRec["wrapperStart"] ?? targetRec["wrapper_start"];
  const wrapperEnd = targetRec["wrapperEnd"] ?? targetRec["wrapper_end"];
  const hasWrapping = typeof wrapperStart === "string" && wrapperStart.trim().length > 0 || typeof wrapperEnd === "string" && wrapperEnd.trim().length > 0;
  if (!hasImports && !hasWrapping) {
    const assembled = assembleStructuredCodeSnippet(targetRec, true, true);
    if (!assembled) return [];
    return [
      {
        language,
        filepath,
        content: assembled,
        includeImports: false,
        includeWrapping: false,
        ...meta
      }
    ];
  }
  const variants = [
    { includeImports: true, includeWrapping: true },
    { includeImports: false, includeWrapping: true },
    { includeImports: true, includeWrapping: false },
    { includeImports: false, includeWrapping: false }
  ];
  const out = [];
  for (const v2 of variants) {
    const assembled = assembleStructuredCodeSnippet(targetRec, v2.includeImports, v2.includeWrapping);
    out.push({
      language,
      filepath,
      content: assembled,
      includeImports: v2.includeImports,
      includeWrapping: v2.includeWrapping,
      ...meta
    });
  }
  return out;
}
function extractExamplesFromCddOutputRecord(rec, lang) {
  const out = [];
  const expandStringOrRecord = (snippet, filepath, meta) => {
    if (typeof snippet === "string") {
      if (!snippet.trim()) {
        return [
          {
            language: lang,
            filepath,
            content: snippet,
            includeImports: false,
            includeWrapping: false,
            ...meta
          }
        ];
      }
      return expandStructuredCodeVariants(decomposeFlatCodeString(snippet), lang, filepath, meta);
    }
    if (isRecord(snippet)) {
      return expandStructuredCodeVariants(snippet, lang, filepath, meta);
    }
    return [];
  };
  const extractRouteMap = (routeMap, isWebhook) => {
    for (const [routePath, methods] of Object.entries(routeMap)) {
      if (!isRecord(methods)) continue;
      for (const [method, snippet] of Object.entries(methods)) {
        const filepath = `${routePath.replace(/[^a-zA-Z0-9]/g, "_")}_${method.toLowerCase()}`;
        const meta = isWebhook ? { webhookName: routePath, method: method.toLowerCase() } : { route: routePath, method: method.toLowerCase() };
        out.push(...expandStringOrRecord(snippet, filepath, meta));
      }
    }
  };
  const extractOperationArray = (ops, isWebhook) => {
    for (const opVal of ops) {
      if (!isRecord(opVal)) continue;
      const opPath = typeof opVal["path"] === "string" ? opVal["path"] : "";
      const opMethod = typeof opVal["method"] === "string" ? opVal["method"] : "";
      const opId = typeof opVal["operationId"] === "string" ? opVal["operationId"] : "";
      const codeField = opVal["code"] ?? opVal;
      if (opMethod.toUpperCase() === "WORKFLOW" || opPath.startsWith("/workflows/")) {
        const wfId = opId || opPath.replace(/^\/workflows\//, "") || "workflow";
        out.push(...expandStringOrRecord(codeField, `workflow_${wfId}`, { workflowId: wfId }));
      } else if (isWebhook) {
        const whName = typeof opVal["webhookName"] === "string" ? opVal["webhookName"] : opPath.replace(/^\/+/, "") || opId;
        const filepath = `webhook_${whName.replace(/[^a-zA-Z0-9]/g, "_")}_${opMethod.toLowerCase()}`;
        out.push(
          ...expandStringOrRecord(codeField, filepath, {
            operationId: opId || void 0,
            webhookName: whName || void 0,
            method: opMethod.toLowerCase() || void 0
          })
        );
      } else {
        const filepath = `${opPath.replace(/[^a-zA-Z0-9]/g, "_")}_${opMethod.toLowerCase()}`;
        out.push(
          ...expandStringOrRecord(codeField, filepath, {
            operationId: opId || void 0,
            route: opPath || void 0,
            method: opMethod.toLowerCase() || void 0
          })
        );
      }
    }
  };
  if (isRecord(rec["endpoints"])) {
    extractRouteMap(rec["endpoints"], false);
  }
  if (Array.isArray(rec["operations"])) {
    extractOperationArray(rec["operations"], false);
  } else if (isRecord(rec["operations"])) {
    for (const [opKey, opVal] of Object.entries(rec["operations"])) {
      if (!isRecord(opVal)) continue;
      const opId = typeof opVal["operationId"] === "string" ? opVal["operationId"] : opKey;
      const opRoute = typeof opVal["path"] === "string" ? opVal["path"] : void 0;
      const opMethod = typeof opVal["method"] === "string" ? opVal["method"] : void 0;
      const codeField = opVal["code"] ?? opVal;
      if (opMethod?.toUpperCase() === "WORKFLOW" || opRoute?.startsWith("/workflows/")) {
        const wfId = opId || (opRoute ? opRoute.replace(/^\/workflows\//, "") : "workflow");
        out.push(...expandStringOrRecord(codeField, `workflow_${wfId}`, { workflowId: wfId }));
      } else {
        const filepath = `op_${opId.replace(/[^a-zA-Z0-9]/g, "_")}`;
        const meta = {
          operationId: opId,
          route: opRoute,
          method: opMethod?.toLowerCase()
        };
        out.push(...expandStringOrRecord(codeField, filepath, meta));
      }
    }
  }
  if (Array.isArray(rec["webhooks"])) {
    extractOperationArray(rec["webhooks"], true);
  } else if (isRecord(rec["webhooks"])) {
    extractRouteMap(rec["webhooks"], true);
  }
  if (Array.isArray(rec["workflows"])) {
    for (const wfItem of rec["workflows"]) {
      if (!isRecord(wfItem)) continue;
      const wfId = typeof wfItem["workflowId"] === "string" ? wfItem["workflowId"] : typeof wfItem["operationId"] === "string" ? wfItem["operationId"] : "";
      if (!wfId) continue;
      const codeField = wfItem["code"] ?? wfItem;
      out.push(...expandStringOrRecord(codeField, `workflow_${wfId}`, { workflowId: wfId }));
    }
  } else if (isRecord(rec["workflows"])) {
    for (const [wfId, snippet] of Object.entries(rec["workflows"])) {
      const filepath = `workflow_${wfId}`;
      const meta = { workflowId: wfId };
      out.push(...expandStringOrRecord(snippet, filepath, meta));
    }
  }
  return out;
}
function toJsonValue(val) {
  if (val === null || typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
    return val;
  }
  if (Array.isArray(val)) {
    return val.map(toJsonValue);
  }
  if (isRecord(val)) {
    const out = {};
    for (const [k, v2] of Object.entries(val)) {
      if (v2 !== void 0) {
        out[k] = toJsonValue(v2);
      }
    }
    return out;
  }
  return String(val);
}
function parseInfo(obj) {
  if (!isRecord(obj)) throw new Error("Missing info object");
  return {
    title: String(obj["title"] || ""),
    summary: obj["summary"] ? String(obj["summary"]) : void 0,
    description: obj["description"] ? String(obj["description"]) : void 0,
    termsOfService: obj["termsOfService"] ? String(obj["termsOfService"]) : void 0,
    contact: isRecord(obj["contact"]) ? parseContact(obj["contact"]) : void 0,
    license: isRecord(obj["license"]) ? parseLicense(obj["license"]) : void 0,
    version: String(obj["version"] || "")
  };
}
function parseContact(obj) {
  const rec = isRecord(obj) ? obj : {};
  return {
    name: rec["name"] ? String(rec["name"]) : void 0,
    url: rec["url"] ? String(rec["url"]) : void 0,
    email: rec["email"] ? String(rec["email"]) : void 0
  };
}
function parseLicense(obj) {
  const rec = isRecord(obj) ? obj : {};
  return {
    name: String(rec["name"] || ""),
    identifier: rec["identifier"] ? String(rec["identifier"]) : void 0,
    url: rec["url"] ? String(rec["url"]) : void 0
  };
}
function parseServerVariable(obj) {
  const rec = isRecord(obj) ? obj : {};
  return {
    enum: Array.isArray(rec["enum"]) ? rec["enum"].map(String) : void 0,
    default: String(rec["default"] || ""),
    description: rec["description"] ? String(rec["description"]) : void 0
  };
}
function parseServer(obj) {
  const rec = isRecord(obj) ? obj : {};
  const server = {
    url: String(rec["url"] || "")
  };
  if (rec["description"]) server.description = String(rec["description"]);
  const variables = rec["variables"];
  if (isRecord(variables)) {
    server.variables = {};
    for (const [k, v2] of Object.entries(variables)) {
      server.variables[k] = parseServerVariable(v2);
    }
  }
  return server;
}
function parseReference(obj) {
  const rec = isRecord(obj) ? obj : {};
  return {
    $ref: String(rec["$ref"] || ""),
    summary: rec["summary"] ? String(rec["summary"]) : void 0,
    description: rec["description"] ? String(rec["description"]) : void 0
  };
}
function isReference(obj) {
  return isRecord(obj) && typeof obj["$ref"] === "string";
}
function parseDiscriminator(obj) {
  const disc = {
    propertyName: String(obj["propertyName"] || "")
  };
  const mapping = obj["mapping"];
  if (isRecord(mapping)) {
    disc.mapping = {};
    for (const [k, v2] of Object.entries(mapping)) {
      disc.mapping[k] = String(v2);
    }
  }
  if (obj["defaultMapping"] !== void 0) {
    disc.defaultMapping = String(obj["defaultMapping"]);
  }
  return disc;
}
function parseXml(obj) {
  return {
    name: obj["name"] ? String(obj["name"]) : void 0,
    namespace: obj["namespace"] ? String(obj["namespace"]) : void 0,
    prefix: obj["prefix"] ? String(obj["prefix"]) : void 0,
    attribute: typeof obj["attribute"] === "boolean" ? obj["attribute"] : void 0,
    wrapped: typeof obj["wrapped"] === "boolean" ? obj["wrapped"] : void 0,
    nodeType: obj["nodeType"] ? String(obj["nodeType"]) : void 0
  };
}
function parseSchema(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  const schema = {};
  if (rec["type"]) schema.type = String(rec["type"]);
  if (rec["description"]) schema.description = String(rec["description"]);
  if (rec["format"]) schema.format = String(rec["format"]);
  if (rec["title"]) schema.title = String(rec["title"]);
  if (typeof rec["multipleOf"] === "number") schema.multipleOf = rec["multipleOf"];
  if (typeof rec["maximum"] === "number") schema.maximum = rec["maximum"];
  if (typeof rec["exclusiveMaximum"] === "boolean") schema.exclusiveMaximum = rec["exclusiveMaximum"];
  if (typeof rec["minimum"] === "number") schema.minimum = rec["minimum"];
  if (typeof rec["exclusiveMinimum"] === "boolean") schema.exclusiveMinimum = rec["exclusiveMinimum"];
  if (typeof rec["maxLength"] === "number") schema.maxLength = rec["maxLength"];
  if (typeof rec["minLength"] === "number") schema.minLength = rec["minLength"];
  if (rec["pattern"]) schema.pattern = String(rec["pattern"]);
  if (typeof rec["maxItems"] === "number") schema.maxItems = rec["maxItems"];
  if (typeof rec["minItems"] === "number") schema.minItems = rec["minItems"];
  if (typeof rec["uniqueItems"] === "boolean") schema.uniqueItems = rec["uniqueItems"];
  if (typeof rec["maxProperties"] === "number") schema.maxProperties = rec["maxProperties"];
  if (typeof rec["minProperties"] === "number") schema.minProperties = rec["minProperties"];
  if (Array.isArray(rec["required"])) schema.required = rec["required"].map(String);
  if (Array.isArray(rec["enum"])) schema.enum = rec["enum"].map(toJsonValue);
  if (Array.isArray(rec["allOf"])) schema.allOf = rec["allOf"].map(parseSchema);
  if (Array.isArray(rec["oneOf"])) schema.oneOf = rec["oneOf"].map(parseSchema);
  if (Array.isArray(rec["anyOf"])) schema.anyOf = rec["anyOf"].map(parseSchema);
  if (rec["not"]) schema.not = parseSchema(rec["not"]);
  if (rec["items"]) schema.items = parseSchema(rec["items"]);
  const properties = rec["properties"];
  if (isRecord(properties)) {
    schema.properties = {};
    for (const [k, v2] of Object.entries(properties)) {
      schema.properties[k] = parseSchema(v2);
    }
  }
  const additionalProps = rec["additionalProperties"];
  if (additionalProps !== void 0) {
    schema.additionalProperties = typeof additionalProps === "boolean" ? additionalProps : parseSchema(additionalProps);
  }
  if (rec["default"] !== void 0) schema.default = toJsonValue(rec["default"]);
  if (typeof rec["nullable"] === "boolean") schema.nullable = rec["nullable"];
  if (typeof rec["readOnly"] === "boolean") schema.readOnly = rec["readOnly"];
  if (typeof rec["writeOnly"] === "boolean") schema.writeOnly = rec["writeOnly"];
  if (rec["example"] !== void 0) schema.example = toJsonValue(rec["example"]);
  if (typeof rec["deprecated"] === "boolean") schema.deprecated = rec["deprecated"];
  const disc = rec["discriminator"];
  if (isRecord(disc)) {
    schema.discriminator = parseDiscriminator(disc);
  }
  const xml = rec["xml"];
  if (isRecord(xml)) {
    schema.xml = parseXml(xml);
  }
  if (rec["externalDocs"]) schema.externalDocs = parseExternalDocs(rec["externalDocs"]);
  return schema;
}
function parseExample(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  return {
    summary: rec["summary"] ? String(rec["summary"]) : void 0,
    description: rec["description"] ? String(rec["description"]) : void 0,
    value: rec["value"] !== void 0 ? toJsonValue(rec["value"]) : void 0,
    externalValue: rec["externalValue"] ? String(rec["externalValue"]) : void 0
  };
}
function parseHeader(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  const header = {};
  if (rec["description"]) header.description = String(rec["description"]);
  if (typeof rec["required"] === "boolean") header.required = rec["required"];
  if (typeof rec["deprecated"] === "boolean") header.deprecated = rec["deprecated"];
  if (rec["schema"]) header.schema = parseSchema(rec["schema"]);
  if (rec["example"] !== void 0) header.example = toJsonValue(rec["example"]);
  return header;
}
function parseEncoding(obj) {
  const rec = isRecord(obj) ? obj : {};
  const encoding = {};
  if (rec["contentType"]) encoding.contentType = String(rec["contentType"]);
  const headers = rec["headers"];
  if (isRecord(headers)) {
    encoding.headers = {};
    for (const [k, v2] of Object.entries(headers)) {
      encoding.headers[k] = parseHeader(v2);
    }
  }
  if (rec["style"]) encoding.style = String(rec["style"]);
  if (typeof rec["explode"] === "boolean") encoding.explode = rec["explode"];
  if (typeof rec["allowReserved"] === "boolean") encoding.allowReserved = rec["allowReserved"];
  const prefixEncoding = rec["prefixEncoding"];
  if (isRecord(prefixEncoding)) {
    encoding.prefixEncoding = {};
    for (const [k, v2] of Object.entries(prefixEncoding)) {
      encoding.prefixEncoding[k] = parseEncoding(v2);
    }
  }
  const itemEncoding = rec["itemEncoding"];
  if (isRecord(itemEncoding)) {
    encoding.itemEncoding = {};
    for (const [k, v2] of Object.entries(itemEncoding)) {
      encoding.itemEncoding[k] = parseEncoding(v2);
    }
  }
  return encoding;
}
function parseMediaType(obj) {
  const rec = isRecord(obj) ? obj : {};
  const mt2 = {};
  if (rec["schema"]) mt2.schema = parseSchema(rec["schema"]);
  if (rec["itemSchema"]) mt2.itemSchema = parseSchema(rec["itemSchema"]);
  if (rec["example"] !== void 0) mt2.example = toJsonValue(rec["example"]);
  const examples = rec["examples"];
  if (isRecord(examples)) {
    mt2.examples = {};
    for (const [k, v2] of Object.entries(examples)) {
      mt2.examples[k] = parseExample(v2);
    }
  }
  const encoding = rec["encoding"];
  if (isRecord(encoding)) {
    mt2.encoding = {};
    for (const [k, v2] of Object.entries(encoding)) {
      mt2.encoding[k] = parseEncoding(v2);
    }
  }
  const prefixEncoding = rec["prefixEncoding"];
  if (isRecord(prefixEncoding)) {
    mt2.prefixEncoding = {};
    for (const [k, v2] of Object.entries(prefixEncoding)) {
      mt2.prefixEncoding[k] = parseEncoding(v2);
    }
  }
  const itemEncoding = rec["itemEncoding"];
  if (isRecord(itemEncoding)) {
    mt2.itemEncoding = {};
    for (const [k, v2] of Object.entries(itemEncoding)) {
      mt2.itemEncoding[k] = parseEncoding(v2);
    }
  }
  return mt2;
}
function parseRequestBody(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  const rb = { content: {} };
  if (rec["description"]) rb.description = String(rec["description"]);
  if (typeof rec["required"] === "boolean") rb.required = rec["required"];
  const content = rec["content"];
  if (isRecord(content)) {
    for (const [k, v2] of Object.entries(content)) {
      rb.content[k] = parseMediaType(v2);
    }
  }
  return rb;
}
function isParameterIn(val) {
  return val === "query" || val === "header" || val === "path" || val === "cookie";
}
function parseParameter(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  const inVal = rec["in"];
  const param = {
    name: String(rec["name"] || "Unknown"),
    in: isParameterIn(inVal) ? inVal : "query"
  };
  if (rec["description"]) param.description = String(rec["description"]);
  if (typeof rec["required"] === "boolean") param.required = rec["required"];
  if (typeof rec["deprecated"] === "boolean") param.deprecated = rec["deprecated"];
  if (typeof rec["allowEmptyValue"] === "boolean") param.allowEmptyValue = rec["allowEmptyValue"];
  if (rec["style"]) param.style = String(rec["style"]);
  if (typeof rec["explode"] === "boolean") param.explode = rec["explode"];
  if (typeof rec["allowReserved"] === "boolean") param.allowReserved = rec["allowReserved"];
  if (rec["schema"]) param.schema = parseSchema(rec["schema"]);
  if (rec["example"] !== void 0) param.example = toJsonValue(rec["example"]);
  const examples = rec["examples"];
  if (isRecord(examples)) {
    param.examples = {};
    for (const [k, v2] of Object.entries(examples)) {
      param.examples[k] = parseExample(v2);
    }
  }
  const content = rec["content"];
  if (isRecord(content)) {
    param.content = {};
    for (const [k, v2] of Object.entries(content)) {
      param.content[k] = parseMediaType(v2);
    }
  }
  return param;
}
function parseLink(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  const link = {};
  if (rec["operationRef"]) link.operationRef = String(rec["operationRef"]);
  if (rec["operationId"]) link.operationId = String(rec["operationId"]);
  const parameters = rec["parameters"];
  if (isRecord(parameters)) {
    link.parameters = {};
    for (const [k, v2] of Object.entries(parameters)) {
      link.parameters[k] = toJsonValue(v2);
    }
  }
  if (rec["requestBody"] !== void 0) link.requestBody = toJsonValue(rec["requestBody"]);
  if (rec["description"]) link.description = String(rec["description"]);
  if (rec["server"]) link.server = parseServer(rec["server"]);
  return link;
}
function parseResponse(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  const resp = {
    description: String(rec["description"] || "")
  };
  const headers = rec["headers"];
  if (isRecord(headers)) {
    resp.headers = {};
    for (const [k, v2] of Object.entries(headers)) {
      resp.headers[k] = parseHeader(v2);
    }
  }
  const content = rec["content"];
  if (isRecord(content)) {
    resp.content = {};
    for (const [k, v2] of Object.entries(content)) {
      resp.content[k] = parseMediaType(v2);
    }
  }
  const links = rec["links"];
  if (isRecord(links)) {
    resp.links = {};
    for (const [k, v2] of Object.entries(links)) {
      resp.links[k] = parseLink(v2);
    }
  }
  return resp;
}
function parseResponses(obj) {
  const rec = isRecord(obj) ? obj : {};
  const responses = {};
  for (const [k, v2] of Object.entries(rec)) {
    if (k === "default") {
      responses.default = parseResponse(v2);
    } else {
      responses[k] = parseResponse(v2);
    }
  }
  return responses;
}
function parseCallback(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  const cb = {};
  for (const [k, v2] of Object.entries(rec)) {
    cb[k] = parsePathItem(v2);
  }
  return cb;
}
function parseExternalDocs(obj) {
  const rec = isRecord(obj) ? obj : {};
  return {
    url: String(rec["url"] || ""),
    description: rec["description"] ? String(rec["description"]) : void 0
  };
}
function parseSecurityRequirement(obj) {
  const rec = isRecord(obj) ? obj : {};
  const req = {};
  for (const [k, v2] of Object.entries(rec)) {
    req[k] = Array.isArray(v2) ? v2.map(String) : [];
  }
  return req;
}
function parseOperation(obj) {
  const rec = isRecord(obj) ? obj : {};
  const op = {};
  if (Array.isArray(rec["tags"])) op.tags = rec["tags"].map(String);
  if (rec["summary"]) op.summary = String(rec["summary"]);
  if (rec["description"]) op.description = String(rec["description"]);
  if (rec["externalDocs"]) op.externalDocs = parseExternalDocs(rec["externalDocs"]);
  if (rec["operationId"]) op.operationId = String(rec["operationId"]);
  if (Array.isArray(rec["parameters"])) op.parameters = rec["parameters"].map(parseParameter);
  if (rec["requestBody"]) op.requestBody = parseRequestBody(rec["requestBody"]);
  if (rec["responses"]) op.responses = parseResponses(rec["responses"]);
  const callbacks = rec["callbacks"];
  if (isRecord(callbacks)) {
    op.callbacks = {};
    for (const [k, v2] of Object.entries(callbacks)) {
      op.callbacks[k] = parseCallback(v2);
    }
  }
  if (typeof rec["deprecated"] === "boolean") op.deprecated = rec["deprecated"];
  if (Array.isArray(rec["security"])) op.security = rec["security"].map(parseSecurityRequirement);
  if (Array.isArray(rec["servers"])) op.servers = rec["servers"].map(parseServer);
  return op;
}
function parsePathItem(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  const item = {};
  if (rec["summary"]) item.summary = String(rec["summary"]);
  if (rec["description"]) item.description = String(rec["description"]);
  if (rec["get"]) item.get = parseOperation(rec["get"]);
  if (rec["put"]) item.put = parseOperation(rec["put"]);
  if (rec["post"]) item.post = parseOperation(rec["post"]);
  if (rec["delete"]) item.delete = parseOperation(rec["delete"]);
  if (rec["options"]) item.options = parseOperation(rec["options"]);
  if (rec["head"]) item.head = parseOperation(rec["head"]);
  if (rec["patch"]) item.patch = parseOperation(rec["patch"]);
  if (rec["trace"]) item.trace = parseOperation(rec["trace"]);
  if (rec["query"]) item.query = parseOperation(rec["query"]);
  const additionalOps = rec["additionalOperations"];
  if (isRecord(additionalOps)) {
    item.additionalOperations = {};
    for (const [k, v2] of Object.entries(additionalOps)) {
      item.additionalOperations[k] = parseOperation(v2);
    }
  }
  if (Array.isArray(rec["servers"])) item.servers = rec["servers"].map(parseServer);
  if (Array.isArray(rec["parameters"])) item.parameters = rec["parameters"].map(parseParameter);
  return item;
}
function parsePaths(obj) {
  const rec = isRecord(obj) ? obj : {};
  const paths = {};
  for (const [k, v2] of Object.entries(rec)) {
    if (k.startsWith("/")) {
      paths[k] = parsePathItem(v2);
    }
  }
  return paths;
}
function parseOAuthFlow(obj) {
  const rec = isRecord(obj) ? obj : {};
  const flow = { scopes: {} };
  if (rec["authorizationUrl"]) flow.authorizationUrl = String(rec["authorizationUrl"]);
  if (rec["tokenUrl"]) flow.tokenUrl = String(rec["tokenUrl"]);
  if (rec["refreshUrl"]) flow.refreshUrl = String(rec["refreshUrl"]);
  if (rec["deviceAuthorizationUrl"]) flow.deviceAuthorizationUrl = String(rec["deviceAuthorizationUrl"]);
  const scopes = rec["scopes"];
  if (isRecord(scopes)) {
    for (const [k, v2] of Object.entries(scopes)) {
      flow.scopes[k] = String(v2);
    }
  }
  return flow;
}
function isSecuritySchemeType(val) {
  return val === "apiKey" || val === "http" || val === "mutualTLS" || val === "oauth2" || val === "openIdConnect";
}
function isSecuritySchemeIn(val) {
  return val === "query" || val === "header" || val === "cookie";
}
function parseSecurityScheme(obj) {
  if (isReference(obj)) return parseReference(obj);
  const rec = isRecord(obj) ? obj : {};
  const typeVal = rec["type"];
  const scheme = {
    type: isSecuritySchemeType(typeVal) ? typeVal : "http"
  };
  if (rec["description"]) scheme.description = String(rec["description"]);
  if (rec["name"]) scheme.name = String(rec["name"]);
  const inVal = rec["in"];
  if (isSecuritySchemeIn(inVal)) scheme.in = inVal;
  if (rec["scheme"]) scheme.scheme = String(rec["scheme"]);
  if (rec["bearerFormat"]) scheme.bearerFormat = String(rec["bearerFormat"]);
  if (rec["openIdConnectUrl"]) scheme.openIdConnectUrl = String(rec["openIdConnectUrl"]);
  if (rec["oauth2MetadataUrl"]) scheme.oauth2MetadataUrl = String(rec["oauth2MetadataUrl"]);
  const flows = rec["flows"];
  if (isRecord(flows)) {
    const parsedFlows = {};
    if (flows["implicit"]) parsedFlows.implicit = parseOAuthFlow(flows["implicit"]);
    if (flows["password"]) parsedFlows.password = parseOAuthFlow(flows["password"]);
    if (flows["clientCredentials"]) parsedFlows.clientCredentials = parseOAuthFlow(flows["clientCredentials"]);
    if (flows["authorizationCode"]) parsedFlows.authorizationCode = parseOAuthFlow(flows["authorizationCode"]);
    if (flows["deviceAuthorization"])
      parsedFlows.deviceAuthorization = parseOAuthFlow(flows["deviceAuthorization"]);
    scheme.flows = parsedFlows;
  }
  return scheme;
}
function parseComponents(obj) {
  const rec = isRecord(obj) ? obj : {};
  const comp = {};
  const schemas = rec["schemas"];
  if (isRecord(schemas)) {
    comp.schemas = {};
    for (const [k, v2] of Object.entries(schemas)) comp.schemas[k] = parseSchema(v2);
  }
  const responses = rec["responses"];
  if (isRecord(responses)) {
    comp.responses = {};
    for (const [k, v2] of Object.entries(responses)) comp.responses[k] = parseResponse(v2);
  }
  const parameters = rec["parameters"];
  if (isRecord(parameters)) {
    comp.parameters = {};
    for (const [k, v2] of Object.entries(parameters)) comp.parameters[k] = parseParameter(v2);
  }
  const examples = rec["examples"];
  if (isRecord(examples)) {
    comp.examples = {};
    for (const [k, v2] of Object.entries(examples)) comp.examples[k] = parseExample(v2);
  }
  const requestBodies = rec["requestBodies"];
  if (isRecord(requestBodies)) {
    comp.requestBodies = {};
    for (const [k, v2] of Object.entries(requestBodies)) comp.requestBodies[k] = parseRequestBody(v2);
  }
  const headers = rec["headers"];
  if (isRecord(headers)) {
    comp.headers = {};
    for (const [k, v2] of Object.entries(headers)) comp.headers[k] = parseHeader(v2);
  }
  const securitySchemes = rec["securitySchemes"];
  if (isRecord(securitySchemes)) {
    comp.securitySchemes = {};
    for (const [k, v2] of Object.entries(securitySchemes)) comp.securitySchemes[k] = parseSecurityScheme(v2);
  }
  const links = rec["links"];
  if (isRecord(links)) {
    comp.links = {};
    for (const [k, v2] of Object.entries(links)) comp.links[k] = parseLink(v2);
  }
  const callbacks = rec["callbacks"];
  if (isRecord(callbacks)) {
    comp.callbacks = {};
    for (const [k, v2] of Object.entries(callbacks)) comp.callbacks[k] = parseCallback(v2);
  }
  const pathItems = rec["pathItems"];
  if (isRecord(pathItems)) {
    comp.pathItems = {};
    for (const [k, v2] of Object.entries(pathItems)) comp.pathItems[k] = parsePathItem(v2);
  }
  const mediaTypes = rec["mediaTypes"];
  if (isRecord(mediaTypes)) {
    comp.mediaTypes = {};
    for (const [k, v2] of Object.entries(mediaTypes)) comp.mediaTypes[k] = parseMediaType(v2);
  }
  return comp;
}
function parseTag(obj) {
  const rec = isRecord(obj) ? obj : {};
  const tag = { name: String(rec["name"] || "Unknown") };
  if (rec["summary"]) tag.summary = String(rec["summary"]);
  if (rec["description"]) tag.description = String(rec["description"]);
  if (rec["externalDocs"]) tag.externalDocs = parseExternalDocs(rec["externalDocs"]);
  if (rec["parent"]) tag.parent = String(rec["parent"]);
  if (rec["kind"]) tag.kind = String(rec["kind"]);
  return tag;
}
function normalizeSpec(specContent, companionArazzoContent) {
  let parsed;
  try {
    parsed = load(specContent);
  } catch {
    throw new Error("Invalid OpenAPI specification format.");
  }
  if (!isRecord(parsed)) {
    throw new Error("Invalid OpenAPI specification format.");
  }
  if (isArazzoSpec(parsed)) {
    const arazzoSpec = parseArazzoSpec(specContent);
    const workflows = normalizeArazzoWorkflows(arazzoSpec);
    const workflowDag = buildWorkflowDag(arazzoSpec);
    const spec2 = {
      openapi: "3.2.0",
      info: {
        title: arazzoSpec.info.title,
        summary: arazzoSpec.info.summary,
        description: arazzoSpec.info.description,
        version: arazzoSpec.info.version
      }
    };
    if (arazzoSpec.$self) {
      spec2.$self = arazzoSpec.$self;
    }
    return {
      specKind: "arazzo",
      spec: spec2,
      codeExamples: {},
      arazzoSpec,
      workflows,
      sourceDescriptions: arazzoSpec.sourceDescriptions,
      workflowCodeExamples: {},
      workflowDag
    };
  }
  transformSwagger2ToOpenAPI3(parsed);
  const spec = {
    openapi: String(parsed["openapi"] || "3.2.0"),
    info: parseInfo(parsed["info"])
  };
  if (parsed["$self"]) spec.$self = String(parsed["$self"]);
  if (parsed["jsonSchemaDialect"]) spec.jsonSchemaDialect = String(parsed["jsonSchemaDialect"]);
  if (Array.isArray(parsed["servers"])) spec.servers = parsed["servers"].map(parseServer);
  if (isRecord(parsed["paths"])) spec.paths = parsePaths(parsed["paths"]);
  const webhooks = parsed["webhooks"];
  if (isRecord(webhooks)) {
    spec.webhooks = {};
    for (const [k, v2] of Object.entries(webhooks)) {
      spec.webhooks[k] = parsePathItem(v2);
    }
  }
  if (isRecord(parsed["components"])) {
    spec.components = parseComponents(parsed["components"]);
  }
  if (Array.isArray(parsed["security"])) {
    spec.security = parsed["security"].map(parseSecurityRequirement);
  }
  if (Array.isArray(parsed["tags"])) {
    spec.tags = parsed["tags"].map(parseTag);
  }
  if (parsed["externalDocs"]) {
    spec.externalDocs = parseExternalDocs(parsed["externalDocs"]);
  }
  if (companionArazzoContent && companionArazzoContent.trim()) {
    const arazzoSpec = parseArazzoSpec(companionArazzoContent);
    const workflows = normalizeArazzoWorkflows(arazzoSpec, spec);
    const workflowDag = buildWorkflowDag(arazzoSpec);
    return {
      specKind: "combined",
      spec,
      codeExamples: {},
      arazzoSpec,
      workflows,
      sourceDescriptions: arazzoSpec.sourceDescriptions,
      workflowCodeExamples: {},
      workflowDag
    };
  }
  return {
    specKind: "openapi",
    spec,
    codeExamples: {}
  };
}
function getPathOperations(pathItem) {
  const entries = [];
  for (const m2 of STANDARD_HTTP_METHODS) {
    const op = pathItem[m2];
    if (op) {
      entries.push([m2, op]);
    }
  }
  if (pathItem.additionalOperations) {
    for (const [customMethod, op] of Object.entries(pathItem.additionalOperations)) {
      entries.push([customMethod.toLowerCase(), op]);
    }
  }
  return entries;
}
function mapSdkExamples(docData, generatedFiles) {
  const operationMap = {};
  if (docData.spec.paths) {
    for (const [route, pathItem] of Object.entries(docData.spec.paths)) {
      if (isReference(pathItem)) continue;
      for (const [method, op] of getPathOperations(pathItem)) {
        const id = op.operationId || `${method}-${route}`;
        operationMap[id] = { route, method, op, isWebhook: false };
      }
    }
  }
  if (docData.spec.webhooks) {
    for (const [webhookName, pathItem] of Object.entries(docData.spec.webhooks)) {
      if (isReference(pathItem)) continue;
      for (const [method, op] of getPathOperations(pathItem)) {
        const id = op.operationId || `webhook-${method}-${webhookName}`;
        operationMap[id] = { route: webhookName, method, op, isWebhook: true };
      }
    }
  }
  const operations = Object.entries(operationMap);
  const operationsByOpIdLength = [...operations].sort(
    (a3, b) => (b[1].op.operationId?.length ?? 0) - (a3[1].op.operationId?.length ?? 0)
  );
  const operationsByRouteLength = [...operations].sort((a3, b) => b[1].route.length - a3[1].route.length);
  const workflows = docData.workflows ?? [];
  const workflowsByIdLength = [...workflows].sort(
    (a3, b) => b.workflow.workflowId.length - a3.workflow.workflowId.length
  );
  const upsertExample = (list, item) => {
    const exists = list.some(
      (ex) => ex.language === item.language && ex.includeImports === item.includeImports && ex.includeWrapping === item.includeWrapping
    );
    if (!exists) {
      list.push(item);
    }
  };
  for (const file of generatedFiles) {
    if (!file.operationId && !file.route && !file.webhookName && !file.workflowId && isScaffoldingOrNonSnippetFile(file.filepath)) {
      continue;
    }
    const normalizedFilepath = file.filepath.toLowerCase();
    if (workflows.length > 0) {
      let matchedWfId = null;
      if (file.workflowId && workflows.some((nw) => nw.workflow.workflowId === file.workflowId)) {
        matchedWfId = file.workflowId;
      } else {
        for (const nw of workflowsByIdLength) {
          const wfId = nw.workflow.workflowId;
          const wfSlug = wfId.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          if (normalizedFilepath === `workflow_${wfId.toLowerCase()}` || normalizedFilepath === `workflow_${wfSlug}` || normalizedFilepath.includes(`_workflows_${wfSlug}`) || normalizedFilepath.includes(wfId.toLowerCase())) {
            matchedWfId = wfId;
            break;
          }
        }
      }
      if (matchedWfId) {
        if (!docData.workflowCodeExamples) {
          docData.workflowCodeExamples = {};
        }
        const list = docData.workflowCodeExamples[matchedWfId] ?? [];
        upsertExample(list, file);
        docData.workflowCodeExamples[matchedWfId] = list;
        continue;
      }
    }
    if (operations.length === 0) continue;
    let matchedId = null;
    const targetRouteOrWh = file.webhookName || file.route;
    if (file.operationId && operationMap[file.operationId]) {
      matchedId = file.operationId;
    } else if (targetRouteOrWh && file.method) {
      const targetRoute = targetRouteOrWh.replace(/^\/+/, "");
      for (const [id, info] of operations) {
        const normalizedInfoRoute = info.route.replace(/^\/+/, "");
        if ((!file.webhookName || info.isWebhook) && normalizedInfoRoute === targetRoute && info.method === file.method.toLowerCase()) {
          matchedId = id;
          break;
        }
      }
    }
    if (!matchedId) {
      for (const [id, info] of operationsByOpIdLength) {
        if (info.op.operationId && normalizedFilepath.includes(info.op.operationId.toLowerCase())) {
          matchedId = id;
          break;
        }
      }
    }
    if (!matchedId) {
      for (const [id, info] of operationsByRouteLength) {
        const routeSlug = info.route.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
        if (normalizedFilepath.includes(routeSlug) && normalizedFilepath.includes(info.method.toLowerCase())) {
          matchedId = id;
          break;
        }
      }
    }
    if (matchedId) {
      const matchedInfo = operationMap[matchedId];
      let fileToStore = file;
      if (matchedInfo && file.content.split("\n").length > 25) {
        const sliced = extractOperationSnippetFromSdkFile(
          file.content,
          matchedInfo.op.operationId,
          matchedInfo.route,
          matchedInfo.method
        );
        fileToStore = { ...file, content: sliced ?? file.content };
      }
      const list = docData.codeExamples[matchedId] ?? [];
      upsertExample(list, fileToStore);
      docData.codeExamples[matchedId] = list;
    } else if (file.content.split("\n").length > 1) {
      for (const [id, info] of operations) {
        const sliced = extractOperationSnippetFromSdkFile(
          file.content,
          info.op.operationId,
          info.route,
          info.method
        );
        if (sliced) {
          const list = docData.codeExamples[id] ?? [];
          upsertExample(list, {
            ...file,
            content: sliced,
            operationId: id,
            route: info.route,
            method: info.method
          });
          docData.codeExamples[id] = list;
        }
      }
    }
  }
}

// src/highlighter.ts
function escapeTokenHtml(raw) {
  return raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function normalizeSyntaxLanguage(language) {
  const clean = language.trim().toLowerCase();
  switch (clean) {
    case "c":
      return "c";
    case "cpp":
    case "c++":
    case "cxx":
      return "cpp";
    case "csharp":
    case "cs":
    case "c#":
    case "dotnet":
      return "csharp";
    case "go":
    case "golang":
      return "go";
    case "java":
      return "java";
    case "kotlin":
    case "kt":
      return "kotlin";
    case "php":
      return "php";
    case "python":
    case "python-all":
    case "py":
      return "python";
    case "ruby":
    case "rb":
      return "ruby";
    case "rust":
    case "rs":
      return "rust";
    case "sh":
    case "bash":
    case "shell":
    case "zsh":
    case "curl":
      return "sh";
    case "swift":
      return "swift";
    case "json":
      return "json";
    case "ts":
    case "typescript":
    case "js":
    case "javascript":
    default:
      return "ts";
  }
}
var LANGUAGE_KEYWORDS = {
  c: /* @__PURE__ */ new Set([
    "auto",
    "break",
    "case",
    "const",
    "continue",
    "default",
    "do",
    "else",
    "enum",
    "extern",
    "for",
    "goto",
    "if",
    "inline",
    "register",
    "restrict",
    "return",
    "sizeof",
    "static",
    "struct",
    "switch",
    "typedef",
    "union",
    "volatile",
    "while",
    "NULL"
  ]),
  cpp: /* @__PURE__ */ new Set([
    "alignas",
    "alignof",
    "auto",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "constexpr",
    "continue",
    "co_await",
    "co_return",
    "co_yield",
    "decltype",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "for",
    "friend",
    "goto",
    "if",
    "inline",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "nullptr",
    "operator",
    "override",
    "private",
    "protected",
    "public",
    " return",
    "return",
    "sizeof",
    "static",
    "static_cast",
    "struct",
    "switch",
    "template",
    "this",
    "throw",
    "true",
    "try",
    "typedef",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while"
  ]),
  csharp: /* @__PURE__ */ new Set([
    "abstract",
    "as",
    "async",
    "await",
    "base",
    "break",
    "case",
    "catch",
    "checked",
    "class",
    "const",
    "continue",
    "default",
    "delegate",
    "do",
    "else",
    "enum",
    "event",
    "explicit",
    "extern",
    "false",
    "finally",
    "fixed",
    "for",
    "foreach",
    "goto",
    "if",
    "implicit",
    "in",
    "interface",
    "internal",
    "is",
    "lock",
    "namespace",
    "new",
    "null",
    "operator",
    "out",
    "override",
    "params",
    "private",
    "protected",
    "public",
    "readonly",
    "record",
    "ref",
    "return",
    "sealed",
    "sizeof",
    "stackalloc",
    "static",
    "struct",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "unchecked",
    "unsafe",
    "using",
    "var",
    "virtual",
    "void",
    "volatile",
    "while",
    "yield"
  ]),
  go: /* @__PURE__ */ new Set([
    "break",
    "case",
    "chan",
    "const",
    "continue",
    "default",
    "defer",
    "else",
    "fallthrough",
    "false",
    "for",
    "func",
    "go",
    "goto",
    "if",
    "import",
    "interface",
    "map",
    "nil",
    "package",
    "range",
    "return",
    "select",
    "struct",
    "switch",
    "true",
    "type",
    "var"
  ]),
  java: /* @__PURE__ */ new Set([
    "abstract",
    "assert",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "default",
    "do",
    "else",
    "enum",
    "extends",
    "false",
    "final",
    "finally",
    "for",
    "goto",
    "if",
    "implements",
    "import",
    "instanceof",
    "interface",
    "native",
    "new",
    "null",
    "package",
    "private",
    "protected",
    "public",
    "record",
    "return",
    "static",
    "strictfp",
    "super",
    "switch",
    "synchronized",
    "this",
    "throw",
    "throws",
    "transient",
    "true",
    "try",
    "var",
    "void",
    "volatile",
    "while"
  ]),
  kotlin: /* @__PURE__ */ new Set([
    "abstract",
    "actual",
    "annotation",
    "as",
    "break",
    "by",
    "catch",
    "class",
    "companion",
    "const",
    "constructor",
    "continue",
    "crossinline",
    "data",
    "do",
    "else",
    "enum",
    "expect",
    "external",
    "false",
    "final",
    "finally",
    "for",
    "fun",
    "get",
    "if",
    "import",
    "in",
    "infix",
    "init",
    "inline",
    "inner",
    "interface",
    "internal",
    "is",
    "it",
    "lateinit",
    "noinline",
    "null",
    "object",
    "open",
    "operator",
    "out",
    "override",
    "package",
    "private",
    "protected",
    "public",
    "reified",
    "return",
    "sealed",
    "set",
    "super",
    "suspend",
    "tailrec",
    "this",
    "throw",
    "true",
    "try",
    "typealias",
    "val",
    "var",
    "vararg",
    "when",
    "where",
    "while"
  ]),
  php: /* @__PURE__ */ new Set([
    "abstract",
    "and",
    "array",
    "as",
    "break",
    "callable",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "die",
    "do",
    "echo",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "eval",
    "exit",
    "extends",
    "false",
    "final",
    "finally",
    "fn",
    "for",
    "foreach",
    "function",
    "global",
    "goto",
    "if",
    "implements",
    "include",
    "include_once",
    "instanceof",
    "insteadof",
    "interface",
    "isset",
    "list",
    "match",
    "namespace",
    "new",
    "null",
    "or",
    "print",
    "private",
    "protected",
    "public",
    "readonly",
    "require",
    "require_once",
    "return",
    "self",
    "static",
    "switch",
    "throw",
    "trait",
    "true",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield"
  ]),
  python: /* @__PURE__ */ new Set([
    "False",
    "None",
    "True",
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "self",
    "try",
    "while",
    "with",
    "yield"
  ]),
  ruby: /* @__PURE__ */ new Set([
    "BEGIN",
    "END",
    "__ENCODING__",
    "__FILE__",
    "__LINE__",
    "alias",
    "and",
    "begin",
    "break",
    "case",
    "class",
    "def",
    "defined?",
    "do",
    "else",
    "elsif",
    "end",
    "ensure",
    "false",
    "for",
    "if",
    "in",
    "module",
    "next",
    "nil",
    "not",
    "or",
    "puts",
    "raise",
    "redo",
    "require",
    "require_relative",
    "rescue",
    "retry",
    "return",
    "self",
    "super",
    "then",
    "true",
    "undef",
    "unless",
    "until",
    "when",
    "while",
    "yield"
  ]),
  rust: /* @__PURE__ */ new Set([
    "Self",
    "as",
    "async",
    "await",
    "break",
    "const",
    "continue",
    "crate",
    "dyn",
    "else",
    "enum",
    "extern",
    "false",
    "fn",
    "for",
    "if",
    "impl",
    "in",
    "let",
    "loop",
    "match",
    "mod",
    "move",
    "mut",
    "pub",
    "ref",
    "return",
    "self",
    "static",
    "struct",
    "super",
    "trait",
    "true",
    "type",
    "unsafe",
    "use",
    "where",
    "while"
  ]),
  sh: /* @__PURE__ */ new Set([
    "case",
    "curl",
    "do",
    "done",
    "echo",
    "elif",
    "else",
    "esac",
    "exit",
    "export",
    "fi",
    "for",
    "function",
    "if",
    "in",
    "jq",
    "local",
    "printf",
    "read",
    "return",
    "select",
    "set",
    "shift",
    "source",
    "then",
    "trap",
    "unset",
    "until",
    "while"
  ]),
  swift: /* @__PURE__ */ new Set([
    "Any",
    "Protocol",
    "Self",
    "Type",
    "actor",
    "as",
    "associatedtype",
    "async",
    "await",
    "break",
    "case",
    "catch",
    "class",
    "continue",
    "default",
    "defer",
    "deinit",
    "do",
    "else",
    "enum",
    "extension",
    "fallthrough",
    "false",
    "fileprivate",
    "final",
    "for",
    "func",
    "guard",
    "if",
    "import",
    "in",
    "init",
    "inout",
    "internal",
    "is",
    "isolated",
    "lazy",
    "let",
    "mutating",
    "nil",
    "nonisolated",
    "open",
    "operator",
    "optional",
    "override",
    "private",
    "protocol",
    "public",
    "repeat",
    "required",
    "rethrows",
    "return",
    "self",
    "some",
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throw",
    "throws",
    "true",
    "try",
    "typealias",
    "unowned",
    "var",
    "weak",
    "where",
    "while"
  ]),
  ts: /* @__PURE__ */ new Set([
    "abstract",
    "any",
    "as",
    "async",
    "await",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "constructor",
    "continue",
    "debugger",
    "declare",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "from",
    "function",
    "get",
    "if",
    "implements",
    "import",
    "in",
    "infer",
    "instanceof",
    "interface",
    "is",
    "keyof",
    "let",
    "module",
    "namespace",
    "never",
    "new",
    "null",
    "of",
    "package",
    "private",
    "protected",
    "public",
    "readonly",
    " override",
    "override",
    "require",
    "return",
    "satisfies",
    "set",
    "static",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "type",
    "typeof",
    "undefined",
    "unique",
    "unknown",
    "var",
    "void",
    "while",
    "with",
    "yield"
  ]),
  json: /* @__PURE__ */ new Set(["true", "false", "null"])
};
var BUILTIN_TYPES = /* @__PURE__ */ new Set([
  "bool",
  "boolean",
  "byte",
  "char",
  "double",
  "error",
  "f32",
  "f64",
  "float",
  "i8",
  "i16",
  "i32",
  "i64",
  "i128",
  "int",
  "int8_t",
  "int16_t",
  "int32_t",
  "int64_t",
  "isize",
  "long",
  "number",
  "object",
  "short",
  "size_t",
  "str",
  "string",
  "u8",
  "u16",
  "u32",
  "u64",
  "u128",
  "uint",
  "uint8_t",
  "uint16_t",
  "uint32_t",
  "uint64_t",
  "uintptr",
  "unsigned",
  "usize",
  "void",
  "cdd_c_error_t",
  "Result",
  "Option",
  "Ok",
  "Err",
  "Some",
  "Box",
  "Vec",
  "String",
  "Task",
  "Promise",
  "Observable",
  "URL",
  "URLRequest",
  "URLSession"
]);
function wrapToken(kind, raw) {
  const escaped = escapeTokenHtml(raw);
  if (kind === "plain") {
    return escaped;
  }
  return `<span class="cdd-tok-${kind}">${escaped}</span>`;
}
function isIdentStart(ch) {
  return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch === "_";
}
function isIdentPart(ch) {
  return isIdentStart(ch) || ch >= "0" && ch <= "9";
}
function isDigit(ch) {
  return ch >= "0" && ch <= "9";
}
function peekNonSpaceChar(code, index) {
  let i = index;
  while (i < code.length && (code.charAt(i) === " " || code.charCodeAt(i) === 9)) {
    i++;
  }
  return code.charAt(i);
}
function scanStringLiteral(code, start, delimiter, allowEscape) {
  let i = start + delimiter.length;
  while (i < code.length) {
    if (allowEscape && code.charCodeAt(i) === 92) {
      i += 2;
      continue;
    }
    if (code.startsWith(delimiter, i)) {
      return i + delimiter.length;
    }
    i++;
  }
  return code.length;
}
function highlightCode(code, language) {
  if (!code) return "";
  const lang = normalizeSyntaxLanguage(language);
  const keywords = LANGUAGE_KEYWORDS[lang];
  const supportsHashComment = lang === "python" || lang === "ruby" || lang === "sh" || lang === "php";
  const supportsPreprocessor = lang === "c" || lang === "cpp" || lang === "csharp";
  const supportsDollarVar = lang === "php" || lang === "sh" || lang === "ruby";
  const out = [];
  let i = 0;
  const len = code.length;
  while (i < len) {
    const ch = code.charAt(i);
    const next = code.charAt(i + 1);
    if (lang === "php" && (code.startsWith("<?php", i) || code.startsWith("?>", i))) {
      const tagLen = code.startsWith("<?php", i) ? 5 : 2;
      out.push(wrapToken("keyword", code.slice(i, i + tagLen)));
      i += tagLen;
      continue;
    }
    if (lang === "ts" && (code.startsWith("<script", i) || code.startsWith("<\/script>", i))) {
      const closeIdx = code.indexOf(">", i);
      const endIdx2 = closeIdx !== -1 ? closeIdx + 1 : len;
      out.push(wrapToken("keyword", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (ch === "/" && next === "*") {
      const closeIdx = code.indexOf("*/", i + 2);
      const endIdx2 = closeIdx !== -1 ? closeIdx + 2 : len;
      out.push(wrapToken("comment", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (ch === "/" && next === "/" && lang !== "sh" && lang !== "python" && lang !== "ruby" && lang !== "json") {
      const nlIdx = code.indexOf(String.fromCharCode(10), i + 2);
      const endIdx2 = nlIdx !== -1 ? nlIdx : len;
      out.push(wrapToken("comment", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (lang === "rust" && ch === "#" && (next === "[" || next === "!" && code.charAt(i + 2) === "[")) {
      const closeIdx = code.indexOf("]", i + 2);
      const endIdx2 = closeIdx !== -1 ? closeIdx + 1 : len;
      out.push(wrapToken("type", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (supportsPreprocessor && ch === "#") {
      const nlIdx = code.indexOf(String.fromCharCode(10), i + 1);
      const endIdx2 = nlIdx !== -1 ? nlIdx : len;
      out.push(wrapToken("keyword", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (supportsHashComment && ch === "#") {
      const nlIdx = code.indexOf(String.fromCharCode(10), i + 1);
      const endIdx2 = nlIdx !== -1 ? nlIdx : len;
      out.push(wrapToken("comment", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (lang === "python" && /^[frb]$/i.test(ch) && (next === '"' || next === "'")) {
      const isTriple = code.startsWith(next.repeat(3), i + 1);
      const delim = isTriple ? next.repeat(3) : next;
      const endIdx2 = scanStringLiteral(code, i + 1, delim, true);
      out.push(wrapToken("string", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (code.startsWith('"""', i) || lang === "python" && code.startsWith("'''", i)) {
      const delim = code.slice(i, i + 3);
      const endIdx2 = scanStringLiteral(code, i, delim, true);
      out.push(wrapToken("string", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`" && (lang === "ts" || lang === "go" || lang === "sh")) {
      if (lang === "rust" && ch === "'" && isIdentStart(next) && code.charAt(i + 2) !== "'") {
        let endIdx3 = i + 2;
        while (isIdentPart(code.charAt(endIdx3))) {
          endIdx3++;
        }
        out.push(wrapToken("type", code.slice(i, endIdx3)));
        i = endIdx3;
        continue;
      }
      const endIdx2 = scanStringLiteral(code, i, ch, ch !== "`");
      const rawStr = code.slice(i, endIdx2);
      if (lang === "json" && ch === '"' && peekNonSpaceChar(code, endIdx2) === ":") {
        out.push(wrapToken("variable", rawStr));
      } else {
        out.push(wrapToken("string", rawStr));
      }
      i = endIdx2;
      continue;
    }
    if (ch === "@" && isIdentStart(next)) {
      let endIdx2 = i + 2;
      while (isIdentPart(code.charAt(endIdx2))) {
        endIdx2++;
      }
      const kind = lang === "ruby" ? "variable" : "type";
      out.push(wrapToken(kind, code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (supportsDollarVar && ch === "$") {
      if (next === "{") {
        const closeIdx = code.indexOf("}", i + 2);
        const endIdx2 = closeIdx !== -1 ? closeIdx + 1 : len;
        out.push(wrapToken("variable", code.slice(i, endIdx2)));
        i = endIdx2;
        continue;
      }
      if (isIdentStart(next) || isDigit(next)) {
        let endIdx2 = i + 2;
        while (isIdentPart(code.charAt(endIdx2))) {
          endIdx2++;
        }
        out.push(wrapToken("variable", code.slice(i, endIdx2)));
        i = endIdx2;
        continue;
      }
    }
    if (lang === "ruby" && ch === ":" && isIdentStart(next)) {
      let endIdx2 = i + 2;
      while (isIdentPart(code.charAt(endIdx2))) {
        endIdx2++;
      }
      out.push(wrapToken("string", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (lang === "sh" && ch === "-" && (i === 0 || /\s/.test(code.charAt(i - 1))) && (isIdentStart(next) || next === "-" && isIdentStart(code.charAt(i + 2)))) {
      let endIdx2 = i + 1;
      while (isIdentPart(code.charAt(endIdx2)) || code.charAt(endIdx2) === "-") {
        endIdx2++;
      }
      out.push(wrapToken("variable", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (isDigit(ch) || ch === "-" && isDigit(next) && lang === "json") {
      let endIdx2 = i + 1;
      if (ch === "0" && /^[xX]$/.test(next)) {
        endIdx2 += 1;
        while (/[0-9a-fA-F_]/.test(code.charAt(endIdx2))) {
          endIdx2++;
        }
      } else {
        while (/[0-9._eE+-]/.test(code.charAt(endIdx2))) {
          endIdx2++;
        }
      }
      out.push(wrapToken("number", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    if (isIdentStart(ch)) {
      let endIdx2 = i + 1;
      while (endIdx2 < len && isIdentPart(code.charAt(endIdx2))) {
        endIdx2++;
      }
      if (lang === "rust" && code.charAt(endIdx2) === "!" || lang === "ruby" && code.charAt(endIdx2) === "?") {
        endIdx2++;
      }
      const word = code.slice(i, endIdx2);
      const nextChar = peekNonSpaceChar(code, endIdx2);
      if (keywords.has(word)) {
        const isLiteralConst = /^(?:true|false|True|False|null|nil|None|nullptr|NULL)$/.test(word);
        out.push(wrapToken(isLiteralConst ? "number" : "keyword", word));
      } else if (BUILTIN_TYPES.has(word)) {
        out.push(wrapToken("type", word));
      } else if (nextChar === "(" || lang === "rust" && word.endsWith("!")) {
        out.push(wrapToken("function", word));
      } else if (/^[A-Z]/.test(word) && !/^[A-Z0-9_]+$/.test(word)) {
        out.push(wrapToken("type", word));
      } else {
        out.push(wrapToken("plain", word));
      }
      i = endIdx2;
      continue;
    }
    if ("+-*/%=<>!&|^~?:".includes(ch)) {
      let endIdx2 = i + 1;
      while (endIdx2 < len && "+-*/%=<>!&|^~?:".includes(code.charAt(endIdx2))) {
        endIdx2++;
      }
      out.push(wrapToken("operator", code.slice(i, endIdx2)));
      i = endIdx2;
      continue;
    }
    let endIdx = i + 1;
    while (endIdx < len && !isIdentStart(code.charAt(endIdx)) && !isDigit(code.charAt(endIdx)) && !"\"+-*/%=<>!&|^~?:#@`$'".includes(code.charAt(endIdx))) {
      endIdx++;
    }
    out.push(wrapToken("plain", code.slice(i, endIdx)));
    i = endIdx;
  }
  return out.join("");
}

// src/aot-generator.ts
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function sanitizeUrl(url) {
  const trimmed = url.trim();
  if (/^(javascript|vbscript|data):/i.test(trimmed)) {
    return "#";
  }
  return escapeHtml(trimmed);
}
function sanitizeCssIdent(ident) {
  return ident.replace(/[^a-zA-Z0-9_-]/g, "");
}
function interpolateServerVariables(server) {
  if (!server || !server.url) return "https://api.example.com";
  let url = server.url;
  if (server.variables) {
    for (const [varName, varObj] of Object.entries(server.variables)) {
      url = url.replace(new RegExp(`\\{${varName}\\}`, "g"), varObj.default);
    }
  }
  return url;
}
function renderMarkdown(text) {
  if (!text) return "";
  const rawHtml = m.parse(text, { async: false });
  return rawHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(/href\s*=\s*"(?:javascript|vbscript|data):[^"]*"/gi, 'href="#"').replace(/href\s*=\s*'(?:javascript|vbscript|data):[^']*'/gi, "href='#'");
}
function resolveParameterRef(param, components) {
  if (!isReference(param)) return param;
  const prefix = "#/components/parameters/";
  const key = param.$ref.startsWith(prefix) ? param.$ref.slice(prefix.length) : param.$ref;
  const found = components?.parameters?.[key];
  if (found && !isReference(found)) {
    return found;
  }
  return void 0;
}
function resolveOperationParameters(pathItem, op, components) {
  const map = /* @__PURE__ */ new Map();
  const combined = [...pathItem?.parameters ?? [], ...op.parameters ?? []];
  for (const raw of combined) {
    const resolved = resolveParameterRef(raw, components);
    if (resolved) {
      map.set(`${resolved.in}:${resolved.name}`, resolved);
    }
  }
  return Array.from(map.values());
}
function resolveRequestBodyRef(rb, components) {
  if (!rb) return void 0;
  if (!isReference(rb)) return rb;
  const prefix = "#/components/requestBodies/";
  const key = rb.$ref.startsWith(prefix) ? rb.$ref.slice(prefix.length) : rb.$ref;
  const found = components?.requestBodies?.[key];
  if (found && !isReference(found)) {
    return found;
  }
  return void 0;
}
function resolveResponseRef(resp, components) {
  if (!resp) return void 0;
  if (!isReference(resp)) return resp;
  const prefix = "#/components/responses/";
  const key = resp.$ref.startsWith(prefix) ? resp.$ref.slice(prefix.length) : resp.$ref;
  const found = components?.responses?.[key];
  if (found && !isReference(found)) {
    return found;
  }
  return void 0;
}
function generateCurl(method, route, op, baseUrl = "https://api.example.com", pathItem, components) {
  const upperMethod = method.toUpperCase();
  const methodPart = upperMethod === "GET" ? "" : `-X ${upperMethod} `;
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  let curl = `curl ${methodPart}"${normalizedBase}${route}"`;
  const cont = " \\\n  ";
  const mergedParams = resolveOperationParameters(pathItem, op, components);
  for (const p of mergedParams) {
    if (p.in === "header") {
      curl += `${cont}-H "${p.name}: <value>"`;
    }
  }
  const resolvedRb = resolveRequestBodyRef(op.requestBody, components);
  if (resolvedRb && resolvedRb.content) {
    const firstType = Object.keys(resolvedRb.content)[0];
    if (firstType) {
      curl += `${cont}-H "Content-Type: ${firstType}"`;
      curl += `${cont}-d '{"key": "value"}'`;
    }
  }
  return curl;
}
var MAX_SCHEMA_DEPTH = 10;
function renderSchema(schema, depth = 0, namePrefix = "", t = defaultTranslations) {
  if (depth > MAX_SCHEMA_DEPTH) {
    return `<span class="cdd-prop-type">object</span>`;
  }
  if (isReference(schema)) {
    const refName = schema.$ref.split("/").pop() || schema.$ref;
    return `<span class="cdd-schema-ref">${escapeHtml(refName)}</span>`;
  }
  let html = `<div class="cdd-schema-container" style="margin-left: ${depth * 16}px">`;
  if (schema.type === "object" && schema.properties) {
    html += `<table class="cdd-schema-table">
      <thead><tr><th>${escapeHtml(t.tableHeaderProperty)}</th><th>${escapeHtml(t.tableHeaderType)}</th><th>${escapeHtml(t.tableHeaderDescription)}</th></tr></thead>
      <tbody>`;
    for (const [name, prop] of Object.entries(schema.properties)) {
      const isRequired = schema.required?.includes(name) ?? false;
      const propId = namePrefix ? `${namePrefix}-prop-${name}` : `prop-${name}`;
      if (isReference(prop)) {
        const refName = prop.$ref.split("/").pop() || prop.$ref;
        html += `<tr id="${escapeHtml(propId)}" class="cdd-deep-link-row">
        <td><a href="#${escapeHtml(propId)}" class="cdd-anchor">#</a><span class="cdd-prop-name">${escapeHtml(name)}${isRequired ? '<span class="cdd-required">*</span>' : ""}</span></td>
        <td><span class="cdd-schema-ref">${escapeHtml(refName)}</span></td>
        <td><div class="cdd-prop-desc">${renderMarkdown(prop.description)}</div></td>
      </tr>`;
      } else {
        const propType = prop.type || "any";
        html += `<tr id="${escapeHtml(propId)}" class="cdd-deep-link-row">
        <td><a href="#${escapeHtml(propId)}" class="cdd-anchor">#</a><span class="cdd-prop-name">${escapeHtml(name)}${isRequired ? '<span class="cdd-required">*</span>' : ""}</span></td>
        <td><span class="cdd-prop-type">${escapeHtml(propType)}</span></td>
        <td><div class="cdd-prop-desc">${renderMarkdown(prop.description)}</div></td>
      </tr>`;
        if (prop.type === "object" || prop.type === "array") {
          html += `<tr><td colspan="3">${renderSchema(prop, depth + 1, propId, t)}</td></tr>`;
        }
      }
    }
    html += `</tbody></table>`;
  } else if (schema.type === "array" && schema.items) {
    html += `<div class="cdd-schema-array">${escapeHtml(t.arrayOf)} ${renderSchema(schema.items, depth + 1, namePrefix, t)}</div>`;
  } else {
    html += `<span class="cdd-prop-type">${escapeHtml(schema.type || "any")}</span>`;
    if (schema.description) {
      html += `<div class="cdd-prop-desc">${renderMarkdown(schema.description)}</div>`;
    }
  }
  html += `</div>`;
  return html;
}
function renderArazzoValue(val) {
  if (isSelectorObject(val)) {
    const selType = typeof val.type === "object" && val.type !== null ? `${val.type.type} (${val.type.version})` : val.type || "jsonpointer";
    return `<code class="cdd-expr-badge">${escapeHtml(val.context)}</code> &rarr; <code>${escapeHtml(val.selector)}</code> <span class="cdd-badge cdd-badge-meta">${escapeHtml(selType)}</span>`;
  }
  if (typeof val === "string") {
    return `<code>${escapeHtml(val)}</code>`;
  }
  return `<code>${escapeHtml(JSON.stringify(val))}</code>`;
}
function formatCriterionType(crit) {
  if (!crit.type) return "simple";
  if (typeof crit.type === "string") return crit.type;
  return `${crit.type.type} (${crit.type.version})`;
}
function renderCodeAside(id, curlOrCliPreview, examples, languages, t) {
  return `
          <aside class="cdd-endpoint-code">
            <div class="cdd-code-card">
              <div class="cdd-code-tabs">
                <input type="radio" id="tab-curl-${escapeHtml(id)}" name="tab-${escapeHtml(id)}" class="cdd-tab-input" checked>
                <label for="tab-curl-${escapeHtml(id)}" class="cdd-tab-label">${escapeHtml(t.tabCurl)}</label>
                
                <input type="radio" id="tab-sdk-${escapeHtml(id)}" name="tab-${escapeHtml(id)}" class="cdd-tab-input">
                <label for="tab-sdk-${escapeHtml(id)}" class="cdd-tab-label">${escapeHtml(t.tabSdk)}</label>

                <div class="cdd-tab-content cdd-tab-content-curl">
                  <div style="position: relative;">
                    <button class="cdd-copy-btn">${escapeHtml(t.copy)}</button>
                    <pre><code class="language-bash" data-raw-code="${escapeHtml(curlOrCliPreview)}">${highlightCode(curlOrCliPreview, "bash")}</code></pre>
                  </div>
                </div>
                <div class="cdd-tab-content cdd-tab-content-sdk">
                  ${languages.map((lang) => {
    const safeLang = sanitizeCssIdent(lang);
    const langEx = examples.filter((ex) => ex.language === lang);
    const prismLang = lang === "ts" ? "typescript" : lang === "sh" ? "bash" : safeLang;
    return `
                      <div class="cdd-lang-block cdd-show-if-${safeLang}">
                        ${langEx.length > 0 ? langEx.map((ex) => {
      const importsClass = ex.includeImports ? "cdd-show-if-imports" : "cdd-hide-if-imports";
      const wrappingClass = ex.includeWrapping ? "cdd-show-if-wrapping" : "cdd-hide-if-wrapping";
      return `
                          <div class="cdd-variant-block ${importsClass} ${wrappingClass}">
                            <div style="position: relative;">
                              <button class="cdd-copy-btn">${escapeHtml(t.copy)}</button>
                              <pre><code class="language-${escapeHtml(prismLang)}" data-raw-code="${escapeHtml(ex.content)}">${highlightCode(ex.content, ex.language)}</code></pre>
                            </div>
                          </div>
                        `;
    }).join("") : `<div class="cdd-no-example">${escapeHtml(t.noExampleFor)} ${escapeHtml(lang)}</div>`}
                      </div>
                    `;
  }).join("")}
                </div>
              </div>
            </div>
          </aside>`;
}
function renderWorkflowSection(nw, docData, languages, t = defaultTranslations) {
  const wf = nw.workflow;
  const wfDomId = `workflow-${wf.workflowId}`;
  const examples = docData.workflowCodeExamples?.[wf.workflowId] ?? [];
  const baseUrl = interpolateServerVariables(docData.spec.servers?.[0]);
  const dependsOnHtml = wf.dependsOn && wf.dependsOn.length > 0 ? `<div class="cdd-workflow-depends">
                <strong>${escapeHtml(t.workflowDependsOnHeading)}:</strong>
                ${wf.dependsOn.map((dep) => {
    const depParts = dep.split(".workflows.");
    const cleanDep = depParts[1] ?? dep;
    return `<a href="#workflow-${escapeHtml(cleanDep)}" class="cdd-badge cdd-badge-workflow">${escapeHtml(dep)}</a>`;
  }).join(" ")}
              </div>` : "";
  const cycleBadgeHtml = nw.hasCycles ? `<span class="cdd-badge cdd-badge-delete">DAG CYCLE DETECTED</span>` : "";
  const inputsHtml = nw.resolvedInputs ? `<h3 class="cdd-section-title">${escapeHtml(t.workflowInputsHeading)}</h3>
           ${renderSchema(nw.resolvedInputs, 0, `${wfDomId}-input`, t)}` : "";
  const stepsHtml = nw.normalizedSteps.map((ns, idx) => {
    const st2 = ns.step;
    const stepDomId = `step-${wf.workflowId}-${st2.stepId}`;
    let targetBadgeHtml = "";
    if (ns.linkedTarget) {
      const lt2 = ns.linkedTarget;
      if (lt2.kind === "workflow") {
        targetBadgeHtml = `<a href="#${escapeHtml(lt2.anchorId || "")}" class="cdd-badge cdd-badge-workflow">WORKFLOW: ${escapeHtml(lt2.operationId || "")}</a>`;
      } else if (lt2.kind === "channel") {
        const actUpper = (lt2.method || "send").toUpperCase();
        targetBadgeHtml = `<span class="cdd-badge cdd-badge-channel">${escapeHtml(actUpper)} ${escapeHtml(lt2.route || "")}</span>`;
      } else {
        const mUpper = (lt2.method || "OP").toUpperCase();
        const label = lt2.route ? `${mUpper} ${lt2.route}` : lt2.operationId || mUpper;
        targetBadgeHtml = lt2.anchorId ? `<a href="#${escapeHtml(lt2.anchorId)}" class="cdd-badge cdd-badge-${escapeHtml(lt2.method || "get")} cdd-badge-${escapeHtml(mUpper)}">${escapeHtml(label)}</a>` : `<span class="cdd-badge cdd-badge-get">${escapeHtml(label)}</span>`;
      }
    }
    const metaBadges = [];
    if (st2.timeout !== void 0) {
      metaBadges.push(
        `<span class="cdd-badge cdd-badge-meta">timeout: ${escapeHtml(String(st2.timeout))}ms</span>`
      );
    }
    if (st2.correlationId) {
      metaBadges.push(
        `<span class="cdd-badge cdd-badge-meta">correlationId: ${escapeHtml(st2.correlationId)}</span>`
      );
    }
    if (ns.upstreamStepIds.length > 0) {
      for (const upId of ns.upstreamStepIds) {
        metaBadges.push(
          `<a href="#step-${escapeHtml(wf.workflowId)}-${escapeHtml(upId)}" class="cdd-badge cdd-badge-meta">&larr; ${escapeHtml(upId)}</a>`
        );
      }
    }
    const paramsTable = ns.mergedParameters.length > 0 ? `<h4 class="cdd-step-subtitle">${escapeHtml(t.stepParametersHeading)}</h4>
                       <table class="cdd-params-table">
                         <thead><tr><th>${escapeHtml(t.tableHeaderName)}</th><th>${escapeHtml(t.tableHeaderIn)}</th><th>Value / Expression</th></tr></thead>
                         <tbody>
                           ${ns.mergedParameters.map(
      (p) => `<tr>
                                 <td><code>${escapeHtml(p.name)}</code></td>
                                 <td>${escapeHtml(p.in || "workflow")}</td>
                                 <td>${renderArazzoValue(p.value)}</td>
                               </tr>`
    ).join("")}
                         </tbody>
                       </table>` : "";
    const requestBodyBlock = st2.requestBody ? `<h4 class="cdd-step-subtitle">${escapeHtml(t.stepRequestBodyHeading)}${st2.requestBody.contentType ? ` (<code>${escapeHtml(st2.requestBody.contentType)}</code>)` : ""}</h4>
                   ${st2.requestBody.payload !== void 0 ? `<pre class="cdd-payload-pre"><code class="language-json">${highlightCode(typeof st2.requestBody.payload === "string" ? st2.requestBody.payload : JSON.stringify(st2.requestBody.payload, null, 2), "json")}</code></pre>` : ""}
                   ${st2.requestBody.replacements && st2.requestBody.replacements.length > 0 ? `<table class="cdd-params-table">
                                <thead><tr><th>Target Pointer</th><th>Replacement Value</th></tr></thead>
                                <tbody>
                                  ${st2.requestBody.replacements.map(
      (rep) => `<tr>
                                        <td><code>${escapeHtml(rep.target)}</code></td>
                                        <td>${renderArazzoValue(rep.value)}</td>
                                      </tr>`
    ).join("")}
                                </tbody>
                              </table>` : ""}` : "";
    const criteriaBlock = st2.successCriteria && st2.successCriteria.length > 0 ? `<h4 class="cdd-step-subtitle">${escapeHtml(t.successCriteriaHeading)}</h4>
                       <table class="cdd-params-table">
                         <thead><tr><th>Context</th><th>Condition</th><th>${escapeHtml(t.tableHeaderType)}</th></tr></thead>
                         <tbody>
                           ${st2.successCriteria.map(
      (c2) => `<tr>
                                 <td><code>${escapeHtml(c2.context || "$statusCode")}</code></td>
                                 <td><code>${escapeHtml(c2.condition)}</code></td>
                                 <td><span class="cdd-badge cdd-badge-meta">${escapeHtml(formatCriterionType(c2))}</span></td>
                               </tr>`
    ).join("")}
                         </tbody>
                       </table>` : "";
    const onSuccessBlock = ns.resolvedOnSuccess.length > 0 ? `<h4 class="cdd-step-subtitle">${escapeHtml(t.onSuccessHeading)}</h4>
                       <ul class="cdd-action-list">
                         ${ns.resolvedOnSuccess.map((act) => {
      const target = act.stepId ? ` &rarr; step <code>${escapeHtml(act.stepId)}</code>` : act.workflowId ? ` &rarr; workflow <code>${escapeHtml(act.workflowId)}</code>` : "";
      return `<li><span class="cdd-badge cdd-badge-post">${escapeHtml(act.type.toUpperCase())}</span> <strong>${escapeHtml(act.name)}</strong>${target}</li>`;
    }).join("")}
                       </ul>` : "";
    const onFailureBlock = ns.resolvedOnFailure.length > 0 ? `<h4 class="cdd-step-subtitle">${escapeHtml(t.onFailureHeading)}</h4>
                       <ul class="cdd-action-list">
                         ${ns.resolvedOnFailure.map((act) => {
      const target = act.stepId ? ` &rarr; step <code>${escapeHtml(act.stepId)}</code>` : act.workflowId ? ` &rarr; workflow <code>${escapeHtml(act.workflowId)}</code>` : "";
      const retryMeta = act.retryLimit !== void 0 || act.retryAfter !== void 0 ? ` (retryLimit: ${escapeHtml(String(act.retryLimit ?? 1))}, retryAfter: ${escapeHtml(String(act.retryAfter ?? 0))}s)` : "";
      return `<li><span class="cdd-badge cdd-badge-delete">${escapeHtml(act.type.toUpperCase())}</span> <strong>${escapeHtml(act.name)}</strong>${target}${retryMeta}</li>`;
    }).join("")}
                       </ul>` : "";
    const stepOutputsBlock = st2.outputs && Object.keys(st2.outputs).length > 0 ? `<h4 class="cdd-step-subtitle">${escapeHtml(t.stepOutputsHeading)}</h4>
                       <table class="cdd-params-table">
                         <thead><tr><th>${escapeHtml(t.tableHeaderName)}</th><th>Expression / Selector</th></tr></thead>
                         <tbody>
                           ${Object.entries(st2.outputs).map(
      ([outKey, outVal]) => `<tr>
                                 <td><code>${escapeHtml(outKey)}</code></td>
                                 <td>${renderArazzoValue(outVal)}</td>
                               </tr>`
    ).join("")}
                         </tbody>
                       </table>` : "";
    return `
              <div id="${escapeHtml(stepDomId)}" class="cdd-step-card cdd-deep-link-row" data-step-id="${escapeHtml(st2.stepId)}" data-method="${escapeHtml((ns.linkedTarget?.method || "GET").toUpperCase())}" data-route="${escapeHtml(ns.linkedTarget?.route || `/${st2.stepId}`)}" data-base-url="${escapeHtml(baseUrl)}">
                <div class="cdd-step-header">
                  <span class="cdd-step-index">${idx + 1}</span>
                  <a href="#${escapeHtml(stepDomId)}" class="cdd-anchor">#</a>
                  <strong class="cdd-step-title">${escapeHtml(st2.stepId)}</strong>
                  ${targetBadgeHtml}
                  ${metaBadges.join(" ")}
                </div>
                ${st2.description ? `<div class="cdd-description">${renderMarkdown(st2.description)}</div>` : ""}
                ${paramsTable}
                ${requestBodyBlock}
                ${criteriaBlock}
                ${onSuccessBlock}
                ${onFailureBlock}
                ${stepOutputsBlock}
              </div>`;
  }).join("");
  const wfOutputsBlock = wf.outputs && Object.keys(wf.outputs).length > 0 ? `<h3 class="cdd-section-title">${escapeHtml(t.workflowOutputsHeading)}</h3>
               <table class="cdd-params-table">
                 <thead><tr><th>${escapeHtml(t.tableHeaderName)}</th><th>Expression / Selector</th></tr></thead>
                 <tbody>
                   ${Object.entries(wf.outputs).map(
    ([outKey, outVal]) => `<tr>
                         <td><code>${escapeHtml(outKey)}</code></td>
                         <td>${renderArazzoValue(outVal)}</td>
                       </tr>`
  ).join("")}
                 </tbody>
               </table>` : "";
  return `
        <article id="${escapeHtml(wfDomId)}" class="cdd-endpoint cdd-workflow">
          <div class="cdd-endpoint-info">
            <h2 class="cdd-endpoint-title">${escapeHtml(wf.summary || wf.workflowId)}</h2>
            <div class="cdd-endpoint-path-row">
              <span class="cdd-badge cdd-badge-workflow">WORKFLOW</span>
              <code class="cdd-path-text">${escapeHtml(wf.workflowId)}</code>
              ${cycleBadgeHtml}
            </div>
            ${wf.description ? `<div class="cdd-description">${renderMarkdown(wf.description)}</div>` : ""}
            ${dependsOnHtml}
            ${inputsHtml}

            <h3 class="cdd-section-title">${escapeHtml(t.stepsHeading)}</h3>
            <div class="cdd-steps-pipeline">
              ${stepsHtml}
            </div>

            ${wfOutputsBlock}

            <details class="cdd-try-it-out">
              <summary class="cdd-try-summary">${escapeHtml(t.runWorkflowBtn)}</summary>
              <form class="cdd-workflow-try-form" action="/" method="POST" data-workflow-id="${escapeHtml(wf.workflowId)}" data-base-url="${escapeHtml(baseUrl)}">
                <div class="cdd-try-field">
                  <label for="try-wf-${escapeHtml(wf.workflowId)}-inputs">${escapeHtml(t.workflowInputsHeading)} (JSON)</label>
                  <textarea id="try-wf-${escapeHtml(wf.workflowId)}-inputs" name="workflowInputs" rows="3">{}</textarea>
                </div>
                <button type="submit" class="cdd-try-btn">${escapeHtml(t.runWorkflowBtn)}</button>
              </form>
              <div class="cdd-try-response" style="display: none; margin-top: 1rem;">
                <h4 style="margin:0 0 0.5rem 0;">${escapeHtml(t.response)}</h4>
                <div class="cdd-try-status"></div>
                <pre><code class="cdd-try-body"></code></pre>
              </div>
            </details>
          </div>

          ${renderCodeAside(wfDomId, nw.cliPreview, examples, languages, t)}
        </article>`;
}
function renderArazzoComponents(components, t = defaultTranslations) {
  if (!components) return "";
  const inputEntries = Object.entries(components.inputs ?? {});
  const paramEntries = Object.entries(components.parameters ?? {});
  const successEntries = Object.entries(components.successActions ?? {});
  const failureEntries = Object.entries(components.failureActions ?? {});
  if (inputEntries.length === 0 && paramEntries.length === 0 && successEntries.length === 0 && failureEntries.length === 0) {
    return "";
  }
  let html = `<h2 id="section-arazzo-components" class="cdd-main-title">${escapeHtml(t.arazzoComponentsHeading)}</h2>`;
  for (const [name, schema] of inputEntries) {
    html += `<div id="arazzo-input-${escapeHtml(name)}" class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.inputs.${escapeHtml(name)}</h3>
          ${renderSchema(schema, 0, `arazzo-input-${name}`, t)}
        </div>`;
  }
  if (paramEntries.length > 0) {
    html += `<div class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.parameters</h3>
          <table class="cdd-params-table">
            <thead><tr><th>Key</th><th>${escapeHtml(t.tableHeaderName)}</th><th>${escapeHtml(t.tableHeaderIn)}</th><th>Default Value</th></tr></thead>
            <tbody>
              ${paramEntries.map(
      ([key, p]) => `<tr id="arazzo-param-${escapeHtml(key)}">
                    <td><code>${escapeHtml(key)}</code></td>
                    <td><code>${escapeHtml(p.name)}</code></td>
                    <td>${escapeHtml(p.in || "workflow")}</td>
                    <td>${renderArazzoValue(p.value)}</td>
                  </tr>`
    ).join("")}
            </tbody>
          </table>
        </div>`;
  }
  if (successEntries.length > 0) {
    html += `<div class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.successActions</h3>
          <ul class="cdd-action-list">
            ${successEntries.map(
      ([key, act]) => `<li id="arazzo-success-${escapeHtml(key)}"><code>${escapeHtml(key)}</code>: <span class="cdd-badge cdd-badge-post">${escapeHtml(act.type.toUpperCase())}</span> <strong>${escapeHtml(act.name)}</strong></li>`
    ).join("")}
          </ul>
        </div>`;
  }
  if (failureEntries.length > 0) {
    html += `<div class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.failureActions</h3>
          <ul class="cdd-action-list">
            ${failureEntries.map(
      ([key, act]) => `<li id="arazzo-failure-${escapeHtml(key)}"><code>${escapeHtml(key)}</code>: <span class="cdd-badge cdd-badge-delete">${escapeHtml(act.type.toUpperCase())}</span> <strong>${escapeHtml(act.name)}</strong></li>`
    ).join("")}
          </ul>
        </div>`;
  }
  return html;
}
function generateAOTBodyAndStyles(specContent, sdkExamples = [], theme = "light", customTranslations = {}, companionArazzoContent, activeLanguage, defaultIncludeImports = false, defaultIncludeWrapping = false) {
  const t = { ...defaultTranslations, ...customTranslations };
  const data = normalizeSpec(specContent, companionArazzoContent);
  if (sdkExamples.length > 0) {
    mapSdkExamples(data, sdkExamples);
  }
  const languages = Array.from(new Set(sdkExamples.map((ex) => ex.language)));
  if (languages.length === 0) languages.push("javascript");
  const selectedLangIndex = activeLanguage && languages.includes(activeLanguage) ? languages.indexOf(activeLanguage) : 0;
  const spec = data.spec;
  const baseUrl = interpolateServerVariables(spec.servers?.[0]);
  const paths = spec.paths || {};
  let mainHtml = "";
  let tocHtml = "";
  let webhooksTocHtml = "";
  let workflowsTocHtml = "";
  let schemasHtml = "";
  const sourceDescriptionsHtml = data.sourceDescriptions && data.sourceDescriptions.length > 0 ? `<div class="cdd-source-descriptions">
                <strong>${escapeHtml(t.sourceDescriptionsHeading)}:</strong>
                ${data.sourceDescriptions.map(
    (sd) => `<span class="cdd-source-chip"><span class="cdd-badge cdd-badge-meta">${escapeHtml(sd.type || "openapi")}</span> <strong>${escapeHtml(sd.name)}</strong>: <code>${escapeHtml(sd.url)}</code></span>`
  ).join(" ")}
              </div>` : "";
  for (const [route, pathItem] of Object.entries(paths)) {
    if (isReference(pathItem)) continue;
    const operations = getPathOperations(pathItem);
    let routeHasOps = false;
    let routeToc = `<details class="cdd-toc-group"><summary class="cdd-toc-route">${escapeHtml(route)}</summary>`;
    for (const [m2, op] of operations) {
      routeHasOps = true;
      const id = op.operationId || `${m2}-${route}`;
      const upperMethod = m2.toUpperCase();
      const opBaseUrl = op.servers?.[0] ? interpolateServerVariables(op.servers[0]) : pathItem.servers?.[0] ? interpolateServerVariables(pathItem.servers[0]) : baseUrl;
      routeToc += `<a href="#${escapeHtml(id)}" class="cdd-toc-item cdd-method-${escapeHtml(m2)}">${escapeHtml(upperMethod)}</a>`;
      const curl = generateCurl(m2, route, op, opBaseUrl, pathItem, spec.components);
      const examples = data.codeExamples[id] || [];
      const mergedParams = resolveOperationParameters(pathItem, op, spec.components);
      const resolvedRb = resolveRequestBodyRef(op.requestBody, spec.components);
      let requestBodySchemaHtml = "";
      if (resolvedRb && resolvedRb.content) {
        const mediaBlocks = [];
        for (const [mediaType, mt2] of Object.entries(resolvedRb.content)) {
          if (mt2.schema) {
            mediaBlocks.push(
              `<div class="cdd-media-block"><code class="cdd-badge cdd-badge-meta">${escapeHtml(mediaType)}</code>${renderSchema(mt2.schema, 0, `${id}-req`, t)}</div>`
            );
          }
        }
        if (mediaBlocks.length > 0) {
          requestBodySchemaHtml = `<h3 class="cdd-section-title">${escapeHtml(t.requestBody)}</h3>
                    ${resolvedRb.description ? `<div class="cdd-description">${renderMarkdown(resolvedRb.description)}</div>` : ""}
                    ${mediaBlocks.join("")}`;
        }
      }
      let responsesHtml = "";
      if (op.responses) {
        const respRows = [];
        for (const [statusCode, rawResp] of Object.entries(op.responses)) {
          const resolvedResp = resolveResponseRef(rawResp, spec.components);
          if (!resolvedResp) continue;
          const mediaBlocks = [];
          if (resolvedResp.content) {
            for (const [mediaType, mt2] of Object.entries(resolvedResp.content)) {
              if (mt2.schema) {
                mediaBlocks.push(
                  `<div><code class="cdd-badge cdd-badge-meta">${escapeHtml(mediaType)}</code>${renderSchema(mt2.schema, 0, `${id}-resp-${statusCode}`, t)}</div>`
                );
              }
            }
          }
          respRows.push(
            `<tr><td><code>${escapeHtml(statusCode)}</code></td><td>${renderMarkdown(resolvedResp.description)}${mediaBlocks.join("")}</td></tr>`
          );
        }
        if (respRows.length > 0) {
          responsesHtml = `<h3 class="cdd-section-title">${escapeHtml(t.response)}</h3>
                    <table class="cdd-params-table">
                      <thead><tr><th>Status</th><th>${escapeHtml(t.tableHeaderDescription)}</th></tr></thead>
                      <tbody>${respRows.join("")}</tbody>
                    </table>`;
        }
      }
      mainHtml += `
        <article id="${escapeHtml(id)}" class="cdd-endpoint">
          <div class="cdd-endpoint-info">
            <h2 class="cdd-endpoint-title">${escapeHtml(op.summary || route)}</h2>
            <div class="cdd-endpoint-path-row">
              <span class="cdd-badge cdd-badge-${escapeHtml(m2)} cdd-badge-${escapeHtml(upperMethod)}">${escapeHtml(upperMethod)}</span>
              <code class="cdd-path-text">${escapeHtml(route)}</code>
            </div>
            ${op.description ? `<div class="cdd-description">${renderMarkdown(op.description)}</div>` : ""}
            
            ${mergedParams.length > 0 ? `
              <h3 class="cdd-section-title">${escapeHtml(t.parameters)}</h3>
              <table class="cdd-params-table">
                <thead><tr><th>${escapeHtml(t.tableHeaderName)}</th><th>${escapeHtml(t.tableHeaderIn)}</th><th>${escapeHtml(t.tableHeaderType)}</th><th>${escapeHtml(t.tableHeaderDescription)}</th></tr></thead>
                <tbody>
                  ${mergedParams.map((p) => {
        const paramId = `${id}-param-${p.name}`;
        const paramType = p.schema && !isReference(p.schema) && p.schema.type ? p.schema.type : "any";
        return `<tr id="${escapeHtml(paramId)}" class="cdd-deep-link-row">
                      <td><a href="#${escapeHtml(paramId)}" class="cdd-anchor">#</a><code>${escapeHtml(p.name)}${p.required ? "*" : ""}</code></td>
                      <td>${escapeHtml(p.in)}</td>
                      <td>${escapeHtml(paramType)}</td>
                      <td>${renderMarkdown(p.description)}</td>
                    </tr>`;
      }).join("")}
                </tbody>
              </table>
            ` : ""}
            ${requestBodySchemaHtml}
            ${responsesHtml}

            <details class="cdd-try-it-out">
              <summary class="cdd-try-summary">${escapeHtml(t.tryItOut)}</summary>
              <form class="cdd-try-form" method="${m2 === "get" ? "GET" : "POST"}" action="/" data-method="${escapeHtml(upperMethod)}" data-route="${escapeHtml(route)}" data-base-url="${escapeHtml(opBaseUrl)}">
                ${mergedParams.map(
        (p) => `
                    <div class="cdd-try-field">
                      <label for="try-${escapeHtml(id)}-${escapeHtml(p.name)}">${escapeHtml(p.name)} (${escapeHtml(p.in)})${p.required ? " *" : ""}</label>
                      <input type="text" id="try-${escapeHtml(id)}-${escapeHtml(p.name)}" name="${escapeHtml(p.name)}" data-in="${escapeHtml(p.in)}" ${p.required ? "required" : ""}>
                    </div>
                  `
      ).join("")}
                ${resolvedRb ? `
                  <div class="cdd-try-field">
                    <label for="try-${escapeHtml(id)}-body">${escapeHtml(t.requestBody)}</label>
                    <textarea id="try-${escapeHtml(id)}-body" name="requestBody" rows="4"></textarea>
                  </div>
                ` : ""}
                <button type="submit" class="cdd-try-btn">${escapeHtml(t.execute)}</button>
              </form>
              <div class="cdd-try-response" style="display: none; margin-top: 1rem;">
                <h4 style="margin:0 0 0.5rem 0;">${escapeHtml(t.response)}</h4>
                <div class="cdd-try-status"></div>
                <pre><code class="cdd-try-body"></code></pre>
              </div>
            </details>
          </div>

          ${renderCodeAside(id, curl, examples, languages, t)}
        </article>
      `;
    }
    routeToc += `</details>`;
    if (routeHasOps) tocHtml += routeToc;
  }
  if (spec.webhooks) {
    for (const [webhookName, pathItem] of Object.entries(spec.webhooks)) {
      if (isReference(pathItem)) continue;
      const operations = getPathOperations(pathItem);
      for (const [m2, op] of operations) {
        const id = op.operationId || `webhook-${m2}-${webhookName}`;
        const upperMethod = m2.toUpperCase();
        webhooksTocHtml += `<a href="#${escapeHtml(id)}" class="cdd-toc-item">WEBHOOK: ${escapeHtml(webhookName)} (${escapeHtml(upperMethod)})</a>`;
        const curl = generateCurl(m2, `/${webhookName}`, op, baseUrl, pathItem, spec.components);
        const examples = data.codeExamples[id] || [];
        mainHtml += `
        <article id="${escapeHtml(id)}" class="cdd-endpoint cdd-webhook">
          <div class="cdd-endpoint-info">
            <h2 class="cdd-endpoint-title">${escapeHtml(op.summary || webhookName)}</h2>
            <div class="cdd-endpoint-path-row">
              <span class="cdd-badge cdd-badge-post">WEBHOOK</span>
              <span class="cdd-badge cdd-badge-${escapeHtml(m2)} cdd-badge-${escapeHtml(upperMethod)}">${escapeHtml(upperMethod)}</span>
              <code class="cdd-path-text">${escapeHtml(webhookName)}</code>
            </div>
            ${op.description ? `<div class="cdd-description">${renderMarkdown(op.description)}</div>` : ""}
          </div>
          ${renderCodeAside(id, curl, examples, languages, t)}
        </article>`;
      }
    }
  }
  if (data.workflows && data.workflows.length > 0) {
    mainHtml += `<h2 id="section-workflows" class="cdd-main-title">${escapeHtml(t.workflowsHeading)}</h2>`;
    for (const nw of data.workflows) {
      const wf = nw.workflow;
      const wfDomId = `workflow-${wf.workflowId}`;
      workflowsTocHtml += `<details class="cdd-toc-group" open>
              <summary class="cdd-toc-route"><a href="#${escapeHtml(wfDomId)}" class="cdd-toc-item cdd-toc-workflow-item">WORKFLOW: ${escapeHtml(wf.workflowId)}</a></summary>
              ${wf.steps.map(
        (st2) => `<a href="#step-${escapeHtml(wf.workflowId)}-${escapeHtml(st2.stepId)}" class="cdd-toc-item">${escapeHtml(st2.stepId)}</a>`
      ).join("")}
            </details>`;
      mainHtml += renderWorkflowSection(nw, data, languages, t);
    }
  }
  if (spec.components?.schemas) {
    schemasHtml += `<h2 id="section-schemas" class="cdd-main-title">${escapeHtml(t.schemas)}</h2>`;
    for (const [name, schema] of Object.entries(spec.components.schemas)) {
      schemasHtml += `
        <div id="schema-${escapeHtml(name)}" class="cdd-schema-section">
          <h3 class="cdd-schema-title">${escapeHtml(name)}</h3>
          ${renderSchema(schema, 0, `schema-${name}`, t)}
        </div>
      `;
    }
  }
  if (data.arazzoSpec?.components) {
    schemasHtml += renderArazzoComponents(data.arazzoSpec.components, t);
  }
  const lightVars = `
    --cdd-primary: #005ac1;
    --cdd-on-primary: #ffffff;
    --cdd-background: #fdfbff;
    --cdd-surface: #fdfbff;
    --cdd-on-surface: #1b1b1f;
    --cdd-on-surface-variant: #45464f;
    --cdd-outline: #757780;
    --cdd-outline-variant: #c5c6d0;
    --cdd-tok-keyword: #c586c0;
    --cdd-tok-string: #ce9178;
    --cdd-tok-comment: #6a9955;
    --cdd-tok-number: #b5cea8;
    --cdd-tok-function: #dcdcaa;
    --cdd-tok-type: #4ec9b0;
    --cdd-tok-variable: #9cdcfe;
    --cdd-tok-operator: #d4d4d4;
  `;
  const darkVars = `
    --cdd-primary: #adc6ff;
    --cdd-on-primary: #002e69;
    --cdd-background: #1b1b1f;
    --cdd-surface: #1b1b1f;
    --cdd-on-surface: #e3e2e6;
    --cdd-on-surface-variant: #c5c6d0;
    --cdd-outline: #8f9099;
    --cdd-outline-variant: #45464f;
    --cdd-tok-keyword: #d8a0df;
    --cdd-tok-string: #f0a890;
    --cdd-tok-comment: #7ec699;
    --cdd-tok-number: #d7ba7d;
    --cdd-tok-function: #dcdcaa;
    --cdd-tok-type: #4ec9b0;
    --cdd-tok-variable: #9cdcfe;
    --cdd-tok-operator: #e3e2e6;
  `;
  const safeLanguages = languages.map(sanitizeCssIdent);
  const stylesHtml = `<style>
    /* Progressive Enhancement: Hide JS-dependent elements when JS is disabled */
    .no-js .cdd-copy-btn,
    .no-js .cdd-search-input,
    .no-js .cdd-try-it-out,
    .no-js .cdd-code-tabs input[type="radio"],
    .no-js .cdd-code-tabs label { display: none; }
    
    .no-js .cdd-code-tabs .cdd-tab-content { display: block; margin-bottom: 1rem; border-top: 1px solid rgba(255,255,255,0.1); }
    .no-js .cdd-code-tabs .cdd-tab-content:before { content: "Code block: "; font-size: 0.75rem; opacity: 0.7; }
    .no-js .cdd-lang-block { display: block; margin-bottom: 1rem; }
    .no-js .cdd-variant-block.cdd-hide-if-imports.cdd-hide-if-wrapping { display: block; }
  </style>
  <style>
    :root, :host {
      ${lightVars}
      --cdd-get: #00668b; --cdd-get-bg: #c2e8ff;
      --cdd-post: #006e2c; --cdd-post-bg: #b4f3b0;
      --cdd-put: #944a00; --cdd-put-bg: #ffdcbe;
      --cdd-delete: #ba1a1a; --cdd-delete-bg: #ffdad6;
      --cdd-patch: #006a6a; --cdd-patch-bg: #6ff5f5;
      --cdd-options: #5b4300; --cdd-options-bg: #ffdf9a;
      --cdd-head: #4355b9; --cdd-head-bg: #dee0ff;
      --cdd-trace: #705573; --cdd-trace-bg: #fad7ff;
      --cdd-query: #005ac1; --cdd-query-bg: #d8e2ff;
      --cdd-workflow: #6750a4; --cdd-workflow-bg: #eaddff;
      
      --cdd-display-imports: ${defaultIncludeImports ? "block" : "none"};
      --cdd-display-wrapping: ${defaultIncludeWrapping ? "block" : "none"};
    }

    #opt-dark-mode:checked ~ .cdd-layout,
    [data-theme="dark"],
    :host([data-theme="dark"]),
    :host([theme="dark"]) {
      ${darkVars}
    }

    .cdd-tok-keyword { color: var(--cdd-tok-keyword); font-weight: 500; }
    .cdd-tok-string { color: var(--cdd-tok-string); }
    .cdd-tok-comment { color: var(--cdd-tok-comment); font-style: italic; }
    .cdd-tok-number { color: var(--cdd-tok-number); }
    .cdd-tok-function { color: var(--cdd-tok-function); }
    .cdd-tok-type { color: var(--cdd-tok-type); }
    .cdd-tok-variable { color: var(--cdd-tok-variable); }
    .cdd-tok-operator { color: var(--cdd-tok-operator); }

    .cdd-lang-block { display: none; }
    ${safeLanguages.map((lang) => `#lang-opt-${lang}:checked ~ .cdd-layout .cdd-show-if-${lang} { display: block; }`).join("\n")}
    #opt-imports:checked ~ * { --cdd-display-imports: block; }
    #opt-imports:not(:checked) ~ * { --cdd-display-imports: none; }
    #opt-wrapping:checked ~ * { --cdd-display-wrapping: block; }
    #opt-wrapping:not(:checked) ~ * { --cdd-display-wrapping: none; }

    body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      background: var(--cdd-background);
      color: var(--cdd-on-surface);
      line-height: 1.5;
    }

    .cdd-visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }

    .cdd-layout {
      display: grid;
      grid-template-columns: 280px 1fr 350px;
      height: 100vh;
      overflow: hidden;
      background: var(--cdd-background);
      color: var(--cdd-on-surface);
    }

    @media (max-width: 1200px) {
      .cdd-layout { grid-template-columns: 250px 1fr; }
      .cdd-sidebar-right { display: none; }
    }

    @media (max-width: 768px) {
      .cdd-layout { grid-template-columns: 1fr; }
      .cdd-sidebar-left { display: none; }
    }

    .cdd-sidebar-left, .cdd-sidebar-right {
      background: var(--cdd-surface);
      border-right: 1px solid var(--cdd-outline-variant);
      overflow-y: auto;
      padding: 1rem;
    }
    
    .cdd-sidebar-right { border-right: none; border-left: 1px solid var(--cdd-outline-variant); }

    .cdd-main {
      overflow-y: auto;
      padding: 2rem;
      scroll-behavior: smooth;
    }

    .cdd-toc-group { margin-bottom: 0.5rem; }
    .cdd-toc-route { font-size: 0.875rem; font-weight: 500; cursor: pointer; padding: 0.25rem 0; }
    .cdd-toc-item { display: block; font-size: 0.75rem; padding: 0.25rem 1rem; text-decoration: none; color: var(--cdd-on-surface-variant); border-radius: 4px; }
    .cdd-toc-item:hover { background: rgba(0,0,0,0.05); }

    .cdd-endpoint { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 4rem; border-bottom: 1px solid var(--cdd-outline-variant); padding-bottom: 4rem; content-visibility: auto; contain-intrinsic-size: 1000px; }
    @media (min-width: 1600px) {
      .cdd-endpoint { grid-template-columns: 1fr 400px; }
    }

    .cdd-anchor { text-decoration: none; color: var(--cdd-primary); opacity: 0; margin-right: 0.5rem; font-family: monospace; }
    .cdd-deep-link-row:hover .cdd-anchor { opacity: 1; }
    .cdd-deep-link-row:target { background: rgba(0, 90, 193, 0.1); outline: 2px solid var(--cdd-primary); }

    .cdd-badge { padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-decoration: none; display: inline-block; }
    .cdd-badge-GET, .cdd-badge-get { background: var(--cdd-get-bg); color: var(--cdd-get); }
    .cdd-badge-POST, .cdd-badge-post { background: var(--cdd-post-bg); color: var(--cdd-post); }
    .cdd-badge-PUT, .cdd-badge-put { background: var(--cdd-put-bg); color: var(--cdd-put); }
    .cdd-badge-DELETE, .cdd-badge-delete { background: var(--cdd-delete-bg); color: var(--cdd-delete); }
    .cdd-badge-PATCH, .cdd-badge-patch { background: var(--cdd-patch-bg); color: var(--cdd-patch); }
    .cdd-badge-OPTIONS, .cdd-badge-options { background: var(--cdd-options-bg); color: var(--cdd-options); }
    .cdd-badge-HEAD, .cdd-badge-head { background: var(--cdd-head-bg); color: var(--cdd-head); }
    .cdd-badge-TRACE, .cdd-badge-trace { background: var(--cdd-trace-bg); color: var(--cdd-trace); }
    .cdd-badge-QUERY, .cdd-badge-query { background: var(--cdd-query-bg); color: var(--cdd-query); }
    .cdd-badge-workflow { background: var(--cdd-workflow-bg); color: var(--cdd-workflow); }
    .cdd-badge-channel { background: var(--cdd-options-bg); color: var(--cdd-options); }
    .cdd-badge-meta { background: rgba(117, 119, 128, 0.15); color: var(--cdd-on-surface-variant); font-weight: 500; }

    .cdd-steps-pipeline { display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; border-left: 3px solid var(--cdd-primary); padding-left: 1rem; }
    .cdd-step-card { border: 1px solid var(--cdd-outline-variant); border-radius: 8px; padding: 1rem; background: var(--cdd-surface); }
    .cdd-step-header { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.5rem; }
    .cdd-step-index { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: var(--cdd-primary); color: var(--cdd-on-primary); font-size: 0.75rem; font-weight: 700; }
    .cdd-step-subtitle { font-size: 0.8125rem; margin: 0.75rem 0 0.25rem; color: var(--cdd-on-surface-variant); }
    .cdd-source-descriptions { margin: 1rem 0; display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; font-size: 0.875rem; }
    .cdd-source-chip { padding: 0.25rem 0.5rem; border: 1px solid var(--cdd-outline-variant); border-radius: 6px; }

    .cdd-code-card { background: #1e1e1e; border-radius: 12px; color: #fff; overflow: hidden; }
    .cdd-code-tabs { display: flex; flex-wrap: wrap; }
    .cdd-tab-input { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
    .cdd-tab-label { padding: 0.75rem 1rem; font-size: 0.875rem; cursor: pointer; border-bottom: 2px solid transparent; opacity: 0.7; transition: all 0.2s; }
    .cdd-tab-input:focus-visible + .cdd-tab-label { outline: 2px solid var(--cdd-primary); outline-offset: -2px; opacity: 1; }
    .cdd-tab-input:checked + .cdd-tab-label { border-bottom-color: var(--cdd-primary); opacity: 1; }
    
    .cdd-tab-content { display: none; width: 100%; padding: 1rem; background: #000; }
    
    .cdd-tab-input:nth-of-type(1):checked ~ .cdd-tab-content:nth-of-type(1) { display: block; }
    .cdd-tab-input:nth-of-type(2):checked ~ .cdd-tab-content:nth-of-type(2) { display: block; }

    .cdd-copy-btn { position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; padding: 0.25rem 0.5rem; font-size: 0.75rem; cursor: pointer; transition: background 0.2s; z-index: 10; }
    .cdd-copy-btn:hover { background: rgba(255,255,255,0.2); }
    .cdd-copy-btn.cdd-copied { background: #34a853; border-color: #34a853; }

    pre { margin: 0; font-family: 'Roboto Mono', monospace; font-size: 0.8125rem; overflow-x: auto; color: #d4d4d4; padding-top: 2rem; }

    
    .cdd-sidebar-title { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--cdd-on-surface-variant); margin: 1rem 0 0.5rem; }
    
    .cdd-setting-label { display: block; margin-bottom: 0.25rem; cursor: pointer; padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.875rem; border: 1px solid var(--cdd-outline-variant); transition: all 0.2s; }
    .cdd-setting-label:hover { background: rgba(0,0,0,0.05); border-color: var(--cdd-outline); }
    
    .cdd-try-it-out { margin-top: 2rem; border: 1px solid var(--cdd-outline-variant); border-radius: 8px; padding: 1rem; }
    .cdd-try-summary { font-weight: 500; cursor: pointer; user-select: none; }
    .cdd-try-field { margin-top: 1rem; display: flex; flex-direction: column; }
    .cdd-try-field label { font-size: 0.75rem; font-weight: 700; margin-bottom: 0.25rem; }
    .cdd-try-field input, .cdd-try-field textarea { padding: 0.5rem; border: 1px solid var(--cdd-outline-variant); border-radius: 4px; font-family: 'Roboto Mono', monospace; background: var(--cdd-surface); color: var(--cdd-on-surface); }
    .cdd-try-btn { margin-top: 1rem; background: var(--cdd-primary); color: var(--cdd-on-primary); border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: 500; }
    .cdd-try-btn:hover { opacity: 0.9; }

    ${safeLanguages.map((lang) => `#lang-opt-${lang}:checked ~ .cdd-layout label[for="lang-opt-${lang}"] { background: var(--cdd-primary); color: var(--cdd-on-primary); border-color: var(--cdd-primary); font-weight: 500; }`).join("\n")}
    ${safeLanguages.map((lang) => `#lang-opt-${lang}:focus-visible ~ .cdd-layout label[for="lang-opt-${lang}"] { outline: 2px solid var(--cdd-primary); outline-offset: 2px; }`).join("\n")}
    #opt-imports:checked ~ .cdd-layout label[for="opt-imports"] { background: var(--cdd-primary); color: var(--cdd-on-primary); border-color: var(--cdd-primary); }
    #opt-imports:focus-visible ~ .cdd-layout label[for="opt-imports"] { outline: 2px solid var(--cdd-primary); outline-offset: 2px; }
    #opt-wrapping:checked ~ .cdd-layout label[for="opt-wrapping"] { background: var(--cdd-primary); color: var(--cdd-on-primary); border-color: var(--cdd-primary); }
    #opt-wrapping:focus-visible ~ .cdd-layout label[for="opt-wrapping"] { outline: 2px solid var(--cdd-primary); outline-offset: 2px; }
    #opt-dark-mode:checked ~ .cdd-layout label[for="opt-dark-mode"] { background: var(--cdd-primary); color: var(--cdd-on-primary); border-color: var(--cdd-primary); }
    #opt-dark-mode:focus-visible ~ .cdd-layout label[for="opt-dark-mode"] { outline: 2px solid var(--cdd-primary); outline-offset: 2px; }

    /* Variant display logic */
    .cdd-variant-block { display: none; }
    .cdd-lang-block > .cdd-variant-block:only-child { display: block; }
    
    #opt-imports:checked ~ #opt-wrapping:checked ~ .cdd-layout .cdd-variant-block.cdd-show-if-imports.cdd-show-if-wrapping { display: block; }
    #opt-imports:not(:checked) ~ #opt-wrapping:checked ~ .cdd-layout .cdd-variant-block.cdd-hide-if-imports.cdd-show-if-wrapping { display: block; }
    #opt-imports:checked ~ #opt-wrapping:not(:checked) ~ .cdd-layout .cdd-variant-block.cdd-show-if-imports.cdd-hide-if-wrapping { display: block; }
    #opt-imports:not(:checked) ~ #opt-wrapping:not(:checked) ~ .cdd-layout .cdd-variant-block.cdd-hide-if-imports.cdd-hide-if-wrapping { display: block; }
  </style>`;
  const bodyHtml = `${languages.map((lang, i) => `<input type="radio" id="lang-opt-${sanitizeCssIdent(lang)}" name="global-lang" class="cdd-visually-hidden" ${i === selectedLangIndex ? "checked" : ""}>`).join("")}
  <input type="checkbox" id="opt-imports" class="cdd-visually-hidden" ${defaultIncludeImports ? "checked" : ""}>
  <input type="checkbox" id="opt-wrapping" class="cdd-visually-hidden" ${defaultIncludeWrapping ? "checked" : ""}>
  <input type="checkbox" id="opt-dark-mode" class="cdd-visually-hidden" ${theme === "dark" ? "checked" : ""}>

  <div class="cdd-layout">
    <aside class="cdd-sidebar-left" aria-label="${escapeHtml(t.tocNavLabel)}">
      <h1 style="font-size: 1.25rem;">${escapeHtml(spec.info.title)}</h1>
      <div class="cdd-sidebar-title">${escapeHtml(t.paths)}</div>
      ${tocHtml}
      ${webhooksTocHtml ? `<div class="cdd-sidebar-title">${escapeHtml(t.webhooksHeading)}</div>${webhooksTocHtml}` : ""}
      ${workflowsTocHtml ? `<div class="cdd-sidebar-title">${escapeHtml(t.workflowsHeading)}</div>${workflowsTocHtml}` : ""}
      <div class="cdd-sidebar-title">${escapeHtml(t.schemas)}</div>
      <nav aria-label="${escapeHtml(t.schemas)}">
        ${spec.components?.schemas ? Object.keys(spec.components.schemas).map((name) => `<a href="#schema-${escapeHtml(name)}" class="cdd-toc-item">${escapeHtml(name)}</a>`).join("") : ""}
      </nav>
    </aside>

    <main class="cdd-main">
      <header>
        <h1 style="font-size: 3rem; font-weight: 300;">${escapeHtml(spec.info.title)}</h1>
        <div class="cdd-description">${renderMarkdown(spec.info.description)}</div>
        ${sourceDescriptionsHtml}
        ${spec.info.termsOfService ? `<p style="font-size: 0.875rem;"><a href="${sanitizeUrl(spec.info.termsOfService)}" target="_blank">${escapeHtml(t.termsOfService)}</a></p>` : ""}
        ${spec.info.contact ? `<p style="font-size: 0.875rem;">${escapeHtml(t.contactPrefix)}${spec.info.contact.url ? `<a href="${sanitizeUrl(spec.info.contact.url)}" target="_blank">${escapeHtml(spec.info.contact.name || t.apiSupport)}</a>` : spec.info.contact.email ? `<a href="mailto:${escapeHtml(spec.info.contact.email)}">${escapeHtml(spec.info.contact.name || spec.info.contact.email)}</a>` : escapeHtml(spec.info.contact.name || t.apiSupport)}</p>` : ""}
      </header>
      ${mainHtml}
      ${schemasHtml}
    </main>

    <aside class="cdd-sidebar-right">
      <div class="cdd-sidebar-title">${escapeHtml(t.settings)}</div>
      
      <p style="font-size: 0.875rem; margin-bottom: 0.5rem;">${escapeHtml(t.appearanceHeading)}</p>
      <label for="opt-dark-mode" class="cdd-setting-label">
        ${escapeHtml(t.darkMode)}
      </label>

      <p style="font-size: 0.875rem; margin-top: 1rem; margin-bottom: 0.5rem;">${escapeHtml(t.language)}</p>
      ${languages.map(
    (lang) => `
        <label for="lang-opt-${sanitizeCssIdent(lang)}" class="cdd-setting-label">
          ${escapeHtml(lang)}
        </label>
      `
  ).join("")}
      
      <div style="margin-top: 1rem;">
        <label for="opt-imports" class="cdd-setting-label">
          ${escapeHtml(t.includeImports)}
        </label>
        <label for="opt-wrapping" class="cdd-setting-label">
          ${escapeHtml(t.includeWrapping)}
        </label>
      </div>
    </aside>
  </div>`;
  return {
    stylesHtml,
    bodyHtml,
    title: spec.info.title,
    locale: t.locale
  };
}

// src/web-component.ts
function isCddDocsBlock(val) {
  if (!isRecord(val)) return false;
  return isRecord(val["endpoints"]) || isRecord(val["operations"]) || Array.isArray(val["operations"]) || isRecord(val["workflows"]) || Array.isArray(val["workflows"]) || isRecord(val["webhooks"]) || Array.isArray(val["webhooks"]);
}
function normalizeSdkExamplesInput(val) {
  let current = val;
  if (typeof current === "string") {
    try {
      current = JSON.parse(current);
    } catch {
      return [];
    }
  }
  if (isCddDocsBlock(current)) {
    current = [current];
  }
  if (!Array.isArray(current)) {
    return [];
  }
  const extractedExamples = [];
  for (const item of current) {
    if (!isRecord(item)) continue;
    const itemContent = item["content"];
    const itemFilepath = typeof item["filepath"] === "string" ? item["filepath"] : "";
    const itemLang = typeof item["language"] === "string" ? item["language"] : "typescript";
    if (typeof itemContent === "string" && (itemFilepath.endsWith(".json") || itemContent.includes('"endpoints"') || itemContent.includes('"workflows"') || itemContent.includes('"webhooks"') || itemContent.includes('"operations"'))) {
      try {
        const parsed = JSON.parse(itemContent);
        if (isCddDocsBlock(parsed)) {
          const lang = typeof parsed["language"] === "string" ? parsed["language"] : itemLang;
          extractedExamples.push(...extractExamplesFromCddOutputRecord(parsed, lang));
          continue;
        } else if (Array.isArray(parsed) && parsed.some(isCddDocsBlock)) {
          for (const block of parsed) {
            if (!isCddDocsBlock(block)) continue;
            const lang = typeof block["language"] === "string" ? block["language"] : itemLang;
            extractedExamples.push(...extractExamplesFromCddOutputRecord(block, lang));
          }
          continue;
        }
      } catch (e) {
        console.warn("cdd-docs-ui: Failed to securely parse docs.json payload.", e);
      }
    }
    if (isCddDocsBlock(item)) {
      extractedExamples.push(...extractExamplesFromCddOutputRecord(item, itemLang));
      continue;
    }
    if (typeof itemContent === "string") {
      extractedExamples.push({
        language: itemLang,
        filepath: itemFilepath,
        content: itemContent,
        includeImports: typeof item["includeImports"] === "boolean" ? item["includeImports"] : void 0,
        includeWrapping: typeof item["includeWrapping"] === "boolean" ? item["includeWrapping"] : void 0,
        operationId: typeof item["operationId"] === "string" ? item["operationId"] : void 0,
        route: typeof item["route"] === "string" ? item["route"] : void 0,
        method: typeof item["method"] === "string" ? item["method"] : void 0,
        webhookName: typeof item["webhookName"] === "string" ? item["webhookName"] : void 0,
        workflowId: typeof item["workflowId"] === "string" ? item["workflowId"] : void 0
      });
    }
  }
  return extractedExamples;
}
function initApiDocs(container = document, customTranslations = {}) {
  const t = { ...defaultTranslations, ...customTranslations };
  const langProxies = container.querySelectorAll(
    'input[name="ui-lang-proxy"]:not([data-cdd-bound])'
  );
  langProxies.forEach((proxy) => {
    proxy.setAttribute("data-cdd-bound", "true");
    proxy.addEventListener("change", () => {
      const lang = proxy.id.replace("proxy-", "");
      const realInput = container.querySelector(`#lang-opt-${lang}`);
      if (realInput) {
        realInput.checked = true;
        realInput.dispatchEvent(new Event("change"));
      }
    });
  });
  const langRadios = container.querySelectorAll('input[name="global-lang"]:not([data-cdd-bound])');
  langRadios.forEach((radio) => {
    radio.setAttribute("data-cdd-bound", "true");
    radio.addEventListener("change", () => {
      if (radio.checked) {
        const lang = radio.id.replace("lang-opt-", "");
        container.dispatchEvent(
          new CustomEvent("cdd-language-change", {
            bubbles: true,
            detail: { language: lang }
          })
        );
      }
    });
  });
  const importsProxy = container.querySelector(
    'input[data-onchange-proxy*="opt-imports"]:not([data-cdd-bound])'
  );
  if (importsProxy) {
    importsProxy.setAttribute("data-cdd-bound", "true");
    importsProxy.addEventListener("change", () => {
      const realInput = container.querySelector("#opt-imports");
      if (realInput) {
        realInput.checked = importsProxy.checked;
        realInput.dispatchEvent(new Event("change"));
      }
    });
  }
  const wrappingProxy = container.querySelector(
    'input[data-onchange-proxy*="opt-wrapping"]:not([data-cdd-bound])'
  );
  if (wrappingProxy) {
    wrappingProxy.setAttribute("data-cdd-bound", "true");
    wrappingProxy.addEventListener("change", () => {
      const realInput = container.querySelector("#opt-wrapping");
      if (realInput) {
        realInput.checked = wrappingProxy.checked;
        realInput.dispatchEvent(new Event("change"));
      }
    });
  }
  const importsInput = container.querySelector("#opt-imports:not([data-cdd-bound])");
  const wrappingInput = container.querySelector("#opt-wrapping:not([data-cdd-bound])");
  const dispatchOptionsChange = () => {
    const imp = container.querySelector("#opt-imports");
    const wrap = container.querySelector("#opt-wrapping");
    container.dispatchEvent(
      new CustomEvent("cdd-docs-options-change", {
        bubbles: true,
        detail: {
          includeImports: imp ? imp.checked : true,
          includeWrapping: wrap ? wrap.checked : true
        }
      })
    );
  };
  if (importsInput) {
    importsInput.setAttribute("data-cdd-bound", "true");
    importsInput.addEventListener("change", dispatchOptionsChange);
  }
  if (wrappingInput) {
    wrappingInput.setAttribute("data-cdd-bound", "true");
    wrappingInput.addEventListener("change", dispatchOptionsChange);
  }
  const themeInput = container.querySelector("#opt-dark-mode:not([data-cdd-bound])");
  if (themeInput) {
    themeInput.setAttribute("data-cdd-bound", "true");
    const savedTheme = localStorage.getItem("cdd-theme");
    if (savedTheme) {
      themeInput.checked = savedTheme === "dark";
    }
    themeInput.addEventListener("change", () => {
      localStorage.setItem("cdd-theme", themeInput.checked ? "dark" : "light");
    });
  }
  let searchInput = container.querySelector(".cdd-search-input");
  if (!searchInput) {
    searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = t.searchPlaceholder;
    searchInput.setAttribute("aria-label", t.searchPlaceholder);
    searchInput.className = "cdd-search-input";
    searchInput.style.width = "100%";
    searchInput.style.padding = "0.5rem";
    searchInput.style.marginBottom = "1rem";
    searchInput.style.borderRadius = "4px";
    searchInput.style.border = "1px solid var(--cdd-outline)";
    const tocTitle = container.querySelector(".cdd-sidebar-title");
    if (tocTitle && tocTitle.nextSibling && tocTitle.parentNode) {
      tocTitle.parentNode.insertBefore(searchInput, tocTitle.nextSibling);
    }
  }
  let itemIndices = null;
  let sectionIndices = null;
  let searchTimeout;
  if (!searchInput.hasAttribute("data-cdd-bound")) {
    searchInput.setAttribute("data-cdd-bound", "true");
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.toLowerCase();
      if (searchTimeout !== void 0) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        if (!itemIndices) {
          itemIndices = Array.from(container.querySelectorAll(".cdd-toc-item")).map((el) => ({
            el,
            text: `${el.textContent ?? ""} ${el.getAttribute("href") ?? ""}`.toLowerCase()
          }));
        }
        if (!sectionIndices) {
          sectionIndices = Array.from(container.querySelectorAll(".cdd-endpoint")).map((el) => ({
            el,
            text: `${el.textContent ?? ""} ${el.id}`.toLowerCase()
          }));
        }
        itemIndices.forEach((item) => {
          const isVisible = item.text.includes(term);
          item.el.style.display = isVisible ? "block" : "none";
        });
        sectionIndices.forEach((section) => {
          const isVisible = section.text.includes(term);
          section.el.style.display = isVisible ? "grid" : "none";
        });
      }, 150);
    });
  }
  const copyButtons = container.querySelectorAll(".cdd-copy-btn:not([data-cdd-bound])");
  copyButtons.forEach((btn) => {
    btn.setAttribute("data-cdd-bound", "true");
    btn.addEventListener("click", async () => {
      const codeEl = btn.parentElement?.querySelector("code");
      if (!codeEl) return;
      try {
        const rawCode = codeEl.getAttribute("data-raw-code") ?? codeEl.textContent ?? "";
        await navigator.clipboard.writeText(rawCode);
        const originalText = btn.textContent;
        btn.textContent = t.copied;
        btn.classList.add("cdd-copied");
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove("cdd-copied");
        }, 2e3);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
  });
  const tryForms = container.querySelectorAll(".cdd-try-form:not([data-cdd-bound])");
  tryForms.forEach((form) => {
    form.setAttribute("data-cdd-bound", "true");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const method = form.getAttribute("data-method") || "GET";
      let route = form.getAttribute("data-route") || "";
      const cleanBaseUrl = (form.getAttribute("data-base-url") || "https://api.example.com").replace(/\/$/, "");
      const headers = {};
      const queryParams = new URLSearchParams();
      let body = void 0;
      const inputs = form.querySelectorAll("input, textarea");
      inputs.forEach((el) => {
        const val = el.value;
        if (!val) return;
        if (el.name === "requestBody") {
          body = val;
        } else {
          const inType = el.getAttribute("data-in");
          if (inType === "path") {
            route = route.replace(`{${el.name}}`, encodeURIComponent(val));
          } else if (inType === "query") {
            queryParams.append(el.name, val);
          } else if (inType === "header") {
            headers[el.name] = val;
          }
        }
      });
      const apiDocsElement = form.closest("cdd-api-docs");
      const cddEl = apiDocsElement instanceof CDDApiDocs ? apiDocsElement : null;
      const org = cddEl?.org;
      const repo = cddEl?.repo;
      const urlParams = new URLSearchParams(window.location.search);
      const currentV = urlParams.get("v") || "";
      const versionPath = currentV ? `/${encodeURIComponent(currentV)}` : "";
      const querySuffix = queryParams.toString() ? `?${queryParams.toString()}` : "";
      let url = `${cleanBaseUrl}${route}${querySuffix}`;
      if (org && repo) {
        url = `/cdd-gateway/proxy/${encodeURIComponent(org)}/${encodeURIComponent(repo)}${versionPath}${route}${querySuffix}`;
      }
      const responseContainer = form.nextElementSibling;
      if (!(responseContainer instanceof HTMLElement) || !responseContainer.classList.contains("cdd-try-response")) {
        return;
      }
      const statusEl = responseContainer.querySelector(".cdd-try-status");
      const bodyEl = responseContainer.querySelector(".cdd-try-body");
      responseContainer.style.display = "block";
      if (statusEl) statusEl.textContent = t.loading;
      if (bodyEl) bodyEl.textContent = "";
      try {
        if (body && !headers["Content-Type"]) {
          headers["Content-Type"] = "application/json";
        }
        const res = await fetch(url, {
          method,
          headers,
          body: method !== "GET" && method !== "HEAD" ? body ?? null : null
        });
        if (statusEl) {
          statusEl.textContent = `${t.status}: ${res.status} ${res.statusText}`;
        }
        const text = await res.text();
        if (bodyEl) {
          try {
            bodyEl.textContent = JSON.stringify(JSON.parse(text), null, 2);
          } catch {
            bodyEl.textContent = text;
          }
        }
      } catch (err) {
        if (statusEl) statusEl.textContent = t.error;
        if (bodyEl) {
          bodyEl.textContent = err instanceof Error ? err.message : String(err);
        }
      }
    });
  });
  const workflowForms = container.querySelectorAll(".cdd-workflow-try-form:not([data-cdd-bound])");
  workflowForms.forEach((form) => {
    form.setAttribute("data-cdd-bound", "true");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const wfId = form.getAttribute("data-workflow-id") || "workflow";
      const formBaseUrl = form.getAttribute("data-base-url") || "https://api.example.com";
      const responseContainer = form.nextElementSibling;
      if (!(responseContainer instanceof HTMLElement) || !responseContainer.classList.contains("cdd-try-response")) {
        return;
      }
      const statusEl = responseContainer.querySelector(".cdd-try-status");
      const bodyEl = responseContainer.querySelector(".cdd-try-body");
      responseContainer.style.display = "block";
      if (statusEl) statusEl.textContent = t.loading;
      if (bodyEl) bodyEl.textContent = "";
      const workflowArticle = form.closest(".cdd-workflow");
      const stepCards = workflowArticle ? Array.from(workflowArticle.querySelectorAll(".cdd-step-card")) : [];
      try {
        const stepResults = [];
        for (const card of stepCards) {
          const stepId = card.getAttribute("data-step-id") || "step";
          const method = card.getAttribute("data-method") || "GET";
          const route = card.getAttribute("data-route") || "/";
          const cleanCardBase = (card.getAttribute("data-base-url") || formBaseUrl).replace(/\/$/, "");
          const res = await fetch(`${cleanCardBase}${route}`, { method });
          const text = await res.text();
          stepResults.push({ stepId, status: res.status, body: text });
        }
        if (statusEl) {
          statusEl.textContent = `${t.status}: ${wfId} (${stepResults.length} steps completed)`;
        }
        if (bodyEl) {
          bodyEl.textContent = JSON.stringify({ workflowId: wfId, steps: stepResults }, null, 2);
        }
      } catch (err) {
        if (statusEl) statusEl.textContent = t.error;
        if (bodyEl) {
          bodyEl.textContent = err instanceof Error ? err.message : String(err);
        }
      }
    });
  });
}
var CDDApiDocs = class extends HTMLElement {
  /**
   * Initializes a new `CDDApiDocs` custom element instance.
   */
  constructor() {
    super();
    /** Custom UI translation overrides. */
    this._translations = {};
    /** Normalized SDK code examples injected via the `sdkExamples` property. */
    this._sdkExamples = [];
    /** Monotonic render version counter to discard stale async fetch responses. */
    this._renderVersion = 0;
    this._boundMessageHandler = (event) => {
      this.handlePostMessage(event);
    };
  }
  /**
   * Gets the organization identifier extracted from dynamic routing (`/u/:org/:repo`), if present.
   * @returns The organization string or undefined.
   */
  get org() {
    return this._org;
  }
  /**
   * Gets the repository identifier extracted from dynamic routing (`/u/:org/:repo`), if present.
   * @returns The repository string or undefined.
   */
  get repo() {
    return this._repo;
  }
  /**
   * Gets the current custom translations applied to the UI.
   * @returns A partial DocTranslations object.
   */
  get translations() {
    return this._translations;
  }
  /**
   * Sets custom translations for the UI and triggers a re-render.
   * @param val A partial DocTranslations object.
   */
  set translations(val) {
    this._translations = val;
    this.triggerRender();
  }
  /**
   * Gets the currently selected active SDK language, if set.
   * @returns The active language string or null.
   */
  get activeLanguage() {
    return this.getAttribute("active-language");
  }
  /**
   * Sets the active SDK language attribute (or removes it when null/empty).
   * @param val The target language identifier or null.
   */
  set activeLanguage(val) {
    if (val) {
      this.setAttribute("active-language", val);
    } else {
      this.removeAttribute("active-language");
    }
  }
  /**
   * Gets the current list of SDK examples.
   * @returns Array of CodeExample objects.
   */
  get sdkExamples() {
    return this._sdkExamples;
  }
  /**
   * Sets the SDK examples. Automatically parses JSON strings or standardizes format, then triggers re-render.
   * @param val Examples configuration array, string, or object.
   */
  set sdkExamples(val) {
    this._sdkExamples = normalizeSdkExamplesInput(val);
    this.triggerRender();
  }
  /**
   * Called when the element is inserted into the DOM.
   */
  connectedCallback() {
    if (this.innerHTML.trim() && this.querySelector(".cdd-layout")) {
      initApiDocs(this, this._translations);
    } else {
      this.triggerRender();
    }
    this.setupPostMessage();
  }
  /**
   * Called when the element is removed from the DOM; cleans up window message listeners.
   */
  disconnectedCallback() {
    window.removeEventListener("message", this._boundMessageHandler);
  }
  /**
   * Resolves the specification source from attributes or URL routing and triggers rendering.
   */
  triggerRender() {
    let spec = this.getAttribute("spec-content") || this.getAttribute("spec") || this.getAttribute("arazzo-content") || this.getAttribute("arazzo") || "";
    if (!spec) {
      const path = window.location.pathname;
      const match = path.match(/^\/u\/([^/]+)\/([^/]+)/);
      if (match && match[1] && match[2]) {
        this._org = match[1];
        this._repo = match[2];
        const urlParams = new URLSearchParams(window.location.search);
        const version = urlParams.get("v") || "";
        const versionPath = version ? `/${encodeURIComponent(version)}` : "";
        spec = `/cdd-gateway/storage/${encodeURIComponent(this._org)}/${encodeURIComponent(this._repo)}${versionPath}/schema.json`;
      }
    }
    const primaryHasSpec = Boolean(this.getAttribute("spec-content") || this.getAttribute("spec"));
    const companionArazzo = primaryHasSpec ? this.getAttribute("arazzo-content") || this.getAttribute("arazzo") || void 0 : void 0;
    if (spec) {
      void this.renderSpec(spec, companionArazzo);
    }
  }
  /**
   * Renders the given OpenAPI or Arazzo specification string or URL, optionally paired with a companion Arazzo specification.
   * @param specContent JSON or YAML string, or a URL starting with `http://`, `https://`, or `/`.
   * @param companionArazzoSpec Optional companion Arazzo 1.1.0 specification string or URL.
   * @returns A promise that resolves once rendering and DOM initialization complete.
   */
  async renderSpec(specContent, companionArazzoSpec) {
    if (!specContent) return;
    const currentRenderVersion = ++this._renderVersion;
    try {
      let contentToRender = specContent;
      const trimmed = specContent.trim();
      if (isSpecUrl(trimmed)) {
        const url = normalizeSpecUrl(trimmed);
        this.innerHTML = `<div class="cdd-loading" style="padding: 2rem; font-family: sans-serif;">Loading documentation...</div>`;
        const res = await fetch(url);
        if (currentRenderVersion !== this._renderVersion) return;
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error(
              "404 Not Found: The specified organization or repository does not exist or has no published schema."
            );
          }
          throw new Error(`Failed to fetch spec from URL: ${res.status} ${res.statusText}`);
        }
        contentToRender = await res.text();
      }
      let companionContent = companionArazzoSpec;
      if (companionContent && isSpecUrl(companionContent.trim())) {
        const arazzoUrl = normalizeSpecUrl(companionContent.trim());
        const arazzoRes = await fetch(arazzoUrl);
        if (currentRenderVersion !== this._renderVersion) return;
        if (arazzoRes.ok) {
          companionContent = await arazzoRes.text();
        } else {
          companionContent = void 0;
        }
      }
      const currentTheme = this.getAttribute("theme") || localStorage.getItem("cdd-theme") || "light";
      const checkedLangRadio = this.querySelector('input[name="global-lang"]:checked');
      const existingLang = checkedLangRadio ? checkedLangRadio.id.replace(/^lang-opt-/, "") : void 0;
      const targetActiveLang = this.getAttribute("active-language") || existingLang;
      const existingImportsEl = this.querySelector("#opt-imports");
      const existingWrappingEl = this.querySelector("#opt-wrapping");
      const includeImports = existingImportsEl ? existingImportsEl.checked : false;
      const includeWrapping = existingWrappingEl ? existingWrappingEl.checked : false;
      const fragment = generateAOTBodyAndStyles(
        contentToRender,
        this._sdkExamples,
        currentTheme === "dark" ? "dark" : "light",
        this._translations,
        companionContent,
        targetActiveLang,
        includeImports,
        includeWrapping
      );
      this.innerHTML = `${fragment.stylesHtml}
${fragment.bodyHtml}`;
      const org = this._org;
      const repo = this._repo;
      if (org && repo) {
        const header = this.querySelector("header");
        if (header) {
          this.injectDynamicHeader(header, org, repo);
        }
      }
      initApiDocs(this, this._translations);
      this.dispatchEvent(new CustomEvent("docs-ready"));
    } catch (err) {
      this.innerHTML = `<div style="color: red; padding: 2rem; font-family: monospace; white-space: pre-wrap;">Error rendering spec: ${err instanceof Error ? err.message : String(err)}

${err instanceof Error && err.stack ? err.stack : ""}</div>`;
      console.error("CDDApiDocs rendering error:", err);
    }
  }
  /**
   * Injects version selection dropdown and SDK download links into the header for dynamic `/u/:org/:repo` routes.
   * @param header The header DOM element to append controls to.
   * @param org The organization name.
   * @param repo The repository name.
   */
  injectDynamicHeader(header, org, repo) {
    const dynamicContainer = document.createElement("div");
    dynamicContainer.className = "cdd-dynamic-header-content";
    dynamicContainer.style.marginTop = "1rem";
    dynamicContainer.style.padding = "1rem";
    dynamicContainer.style.background = "var(--cdd-surface-variant, #f0f0f0)";
    dynamicContainer.style.borderRadius = "4px";
    const versionLabel = document.createElement("label");
    versionLabel.textContent = "Version: ";
    versionLabel.style.fontWeight = "bold";
    const versionSelect = document.createElement("select");
    versionSelect.className = "cdd-version-select";
    versionSelect.innerHTML = `<option value="latest">latest</option>`;
    versionSelect.addEventListener("change", () => {
      const ver = versionSelect.value;
      const url = new URL(window.location.href);
      url.searchParams.set("v", ver);
      window.history.pushState({}, "", url.toString());
      void this.renderSpec(
        `/cdd-gateway/storage/${encodeURIComponent(org)}/${encodeURIComponent(repo)}/${encodeURIComponent(ver)}/schema.json`
      );
    });
    const downloadContainer = document.createElement("div");
    downloadContainer.style.marginTop = "0.5rem";
    const urlParams = new URLSearchParams(window.location.search);
    const currentV = urlParams.get("v") || "";
    const versionPath = currentV ? `/${encodeURIComponent(currentV)}` : "";
    downloadContainer.innerHTML = `
            <strong style="margin-right:0.5rem;">Download SDKs:</strong>
            <a href="/cdd-gateway/storage/${encodeURIComponent(org)}/${encodeURIComponent(repo)}${versionPath}/sdk-typescript.tgz" download class="cdd-btn" style="margin-right:0.5rem; text-decoration:none; padding:0.25rem 0.5rem; background:var(--cdd-primary); color:white; border-radius:4px; font-size:0.875rem;">TypeScript</a>
            <a href="/cdd-gateway/storage/${encodeURIComponent(org)}/${encodeURIComponent(repo)}${versionPath}/sdk-python.whl" download class="cdd-btn" style="text-decoration:none; padding:0.25rem 0.5rem; background:var(--cdd-primary); color:white; border-radius:4px; font-size:0.875rem;">Python</a>
        `;
    dynamicContainer.appendChild(versionLabel);
    dynamicContainer.appendChild(versionSelect);
    dynamicContainer.appendChild(downloadContainer);
    fetch(`/cdd-gateway/storage/${encodeURIComponent(org)}/${encodeURIComponent(repo)}/versions.json`).then((res) => res.json()).then((versions) => {
      if (Array.isArray(versions)) {
        versionSelect.innerHTML = versions.map((v2) => {
          const escaped = escapeHtml(String(v2));
          return `<option value="${escaped}">${escaped}</option>`;
        }).join("");
        const params = new URLSearchParams(window.location.search);
        const selectedV = params.get("v");
        if (selectedV) {
          versionSelect.value = selectedV;
        }
      }
    }).catch(() => {
    });
    header.appendChild(dynamicContainer);
  }
  /**
   * Registers the `postMessage` listener and notifies a parent iframe host that the UI is ready.
   */
  setupPostMessage() {
    window.removeEventListener("message", this._boundMessageHandler);
    window.addEventListener("message", this._boundMessageHandler);
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "DOCS_UI_READY" }, "*");
    }
  }
  /**
   * Handles incoming `window.postMessage` events (`UPDATE_SPEC`, `UPDATE_ARAZZO`, `UPDATE_SDK_EXAMPLES`, `SET_LANGUAGE`, and `SET_THEME`).
   * @param event The incoming `MessageEvent`.
   */
  handlePostMessage(event) {
    if (!isRecord(event.data)) return;
    const type = event.data["type"];
    const payload = event.data["payload"];
    if (type === "UPDATE_SPEC" && typeof payload === "string") {
      const companion = this.getAttribute("arazzo-content") || this.getAttribute("arazzo") || void 0;
      void this.renderSpec(payload, companion);
    } else if (type === "UPDATE_ARAZZO" && typeof payload === "string") {
      this.setAttribute("arazzo-content", payload);
    } else if (type === "UPDATE_SDK_EXAMPLES") {
      this.sdkExamples = payload;
    } else if (type === "SET_LANGUAGE" && typeof payload === "string") {
      this.activeLanguage = payload;
    } else if (type === "SET_THEME" && (payload === "dark" || payload === "light")) {
      this.setAttribute("theme", payload);
      const themeInput = this.querySelector("#opt-dark-mode");
      if (themeInput) {
        themeInput.checked = payload === "dark";
        themeInput.dispatchEvent(new Event("change"));
      } else {
        localStorage.setItem("cdd-theme", payload);
      }
    }
  }
  /**
   * List of attributes to observe for changes.
   * @returns Array of observed attribute names.
   */
  static get observedAttributes() {
    return ["spec", "spec-content", "arazzo", "arazzo-content", "theme", "active-language"];
  }
  /**
   * Called when an observed attribute is changed.
   * @param name The name of the attribute.
   * @param oldValue The old value.
   * @param newValue The new value.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === "active-language" && newValue) {
        const radio = this.querySelector(`#lang-opt-${sanitizeCssIdent(newValue)}`);
        if (radio) {
          radio.checked = true;
          return;
        }
      }
      this.triggerRender();
    }
  }
};
function registerWebComponent() {
  if (!customElements.get("cdd-api-docs")) {
    customElements.define("cdd-api-docs", CDDApiDocs);
  }
  window.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector("cdd-api-docs")) {
      initApiDocs(document);
    }
  });
}
registerWebComponent();
export {
  CDDApiDocs,
  initApiDocs,
  normalizeSdkExamplesInput,
  registerWebComponent
};
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 5.5.0 https://github.com/nodeca/js-yaml @license MIT *)
*/
