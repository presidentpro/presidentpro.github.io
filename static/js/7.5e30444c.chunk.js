(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[7],{1030:function(e,t,n){},1042:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(4),a=n.n(c),s=n(12),o=n(11),i=n(955),l=n(954),j=n(1017),b=n(953),u=n(272),d=(n(61),n(115)),O=n(75),h=(n(110),n(273)),x=n(66),A=n(457),f=n(2),p=Object(A.a)(l.a)({background:"#FECA70",marginBottom:24});function y(){var e=Object(d.b)(),t=e.contract,n=e.wrongNetwork,c=(e.getBnbBalance,e.fromWei),l=(e.toWei,e.web3),A=Object(O.b)(),y=A.address,m=A.chainId,v=Object(r.useState)(0),w=Object(o.a)(v,2),g=(w[0],w[1],Object(f.jsx)(x.a,{})),k=Object(r.useState)({week:0}),F=Object(o.a)(k,2),B=F[0],S=F[1],C=function(){var e=Object(s.a)(a.a.mark((function e(){var r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&!n){e.next=3;break}return S({week:0}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Promise.all([t.methods.getCurrentWeek().call().catch((function(e){return console.error("currentweek",e),0}))]);case 6:r=e.sent,c=Object(o.a)(r,1),s=c[0],S({week:s}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),S({week:0});case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}(),N=Object(r.useState)({contestants:0}),I=Object(o.a)(N,2),W=I[0],E=I[1],T=function(){var e=Object(s.a)(a.a.mark((function e(){var r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&!n&&y){e.next=3;break}return E({contestants:0}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Promise.all([t.methods.getLeaderboard(B.week).call().catch((function(e){return console.error("topreferrer",e),0}))]);case 6:r=e.sent,c=Object(o.a)(r,1),s=c[0],E({contestants:s}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),E({contestants:0});case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){C()}),[l,m]),Object(r.useEffect)((function(){T()}),[y,l,m]);var J=W.contestants,L=J?J[0].addr.toString():"",P=J?J[1].addr.toString():"",D=J?J[2].addr.toString():"",M=J?J[3].addr.toString():"",R=J?J[4].addr.toString():"",q=J[0]?J[0].amount:"",z=J[1]?J[1].amount:"",G=J[2]?J[2].amount:"",H=J[3]?J[3].amount:"",K=J[4]?J[4].amount:"";return Object(f.jsx)(p,{children:Object(f.jsxs)(i.a,{style:{color:"#AF1A25"},children:[Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"h5",borderBottom:"6px solid",paddingBottom:1,children:[g," Top 5 Week (",B.week,") referrer."]}),Object(f.jsxs)(b.a,{paddingTop:2,children:[Object(f.jsxs)(j.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"body1",children:[" 1.",Object(f.jsx)(h.a,{style:{color:"#AF1A25"},a:L})]}),Object(f.jsxs)(u.a,{paddingLeft:2,style:{color:"#AF1A25"},variant:"h5",children:[c("".concat(q))," BNB"]})]}),Object(f.jsxs)(j.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"body1",children:[" 2.",Object(f.jsx)(h.a,{style:{color:"#AF1A25"},a:P})]}),Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"h5",children:[c("".concat(z))," BNB"]})]}),Object(f.jsxs)(j.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"body1",children:[" 3.",Object(f.jsx)(h.a,{style:{color:"#AF1A25"},a:D})]}),Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"h5",children:[" ",c("".concat(G))," BNB"]})]}),Object(f.jsxs)(j.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"body1",children:[" 4.",Object(f.jsx)(h.a,{style:{color:"#AF1A25"},a:M})]}),Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"h5",children:[c("".concat(H))," BNB"]})]}),Object(f.jsxs)(j.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"body1",children:[" 5.",Object(f.jsx)(h.a,{style:{color:"#AF1A25"},a:R})]}),Object(f.jsxs)(u.a,{style:{color:"#AF1A25"},variant:"h5",children:[c("".concat(K))," BNB"]})]})]})]})})}n(1030),t.default=function(){Object(O.b)().address;return Object(f.jsxs)("div",{className:"MainDash",children:[Object(f.jsx)("h1",{style:{color:"#AF1A25"},children:"Top Referrer"}),Object(f.jsx)(y,{})]})}}}]);
//# sourceMappingURL=7.5e30444c.chunk.js.map