(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{RRi8:function(a,n,i){"use strict";i.r(n),i.d(n,"mdTransitionAnimation",(function(){return o})),i("c1op"),i("AfW+"),i("aiEM");var e=i("+4pY"),t=(i("kBU6"),i("K6rM")),o=function(a,n){var i="back"===n.direction,o=n.enteringEl,r=n.leavingEl,c=Object(t.b)(o),d=c.querySelector("ion-toolbar"),b=Object(e.a)();if(b.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),i?b.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):b.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),d){var s=Object(e.a)();s.addElement(d),b.addAnimation(s)}if(r&&i){b.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=Object(e.a)();l.addElement(Object(t.b)(r)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),b.addAnimation(l)}return b}}}]);