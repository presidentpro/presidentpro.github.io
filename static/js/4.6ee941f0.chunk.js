(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[4],{1004:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r(4),n=r.n(c),o=r(12),s=r(11),i=(r(997),r(979)),l=r(188),d=r(30),u=(r(60),r(192),r(134)),b=r(77),f=r(110),j=(r(193),r(259),r(183)),h=r(2);var w=function(){var e=Object(u.b)(),t=e.contract,r=e.wrongNetwork,c=e.getBnbBalance,w=e.fromWei,p=(e.toWei,e.web3),m=Object(b.b)(),O=m.address,x=m.chainId,v=Object(a.useState)(0),g=Object(s.a)(v,2),A=(g[0],g[1]),S=Object(a.useState)({bnb:0,power:0,beans:0,market:0,refer:0,refcount:0,refreward:0,rewards:0,allseedreward:0,withdrawtimer:0}),k=Object(s.a)(S,2),F=k[0],y=k[1],D=Object(a.useState)(""),B=Object(s.a)(D,2),R=(B[0],B[1],Object(a.useState)(0)),U=Object(s.a)(R,2),N=(U[0],U[1],Object(a.useState)(!1)),C=Object(s.a)(N,2),M=(C[0],C[1],new URLSearchParams(Object(d.e)().search),Object(j.a)("simple/price?ids=binancecoin&vs_currencies=usd").response),I=function(){p&&!r?c(f.a.contractAddress).then((function(e){A(w(e))})):A(0)},T=function(){var e=Object(o.a)(n.a.mark((function e(){var a,o,i,l,d,u,b,f,j,h,m,x;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p&&!r&&O){e.next=3;break}return y({bnb:0,power:0,beans:0,market:0,refer:0,refcount:0,refreward:0,rewards:0,allseedreward:0,withdrawtimer:0}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Promise.all([c(O),t.methods.getUserTotalDeposits(O).call().catch((function(e){return console.error("mytotalcompounds",e),0})),t.methods.getUserDividends(O).call().catch((function(e){return console.error("currentyield",e),0})),t.methods.getUserTotalWithdrawn(O).call().catch((function(e){return console.error("total withdrawn",e),0})),t.methods.getUserReferrer(O).call().catch((function(e){return console.error("myreferrer",e),0})),t.methods.getUserTotalReferrals(O).call().catch((function(e){return console.error("myreferralcount",e),0})),t.methods.getcurrentseedincome(O).call().catch((function(e){return console.error("pendingseedincome",e),0})),t.methods.getUserReferralBonus(O).call().catch((function(e){return console.error("referralbonus",e),0})),t.methods.getUserSeedIncome(O).call().catch((function(e){return console.error("totalseedincomegot",e),0})),t.methods.claimTimer(O).call().catch((function(e){return console.error("withdrawcooldowntimer",e),0}))]);case 6:a=e.sent,o=Object(s.a)(a,10),i=o[0],l=o[1],d=o[2],u=o[3],b=o[4],f=o[5],j=o[6],h=o[7],m=o[8],x=o[9],y({bnb:w("".concat(i)),power:w("".concat(l)),beans:w("".concat(d)),market:w("".concat(u)),refer:b,refcount:f,refreward:w("".concat(j)),rewards:w("".concat(h)),allseedreward:w("".concat(m)),withdrawtimer:x}),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(3),console.error(e.t0),y({bnb:0,power:0,beans:0,market:0,refer:0,refcount:0,refreward:0,rewards:0,allseedreward:0,withdrawtimer:0});case 25:case"end":return e.stop()}}),e,null,[[3,21]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){I()}),[p,x]),Object(a.useEffect)((function(){T()}),[O,p,x]);F.refer.toString().slice(2);var E,G=Object(a.useState)(),W=Object(s.a)(G,2),J=(W[0],W[1]),P=Object(a.useState)(),Y=Object(s.a)(P,2),L=(Y[0],Y[1]),_=Object(a.useState)(),q=Object(s.a)(_,2),z=(q[0],q[1]),H=Object(a.useState)(),K=Object(s.a)(H,2),Q=(K[0],K[1]),V=Object(a.useState)(),X=Object(s.a)(V,2),Z=(X[0],X[1]);Object(a.useEffect)((function(){!function(){var e=F.withdrawtimer,t=new Date(1e3*e);E=setInterval((function(){var e=new Date,r=Date.parse(t)-Date.parse(e),a=Math.floor(r/864e5),c=Math.floor(r%864e5/36e5),n=Math.floor(r%36e5/6e4),o=Math.floor(r%6e4/1e3);r<0?clearInterval(E.current):(J(a),L(c),z(n),Q(o),Z(r))}))}()}));F.bnb;var $=M&&M.binancecoin.usd,ee=(F.power,F.rewards*$),te=F.refreward*$,re=F.beans*$;F.market;return Object(h.jsxs)("div",{className:"Cards",children:[Object(h.jsx)("div",{className:"parentContainer",children:Object(h.jsx)(l.a,{backGround:"linear-gradient(180deg, #AF1A25 0%, #AF1A25 100%)",boxShadow:"0px 10px 20px 0px #e0c6f5",title:"Daily Yield",value:F.beans,usd:re.toFixed(2),png:i.a})}),Object(h.jsx)("div",{className:"parentContainer",children:Object(h.jsx)(l.a,{backGround:"linear-gradient(180deg, #AF1A25 0%, #AF1A25 100%)",boxShadow:"0px 10px 20px 0px #e0c6f5",title:"Ref Reward",value:F.rewards,usd:ee.toFixed(2),png:i.a})}),Object(h.jsx)("div",{className:"parentContainer",children:Object(h.jsx)(l.a,{backGround:"linear-gradient(180deg, #AF1A25 0%, #AF1A25 100%)",boxShadow:"0px 10px 20px 0px #e0c6f5",title:"Rebates Reward",value:F.refreward,usd:te.toFixed(2),png:i.a})})]})},p=r(932),m=r(931),O=r(991),x=r(930),v=r(258),g=r(439),A=Object(g.a)(m.a)({background:"#FECA70",marginBottom:24}),S=[{label:"Daily Yield",value:1.5},{label:"Indirect Reward",value:6.75},{label:"Direct Reward",value:5},{label:"Rebates Bonus",value:16}];function k(){return Object(h.jsx)(A,{children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(v.a,{style:{color:"#AF1A25"},variant:"h5",borderBottom:"6px solid",paddingBottom:1,children:"Minimum Deposit: 0.2 BNB"}),Object(h.jsx)(x.a,{paddingTop:2,children:S.map((function(e){return Object(h.jsxs)(O.a,{container:!0,justifyContent:"space-between",children:[Object(h.jsx)(v.a,{style:{color:"#AF1A25"},variant:"body1",gutterBottom:!0,children:e.label}),Object(h.jsxs)(v.a,{style:{color:"#AF1A25"},gutterBottom:!0,children:[e.value,"%"]})]},e.label)}))})]})})}r(998),t.default=function(){return Object(h.jsxs)("div",{className:"MainDash",children:[Object(h.jsx)("h1",{style:{color:"#AF1A25"},children:"Dashboard"}),Object(h.jsx)(w,{}),Object(h.jsx)(k,{})]})}},997:function(e,t,r){},998:function(e,t,r){}}]);
//# sourceMappingURL=4.6ee941f0.chunk.js.map