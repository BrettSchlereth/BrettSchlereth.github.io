(this.webpackJsonpportfoliowebsite=this.webpackJsonpportfoliowebsite||[]).push([[0],{178:function(e,t,a){},350:function(e,t,a){e.exports=a.p+"static/media/ResumeImage.859be2d8.png"},351:function(e,t,a){e.exports=a.p+"static/media/BlackjackImage.6c27dff6.png"},353:function(e,t,a){e.exports=a.p+"static/media/1920x620BunkerDown.1e17e2ed.png"},354:function(e,t,a){e.exports=a.p+"static/media/2ofSpades.89062efb.png"},355:function(e,t,a){e.exports=a.p+"static/media/3ofSpades.2a36870a.png"},356:function(e,t,a){e.exports=a.p+"static/media/4ofSpades.d1039f10.png"},357:function(e,t,a){e.exports=a.p+"static/media/5ofSpades.4a890ff4.png"},358:function(e,t,a){e.exports=a.p+"static/media/6ofSpades.465b083d.png"},359:function(e,t,a){e.exports=a.p+"static/media/7ofSpades.397642b3.png"},360:function(e,t,a){e.exports=a.p+"static/media/8ofSpades.a855651a.png"},361:function(e,t,a){e.exports=a.p+"static/media/9ofSpades.1476e4c1.png"},362:function(e,t,a){e.exports=a.p+"static/media/10ofSpades.567c4b33.png"},363:function(e,t,a){e.exports=a.p+"static/media/aceOfSpades.001171ec.png"},387:function(e,t,a){e.exports=a(510)},394:function(e,t,a){e.exports=a.p+"static/media/600x900BunkerDown.2bb3954a.png"},395:function(e,t,a){e.exports=a.p+"static/media/D20Image.87e620db.png"},404:function(e,t){},405:function(e,t){},413:function(e,t){},415:function(e,t){},416:function(e,t){},420:function(e,t){},422:function(e,t){},433:function(e,t){},435:function(e,t){},460:function(e,t){},462:function(e,t){},463:function(e,t){},469:function(e,t){},471:function(e,t){},489:function(e,t){},491:function(e,t){},503:function(e,t){},506:function(e,t){},510:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a.n(n),s=a(348),l=a.n(s),i=a(41),o=(a(178),a(124)),c=(a(394),a(395),a(350)),u=a.n(c),d=a(351),h=a.n(d),p=a(5),g=function(e){var t=e.moveAmount,a=void 0===t?0:t,n=e.scaleAmount,s=void 0===n?0:n,l=e.timing,i=void 0===l?150:l,o=e.children,c=r.a.useState(!1),u=Object(p.a)(c,2),d=u[0],h=u[1],g={display:"inline-block",backfaceVisibility:"hidden",transform:d?"translate(".concat(a,"px) scale(").concat(s,", ").concat(s,")"):"translate(0px) scale(1, 1)",transition:"transform ".concat(i,"ms")};return r.a.createElement("span",{onMouseEnter:function(){h(!0)},onMouseLeave:function(){h(!1)},style:g},o)},m={"Blackjack AI":{type:"Neural Network",image:h.a,Link:"./BlackjackAI"},"Charter Project":{type:"SQL React Project",image:u.a,Link:"./CharterProject"}},f=[],y={flexWrap:"wrap",justifyContent:"center"},b={p:1,borderRadius:10,background:"#1F2833",boxShadow:"0 0 16px rgba(0, 0, 0, .25)",marginTop:"5%"},k={height:"300px",display:"block",margin:"auto",paddingTop:"5%"},v={fontFamily:"Arial",color:"#66FCF1"},E={textAlign:"center",color:"#66FCF1",fontSize:15};function D(e){return r.a.createElement(g,{moveAmount:-10,scaleAmount:1.1,timing:200,mx:"auto"},r.a.createElement(i.a,{margin:"10px"},r.a.createElement(o.b,{exact:!0,activeClassName:"current",to:m[e].Link},r.a.createElement(i.a,{width:256,mx:"auto"},r.a.createElement(i.c,{style:b},r.a.createElement(i.f,{src:m[e].image,style:k}),r.a.createElement(i.a,{px:2},r.a.createElement(i.e,{style:v},e),r.a.createElement(i.g,{style:E},m[e].type)))))))}var x,S,P,w=function(){if(0===f.length)for(var e in m)f.push(D(e));return r.a.createElement(i.d,{style:y},f)},C=a(49),A={color:"white",width:"15%",float:"left"},j={background:"#45A29E",height:"100%",borderRadius:"10px"},T=function(){return r.a.createElement(g,{scaleAmount:1.1,style:A},r.a.createElement(o.b,{exact:!0,activeClassName:"current",to:"./"},r.a.createElement(i.b,{style:j},"Home")))},I={width:"100%",textAlign:"center",background:"#1F2833",color:"#66FCF1",fontSize:"300%",borderRadius:"10px",fontStyle:"oblique"},W=function(e){var t=e.pageName;return r.a.createElement("div",{className:"container"},r.a.createElement(T,null),r.a.createElement("div",{style:I},t))},B=a(353),M=a.n(B),N=a(4),O=a.n(N),R=a(11),H=a(13),L=a(14),V=a(6),F=a(10),G=a(354),z=a.n(G),J=a(355),Q=a.n(J),q=a(356),Y=a.n(q),U=a(357),K=a.n(U),X=a(358),Z=a.n(X),$=a(359),_=a.n($),ee=a(360),te=a.n(ee),ae=a(361),ne=a.n(ae),re=a(362),se=a.n(re),le=a(363),ie=a.n(le),oe=a(177),ce={height:"auto",maxWidth:"20%"},ue={2:z.a,3:Q.a,4:Y.a,5:K.a,6:Z.a,7:_.a,8:te.a,9:ne.a,10:se.a,11:ie.a},de=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(V.a)(this,e),this.owner=t,this.isAi=a,this.cards=[],this.soft=0,this.blackjack=!1,this.count=0,this.total=this.getTotalCardValue(),this.busted=!1}return Object(F.a)(e,[{key:"addCard",value:function(e){this.cards.push(e.pop()),this.getTotalCardValue()}},{key:"getTotalCardValue",value:function(){var e=this,t=0,a=0;return this.cards.forEach((function(n){n<=6?a+=1:n>=10&&(a-=1),e.count=a,11===n&&t+n>21?n=1:11===n&&0===e.soft?e.soft=1:t+n>21&&1===e.soft&&(t-=10,e.soft=0),t+=n,e.total=t})),this.total=t,t>21?(console.log(this.owner,"busted!"),this.busted=!0):this.busted=!1,t}}]),e}(),he={background:"green",align:"center",display:"flex",borderRadius:"5px",border:"1px solid black",fontWeight:"bold"},pe={background:"DarkGreen",textAlign:"center",borderRadius:"20px, 20px, 20px, 20px",fontFamily:"Arial"},ge={width:"50%",borderRadius:"5px"},me={height:"100%",width:"50%"},fe={height:"auto",maxHeight:"25em",borderRadius:"5px"},ye={background:"green",borderRadius:"5px"},be={background:"green"},ke={margin:"auto",width:"100%",align:"center"},ve={false:{textAlign:"center",height:"10%",width:"50%",backgroundColor:"white",color:"black",fontSize:"1.5em",borderRadius:"5px",border:"1px solid black",fontWeight:"bold"},true:{textAlign:"center",height:"10%",width:"50%",backgroundColor:"gray",color:"black",fontSize:"1.5em",borderRadius:"5px",border:"1px solid black",fontWeight:"bold"}},Ee={textAlign:"center",fontWeight:"bold",paddingTop:"20px"},De=new de("dealer"),xe=new de("player"),Se=new de("aiDealer"),Pe=new de("player",!0),we={win:0,push:0,loss:0},Ce={win:0,push:0,loss:0},Ae=0;function je(e,t){return r.a.createElement(i.f,{key:t.toString(),style:ce,src:ue[e]})}var Te=function(e){Object(H.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(V.a)(this,a),n=t.call(this,e),P=n.loadTheModel().then((function(e){return e})).catch(console.log("failure")),console.log("model: ",P),n.startGame(),n.state={playerHand:[],dealerHand:[],aiHand:[],aiDealerHand:[],hitDisabled:!1,stayDisabled:!1,restartDisabled:!0,playerDone:!1,dealerDone:!1,aiPlayerDone:!1,message:"Hit Or Stay",aiMessage:"AI Is Waiting",playerWinPercentage:0,playerPushPercentage:0,playerLossPercentage:0,aiWinPercentage:0,aiPushPercentage:0,aiLossPercentage:0},n}return Object(F.a)(a,[{key:"checkForBlackjack",value:function(e,t){return 21===e.total&&21===t.total?(this.setState({message:"Push!"}),this.setStats("push",t.isAi),!0):21===e.total?(this.setState({message:"Dealer has blackjack!"}),this.setStats("loss",!0),this.setStats("loss",!1),!0):21===t.total&&(this.setState({message:"Player has blackjack!"}),this.setStats("win",!0),this.setStats("win",!1),!0)}},{key:"displayDealerTotal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"human";return 2===De.cards.length?De.cards[0]:"ai"===e?Se.getTotalCardValue():De.getTotalCardValue()}},{key:"getAiDealerMoves",value:function(){var e=Object(R.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(console.log("starting dealer moves"),console.log("dealer total",Se.getTotalCardValue());Se.getTotalCardValue()<17;)console.log("aiDealer is hitting"),this.hit("aiDealer");this.getWinner(Se,Pe);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAiMoves",value:function(){var e=Object(R.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==Pe.busted||21==Pe.total){e.next=14;break}return e.next=3,this.getPrediction();case 3:if(t=e.sent,console.log("predictions: ",t),!(t[0]>=t[1]&&t[0]>.5)){e.next=10;break}console.log("ai is hitting"),this.hit("aiPlayer"),e.next=12;break;case 10:return console.log("ai is holding"),e.abrupt("break",14);case 12:e.next=0;break;case 14:this.getAiDealerMoves(Se,Pe);case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCards",value:function(e,t){for(var a=[],n=0;n<e.cards.length;n++){var r=e.cards[n];a.push(je(r,n)),"dealer"===t&!1===this.state.playerDone&&(n=e.cards.length)}return a}},{key:"getCount",value:function(e,t){return e.count+t.count}},{key:"getDealerMoves",value:function(e,t){for(;e.getTotalCardValue()<17;)"dealer"===e.owner?this.hit("dealer"):this.hit("aiDealer");this.getWinner(e,t),this.getAiMoves(),this.setState({restartDisabled:!1})}},{key:"getPercentage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"human",t=arguments.length>1?arguments[1]:void 0;return"ai"===e?Math.floor(Ce[t]/(Ae+1)*100):Math.floor(we[t]/(Ae+1)*100)}},{key:"getPrediction",value:function(){var e=Object(R.a)(O.a.mark((function e(){var t,a,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a("model.json");case 2:return P=e.sent,t=oe.b([[Se.cards[0],Pe.getTotalCardValue(),this.getCount(Se,Pe),Pe.soft,1]]),a=oe.b([[Se.cards[0],Pe.getTotalCardValue(),this.getCount(Se,Pe),Pe.soft,0]]),n=P.predict(t).dataSync()[0],r=P.predict(a).dataSync()[0],console.log("hit: ",n," stay: ",r),e.abrupt("return",[n,r]);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getWinner",value:function(e,t){var a="";t.total>21?(a="Player Busted! Dealer Wins!",this.setStats("loss",t.isAi)):e.busted?(a="Dealer Busted! Player Wins!",this.setStats("win",t.isAi)):e.total>t.total?(a="Dealer Wins!",this.setStats("loss",t.isAi)):t.total>e.total?(a="Player Wins!",this.setStats("win",t.isAi)):(a="Push!",this.setStats("push",t.isAi)),"dealer"===e.owner?this.setState({message:a}):this.setState({aiMessage:a})}},{key:"hit",value:function(e){switch(e){case"player":this.setState({playerHand:xe.addCard(x)}),xe.busted&&(console.log("bust"),this.setState({hitDisabled:!0,stayDisabled:!0,restartDisabled:!1,playerDone:!0,dealerDone:!0,message:"Player busted! Dealer Wins!"}),this.getDealerMoves(De,xe));break;case"dealer":this.setState({dealerHand:De.addCard(x)}),De.busted?this.setState({dealerDone:!0,message:"Dealer Busted! Player Wins!"}):De.total>=17&&De.total<=21&&this.setState({dealerDone:!0,restartDisabled:!1});break;case"aiPlayer":this.setState({aiPlayerHand:Pe.addCard(S)}),Pe.busted&&this.setState({aiPlayerDone:!0,aiMessage:"AI Busted! AI Dealer Wins!"});break;case"aiDealer":this.setState({aiDealerHand:Se.addCard(S)}),Se.busted?this.setState({dealerDone:!0,aiMessage:"Dealer Busted! Player Wins!"}):Se.total>=17&&Se.total<=21&&this.setState({dealerDone:!0,restartDisabled:!1});break;default:console.log("Error: Player type not recognized")}}},{key:"loadTheModel",value:function(){var e=Object(R.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a("model.json");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),console.log("failed load model");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"setStats",value:function(e,t){!0===t?Ce[e]+=1:we[e]+=1,this.setState({playerWinPercentage:this.getPercentage("human","win"),playerPushPercentage:this.getPercentage("human","push"),aiWinPercentage:this.getPercentage("ai","win"),aiPushPercentage:this.getPercentage("ai","push"),playerLossPercentage:100-this.getPercentage("human","win")-this.getPercentage("human","push"),aiLossPercentage:100-this.getPercentage("ai","win")-this.getPercentage("ai","push")}),console.log("playerStats: ",we," totalGames: ",Ae),console.log("aiStats: ",Ce," totalGames: ",Ae)}},{key:"startGame",value:function(){Ae+=1,this.setState({playerHand:[],dealerHand:[],playerDone:!1,dealerDone:!1,hitDisabled:!1,stayDisabled:!1,restartDisabled:!0,message:"hit or stay",aiMessage:"AI Side"}),function(){x=[];for(var e=0;e<8;e++)for(var t=2;t<12;t++)10===t&&(x.push(t),x.push(t),x.push(t)),x.push(t);(function(e){var t,a=e.length;for(;0!==a;){t=Math.floor(Math.random()*a),a--;var n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}})(x),S=x.slice(),console.log("building deck")}(),function(){xe.cards=[],De.cards=[],Pe.cards=[],Se.cards=[];for(var e=0;e<2;e++)xe.addCard(x),De.addCard(x),Pe.addCard(S),Se.addCard(S);Pe.getTotalCardValue(),Se.getTotalCardValue(),console.log("dealing cards")}(),!0===this.checkForBlackjack(De,xe)&&this.setState({hitDisabled:!0,stayDisabled:!0,restartDisabled:!1}),console.log("start")}},{key:"stay",value:function(e){switch(e.owner){case"player":this.setState({hitDisabled:!0,stayDisabled:!0,playerDone:!0}),this.getDealerMoves(De,xe);case"aiPlayer":console.log("aiPlayer stayed");default:console.log("unknown player stayed")}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"What is Blackjack AI?"),r.a.createElement("h3",null,"Blackjack AI is a trained neural network that learned from over 10,000 hands of Blackjack. This game will allow you to play a hand of Blackjack and compare outcomes with Blackjack AI playing the same hand. Blackjack AI does not have any unfair advantage. It uses the same information you are given as a player."),r.a.createElement("h2",null,"Tech Stack"),r.a.createElement("h3",null,r.a.createElement("p",null,"AI: Python, keras, Tensorflow, TensorflowJS, and JavaScript"),r.a.createElement("p",null,"Website: ReactJS, JavaScript, html, CSS3"),r.a.createElement("p",null,"Hosted on Github Pages")),r.a.createElement("h2",null,"Rules"),r.a.createElement("h3",null,r.a.createElement("p",null,"Get the total of your cards closest to 21 without going over"),r.a.createElement("p",null,"There are 2 decks of cards. Dealer stays on soft 17. No splitting (sorry)")),r.a.createElement(i.a,{style:Ee},r.a.createElement("p",null,"Total Games: ",Ae),r.a.createElement("p",null,"Player Wins: ",this.state.playerWinPercentage,"% AI Wins: ",this.state.aiWinPercentage,"%"),r.a.createElement("p",null,"Player Pushes: ",this.state.playerPushPercentage,"% AI Pushes: ",this.state.aiPushPercentage,"%"),r.a.createElement("p",null,"Player Losses: ",this.state.playerLossPercentage,"% AI Loss: ",this.state.aiLossPercentage,"%")),r.a.createElement(i.a,{style:he},r.a.createElement(i.a,{style:ge},r.a.createElement(i.a,{style:pe},this.state.message),r.a.createElement(i.a,null,"Dealer: ",this.displayDealerTotal()),r.a.createElement(i.a,{style:fe},this.getCards(De,"dealer")),r.a.createElement(i.a,null,"Player: ",xe.getTotalCardValue()),r.a.createElement(i.a,{style:ye},this.getCards(xe,"player"),r.a.createElement("div",{style:ke},r.a.createElement("button",{disabled:this.state.hitDisabled,onClick:function(){return e.hit("player")},style:ve[this.state.hitDisabled]},"HIT"),r.a.createElement("button",{disabled:this.state.stayDisabled,onClick:function(){return e.stay(xe)},style:ve[this.state.stayDisabled]},"STAY"),r.a.createElement("button",{disabled:this.state.restartDisabled,onClick:function(){return e.startGame()},style:ve[this.state.restartDisabled]},"PLAY AGAIN")))),r.a.createElement(i.a,{style:me},r.a.createElement(i.a,{style:pe},this.state.aiMessage),r.a.createElement(i.a,null,"AI Dealer: ",this.displayDealerTotal("ai")),r.a.createElement(i.a,{style:fe},this.getCards(Se,"dealer")),r.a.createElement(i.a,null,"AI Player: ",Pe.getTotalCardValue()),r.a.createElement(i.a,{style:be},this.getCards(Pe,"aiPlayer")))))}}]),a}(r.a.Component),Ie=a(385),We=a.n(Ie),Be={false:{textAlign:"center",height:"10%",width:"25%",backgroundColor:"white",color:"black",fontSize:"1.5em",borderRadius:"5px",border:"1px solid black",fontWeight:"bold"},true:{textAlign:"center",height:"10%",width:"25%",backgroundColor:"gray",color:"black",fontSize:"1.5em",borderRadius:"5px",border:"1px solid black",fontWeight:"bold"}},Me={whiteSpace:"pre-wrap",width:"100%"},Ne=function(e){Object(H.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(V.a)(this,a),(n=t.call(this,e)).loadDataset(),n.state={database:null,points:null},n}return Object(F.a)(a,[{key:"addMonth",value:function(e,t){var a=parseInt(e.slice(0,4)),n=parseInt(e.slice(5))+1;return n>12&&(n=1,a+=1),n<10&&(n="0"+String(n)),e=String(a)+"-"+String(n)}},{key:"calculatePoints",value:function(e){for(var t=[],a="2021-09",n=0;n<3;n++){for(var r=0,s=this.getQuery("SELECT Amount FROM transactionData WHERE CustomerName='"+e+"' AND strftime('%Y-%m', Date)='"+a+"'"),l=0;l<s.length;l++){var i=Math.floor(s[l][0]);i>100?r+=2*(i-100)+50:i>50&&(r+=i-50)}a=this.addMonth(a,n),t.push(r)}return t}},{key:"getHeader",value:function(){for(var e=[],t="2021-09",a=0;a<3;a++)e.push(r.a.createElement("td",{key:t},t)),t=this.addMonth(t,a);return e}},{key:"getPoints",value:function(){for(var e=this.getQuery("SELECT DISTINCT CustomerName FROM transactionData"),t={},a=0;a<e.length;a++)t[e[a][0]]=this.calculatePoints(e[a][0]);this.printData(t)}},{key:"getQuery",value:function(e){return this.state.database.exec(e)[0].values}},{key:"getValues",value:function(e){var t=[];return e.forEach((function(e){return t.push(r.a.createElement("td",{key:e},e))})),t}},{key:"isDisabled",value:function(){return null!=this.state.points}},{key:"loadDataset",value:function(){var e=Object(R.a)(O.a.mark((function e(){var t,a,n,r,s,l,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=We()({locateFile:function(e){return"sql-wasm.wasm"}}),a=fetch("transactionSQL.sqlite").then((function(e){return e.arrayBuffer()})),e.prev=2,e.next=5,Promise.all([t,a]);case 5:n=e.sent,r=Object(p.a)(n,2),s=r[0],l=r[1],i=new s.Database(new Uint8Array(l)),this.setState({database:i}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),console.log("Failed to load database");case 17:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"printData",value:function(e){if(null!=e){var t=function(e,t){return e+t},a=[];a.push(r.a.createElement("tr",{key:"tableHeader"},r.a.createElement("td",null,"NAME"),this.getHeader(),r.a.createElement("td",null,"TOTAL POINTS")));for(var n=0,s=Object.entries(e);n<s.length;n++){var l=Object(p.a)(s[n],2),i=l[0],o=l[1];a.push(r.a.createElement("tr",{key:i+"1"},r.a.createElement("td",null,String(i)),this.getValues(o),r.a.createElement("td",null,String(o.reduce(t)))))}this.setState({points:a})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("table",{style:Me},r.a.createElement("tbody",null,this.state.points)),r.a.createElement("button",{style:Be[this.isDisabled()],disabled:this.isDisabled(),onClick:function(){return e.getPoints()}}," Get Points "))}}]),a}(r.a.Component),Oe=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(i.a,null,r.a.createElement(i.c,{as:"h1",mx:"auto"},"Brett Schlereth")),r.a.createElement(w,null))},Re=function(){return r.a.createElement("div",{className:"BunkerDown"},r.a.createElement(W,{pageName:"Bunker Down"}),r.a.createElement("div",null,r.a.createElement(i.f,{src:M.a}),"Bunker Down is an arcade-style survival game I developed using the Godot Game Engine. The goal is to avoid the bombs falling from the sky, collect coins, and make your way to the underground bunker below."))},He=function(){return r.a.createElement("div",{className:"CharterProject"},r.a.createElement(W,{pageName:"Charter Project"}),r.a.createElement("div",null,r.a.createElement(Ne,null)))},Le=function(){return r.a.createElement("div",{className:"DInfinity"},r.a.createElement(W,{pageName:"DInfinity"}),r.a.createElement("div",null,"content"))},Ve=function(){return r.a.createElement("div",{className:"Resume"},r.a.createElement(W,{pageName:"Resume"}),r.a.createElement("div",null,"Content"))},Fe=function(){return r.a.createElement("div",{className:"BlackjackAI"},r.a.createElement(W,{pageName:"Blackjack AI"}),r.a.createElement(Te,null))},Ge=function(){return r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/",component:Oe}),r.a.createElement(C.a,{exact:!0,path:"/BunkerDown",component:Re}),r.a.createElement(C.a,{exact:!0,path:"/CharterProject",component:He}),r.a.createElement(C.a,{exact:!0,path:"/DInfinity",component:Le}),r.a.createElement(C.a,{exact:!0,path:"/Resume",component:Ve}),r.a.createElement(C.a,{exact:!0,path:"/BlackjackAI",component:Fe}))},ze=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ge,null))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(ze,null)),document.getElementById("root"))}},[[387,1,2]]]);
//# sourceMappingURL=main.68089b7d.chunk.js.map