(()=>{"use strict";const t=document.querySelector("#board-1"),e=document.querySelector("#board-2");class r{constructor(t,e){this.id=t,this.length=e,this.hits=0,this.status=!1}hit(){this.hits+=1}isSunk(){return this.hits>=this.length}}class a{constructor(){this.board=Array(10).fill(0).map((()=>Array(10).fill(0))),this.ships=[]}isCellEmpty(t,e){return 0===this.board[t][e]}placeShip(t,e,a,s){if("vertical"===s){if(t+a>this.board.length)return!1;if(e+a>this.board[0].length)return!1}for(let r=0;r<a;r++)if("vertical"===s){if(!this.isCellEmpty(t+r,e))return!1;if(!this.isCellEmpty(t,e+r))return!1}const i=new r(`ship_${t}_${e}`,a);for(let r=0;r<a;r++)"vertical"===s?this.board[t+r][e]=i:this.board[t][e+r]=i;return this.ships.push(i),this.board}placeShipRandomly(){const t=[5,4,3,3,2];for(let e=0;e<t.length;e++){let r=!1;for(;!r;){let a=Math.floor(10*Math.random()),s=Math.floor(10*Math.random());r=this.placeShip(a,s,t[e],"vertical")}}return this.board}recieveAttack(t,e){const a=this.board[t][e];return a instanceof r?(a.hit(),!0):(this.board[t][e]=1,!1)}areAllSunk(){return this.ships.every((t=>t.isSunk()))}}class s{constructor(t){this.name=t}attackShip(t,e,r){return r.recieveAttack(t,e),r.board}attackRandomly(t){let e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());return t.recieveAttack(e,r),t.board}}const i=()=>{new s("Player 1"),new s("Computer");const r=new a,i=new a;var o,n;r.placeShipRandomly(),i.placeShipRandomly(),o=r.board,n=i.board,[{board:o,element:t},{board:n,element:e}].forEach((({board:t,element:e})=>{const r=[];for(let e=0;e<t[0].length;e++){const a=[];for(let r=0;r<t.length;r++)a.push(t[r][e]);r.push(a)}r.forEach((r=>{const a=document.createElement("div");a.classList.add("board-column"),e.appendChild(a),r.forEach((e=>{const r=document.createElement("div");r.classList.add("grid"),a.appendChild(r),Number.isInteger(e)||t!=o||r.classList.add("ship")}))}))}))},o=document.querySelector(".start-btn");o.addEventListener("click",(()=>{i(),o.disabled=!0}))})();