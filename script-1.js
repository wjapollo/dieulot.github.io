/* InstantClick 1.1 | (C) 2014 Alexandre Dieulot | http://instantclick.io/license.html */
var InstantClick=function(){function g(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function k(a){for(;"A"!=a.nodeName;)a=a.parentNode;return a}function q(a){for(var b=0;b<l[a].length;b++)l[a][b]()}function m(a){for(var b=document.getElementsByTagName("a"),c,f=location.protocol+"//"+location.host,h=b.length-1;0<=h;h--)c=b[h],c.target||0!=c.href.indexOf(f+"/")||-1<c.href.indexOf("#")&&g(c.href)==g(location.href)||(n?c.hasAttribute("data-no-instant"):!c.hasAttribute("data-instant"))||(c.addEventListener("mouseover",
s),c.addEventListener("click",t));if(!a){a=document.getElementsByTagName("script");var e,h=0;for(j=a.length;h<j;h++)b=a[h],b.hasAttribute("data-no-instant")||(c=document.createElement("script"),b.src&&(c.src=b.src),b.innerHTML&&(c.innerHTML=b.innerHTML),f=b.parentNode,e=b.nextSibling,f.removeChild(b),f.insertBefore(c,e))}q("change")}function s(a){a=k(a.target);a.addEventListener("mouseout",u);a=a.href;var d=c;"waiting"==b[c].state&&(d^=1);b[d].state="preloading";b[d].url=a;b[d].body=!1;b[d].hasBody=
!0;b[d].timingStart=+new Date;b[d].timing=!1;b[d].xhr.open("GET",a,!0);b[d].xhr.send()}function v(a){a=a.target.id;if(!(4>b[a].xhr.readyState)){var d=b[a].xhr.responseText;b[a].timing=+new Date-b[a].timingStart;var e=d.indexOf("<title");-1<e&&(b[a].title=d.substr(d.indexOf(">",e)+1),b[a].title=b[a].title.substr(0,b[a].title.indexOf("</title")));e=d.indexOf("<body");-1<e?(b[a].body=d.substr(d.indexOf(">",e)+1),d=b[a].body.indexOf("</body"),-1<d&&(b[a].body=b[a].body.substr(0,d)),f[g(b[a].url)]={body:b[a].body,
title:b[a].title}):b[a].hasBody=!1;a==c&&"waiting"==b[c].state&&r(b[c].url)}}function t(a){1<a.which||a.metaKey||a.ctrlKey||(a.preventDefault(),r(k(a.target).href))}function r(a){b[c].url!=a&&b[c^1].url==a&&(c^=1);if(b[c].body){b[c].state="displayed";document.body.innerHTML=b[c].body;document.title=b[c].title;if(b[c].url!=location.href){if(-1==b[c].url.indexOf("#"))scrollTo(0,0);else if(a=b[c].url.substr(b[c].url.indexOf("#")+1),document.getElementById(a)||0<document.getElementsByName(a).length){a=
document.getElementById(a)||document.getElementsByTagName(a)[0];for(var d=0;a.offsetParent;a=a.offsetParent)d+=a.offsetTop;scrollTo(0,d)}else scrollTo(0,0);history.pushState(null,null,b[c].url)}e=g(location.href);m()}else b[c].hasBody?b[c].state="waiting":location.href=b[c].url}function u(a){a=k(a.target);var d=c;b[d].url!=a.href&&b[d^1].url==a.href&&(d^=1);"preloading"==b[d].state&&(b[d].xhr.abort(),b[d].state="")}var e,c=0,f={},b=[],p="pushState"in history,n=!1,l={change:[]};return{init:function(a){if(!p)q("change");
else if(!b.length){a&&(n=!0);e=g(location.href);f[g(location.href)]={body:document.body.innerHTML,title:document.title};for(a=0;2>a;a++)b[a]={},b[a].xhr=new XMLHttpRequest,b[a].xhr.id=a,b[a].xhr.addEventListener("readystatechange",v),b[a].url=!1,b[a].body=!1,b[a].hasBody=!0,b[a].title=!1,b[a].state="",b[a].timingStart=!1,b[a].timing=!1;m(!0);addEventListener("popstate",function(){var a=g(location.href);a!=e&&(a in f?(e=a,document.body.innerHTML=f[a].body,document.title=f[a].title,m()):location.href=
location.href)})}},supported:p,on:function(a,b){l[a].push(b)},debug:function(){return{currentLocationWithoutHash:e,p0:b[0],p1:b[1],pHistory:f,pId:c,supported:p,useBlacklist:n}}}}();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46962315-1', 'instantclick.io');

InstantClick.on('change', function() {
	ga('send', 'pageview');
	var emails = document.querySelectorAll('a[data-no-instant=email]')
	for (var i = 0; i < emails.length; i++) {
		emails[i].href = 'mailto:' + ['adieulot', 'gmail.com'].join('@')
	}
})

InstantClick.init(true)