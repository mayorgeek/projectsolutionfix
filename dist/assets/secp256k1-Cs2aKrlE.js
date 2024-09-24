import{bc as ye,bd as Ee,be as pe,bf as Yt,bg as Be,bh as xe,bi as te,bj as bt}from"./index-CJtnVe0X.js";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ee=BigInt(0),xt=BigInt(1),ve=BigInt(2);function ft(t){return t instanceof Uint8Array||t!=null&&typeof t=="object"&&t.constructor.name==="Uint8Array"}function W(t){if(!ft(t))throw new Error("Uint8Array expected")}const Se=Array.from({length:256},(t,n)=>n.toString(16).padStart(2,"0"));function dt(t){W(t);let n="";for(let e=0;e<t.length;e++)n+=Se[t[e]];return n}function ne(t){const n=t.toString(16);return n.length&1?`0${n}`:n}function Ut(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}const X={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function Mt(t){if(t>=X._0&&t<=X._9)return t-X._0;if(t>=X._A&&t<=X._F)return t-(X._A-10);if(t>=X._a&&t<=X._f)return t-(X._a-10)}function ht(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const n=t.length,e=n/2;if(n%2)throw new Error("padded hex string expected, got unpadded hex of length "+n);const r=new Uint8Array(e);for(let s=0,o=0;s<e;s++,o+=2){const a=Mt(t.charCodeAt(o)),c=Mt(t.charCodeAt(o+1));if(a===void 0||c===void 0){const i=t[o]+t[o+1];throw new Error('hex string expected, got non-hex character "'+i+'" at index '+o)}r[s]=a*16+c}return r}function k(t){return Ut(dt(t))}function Ht(t){return W(t),Ut(dt(Uint8Array.from(t).reverse()))}function rt(t,n){return ht(t.toString(16).padStart(n*2,"0"))}function Ct(t,n){return rt(t,n).reverse()}function Ie(t){return ht(ne(t))}function C(t,n,e){let r;if(typeof n=="string")try{r=ht(n)}catch(o){throw new Error(`${t} must be valid hex string, got "${n}". Cause: ${o}`)}else if(ft(n))r=Uint8Array.from(n);else throw new Error(`${t} must be hex string or Uint8Array`);const s=r.length;if(typeof e=="number"&&s!==e)throw new Error(`${t} expected ${e} bytes, got ${s}`);return r}function K(...t){let n=0;for(let r=0;r<t.length;r++){const s=t[r];W(s),n+=s.length}const e=new Uint8Array(n);for(let r=0,s=0;r<t.length;r++){const o=t[r];e.set(o,s),s+=o.length}return e}function Ae(t,n){if(t.length!==n.length)return!1;let e=0;for(let r=0;r<t.length;r++)e|=t[r]^n[r];return e===0}function vt(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function _e(t){let n;for(n=0;t>ee;t>>=xt,n+=1);return n}function Oe(t,n){return t>>BigInt(n)&xt}function qe(t,n,e){return t|(e?xt:ee)<<BigInt(n)}const Zt=t=>(ve<<BigInt(t-1))-xt,Ot=t=>new Uint8Array(t),Dt=t=>Uint8Array.from(t);function re(t,n,e){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");if(typeof e!="function")throw new Error("hmacFn must be a function");let r=Ot(t),s=Ot(t),o=0;const a=()=>{r.fill(1),s.fill(0),o=0},c=(...l)=>e(s,r,...l),i=(l=Ot())=>{s=c(Dt([0]),l),r=c(),l.length!==0&&(s=c(Dt([1]),l),r=c())},f=()=>{if(o++>=1e3)throw new Error("drbg: tried 1000 values");let l=0;const A=[];for(;l<n;){r=c();const x=r.slice();A.push(x),l+=r.length}return K(...A)};return(l,A)=>{a(),i(l);let x;for(;!(x=A(f()));)i();return a(),x}}const Ne={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||ft(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,n)=>n.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function gt(t,n,e={}){const r=(s,o,a)=>{const c=Ne[o];if(typeof c!="function")throw new Error(`Invalid validator "${o}", expected function`);const i=t[s];if(!(a&&i===void 0)&&!c(i,t))throw new Error(`Invalid param ${String(s)}=${i} (${typeof i}), expected ${o}`)};for(const[s,o]of Object.entries(n))r(s,o,!1);for(const[s,o]of Object.entries(e))r(s,o,!0);return t}const Te=Object.freeze(Object.defineProperty({__proto__:null,abytes:W,bitGet:Oe,bitLen:_e,bitMask:Zt,bitSet:qe,bytesToHex:dt,bytesToNumberBE:k,bytesToNumberLE:Ht,concatBytes:K,createHmacDrbg:re,ensureBytes:C,equalBytes:Ae,hexToBytes:ht,hexToNumber:Ut,isBytes:ft,numberToBytesBE:rt,numberToBytesLE:Ct,numberToHexUnpadded:ne,numberToVarBytesBE:Ie,utf8ToBytes:vt,validateObject:gt},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const H=BigInt(0),$=BigInt(1),it=BigInt(2),Re=BigInt(3),Tt=BigInt(4),Gt=BigInt(5),Wt=BigInt(8);BigInt(9);BigInt(16);function U(t,n){const e=t%n;return e>=H?e:n+e}function $e(t,n,e){if(e<=H||n<H)throw new Error("Expected power/modulo > 0");if(e===$)return H;let r=$;for(;n>H;)n&$&&(r=r*t%e),t=t*t%e,n>>=$;return r}function Y(t,n,e){let r=t;for(;n-- >H;)r*=r,r%=e;return r}function Rt(t,n){if(t===H||n<=H)throw new Error(`invert: expected positive integers, got n=${t} mod=${n}`);let e=U(t,n),r=n,s=H,o=$;for(;e!==H;){const c=r/e,i=r%e,f=s-o*c;r=e,e=i,s=o,o=f}if(r!==$)throw new Error("invert: does not exist");return U(s,n)}function Le(t){const n=(t-$)/it;let e,r,s;for(e=t-$,r=0;e%it===H;e/=it,r++);for(s=it;s<t&&$e(s,n,t)!==t-$;s++);if(r===1){const a=(t+$)/Tt;return function(i,f){const w=i.pow(f,a);if(!i.eql(i.sqr(w),f))throw new Error("Cannot find square root");return w}}const o=(e+$)/it;return function(c,i){if(c.pow(i,n)===c.neg(c.ONE))throw new Error("Cannot find square root");let f=r,w=c.pow(c.mul(c.ONE,s),e),l=c.pow(i,o),A=c.pow(i,e);for(;!c.eql(A,c.ONE);){if(c.eql(A,c.ZERO))return c.ZERO;let x=1;for(let u=c.sqr(A);x<f&&!c.eql(u,c.ONE);x++)u=c.sqr(u);const y=c.pow(w,$<<BigInt(f-x-1));w=c.sqr(y),l=c.mul(l,y),A=c.mul(A,w),f=x}return l}}function Ue(t){if(t%Tt===Re){const n=(t+$)/Tt;return function(r,s){const o=r.pow(s,n);if(!r.eql(r.sqr(o),s))throw new Error("Cannot find square root");return o}}if(t%Wt===Gt){const n=(t-Gt)/Wt;return function(r,s){const o=r.mul(s,it),a=r.pow(o,n),c=r.mul(s,a),i=r.mul(r.mul(c,it),a),f=r.mul(c,r.sub(i,r.ONE));if(!r.eql(r.sqr(f),s))throw new Error("Cannot find square root");return f}}return Le(t)}const He=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function oe(t){const n={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},e=He.reduce((r,s)=>(r[s]="function",r),n);return gt(t,e)}function Ce(t,n,e){if(e<H)throw new Error("Expected power > 0");if(e===H)return t.ONE;if(e===$)return n;let r=t.ONE,s=n;for(;e>H;)e&$&&(r=t.mul(r,s)),s=t.sqr(s),e>>=$;return r}function Ze(t,n){const e=new Array(n.length),r=n.reduce((o,a,c)=>t.is0(a)?o:(e[c]=o,t.mul(o,a)),t.ONE),s=t.inv(r);return n.reduceRight((o,a,c)=>t.is0(a)?o:(e[c]=t.mul(o,e[c]),t.mul(o,a)),s),e}function se(t,n){const e=n!==void 0?n:t.toString(2).length,r=Math.ceil(e/8);return{nBitLength:e,nByteLength:r}}function ke(t,n,e=!1,r={}){if(t<=H)throw new Error(`Expected Field ORDER > 0, got ${t}`);const{nBitLength:s,nByteLength:o}=se(t,n);if(o>2048)throw new Error("Field lengths over 2048 bytes are not supported");const a=Ue(t),c=Object.freeze({ORDER:t,BITS:s,BYTES:o,MASK:Zt(s),ZERO:H,ONE:$,create:i=>U(i,t),isValid:i=>{if(typeof i!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof i}`);return H<=i&&i<t},is0:i=>i===H,isOdd:i=>(i&$)===$,neg:i=>U(-i,t),eql:(i,f)=>i===f,sqr:i=>U(i*i,t),add:(i,f)=>U(i+f,t),sub:(i,f)=>U(i-f,t),mul:(i,f)=>U(i*f,t),pow:(i,f)=>Ce(c,i,f),div:(i,f)=>U(i*Rt(f,t),t),sqrN:i=>i*i,addN:(i,f)=>i+f,subN:(i,f)=>i-f,mulN:(i,f)=>i*f,inv:i=>Rt(i,t),sqrt:r.sqrt||(i=>a(c,i)),invertBatch:i=>Ze(c,i),cmov:(i,f,w)=>w?f:i,toBytes:i=>e?Ct(i,o):rt(i,o),fromBytes:i=>{if(i.length!==o)throw new Error(`Fp.fromBytes: expected ${o}, got ${i.length}`);return e?Ht(i):k(i)}});return Object.freeze(c)}function ie(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const n=t.toString(2).length;return Math.ceil(n/8)}function ce(t){const n=ie(t);return n+Math.ceil(n/2)}function Ve(t,n,e=!1){const r=t.length,s=ie(n),o=ce(n);if(r<16||r<o||r>1024)throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);const a=e?k(t):Ht(t),c=U(a,n-$)+$;return e?Ct(c,s):rt(c,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Pe=BigInt(0),qt=BigInt(1);function ze(t,n){const e=(s,o)=>{const a=o.negate();return s?a:o},r=s=>{const o=Math.ceil(n/s)+1,a=2**(s-1);return{windows:o,windowSize:a}};return{constTimeNegate:e,unsafeLadder(s,o){let a=t.ZERO,c=s;for(;o>Pe;)o&qt&&(a=a.add(c)),c=c.double(),o>>=qt;return a},precomputeWindow(s,o){const{windows:a,windowSize:c}=r(o),i=[];let f=s,w=f;for(let l=0;l<a;l++){w=f,i.push(w);for(let A=1;A<c;A++)w=w.add(f),i.push(w);f=w.double()}return i},wNAF(s,o,a){const{windows:c,windowSize:i}=r(s);let f=t.ZERO,w=t.BASE;const l=BigInt(2**s-1),A=2**s,x=BigInt(s);for(let y=0;y<c;y++){const u=y*i;let h=Number(a&l);a>>=x,h>i&&(h-=A,a+=qt);const d=u,m=u+Math.abs(h)-1,E=y%2!==0,v=h<0;h===0?w=w.add(e(E,o[d])):f=f.add(e(v,o[m]))}return{p:f,f:w}},wNAFCached(s,o,a,c){const i=s._WINDOW_SIZE||1;let f=o.get(s);return f||(f=this.precomputeWindow(s,i),i!==1&&o.set(s,c(f))),this.wNAF(i,f,a)}}}function fe(t){return oe(t.Fp),gt(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...se(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function je(t){const n=fe(t);gt(n,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:e,Fp:r,a:s}=n;if(e){if(!r.eql(s,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof e!="object"||typeof e.beta!="bigint"||typeof e.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...n})}const{bytesToNumberBE:Ke,hexToBytes:Ye}=Te,ct={Err:class extends Error{constructor(n=""){super(n)}},_parseInt(t){const{Err:n}=ct;if(t.length<2||t[0]!==2)throw new n("Invalid signature integer tag");const e=t[1],r=t.subarray(2,e+2);if(!e||r.length!==e)throw new n("Invalid signature integer: wrong length");if(r[0]&128)throw new n("Invalid signature integer: negative");if(r[0]===0&&!(r[1]&128))throw new n("Invalid signature integer: unnecessary leading zero");return{d:Ke(r),l:t.subarray(e+2)}},toSig(t){const{Err:n}=ct,e=typeof t=="string"?Ye(t):t;W(e);let r=e.length;if(r<2||e[0]!=48)throw new n("Invalid signature tag");if(e[1]!==r-2)throw new n("Invalid signature: incorrect length");const{d:s,l:o}=ct._parseInt(e.subarray(2)),{d:a,l:c}=ct._parseInt(o);if(c.length)throw new n("Invalid signature: left bytes after parsing");return{r:s,s:a}},hexFromSig(t){const n=f=>Number.parseInt(f[0],16)&8?"00"+f:f,e=f=>{const w=f.toString(16);return w.length&1?`0${w}`:w},r=n(e(t.s)),s=n(e(t.r)),o=r.length/2,a=s.length/2,c=e(o),i=e(a);return`30${e(a+o+4)}02${i}${s}02${c}${r}`}},G=BigInt(0),R=BigInt(1),et=BigInt(2),yt=BigInt(3),Xt=BigInt(4);function Me(t){const n=je(t),{Fp:e}=n,r=n.toBytes||((y,u,h)=>{const d=u.toAffine();return K(Uint8Array.from([4]),e.toBytes(d.x),e.toBytes(d.y))}),s=n.fromBytes||(y=>{const u=y.subarray(1),h=e.fromBytes(u.subarray(0,e.BYTES)),d=e.fromBytes(u.subarray(e.BYTES,2*e.BYTES));return{x:h,y:d}});function o(y){const{a:u,b:h}=n,d=e.sqr(y),m=e.mul(d,y);return e.add(e.add(m,e.mul(y,u)),h)}if(!e.eql(e.sqr(n.Gy),o(n.Gx)))throw new Error("bad generator point: equation left != right");function a(y){return typeof y=="bigint"&&G<y&&y<n.n}function c(y){if(!a(y))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function i(y){const{allowedPrivateKeyLengths:u,nByteLength:h,wrapPrivateKey:d,n:m}=n;if(u&&typeof y!="bigint"){if(ft(y)&&(y=dt(y)),typeof y!="string"||!u.includes(y.length))throw new Error("Invalid key");y=y.padStart(h*2,"0")}let E;try{E=typeof y=="bigint"?y:k(C("private key",y,h))}catch{throw new Error(`private key must be ${h} bytes, hex or bigint, not ${typeof y}`)}return d&&(E=U(E,m)),c(E),E}const f=new Map;function w(y){if(!(y instanceof l))throw new Error("ProjectivePoint expected")}class l{constructor(u,h,d){if(this.px=u,this.py=h,this.pz=d,u==null||!e.isValid(u))throw new Error("x required");if(h==null||!e.isValid(h))throw new Error("y required");if(d==null||!e.isValid(d))throw new Error("z required")}static fromAffine(u){const{x:h,y:d}=u||{};if(!u||!e.isValid(h)||!e.isValid(d))throw new Error("invalid affine point");if(u instanceof l)throw new Error("projective point not allowed");const m=E=>e.eql(E,e.ZERO);return m(h)&&m(d)?l.ZERO:new l(h,d,e.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(u){const h=e.invertBatch(u.map(d=>d.pz));return u.map((d,m)=>d.toAffine(h[m])).map(l.fromAffine)}static fromHex(u){const h=l.fromAffine(s(C("pointHex",u)));return h.assertValidity(),h}static fromPrivateKey(u){return l.BASE.multiply(i(u))}_setWindowSize(u){this._WINDOW_SIZE=u,f.delete(this)}assertValidity(){if(this.is0()){if(n.allowInfinityPoint&&!e.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:u,y:h}=this.toAffine();if(!e.isValid(u)||!e.isValid(h))throw new Error("bad point: x or y not FE");const d=e.sqr(h),m=o(u);if(!e.eql(d,m))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:u}=this.toAffine();if(e.isOdd)return!e.isOdd(u);throw new Error("Field doesn't support isOdd")}equals(u){w(u);const{px:h,py:d,pz:m}=this,{px:E,py:v,pz:I}=u,p=e.eql(e.mul(h,I),e.mul(E,m)),B=e.eql(e.mul(d,I),e.mul(v,m));return p&&B}negate(){return new l(this.px,e.neg(this.py),this.pz)}double(){const{a:u,b:h}=n,d=e.mul(h,yt),{px:m,py:E,pz:v}=this;let I=e.ZERO,p=e.ZERO,B=e.ZERO,S=e.mul(m,m),Z=e.mul(E,E),T=e.mul(v,v),O=e.mul(m,E);return O=e.add(O,O),B=e.mul(m,v),B=e.add(B,B),I=e.mul(u,B),p=e.mul(d,T),p=e.add(I,p),I=e.sub(Z,p),p=e.add(Z,p),p=e.mul(I,p),I=e.mul(O,I),B=e.mul(d,B),T=e.mul(u,T),O=e.sub(S,T),O=e.mul(u,O),O=e.add(O,B),B=e.add(S,S),S=e.add(B,S),S=e.add(S,T),S=e.mul(S,O),p=e.add(p,S),T=e.mul(E,v),T=e.add(T,T),S=e.mul(T,O),I=e.sub(I,S),B=e.mul(T,Z),B=e.add(B,B),B=e.add(B,B),new l(I,p,B)}add(u){w(u);const{px:h,py:d,pz:m}=this,{px:E,py:v,pz:I}=u;let p=e.ZERO,B=e.ZERO,S=e.ZERO;const Z=n.a,T=e.mul(n.b,yt);let O=e.mul(h,E),z=e.mul(d,v),j=e.mul(m,I),Q=e.add(h,d),g=e.add(E,v);Q=e.mul(Q,g),g=e.add(O,z),Q=e.sub(Q,g),g=e.add(h,m);let b=e.add(E,I);return g=e.mul(g,b),b=e.add(O,j),g=e.sub(g,b),b=e.add(d,m),p=e.add(v,I),b=e.mul(b,p),p=e.add(z,j),b=e.sub(b,p),S=e.mul(Z,g),p=e.mul(T,j),S=e.add(p,S),p=e.sub(z,S),S=e.add(z,S),B=e.mul(p,S),z=e.add(O,O),z=e.add(z,O),j=e.mul(Z,j),g=e.mul(T,g),z=e.add(z,j),j=e.sub(O,j),j=e.mul(Z,j),g=e.add(g,j),O=e.mul(z,g),B=e.add(B,O),O=e.mul(b,g),p=e.mul(Q,p),p=e.sub(p,O),O=e.mul(Q,z),S=e.mul(b,S),S=e.add(S,O),new l(p,B,S)}subtract(u){return this.add(u.negate())}is0(){return this.equals(l.ZERO)}wNAF(u){return x.wNAFCached(this,f,u,h=>{const d=e.invertBatch(h.map(m=>m.pz));return h.map((m,E)=>m.toAffine(d[E])).map(l.fromAffine)})}multiplyUnsafe(u){const h=l.ZERO;if(u===G)return h;if(c(u),u===R)return this;const{endo:d}=n;if(!d)return x.unsafeLadder(this,u);let{k1neg:m,k1:E,k2neg:v,k2:I}=d.splitScalar(u),p=h,B=h,S=this;for(;E>G||I>G;)E&R&&(p=p.add(S)),I&R&&(B=B.add(S)),S=S.double(),E>>=R,I>>=R;return m&&(p=p.negate()),v&&(B=B.negate()),B=new l(e.mul(B.px,d.beta),B.py,B.pz),p.add(B)}multiply(u){c(u);let h=u,d,m;const{endo:E}=n;if(E){const{k1neg:v,k1:I,k2neg:p,k2:B}=E.splitScalar(h);let{p:S,f:Z}=this.wNAF(I),{p:T,f:O}=this.wNAF(B);S=x.constTimeNegate(v,S),T=x.constTimeNegate(p,T),T=new l(e.mul(T.px,E.beta),T.py,T.pz),d=S.add(T),m=Z.add(O)}else{const{p:v,f:I}=this.wNAF(h);d=v,m=I}return l.normalizeZ([d,m])[0]}multiplyAndAddUnsafe(u,h,d){const m=l.BASE,E=(I,p)=>p===G||p===R||!I.equals(m)?I.multiplyUnsafe(p):I.multiply(p),v=E(this,h).add(E(u,d));return v.is0()?void 0:v}toAffine(u){const{px:h,py:d,pz:m}=this,E=this.is0();u==null&&(u=E?e.ONE:e.inv(m));const v=e.mul(h,u),I=e.mul(d,u),p=e.mul(m,u);if(E)return{x:e.ZERO,y:e.ZERO};if(!e.eql(p,e.ONE))throw new Error("invZ was invalid");return{x:v,y:I}}isTorsionFree(){const{h:u,isTorsionFree:h}=n;if(u===R)return!0;if(h)return h(l,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:u,clearCofactor:h}=n;return u===R?this:h?h(l,this):this.multiplyUnsafe(n.h)}toRawBytes(u=!0){return this.assertValidity(),r(l,this,u)}toHex(u=!0){return dt(this.toRawBytes(u))}}l.BASE=new l(n.Gx,n.Gy,e.ONE),l.ZERO=new l(e.ZERO,e.ONE,e.ZERO);const A=n.nBitLength,x=ze(l,n.endo?Math.ceil(A/2):A);return{CURVE:n,ProjectivePoint:l,normPrivateKeyToScalar:i,weierstrassEquation:o,isWithinCurveOrder:a}}function De(t){const n=fe(t);return gt(n,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...n})}function Ge(t){const n=De(t),{Fp:e,n:r}=n,s=e.BYTES+1,o=2*e.BYTES+1;function a(g){return G<g&&g<e.ORDER}function c(g){return U(g,r)}function i(g){return Rt(g,r)}const{ProjectivePoint:f,normPrivateKeyToScalar:w,weierstrassEquation:l,isWithinCurveOrder:A}=Me({...n,toBytes(g,b,_){const N=b.toAffine(),q=e.toBytes(N.x),L=K;return _?L(Uint8Array.from([b.hasEvenY()?2:3]),q):L(Uint8Array.from([4]),q,e.toBytes(N.y))},fromBytes(g){const b=g.length,_=g[0],N=g.subarray(1);if(b===s&&(_===2||_===3)){const q=k(N);if(!a(q))throw new Error("Point is not on curve");const L=l(q);let V;try{V=e.sqrt(L)}catch(M){const F=M instanceof Error?": "+M.message:"";throw new Error("Point is not on curve"+F)}const P=(V&R)===R;return(_&1)===1!==P&&(V=e.neg(V)),{x:q,y:V}}else if(b===o&&_===4){const q=e.fromBytes(N.subarray(0,e.BYTES)),L=e.fromBytes(N.subarray(e.BYTES,2*e.BYTES));return{x:q,y:L}}else throw new Error(`Point of length ${b} was invalid. Expected ${s} compressed bytes or ${o} uncompressed bytes`)}}),x=g=>dt(rt(g,n.nByteLength));function y(g){const b=r>>R;return g>b}function u(g){return y(g)?c(-g):g}const h=(g,b,_)=>k(g.slice(b,_));class d{constructor(b,_,N){this.r=b,this.s=_,this.recovery=N,this.assertValidity()}static fromCompact(b){const _=n.nByteLength;return b=C("compactSignature",b,_*2),new d(h(b,0,_),h(b,_,2*_))}static fromDER(b){const{r:_,s:N}=ct.toSig(C("DER",b));return new d(_,N)}assertValidity(){if(!A(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!A(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(b){return new d(this.r,this.s,b)}recoverPublicKey(b){const{r:_,s:N,recovery:q}=this,L=B(C("msgHash",b));if(q==null||![0,1,2,3].includes(q))throw new Error("recovery id invalid");const V=q===2||q===3?_+n.n:_;if(V>=e.ORDER)throw new Error("recovery id 2 or 3 invalid");const P=q&1?"03":"02",J=f.fromHex(P+x(V)),M=i(V),F=c(-L*M),wt=c(N*M),tt=f.BASE.multiplyAndAddUnsafe(J,F,wt);if(!tt)throw new Error("point at infinify");return tt.assertValidity(),tt}hasHighS(){return y(this.s)}normalizeS(){return this.hasHighS()?new d(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return ht(this.toDERHex())}toDERHex(){return ct.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ht(this.toCompactHex())}toCompactHex(){return x(this.r)+x(this.s)}}const m={isValidPrivateKey(g){try{return w(g),!0}catch{return!1}},normPrivateKeyToScalar:w,randomPrivateKey:()=>{const g=ce(n.n);return Ve(n.randomBytes(g),n.n)},precompute(g=8,b=f.BASE){return b._setWindowSize(g),b.multiply(BigInt(3)),b}};function E(g,b=!0){return f.fromPrivateKey(g).toRawBytes(b)}function v(g){const b=ft(g),_=typeof g=="string",N=(b||_)&&g.length;return b?N===s||N===o:_?N===2*s||N===2*o:g instanceof f}function I(g,b,_=!0){if(v(g))throw new Error("first arg must be private key");if(!v(b))throw new Error("second arg must be public key");return f.fromHex(b).multiply(w(g)).toRawBytes(_)}const p=n.bits2int||function(g){const b=k(g),_=g.length*8-n.nBitLength;return _>0?b>>BigInt(_):b},B=n.bits2int_modN||function(g){return c(p(g))},S=Zt(n.nBitLength);function Z(g){if(typeof g!="bigint")throw new Error("bigint expected");if(!(G<=g&&g<S))throw new Error(`bigint expected < 2^${n.nBitLength}`);return rt(g,n.nByteLength)}function T(g,b,_=O){if(["recovered","canonical"].some(st=>st in _))throw new Error("sign() legacy options not supported");const{hash:N,randomBytes:q}=n;let{lowS:L,prehash:V,extraEntropy:P}=_;L==null&&(L=!0),g=C("msgHash",g),V&&(g=C("prehashed msgHash",N(g)));const J=B(g),M=w(b),F=[Z(M),Z(J)];if(P!=null&&P!==!1){const st=P===!0?q(e.BYTES):P;F.push(C("extraEntropy",st))}const wt=K(...F),tt=J;function _t(st){const at=p(st);if(!A(at))return;const zt=i(at),ut=f.BASE.multiply(at).toAffine(),D=c(ut.x);if(D===G)return;const lt=c(zt*c(tt+D*M));if(lt===G)return;let jt=(ut.x===D?0:2)|Number(ut.y&R),Kt=lt;return L&&y(lt)&&(Kt=u(lt),jt^=1),new d(D,Kt,jt)}return{seed:wt,k2sig:_t}}const O={lowS:n.lowS,prehash:!1},z={lowS:n.lowS,prehash:!1};function j(g,b,_=O){const{seed:N,k2sig:q}=T(g,b,_),L=n;return re(L.hash.outputLen,L.nByteLength,L.hmac)(N,q)}f.BASE._setWindowSize(8);function Q(g,b,_,N=z){var ut;const q=g;if(b=C("msgHash",b),_=C("publicKey",_),"strict"in N)throw new Error("options.strict was renamed to lowS");const{lowS:L,prehash:V}=N;let P,J;try{if(typeof q=="string"||ft(q))try{P=d.fromDER(q)}catch(D){if(!(D instanceof ct.Err))throw D;P=d.fromCompact(q)}else if(typeof q=="object"&&typeof q.r=="bigint"&&typeof q.s=="bigint"){const{r:D,s:lt}=q;P=new d(D,lt)}else throw new Error("PARSE");J=f.fromHex(_)}catch(D){if(D.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(L&&P.hasHighS())return!1;V&&(b=n.hash(b));const{r:M,s:F}=P,wt=B(b),tt=i(F),_t=c(wt*tt),st=c(M*tt),at=(ut=f.BASE.multiplyAndAddUnsafe(J,_t,st))==null?void 0:ut.toAffine();return at?c(at.x)===M:!1}return{CURVE:n,getPublicKey:E,getSharedSecret:I,sign:j,verify:Q,ProjectivePoint:f,Signature:d,utils:m}}function We(t,n){const e=t.ORDER;let r=G;for(let y=e-R;y%et===G;y/=et)r+=R;const s=r,o=et<<s-R-R,a=o*et,c=(e-R)/a,i=(c-R)/et,f=a-R,w=o,l=t.pow(n,c),A=t.pow(n,(c+R)/et);let x=(y,u)=>{let h=l,d=t.pow(u,f),m=t.sqr(d);m=t.mul(m,u);let E=t.mul(y,m);E=t.pow(E,i),E=t.mul(E,d),d=t.mul(E,u),m=t.mul(E,y);let v=t.mul(m,d);E=t.pow(v,w);let I=t.eql(E,t.ONE);d=t.mul(m,A),E=t.mul(v,h),m=t.cmov(d,m,I),v=t.cmov(E,v,I);for(let p=s;p>R;p--){let B=p-et;B=et<<B-R;let S=t.pow(v,B);const Z=t.eql(S,t.ONE);d=t.mul(m,h),h=t.mul(h,h),S=t.mul(v,h),m=t.cmov(d,m,Z),v=t.cmov(S,v,Z)}return{isValid:I,value:m}};if(t.ORDER%Xt===yt){const y=(t.ORDER-yt)/Xt,u=t.sqrt(t.neg(n));x=(h,d)=>{let m=t.sqr(d);const E=t.mul(h,d);m=t.mul(m,E);let v=t.pow(m,y);v=t.mul(v,E);const I=t.mul(v,u),p=t.mul(t.sqr(v),d),B=t.eql(p,h);let S=t.cmov(I,v,B);return{isValid:B,value:S}}}return x}function Xe(t,n){if(oe(t),!t.isValid(n.A)||!t.isValid(n.B)||!t.isValid(n.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const e=We(t,n.Z);if(!t.isOdd)throw new Error("Fp.isOdd is not implemented!");return r=>{let s,o,a,c,i,f,w,l;s=t.sqr(r),s=t.mul(s,n.Z),o=t.sqr(s),o=t.add(o,s),a=t.add(o,t.ONE),a=t.mul(a,n.B),c=t.cmov(n.Z,t.neg(o),!t.eql(o,t.ZERO)),c=t.mul(c,n.A),o=t.sqr(a),f=t.sqr(c),i=t.mul(f,n.A),o=t.add(o,i),o=t.mul(o,a),f=t.mul(f,c),i=t.mul(f,n.B),o=t.add(o,i),w=t.mul(s,a);const{isValid:A,value:x}=e(o,f);l=t.mul(s,r),l=t.mul(l,x),w=t.cmov(w,a,A),l=t.cmov(l,x,A);const y=t.isOdd(r)===t.isOdd(l);return l=t.cmov(t.neg(l),l,y),w=t.div(w,c),{x:w,y:l}}}const Qe=k;function nt(t,n){if(t<0||t>=1<<8*n)throw new Error(`bad I2OSP call: value=${t} length=${n}`);const e=Array.from({length:n}).fill(0);for(let r=n-1;r>=0;r--)e[r]=t&255,t>>>=8;return new Uint8Array(e)}function Je(t,n){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t[r]^n[r];return e}function kt(t){if(!Number.isSafeInteger(t))throw new Error("number expected")}function Fe(t,n,e,r){W(t),W(n),kt(e),n.length>255&&(n=r(K(vt("H2C-OVERSIZE-DST-"),n)));const{outputLen:s,blockLen:o}=r,a=Math.ceil(e/s);if(a>255)throw new Error("Invalid xmd length");const c=K(n,nt(n.length,1)),i=nt(0,o),f=nt(e,2),w=new Array(a),l=r(K(i,t,f,nt(0,1),c));w[0]=r(K(l,nt(1,1),c));for(let x=1;x<=a;x++){const y=[Je(l,w[x-1]),nt(x+1,1),c];w[x]=r(K(...y))}return K(...w).slice(0,e)}function tn(t,n,e,r,s){if(W(t),W(n),kt(e),n.length>255){const o=Math.ceil(2*r/8);n=s.create({dkLen:o}).update(vt("H2C-OVERSIZE-DST-")).update(n).digest()}if(e>65535||n.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return s.create({dkLen:e}).update(t).update(nt(e,2)).update(n).update(nt(n.length,1)).digest()}function Qt(t,n,e){gt(e,{DST:"stringOrUint8Array",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:r,k:s,m:o,hash:a,expand:c,DST:i}=e;W(t),kt(n);const f=typeof i=="string"?vt(i):i,w=r.toString(2).length,l=Math.ceil((w+s)/8),A=n*o*l;let x;if(c==="xmd")x=Fe(t,f,A,a);else if(c==="xof")x=tn(t,f,A,s,a);else if(c==="_internal_pass")x=t;else throw new Error('expand must be "xmd" or "xof"');const y=new Array(n);for(let u=0;u<n;u++){const h=new Array(o);for(let d=0;d<o;d++){const m=l*(d+u*o),E=x.subarray(m,m+l);h[d]=U(Qe(E),r)}y[u]=h}return y}function en(t,n){const e=n.map(r=>Array.from(r).reverse());return(r,s)=>{const[o,a,c,i]=e.map(f=>f.reduce((w,l)=>t.add(t.mul(w,r),l)));return r=t.div(o,a),s=t.mul(s,t.div(c,i)),{x:r,y:s}}}function nn(t,n,e){if(typeof n!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(r,s){const o=Qt(r,2,{...e,DST:e.DST,...s}),a=t.fromAffine(n(o[0])),c=t.fromAffine(n(o[1])),i=a.add(c).clearCofactor();return i.assertValidity(),i},encodeToCurve(r,s){const o=Qt(r,1,{...e,DST:e.encodeDST,...s}),a=t.fromAffine(n(o[0])).clearCofactor();return a.assertValidity(),a}}}class ae extends ye{constructor(n,e){super(),this.finished=!1,this.destroyed=!1,Ee(n);const r=pe(e);if(this.iHash=n.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,o=new Uint8Array(s);o.set(r.length>s?n.create().update(r).digest():r);for(let a=0;a<o.length;a++)o[a]^=54;this.iHash.update(o),this.oHash=n.create();for(let a=0;a<o.length;a++)o[a]^=106;this.oHash.update(o),o.fill(0)}update(n){return Yt(this),this.iHash.update(n),this}digestInto(n){Yt(this),Be(n,this.outputLen),this.finished=!0,this.iHash.digestInto(n),this.oHash.update(n),this.oHash.digestInto(n),this.destroy()}digest(){const n=new Uint8Array(this.oHash.outputLen);return this.digestInto(n),n}_cloneInto(n){n||(n=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:r,finished:s,destroyed:o,blockLen:a,outputLen:c}=this;return n=n,n.finished=s,n.destroyed=o,n.blockLen=a,n.outputLen=c,n.oHash=e._cloneInto(n.oHash),n.iHash=r._cloneInto(n.iHash),n}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const ue=(t,n,e)=>new ae(t,n).update(e).digest();ue.create=(t,n)=>new ae(t,n);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function rn(t){return{hash:t,hmac:(n,...e)=>ue(t,n,xe(...e)),randomBytes:te}}function on(t,n){const e=r=>Ge({...t,...rn(r)});return Object.freeze({...e(n),create:e})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const St=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Et=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),le=BigInt(1),pt=BigInt(2),Jt=(t,n)=>(t+n/pt)/n;function de(t){const n=St,e=BigInt(3),r=BigInt(6),s=BigInt(11),o=BigInt(22),a=BigInt(23),c=BigInt(44),i=BigInt(88),f=t*t*t%n,w=f*f*t%n,l=Y(w,e,n)*w%n,A=Y(l,e,n)*w%n,x=Y(A,pt,n)*f%n,y=Y(x,s,n)*x%n,u=Y(y,o,n)*y%n,h=Y(u,c,n)*u%n,d=Y(h,i,n)*h%n,m=Y(d,c,n)*u%n,E=Y(m,e,n)*w%n,v=Y(E,a,n)*y%n,I=Y(v,r,n)*f%n,p=Y(I,pt,n);if(!ot.eql(ot.sqr(p),t))throw new Error("Cannot find square root");return p}const ot=ke(St,void 0,void 0,{sqrt:de}),It=on({a:BigInt(0),b:BigInt(7),Fp:ot,n:Et,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const n=Et,e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-le*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),o=e,a=BigInt("0x100000000000000000000000000000000"),c=Jt(o*t,n),i=Jt(-r*t,n);let f=U(t-c*e-i*s,n),w=U(-c*r-i*o,n);const l=f>a,A=w>a;if(l&&(f=n-f),A&&(w=n-w),f>a||w>a)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:l,k1:f,k2neg:A,k2:w}}}},bt),At=BigInt(0),he=t=>typeof t=="bigint"&&At<t&&t<St,sn=t=>typeof t=="bigint"&&At<t&&t<Et,Ft={};function Bt(t,...n){let e=Ft[t];if(e===void 0){const r=bt(Uint8Array.from(t,s=>s.charCodeAt(0)));e=K(r,r),Ft[t]=e}return bt(K(e,...n))}const Vt=t=>t.toRawBytes(!0).slice(1),$t=t=>rt(t,32),Nt=t=>U(t,St),mt=t=>U(t,Et),Pt=It.ProjectivePoint,cn=(t,n,e)=>Pt.BASE.multiplyAndAddUnsafe(t,n,e);function Lt(t){let n=It.utils.normPrivateKeyToScalar(t),e=Pt.fromPrivateKey(n);return{scalar:e.hasEvenY()?n:mt(-n),bytes:Vt(e)}}function ge(t){if(!he(t))throw new Error("bad x: need 0 < x < p");const n=Nt(t*t),e=Nt(n*t+BigInt(7));let r=de(e);r%pt!==At&&(r=Nt(-r));const s=new Pt(t,r,le);return s.assertValidity(),s}function we(...t){return mt(k(Bt("BIP0340/challenge",...t)))}function fn(t){return Lt(t).bytes}function an(t,n,e=te(32)){const r=C("message",t),{bytes:s,scalar:o}=Lt(n),a=C("auxRand",e,32),c=$t(o^k(Bt("BIP0340/aux",a))),i=Bt("BIP0340/nonce",c,s,r),f=mt(k(i));if(f===At)throw new Error("sign failed: k is zero");const{bytes:w,scalar:l}=Lt(f),A=we(w,s,r),x=new Uint8Array(64);if(x.set(w,0),x.set($t(mt(l+A*o)),32),!me(x,r,s))throw new Error("sign: Invalid signature produced");return x}function me(t,n,e){const r=C("signature",t,64),s=C("message",n),o=C("publicKey",e,32);try{const a=ge(k(o)),c=k(r.subarray(0,32));if(!he(c))return!1;const i=k(r.subarray(32,64));if(!sn(i))return!1;const f=we($t(c),Vt(a),s),w=cn(a,i,mt(-f));return!(!w||!w.hasEvenY()||w.toAffine().x!==c)}catch{return!1}}const gn={getPublicKey:fn,sign:an,verify:me,utils:{randomPrivateKey:It.utils.randomPrivateKey,lift_x:ge,pointToBytes:Vt,numberToBytesBE:rt,bytesToNumberBE:k,taggedHash:Bt,mod:U}},un=en(ot,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(t=>t.map(n=>BigInt(n)))),ln=Xe(ot,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:ot.create(BigInt("-11"))}),be=nn(It.ProjectivePoint,t=>{const{x:n,y:e}=ln(ot.create(t[0]));return un(n,e)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:ot.ORDER,m:1,k:128,expand:"xmd",hash:bt}),wn=be.hashToCurve,mn=be.encodeToCurve;export{mn as encodeToCurve,wn as hashToCurve,gn as schnorr,It as secp256k1};
