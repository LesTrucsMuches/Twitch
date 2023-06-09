//easytimer.js
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).easytimer={})}(this,function(t){"use strict";function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function z(r){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var e,n,o;e=r,o=i[n=t],n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(i,t))})}return r}function i(t,e,n){var o,r="";if((t="number"==typeof t?String(t):t).length>e)return t;for(o=0;o<e;o+=1)r+=String(n);return(r+t).slice(-r.length)}function R(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0,this.toString=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:":",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2;t=t||["hours","minutes","seconds"],e=e||":",n=n||2;var o,r=[];for(o=0;o<t.length;o+=1)void 0!==this[t[o]]&&("secondTenths"===t[o]?r.push(this[t[o]]):r.push(i(this[t[o]],n,"0")));return r.join(e)}}var n="undefined"!=typeof window?window.CustomEvent:void 0;"undefined"!=typeof window&&"function"!=typeof n&&((n=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}).prototype=window.Event.prototype,window.CustomEvent=n);var B="secondTenths",F="seconds",G="minutes",H="hours",J="days",K=[B,F,G,H,J],N={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},Q={secondTenths:10,seconds:60,minutes:60,hours:2400},W="undefined"!=typeof module&&module.exports&&"function"==typeof require?require("events"):void 0;function X(){return"undefined"!=typeof document}function Y(){return W}function Z(t,e){return(t%e+e)%e}function o(){var e,n,r,o,i,s,u,c,a,f,d=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},l=new R,h=new R,p=X()?document.createElement("span"):Y()?new W.EventEmitter:void 0,v=!1,y=!1,m={},b={detail:{timer:this}};function w(t,e){var n,o,r=h[e];return o=C(t,N[n=e]),h[n]=o,l[n]=n===J?o:0<=o?Z(o,Q[n]):Q[n]-Z(o,Q[n]),h[e]!==r}function t(){g(),function(){for(var t in l)l.hasOwnProperty(t)&&"number"==typeof l[t]&&(l[t]=0);for(var e in h)h.hasOwnProperty(e)&&"number"==typeof h[e]&&(h[e]=0)}()}function g(){clearInterval(e),e=void 0,y=v=!1}function O(t){I()?(a=E(),s=V(i.target)):D(t),function(){var t=N[n];if(S(P(Date.now())))return;e=setInterval(j,t),v=!0,y=!1}()}function E(){return P(Date.now())-h.secondTenths*N[B]*r}function j(){var t=P(Date.now());!function(t){t[B]&&M("secondTenthsUpdated",b);t[F]&&M("secondsUpdated",b);t[G]&&M("minutesUpdated",b);t[H]&&M("hoursUpdated",b);t[J]&&M("daysUpdated",b)}(T()),o(b.detail.timer),S(t)&&(U(),M("targetAchieved",b))}function T(t){var e=0<arguments.length&&void 0!==t?t:P(Date.now()),n=0<r?e-a:a-e,o={};return o[B]=w(n,B),o[F]=w(n,F),o[G]=w(n,G),o[H]=w(n,H),o[J]=w(n,J),o}function P(t){return Math.floor(t/N[n])*N[n]}function S(t){return s instanceof Array&&f<=t}function D(t){var e;n=function(t){if(function(t){return 0<=K.indexOf(t)}(t=typeof t==="string"?t:F))return t;throw new Error("Error in precision parameter: ".concat(t," is not a valid value"))}((t=t||{}).precision),o="function"==typeof t.callback?t.callback:function(){},c=!0===t.countdown,r=!0==c?-1:1,"object"===_(t.startValues)?(e=t.startValues,u=x(e),l.secondTenths=u[0],l.seconds=u[1],l.minutes=u[2],l.hours=u[3],l.days=u[4],h=L(u,h)):u=null,a=E(),T(),s="object"===_(t.target)?V(t.target):c?(t.target={seconds:0},V(t.target)):null,m={precision:n,callback:o,countdown:"object"===_(t)&&!0===t.countdown,target:s,startValues:u},i=t}function x(t){var e,n,o,r,i,s;if("object"===_(t))if(t instanceof Array){if(5!==t.length)throw new Error("Array size not valid");s=t}else{for(var u in t)if(K.indexOf(u)<0)throw new Error("Error in startValues or target parameter: ".concat(u," is not a valid input value"));s=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0]}return e=s[0],n=s[1]+C(e,10),o=s[2]+C(n,60),r=s[3]+C(o,60),i=s[4]+C(r,2400),s[0]=e%10,s[1]=n%60,s[2]=o%60,s[3]=r%2400,s[4]=i,s}function C(t,e){var n=t/e;return n<0?Math.ceil(n):Math.floor(n)}function V(t){if(t){var e=L(s=x(t));return f=a+e.secondTenths*N[B]*r,s}}function L(t,e){var n=e||{};return n.days=t[4],n.hours=2400*n.days+t[3],n.minutes=60*n.hours+t[2],n.seconds=60*n.minutes+t[1],n.secondTenths=10*n.seconds+t[[0]],n}function U(){t(),M("stopped",b)}function k(t,e){X()?p.addEventListener(t,e):Y()&&p.on(t,e)}function A(t,e){X()?p.removeEventListener(t,e):Y()&&p.removeListener(t,e)}function M(t,e){X()?p.dispatchEvent(new CustomEvent(t,e)):Y()&&p.emit(t,e)}function q(){return v}function I(){return y}D(d),void 0!==this&&(this.start=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};t=z({},d,{},t),q()||(O(t),M("started",b))},this.pause=function(){g(),y=!0,M("paused",b)},this.stop=U,this.reset=function(){t(),O(i),M("reset",b)},this.isRunning=q,this.isPaused=I,this.getTimeValues=function(){return l},this.getTotalTimeValues=function(){return h},this.getConfig=function(){return m},this.addEventListener=k,this.on=k,this.removeEventListener=A,this.off=A)}t.Timer=o,t.default=o,Object.defineProperty(t,"__esModule",{value:!0})});


