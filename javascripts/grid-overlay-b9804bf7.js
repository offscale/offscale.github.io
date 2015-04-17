/*
* Heads-Up Grid
* Simple HTML + CSS grid overlay for web design and development.
*
* Files: hugrid.css, hugrid.js, example.html
*
* Example and documentation at: http://bohemianalps.com/tools/grid
*
* Shurane, thanks for your help! https://github.com/shurane
*
* Copyright (c) 2011 Jason Simanek
*
* Version: 1.5 (09/03/2011)
* Requires: jQuery v1.6+
*
* Licensed under the GPL license:
*   http://www.gnu.org/licenses/gpl.html
*/
!function(t){function e(){t("#hugrid").remove(),t("#hugridRows").remove(),t("#hugridUX").remove()}window.hugrid={toggleState:function(){"on"==window.hugrid.state?window.hugrid.state="off":"off"==window.hugrid.state&&(window.hugrid.state="on")}},makehugrid=function(){e();var i=document.createElement("div");i.id="hugrid",leftDiv=document.createElement("div"),leftDiv.className="mline mlineL",i.appendChild(leftDiv);for(var o=0;columns-1>o;o++)colDiv=document.createElement("div"),colDiv.className="hugcol",i.appendChild(colDiv),lineLDiv=document.createElement("div"),lineLDiv.className="lineL",colDiv.appendChild(lineLDiv),lineRDiv=document.createElement("div"),lineRDiv.className="lineR",colDiv.appendChild(lineRDiv);if(rightDiv=document.createElement("div"),rightDiv.className="mline mlineR",i.appendChild(rightDiv),document.body.appendChild(i),0!==rowheight){pageheight=t(document.body).height();var n=document.createElement("div");n.id="hugridRows";for(var o=0;pageheight/rowheight>o;o++)rowDiv=document.createElement("div"),rowDiv.className="hugrow",n.appendChild(rowDiv),lineB=document.createElement("div"),lineB.className="lineB",rowDiv.appendChild(lineB);document.body.appendChild(n)}t("#hugrid").css("width",pagewidth+pageUnits),"number"==typeof window.pageleftmargin?(t("#hugrid").css("left",pageleftmargin+pageUnits),t("#hugrid").css("margin","0")):"number"==typeof window.pagerightmargin?(t("#hugrid").css("right",pagerightmargin+pageUnits),t("#hugrid").css("left","auto"),t("#hugrid").css("margin","0")):"%"===pageUnits?(t("#hugrid").css("left",(100-pagewidth)/2+pageUnits),t("#hugrid").css("margin-left","auto")):t("#hugrid").css("margin-left","-"+pagewidth/2+pageUnits),t("#hugrid div.hugcol").css("margin-left",columnwidth+colUnits),t("#hugrid div.hugcol").css("width",gutterwidth+colUnits),t("#hugridRows").css("margin-top",pagetopmargin+"px"),t("#hugridRows div.hugrow").css("margin-top",rowheight-1+"px");var s=document.createElement("div");s.id="hugridUX",document.body.appendChild(s),t("#hugridUX").append('<div id="hugridButtonBkgd"></div><button id="hugridButton"></button>'),t("#hugridButton").append('<span id="hugbuttonON">ON</span>'),t("#hugridButton").append('<span id="hugbuttonOFF" style="display:none;">OFF</span>'),t("#hugridButton").click(function(){t("#hugridButton").toggleClass("buttonisoff"),t("#hugrid").toggle(),t("#hugridRows").toggle(),t("#hugridButton span").toggle(),window.hugrid.toggleState()})},setgridonload=function(){"off"===gridonload?(t("#hugridButton").toggleClass("buttonisoff"),t("#hugrid").toggle(),t("#hugridRows").toggle(),t("#hugridButton span").toggle(),window.hugrid.state="off"):window.hugrid.state="on"},setgridonresize=function(){"off"===window.hugrid.state&&(t("#hugridButton").toggleClass("buttonisoff"),t("#hugrid").toggle(),t("#hugridRows").toggle(),t("#hugridButton span").toggle())}}(jQuery);