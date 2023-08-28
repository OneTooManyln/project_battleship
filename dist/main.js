(()=>{"use strict";const t=document.querySelector("#board-1"),e=document.querySelector("#board-2"),s=document.querySelector(".title"),r=async s=>{0===s?(t.classList.remove("active"),e.classList.add("active")):1===s&&(e.classList.remove("active"),t.classList.add("active"))},i=t=>{s.innerText="",s.innerText=t},a=(s,r,i)=>{i||(t.classList.add("active"),e.classList.add("active")),t.innerHTML="",e.innerHTML="",[{board:s,element:t},{board:r,element:e}].forEach((({board:t,element:e})=>{const r=[];for(let e=0;e<t[0].length;e++){const s=[];for(let r=0;r<t.length;r++)s.push(t[r][e]);r.push(s)}r.forEach(((r,i)=>{const a=document.createElement("div");a.classList.add("board-column"),e.appendChild(a),r.forEach(((e,r)=>{const o=document.createElement("div");o.classList.add("grid"),o.dataset.y=`${i}`,o.dataset.x=`${r}`,a.appendChild(o),Number.isInteger(e)||t!=s||o.classList.add("ship"),1==e&&o.classList.add("missed"),e[1]&&"x"===e[1].hitMarker&&(o.classList.add("hit"),!0===e[0].status&&o.classList.add("sunk"))}))}))})),console.log(s,r)};class o{constructor(t,e,s){this.id=t,this.length=e,this.isVertical=s,this.hits=0,this.status=!1}hit(){this.hits+=1}isSunk(){let t=this.hits>=this.length;return!0===t&&(this.status=!0),t}getLength(){return this.length}}class n{constructor(){this.board=Array(10).fill(0).map((()=>Array(10).fill(0))),this.ships=[]}isCellEmpty(t,e){return 0===this.board[t][e]}isPlacementPossible(t,e,s,r){if(r){if(t+s>this.board.length)return!1}else if(!r&&e+s>this.board[0].length)return!1;for(let i=0;i<s;i++)if(r){if(!this.isCellEmpty(t+i,e))return!1}else if(!r&&!this.isCellEmpty(t,e+i))return!1;return!0}placeShip(t,e,s,r){if(!this.isPlacementPossible(t,e,s,r))return!1;const i=new o(`ship_${t}_${e}`,s,r);for(let r=0;r<s;r++)!0===i.isVertical?this.board[t+r][e]=i:this.board[t][e+r]=i;return this.ships.push(i),this.board}placeShipRandomly(){const t=[5,4,3,3,2];for(let e=0;e<t.length;e++){let s=!1;for(;!s;){let r=Math.floor(10*Math.random()),i=Math.floor(10*Math.random()),a=Math.random()<.5;s=this.placeShip(r,i,t[e],a)}}return this.board}recieveAttack(t,e){const s=this.board[t][e];return s instanceof o?(s.hit(),this.board[t][e]=[{...this.board[t][e]},{hitMarker:"x"}],s.isSunk(),!0):(this.board[t][e]=1,!1)}areAllSunk(){return this.ships.every((t=>t.isSunk()))}updateBoardsShips(){let t=this.ships.filter((t=>!0===t.status));if(!t.length)return!1;this.board.forEach((e=>{e.forEach((e=>{t.some((t=>e[0]&&e[0].id===t.id))&&(e[0].status=!0)}))}))}findShip(t,e){return this.ships.find((s=>s.id===this.board[t][e].id))}removeShip(t,e){const s=this.findShip(t,e),r=this.ships.indexOf(s);return-1!==r&&this.ships.splice(r,1),this.board.forEach((t=>{t.forEach(((e,r)=>{e===s&&(t[r]=0)}))})),this.board}moveShip(t,e,s,r){const i=this.findShip(t,e);if(this.isPlacementPossible(s,r,i.getLength(),i.isVertical))return this.removeShip(t,e),this.placeShip(s,r,i.getLength(),i.isVertical),this.board}}class d{constructor(t){this.name=t}attackShip(t,e,s){return s.recieveAttack(t,e),s.board}attackRandomly(t){let e=Math.floor(10*Math.random()),s=Math.floor(10*Math.random());return t.recieveAttack(e,s),t.board}}(()=>{const t=new d("Player"),e=new d("Computer"),s=new n,o=new n;let h=!1,l=!1,c=null;o.placeShipRandomly(),s.placeShipRandomly(),a(s.board,o.board,h);const u=t=>{let e,s,r=0;for(const i in t)0===r?(s=t[i],r++):1===r&&(e=t[i],r++);return{xCoord:e,yCoord:s}};document.addEventListener("click",(n=>{if(n.target.closest(".start-btn"))return h=!0,r(0),void i("Player's Turn");if(n.target.closest(".grid")&&h){if("board-2"!==n.target.closest(".board").id)return;(async n=>{const{xCoord:d,yCoord:c}=u(n);t.attackShip(d,c,o),o.updateBoardsShips(),r(1),a(s.board,o.board,h),o.areAllSunk()?(i("Player Wins!"),l=!0):(i("Computer's Turn"),await new Promise((t=>setTimeout(t,800))),e.attackRandomly(s),s.updateBoardsShips(),r(0),a(s.board,o.board,h),s.areAllSunk()?(i("Computer Wins!"),l=!0):i("Player's Turn"))})(n.target.dataset)}else{if(!n.target.closest("#board-1"))return;{const t=n.target.closest(".ship");if(t){const{xCoord:e,yCoord:s}=u(t.dataset);c={x:e,y:s}}else if(c){const{xCoord:t,yCoord:e}=u(n.target.dataset);s.moveShip(c.x,c.y,parseInt(t),parseInt(e)),c=null,a(s.board,o.board,h)}}}}))})()})();