var timer = new easytimer.Timer();

function updateText(){
  document.getElementById("text").innerHTML = timer.getTimeValues().toString();
  document.getElementById("shadow").innerHTML = timer.getTimeValues().toString();
}

timer.addEventListener('secondsUpdated', function (e) {
    updateText()
});
timer.addEventListener('started', function (e) {
    updateText()
});
timer.addEventListener('reset', function (e) {
    updateText()
});


window.addEventListener('onEventReceived', function (obj) {
    const listener = obj.detail.listener;
    const data = obj.detail.event.data;
    console.log(obj.detail.event.data);
//document.getElementById("mycounter").innerHTML=data.text;
  const permissions = [
	{
    	type: "role",
    	value: "broadcaster"
    },
    {
    	type: "role",
    	value: "moderator"
    }
	]
  
  
    if (grantaccess(data,permissions) == true) {
      if (listener === 'message') {
          let regexp = /^(!\w+)\s(\w+)\s?(\w+)?/i;
          let str = data.text;
          let tag = str.match(regexp)
          console.log(tag);
          if (tag[1] == "!timer"){
            if (tag[2] == "start"){
              timer.start();
            }
            if (tag[2] == "pause"){
              timer.pause();
            }
            if (tag[2] == "stop"){
              timer.pause();
            }
            if (tag[2] == "reset"){
              timer.stop();
              timer.start({ startValues: { seconds: 0 }});
              timer.pause();
            }
            if (tag[2] == "set"){
              //console.log(tag);
              let reg = /^(?!$)(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/gm;
              let str = reg.exec(tag[3]);
              let h = 0;
              let m = 0;
              let s = 0;
              if (str){
              	if (str[1]){h = parseInt(str[1]) * 3600}
              	if (str[2]){m = parseInt(str[2]) * 60}
              	if (str[3]){s = parseInt(str[3]) }
              }
              let sec = h + m + s;
              timer.stop();
              timer.start({ startValues: { seconds: sec }});
              timer.pause();
            }
          }
      }
    }
});


function grantaccess(messageinfo,permissions) {
  let grant = false;
  let badges = messageinfo.tags.badges;
  let sub = messageinfo.tags.subscriber;
  let mod = messageinfo.tags.mod;
  let username = messageinfo.nick;
  let message = messageinfo.text;
  
  for (let permission of permissions){
   
    if (permission.type == "role")
    {
      switch(permission.value) {
        case "broadcaster":
          if (badges.indexOf("broadcaster") >= 0) {
            grant = true;
          }
          break;
        
        case "moderator":
           if (mod == "1") {
            grant = true;
          }
          break;
        
        case "viewer":
           grant = true;
           break;
        
        case "subscriber":
           if (sub != "0") {
            grant = true;
          }
          break;
      }
      
    }
    
     if (permission.type == "user")
    {
      if (permission.value == username)
      {
        grant = true;
      }
    }
    
  }
  
 return grant;
    
}