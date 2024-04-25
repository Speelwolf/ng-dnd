"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[335],{7335:(ve,le,_e)=>{_e.d(le,{jM:()=>Se,lE:()=>R});var $=Symbol.for("immer-nothing"),R=Symbol.for("immer-draftable"),_=Symbol.for("immer-state");function P(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var C=Object.getPrototypeOf;function M(e){return!!e&&!!e[_]}function D(e){return!!e&&(re(e)||Array.isArray(e)||!!e[R]||!!e.constructor?.[R]||T(e)||U(e))}var de=Object.prototype.constructor.toString();function re(e){if(!e||"object"!=typeof e)return!1;const t=C(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===de}function E(e,t){0===x(e)?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function x(e){const t=e[_];return t?t.type_:Array.isArray(e)?1:T(e)?2:U(e)?3:0}function I(e,t){return 2===x(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ne(e,t,r){const n=x(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function T(e){return e instanceof Map}function U(e){return e instanceof Set}function z(e){return e.copy_||e.base_}function Q(e,t){if(T(e))return new Map(e);if(U(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&re(e))return C(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[_];let n=Reflect.ownKeys(r);for(let o=0;o<n.length;o++){const u=n[o],a=r[u];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[u]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[u]})}return Object.create(C(e),r)}function Y(e,t=!1){return G(e)||M(e)||!D(e)||(x(e)>1&&(e.set=e.add=e.clear=e.delete=he),Object.freeze(e),t&&E(e,(r,n)=>Y(n,!0))),e}function he(){P(2)}function G(e){return Object.isFrozen(e)}var W,Z={};function k(e){const t=Z[e];return t||P(0),t}function H(){return W}function se(e,t){t&&(k("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function L(e){V(e),e.drafts_.forEach(ge),e.drafts_=null}function V(e){e===W&&(W=e.parent_)}function oe(e){return W=function ye(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}(W,e)}function ge(e){const t=e[_];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function ce(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[_].modified_&&(L(t),P(4)),D(e)&&(e=J(t,e),t.parent_||X(t,e)),t.patches_&&k("Patches").generateReplacementPatches_(r[_].base_,e,t.patches_,t.inversePatches_)):e=J(t,r,[]),L(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==$?e:void 0}function J(e,t,r){if(G(t))return t;const n=t[_];if(!n)return E(t,(o,u)=>fe(e,n,t,o,u,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return X(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let u=o,a=!1;3===n.type_&&(u=new Set(o),o.clear(),a=!0),E(u,(c,i)=>fe(e,n,o,c,i,r,a)),X(e,o,!1),r&&e.patches_&&k("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function fe(e,t,r,n,o,u,a){if(M(o)){const i=J(e,o,u&&t&&3!==t.type_&&!I(t.assigned_,n)?u.concat(n):void 0);if(ne(r,n,i),!M(i))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(D(o)&&!G(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;J(e,o),(!t||!t.scope_.parent_)&&X(e,o)}}function X(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Y(t,r)}var j={get(e,t){if(t===_)return e;const r=z(e);if(!I(r,t))return function we(e,t,r){const n=ae(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!D(n)?n:n===ee(e.base_,t)?(te(e),e.copy_[t]=K(n,e)):n},has:(e,t)=>t in z(e),ownKeys:e=>Reflect.ownKeys(z(e)),set(e,t,r){const n=ae(z(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=ee(z(e),t),u=o?.[_];if(u&&u.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function pe(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,o)&&(void 0!==r||I(e.base_,t)))return!0;te(e),b(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==ee(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,te(e),b(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=z(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}},defineProperty(){P(11)},getPrototypeOf:e=>C(e.base_),setPrototypeOf(){P(12)}},B={};function ee(e,t){const r=e[_];return(r?z(r):e)[t]}function ae(e,t){if(!(t in e))return;let r=C(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=C(r)}}function b(e){e.modified_||(e.modified_=!0,e.parent_&&b(e.parent_))}function te(e){e.copy_||(e.copy_=Q(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function K(e,t){const r=T(e)?k("MapSet").proxyMap_(e,t):U(e)?k("MapSet").proxySet_(e,t):function me(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:H(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,u=j;r&&(o=[n],u=B);const{revoke:a,proxy:c}=Proxy.revocable(o,u);return n.draft_=c,n.revoke_=a,c}(e,t);return(t?t.scope_:H()).drafts_.push(r),r}function ue(e){if(!D(e)||G(e))return e;const t=e[_];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Q(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Q(e,!0);return E(r,(n,o)=>{ne(r,n,ue(o))}),t&&(t.finalized_=!1),r}E(j,(e,t)=>{B[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),B.deleteProperty=function(e,t){return B.set.call(this,e,t,void 0)},B.set=function(e,t,r){return j.set.call(this,e[0],t,r,e[0])};var A=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if("function"==typeof t&&"function"!=typeof r){const u=r;r=t;const a=this;return function(i=u,...s){return a.produce(i,d=>r.call(this,d,...s))}}let o;if("function"!=typeof r&&P(6),void 0!==n&&"function"!=typeof n&&P(7),D(t)){const u=oe(this),a=K(t,void 0);let c=!0;try{o=r(a),c=!1}finally{c?L(u):V(u)}return se(u,n),ce(o,u)}if(!t||"object"!=typeof t){if(o=r(t),void 0===o&&(o=t),o===$&&(o=void 0),this.autoFreeze_&&Y(o,!0),n){const u=[],a=[];k("Patches").generateReplacementPatches_(t,o,u,a),n(u,a)}return o}P(1)},this.produceWithPatches=(t,r)=>{if("function"==typeof t)return(a,...c)=>this.produceWithPatches(a,i=>t(i,...c));let n,o;return[this.produce(t,r,(a,c)=>{n=a,o=c}),n,o]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){D(e)||P(8),M(e)&&(e=function ze(e){return M(e)||P(10),ue(e)}(e));const t=oe(this),r=K(e,void 0);return r[_].isManual_=!0,V(t),r}finishDraft(e,t){const r=e&&e[_];(!r||!r.isManual_)&&P(9);const{scope_:n}=r;return se(n,t),ce(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(0===o.path.length&&"replace"===o.op){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=k("Patches").applyPatches_;return M(e)?n(e,t):this.produce(e,o=>n(o,t))}},Se=A.produce;A.produceWithPatches.bind(A),A.setAutoFreeze.bind(A),A.setUseStrictShallowCopy.bind(A),A.applyPatches.bind(A),A.createDraft.bind(A),A.finishDraft.bind(A)}}]);