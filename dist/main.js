(()=>{"use strict";const e=document.querySelector("#board-1"),t=document.querySelector("#board-2");[{board:void 0,element:e},{board:void 0,element:t}].forEach((({board:e,element:t})=>{const o=[];for(let t=0;t<e[0].length;t++){const d=[];for(let o=0;o<e.length;o++)d.push(e[o][t]);o.push(d)}o.forEach((()=>{const e=document.createElement("div");e.classList.add("board-column"),t.appendChild(e);for(let t=0;t<10;t++){const t=document.createElement("div");t.classList.add("grid"),e.appendChild(t)}}))}))})();