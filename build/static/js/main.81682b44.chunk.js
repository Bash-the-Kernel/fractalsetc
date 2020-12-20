(this.webpackJsonpfractal_react=this.webpackJsonpfractal_react||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){t.exports=n(26)},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"HeighwayDragon",(function(){return D})),n.d(i,"ParametricTornado",(function(){return x})),n.d(i,"ParametricFish",(function(){return V})),n.d(i,"TreeBranch",(function(){return B})),n.d(i,"KochSnowflake",(function(){return _})),n.d(i,"SierpinskiTri",(function(){return L})),n.d(i,"QuiltFractal",(function(){return q})),n.d(i,"BoxFractal",(function(){return Y})),n.d(i,"Mondrian",(function(){return z}));var r=n(4),a=n.n(r),s=n(13),h=n.n(s),u=(n(19),n(0)),o=n(1),l=n(10),c=n(3),f=n(2),v=n(6),d=n(8),p=n.n(d),g=n(5),y=function(){function t(e,n){Object(u.a)(this,t),this.value=e,this.next=n}return Object(o.a)(t,[{key:"setNext",value:function(t){this.next=t}},{key:"setValue",value:function(t){this.value=t}},{key:"getNext",value:function(){return this.next}},{key:"getValue",value:function(){return this.value}}]),t}(),k=function(){function t(){Object(u.a)(this,t),this.length=0,this.head=null,this.current=null}return Object(o.a)(t,[{key:"isEmpty",value:function(){return 0===this.length}},{key:"tail",value:function(){return this.isEmpty()?null:this.current.getValue()}},{key:"slice",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n||(n=this.length);var i,r=new t,a=0,s=Object(g.a)(this);try{for(s.s();!(i=s.n()).done;){var h=i.value;e<=a&&a<n&&r.add(h),a++}}catch(u){s.e(u)}finally{s.f()}return r}},{key:"add",value:function(t){if(this.isEmpty())this.head=new y(t,null),this.current=this.head;else{var e=new y(t,null);this.current.setNext(e),this.current=e}return++this.length}},{key:"toArray",value:function(){var t,e=0,n=new Array(this.length),i=Object(g.a)(this);try{for(i.s();!(t=i.n()).done;){var r=t.value;n[e++]=r}}catch(a){i.e(a)}finally{i.f()}return n}},{key:Symbol.iterator,value:p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isEmpty()){t.next=2;break}return t.abrupt("return");case 2:e=this.head;case 3:if(!e.getNext()){t.next=10;break}return n=e.getValue(),e=e.getNext(),t.next=8,n;case 8:t.next=3;break;case 10:return t.next=12,e.getValue();case 12:case"end":return t.stop()}}),t,this)}))}]),t}(),b=function(){function t(e,n,i){Object(u.a)(this,t),this.start=e,this.l=n,this.radians=i,this.end=[this.start[0]+n*Math.cos(i),this.start[1]+n*Math.sin(i)]}return Object(o.a)(t,[{key:"cords",value:function(){return[this.start,this.end]}}]),t}(),w=Math.cos,O=Math.sin,m=function(){function t(e,n,i,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1;Object(u.a)(this,t),this.x=e,this.y=n,this.w=i,this.h=r,this.toFill=s,this.lineWidth=l,this.vertices=a||this.square(),this.fillStyle=h||this.getRandomColor(),this.strokeStyle=o||this.fillStyle}return Object(o.a)(t,[{key:"square",value:function(){return[[this.x,this.y],[this.x+this.w,this.y],[this.x+this.w,this.y+this.h],[this.x,this.y+this.h]]}},{key:"translate",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=Object(g.a)(this.getVertices());try{for(i.s();!(t=i.n()).done;){var r=t.value;r[0]+=e,r[1]+=n}}catch(a){i.e(a)}finally{i.f()}}},{key:"getRandomColor",value:function(){return"#"+(16777216+16777215*Math.random()).toString(16).substr(1,6)}},{key:"getVertices",value:function(){return this.vertices}},{key:"fill",value:function(){return this.toFill}},{key:"getFillStyle",value:function(){return this.fillStyle}},{key:"getStrokeStyle",value:function(){return this.strokeStyle}},{key:"getLineWidth",value:function(){return this.lineWidth}},{key:"setFillStyle",value:function(t){this.fillStyle=t}},{key:"setStrokeStyle",value:function(t){this.strokeStyle=t}},{key:"rotate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0!==t){var n,i;null===e?(n=this.x+this.w/2,i=this.y+this.h/2):(n=e[0],i=e[1]);for(var r=[[w(t),O(t),n-(n*w(t)+i*O(t))],[-O(t),w(t),i-(i*w(t)-n*O(t))],[0,0,1]],a=0;a<this.vertices.length;a++){var s=this.vertices[a][0],h=this.vertices[a][1],u=1;this.vertices[a]=[s*r[0][0]+h*r[0][1]+u*r[0][2],s*r[1][0]+h*r[1][1]+u*r[1][2]]}}}}]),t}(),j=function(){function t(e,n,i,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(Object(u.a)(this,t),this.constructor===t)throw new Error("Abstract classes can't be instantiated.");this.maxDepth=i,this.points=null,this.width=e,this.height=n,this.origin=r,this.toCenterFractal=a,this.depthToPoints=new Array(11),this.recursionDepth=-1,this.setDepthToDefault()}return Object(o.a)(t,[{key:"setDepthToDefault",value:function(){this.setRecursionDepth(Math.round(this.maxDepth/2))}},{key:"setRecursionDepth",value:function(t){this.recursionDepth=t,this.setPoints()}},{key:"setDimensions",value:function(t,e){this.width=t,this.height=e,this.wipeOutDepthToPointArray(),this.setPoints()}},{key:"setPoints",value:function(){this.pointsNeedBeSet()&&(this.depthToPoints[this.getRecursionDepth()]=this.set(this.origin[0],this.origin[1],this.width,this.height),this.toCenterFractal&&this.centerFractal())}},{key:"wipeOutDepthToPointArray",value:function(){this.depthToPoints=new Array(11)}},{key:"set",value:function(){throw new Error("Method 'set()' must be implemented.")}},{key:"centerFractal",value:function(){var t,e=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY,a=Object(g.a)(this.getPoints());try{for(a.s();!(t=a.n()).done;){var s,h=t.value,u=Object(g.a)(h.getVertices());try{for(u.s();!(s=u.n()).done;){var o=s.value;e=o[0]<e?o[0]:e,n=o[1]<n?o[1]:n,i=o[0]>i?o[0]:i,r=o[1]>r?o[1]:r}}catch(d){u.e(d)}finally{u.f()}}}catch(d){a.e(d)}finally{a.f()}var l,c=this.width/2-(i-e)/2-e,f=this.height/2-(r-n)/2-n,v=Object(g.a)(this.getPoints());try{for(v.s();!(l=v.n()).done;){l.value.translate(c,f)}}catch(d){v.e(d)}finally{v.f()}}},{key:"pointsNeedBeSet",value:function(){return!this.depthToPoints[this.getRecursionDepth()]}},{key:"getTitle",value:function(){throw new Error("Method 'getTitle()' must be implemented.")}},{key:"getReactState",value:function(){return{title:this.getTitle(),width:this.getWidth(),height:this.getHeight(),points:this.getPoints(),recursionDepth:this.getRecursionDepth(),maxRecursionDepth:this.maxDepth}}},{key:"getPoints",value:function(){return this.depthToPoints[this.getRecursionDepth()]}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"getRecursionDepth",value:function(){return this.recursionDepth}},{key:"linspace",value:p.a.mark((function t(e,n){var i,r,a,s=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=s.length>2&&void 0!==s[2]?s[2]:10,r=(n-e)/(i-1),a=0;case 3:if(!(a<i)){t.next=9;break}return t.next=6,e+a*r;case 6:a++,t.next=3;break;case 9:case"end":return t.stop()}}),t)}))}]),t}(),D=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(t,i,r,a){return Object(u.a)(this,n),e.call(this,t,i,14,a,!0)}return Object(o.a)(n,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,a=.43*Math.min(n,i),s=new b([t,e],a,0);return r=this.dragon(s,r,this.recursionDepth,"red"),s=new b([t,e],a,Math.PI/2),r=this.dragon(s,r,this.recursionDepth,"green"),s=new b([t,e],a,Math.PI),r=this.dragon(s,r,this.recursionDepth,"blue"),s=new b([t,e],a,1.5*Math.PI),this.dragon(s,r,this.recursionDepth,"yellow")}},{key:"dragon",value:function(t,e,n,i){var r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(0===n){var a=t.cords();return e.add(new m(a[0][0],a[0][1],0,0,a,!0,i)),e}var s=r?Math.PI/4:-Math.PI/4,h=new b(Object(v.a)(t.start),this.len(t.l),t.radians+s);e=this.dragon(h,e,n-1,i,!0),s=r?-Math.PI/4:Math.PI/4;var u=new b(Object(v.a)(h.end),this.len(t.l),t.radians+s);return this.dragon(u,e,n-1,i,!1)}},{key:"len",value:function(t){return Math.pow(Math.pow(t,2)/2,.5)}},{key:"getTitle",value:function(){return"Harter\u2013Heighway Dragon"}}]),n}(j),M=n(11),P=Math.sin,E=Math.pow,F=Math.PI,I=E(10,4),T={0:"#CC2A49",.333:"#F99E4C",.666:"#582841"},x=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(t,i,r,a){return Object(u.a)(this,n),e.call(this,t,i,I,a,!0)}return Object(o.a)(n,[{key:"set",value:function(t,e,n,i){var r,a,s,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,u=this.linspace(-13,13,this.recursionDepth);for(a=0;a<this.recursionDepth;a++){var o=this.parametricCurve(u.next().value,Math.min(n,i)),l=Object(M.a)(o,2);t=l[0],e=l[1];for(var c=0,f=[0,.333,.666];c<f.length;c++)s=f[c],(r=new m(t,e,1,1,null,!1,T[s])).rotate(s*F,[0,0]),h.add(r)}return h}},{key:"parametricCurve",value:function(t,e){var n=Math.round(.35*e);return[n*(P(1.36*t)/E(1+E(P(10.8*t),2),2)),n*E(P(1.36*t),3)]}},{key:"getTitle",value:function(){return"Curve by LThMath 1"}}]),n}(j),S=Math.cos,R=Math.sin,N=Math.pow,C=Math.PI,A=N(10,4),H={0:"#EFDBCB",.5:"#4BB4DE",1:"#FCD593",1.5:"#345DA7"},V=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(t,i,r,a){return Object(u.a)(this,n),e.call(this,t,i,A,a,!0)}return Object(o.a)(n,[{key:"set",value:function(t,e,n,i){var r,a,s,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,u=this.linspace(-2*C,2*C,A);for(a=0;a<this.recursionDepth;a++){var o=this.parametricCurve(u.next().value,Math.min(n,i)),l=Object(M.a)(o,2);t=l[0],e=l[1];for(var c=0,f=[0,.5,1,1.5];c<f.length;c++)s=f[c],(r=new m(t,e,1,1,null,!1,this.colour(s,a))).rotate(s*C,[0,0]),h.add(r)}return h}},{key:"parametricCurve",value:function(t,e){var n=Math.round(.25*e);return[n*N(R(-5*t),2)*N(2,S(S(9.844*t))),n*R(R(-5*t))*N(S(9.844*t),2)]}},{key:"colour",value:function(t,e){var n=Math.round(e%10/10*255).toString(16);return n=1===n.length?"0"+n:n,H[t]+n}},{key:"getTitle",value:function(){return"Curve by LThMath 2"}}]),n}(j),W=Math.PI/4,B=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(t,i,r,a){return Object(u.a)(this,n),e.call(this,t,i,10,a)}return Object(o.a)(n,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k;return this.branch([t,e],.3*Math.sqrt(n*n+i*i),Math.PI/4,this.recursionDepth,r),r}},{key:"branch",value:function(t,e,n,i,r){if(i>0){var a=Math.random()>.5?1:-1,s=[t,this.end(t,e,n)],h=new m(t[0],t[1],0,0,s,!0,this.palette());r.add(h);for(var u=0;u<3;u++){var o=this.rand(.3*e,.9*e),l=this.end(t,o,n),c=n+a*this.rand(0,W);a*=-1,this.branch(l,o,c,i-1,r)}}}},{key:"end",value:function(t,e,n){return[t[0]+e*Math.cos(n),t[1]+e*Math.sin(n)]}},{key:"palette",value:function(){var t=["#77a37a","#5f926a","#587e60","#485e52","#3a4f3f","#77a37a","#5f926a","#587e60","#485e52","#3a4f3f","#77a37a","#5f926a","#587e60","#485e52","#3a4f3f","#603C14","#9C2706","#D45B12","#F3BC2E","#5F5426"];return t[Math.round(this.rand(0,t.length-1))]}},{key:"rand",value:function(t,e){return Math.random()*(e-t)+t}},{key:"getTitle",value:function(){return"Tree Branch Fractal"}}]),n}(j),_=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(t,i,r,a){return Object(u.a)(this,n),e.call(this,t,i,6,a,!0)}return Object(o.a)(n,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,a=Math.min(n,i),s=new b([t+a/2,e+a/10],a*(3/4),Math.PI*(2/3));return r=this.fractal(s,r,this.recursionDepth),s=new b([t+.875*a,e+a*(3/4)],a*(3/4),Math.PI*(-2/3)),r=this.fractal(s,r,this.recursionDepth),s=new b([t+a*(5/40),e+a*(3/4)],a*(3/4),0),r=this.fractal(s,r,this.recursionDepth)}},{key:"fractal",value:function(t,e,n){if(0===n){var i=t.cords();return e.add(new m(i[0][0],i[0][1],0,0,i,!0,"#fffafa",null,2)),e}var r=new b(Object(v.a)(t.start),t.l/3,t.radians),a=new b(Object(v.a)(r.end),t.l/3,t.radians+Math.PI/3),s=new b(Object(v.a)(a.end),t.l/3,t.radians-Math.PI/3),h=new b(Object(v.a)(s.end),t.l/3,t.radians);return e=this.fractal(r,e,n-1),e=this.fractal(a,e,n-1),e=this.fractal(s,e,n-1),this.fractal(h,e,n-1)}},{key:"getTitle",value:function(){return"Koch Snowflake"}}]),n}(j),L=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(a>=this.recursionDepth){var s=[[t+n/2,e],[t,e+i],[t+n,e+i]],h=new m(t,e,n,i,s);return r.add(h),r}return r=this.set(t,e+i/2,n/2,i/2,r,++a),r=this.set(t+n/2,e+i/2,n/2,i/2,r,a),this.set(t+n/4,e,n/2,i/2,r,a)}},{key:"getTitle",value:function(){return"Sierpinski's Triangle"}}]),n}(j),q=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(t,i,r,a){return Object(u.a)(this,n),e.call(this,t,i,7,a,!0)}return Object(o.a)(n,[{key:"set",value:function(t,e,n,i){var r=Math.min(n,i),a=this.markPoints(t,e,r);return this.rotatePoints(a,0,this.getRecursionDepth()),this.rotatePoints(a,1,this.getRecursionDepth()),this.rotatePoints(a,2,this.getRecursionDepth()),this.rotatePoints(a,3,this.getRecursionDepth()),this.rotatePoints(a,4,this.getRecursionDepth())}},{key:"markPoints",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new k,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(r>=this.recursionDepth){var a=new m(t,e,n,n,null,!1,"#afff14");return i.add(a),i}var s=.25*n,h=t+.75*n,u=e+.75*n;return i=this.markPoints(t,e,s,i,++r),i=this.markPoints(h,e,s,i,r),i=this.markPoints(h,u,s,i,r),i=this.markPoints(t,u,s,i,r),this.markPoints(this.cord(t,n),this.cord(e,n),this.dist(n),i,r)}},{key:"rotatePoints",value:function(t,e,n){if(0===n)return t;var i=this.subsetIndices(e,n),r=t.slice(i[0],i[1]),a=r.tail();return a=[a.x+a.w/2,a.y+a.h/2],4===e&&this.rotateAll(r,a),this.rotatePoints(r,4,--n),t}},{key:"rotateAll",value:function(t,e){var n,i=Object(g.a)(t);try{for(i.s();!(n=i.n()).done;){n.value.rotate(Math.PI/4,e)}}catch(r){i.e(r)}finally{i.f()}}},{key:"subsetIndices",value:function(t,e){if(t>4||t<0)throw new Error("subsetIndices(position), invalid position: "+t);return[t*Math.pow(5,e-1),(t+1)*Math.pow(5,e-1)]}},{key:"dist",value:function(t){return Math.sqrt(2)*t/2}},{key:"cord",value:function(t,e){return t+e/2-this.dist(e)/2}},{key:"getTitle",value:function(){return"Some Fractal Quilt"}}]),n}(j),Y=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(t,i,r,a){return Object(u.a)(this,n),e.call(this,t,i,7,a)}return Object(o.a)(n,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(a>=this.recursionDepth){var s=new m(t,e,n,i);return r.add(s),r}return r=this.set(t,e,n/3,i/3,r,++a),r=this.set(t+2*n/3,e,n/3,i/3,r,a),r=this.set(t,e+2*i/3,n/3,i/3,r,a),r=this.set(t+2*n/3,e+2*i/3,n/3,i/3,r,a),this.set(t+n/3,e+i/3,n/3,i/3,r,a)}},{key:"getTitle",value:function(){return"Box Fractal"}}]),n}(j),z=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"set",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new k,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(a>=this.recursionDepth){var s=new m(t,e,n,i,null,!0,this.palette(),"#30303a",5);return r.add(s),r}var h=this.rand(t,n)+.2*n,u=this.rand(e,i)+.2*i;return r=this.set(t,e,t+h,e+u,r,++a),r=this.set(t+h,e,n-h,e+u,r,a),r=this.set(t,e+u,t+h,i-u,r,a),this.set(t+h,e+u,n-h,i-u,r,a)}},{key:"getTitle",value:function(){return"Piet Mondrian"}},{key:"palette",value:function(){return["#FEFFFA","#F60201","#FDED01","#1F7FC9","#30303a"][Math.round(this.rand(0,4))]}},{key:"rand",value:function(t,e){return Math.random()*(e-t)+t}}]),n}(j),G=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0];Object(u.a)(this,t),this.DEFAULT_MAX_DEPTH=8,this.width=e,this.height=n,this.origin=i,this.fractal=null,this.options={},this.setOptions()}return Object(o.a)(t,[{key:"setOptions",value:function(){for(var t in i){var e=new i[t](0,0,0,[0,0]);this.options[t]=e.getTitle()}this.setNameAndFigure(Object.keys(this.options)[0])}},{key:"setNameAndFigure",value:function(t){this.name=t,this.fractal=new i[this.name](this.width,this.height,this.DEFAULT_MAX_DEPTH,this.origin),this.recursionDepth=this.fractal.getRecursionDepth()}},{key:"setRecursionDepth",value:function(t){this.recursionDepth=t,this.getFigure().setRecursionDepth(this.recursionDepth)}},{key:"getReactState",value:function(){return this.getFigure().getReactState()}},{key:"getName",value:function(){return this.name}},{key:"getRecursionDepth",value:function(){return this.recursionDepth}},{key:"getOptions",value:function(){return this.options}},{key:"getFigure",value:function(){return this.fractal}},{key:"setDimensions",value:function(t,e){this.width=t,this.height=e,this.getFigure().setDimensions(this.width,this.height)}},{key:"updateFigure",value:function(t,e,n,i){return this.width=e||this.width,this.height=n||this.height,null!==t&&this.getName()!==t?this.setNameAndFigure(t):null!==i&&this.getRecursionDepth()!==i?this.setRecursionDepth(i):this.setDimensions(this.width,this.height),this.getReactState()}}]),t}(),U=function t(e){var n=this;Object(u.a)(this,t),this.sliderEventHandler=function(t){var e=Number(t.target.value),i=n.app.model.updateFigure(null,null,null,e);n.app.setState(i)},this.dropdownEventHandler=function(t){var e=t.target.value,i=n.app.model.updateFigure(e,null,null,null);n.app.setState(i)},this.onWindowResize=function(){var t=n.app.model.updateFigure(null,n.app.getWinWidth(),n.app.getWinHeight(),null);n.app.setState(t)},this.app=e},J=(n(21),n(22),function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("input",{id:"slider",type:"range",min:"0",max:this.props.sliderMaxValue.toString(),autoComplete:"off",value:this.props.sliderInitialValue,onChange:this.props.eventHandler})}}]),n}(r.Component)),K=(n(23),function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(t){var i;Object(u.a)(this,n),i=e.call(this,t);var r=Object.entries(i.props.dropdownOptions);return i.options=new Array(r.length),r.forEach((function(t,e){i.options[e]=a.a.createElement("option",{key:e,value:t[0]},t[1])})),i}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("select",{id:"dropdown",onChange:this.props.eventHandler},this.options)}}]),n}(r.Component)),Q=function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("h1",{id:"header"}," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://duckduckgo.com/?q="+this.props.title},this.props.title),a.a.createElement(J,{eventHandler:this.props.sliderEventHandler,sliderInitialValue:this.props.sliderInitialValue,sliderMaxValue:this.props.sliderMaxValue}),a.a.createElement(K,{eventHandler:this.props.dropdownEventHandler,dropdownOptions:this.props.dropdownOptions}))}}]),n}(r.Component),X=(n(24),function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"plotPoints",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.refs.canvas,n=e.getContext("2d");t&&n.clearRect(0,0,e.width,e.height);var i,r=this.props.fractal.points,a=Object(g.a)(r);try{for(a.s();!(i=a.n()).done;){var s=i.value;this.drawPoint(n,s)}}catch(h){a.e(h)}finally{a.f()}}},{key:"componentDidMount",value:function(){this.plotPoints()}},{key:"componentDidUpdate",value:function(){this.plotPoints(!0)}},{key:"drawPoint",value:function(t,e){t.fillStyle=e.getFillStyle(),t.strokeStyle=e.getStrokeStyle(),t.lineWidth=e.getLineWidth(),t.beginPath();var n=e.getVertices();t.moveTo(n[0][0],n[0][1]);for(var i=1;i<n.length;i++)t.lineTo(n[i][0],n[i][1]);t.closePath(),t.stroke(),e.fill()&&t.fill()}},{key:"render",value:function(){var t,e;return t=this.props.fractal.width,e=this.props.fractal.height,a.a.createElement("canvas",{id:"fractal_pane",ref:"canvas",width:t,height:e})}}]),n}(r.Component)),Z=(n(25),function(t){Object(c.a)(n,t);var e=Object(f.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).MARGIN=0,i.control=new U(Object(l.a)(i)),i.model=new G(i.getWinWidth(),i.getWinHeight()),i.state=i.model.getReactState(),window.addEventListener("resize",i.control.onWindowResize),i}return Object(o.a)(n,[{key:"getWinWidth",value:function(){return window.innerWidth}},{key:"getWinHeight",value:function(){return window.innerHeight}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Q,{sliderEventHandler:this.control.sliderEventHandler,sliderInitialValue:this.state.recursionDepth,sliderMaxValue:this.state.maxRecursionDepth,dropdownEventHandler:this.control.dropdownEventHandler,dropdownOptions:this.model.getOptions(),title:this.state.title}),a.a.createElement(X,{fractal:this.state}))}}]),n}(r.Component));h.a.render(a.a.createElement(Z,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.81682b44.chunk.js.map