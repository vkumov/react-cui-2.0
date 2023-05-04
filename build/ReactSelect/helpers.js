function u(o){return"options"in o}function i(o,t){let n;for(const r of t)if(u(r)?n=i(o,r.options):n=r.value===o?r:null,n)return n}function f(o,t){const n=[];if(!Array.isArray(o)||o.length<=0)return n;for(const r of o){const e=i(r,t);e?n.push(e):n.push({value:r,label:r})}return n}export{i as findOption,f as findOptions,u as isGrouped};
//# sourceMappingURL=helpers.js.map
