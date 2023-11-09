import{p as J,d as M,s as X,D as H,a as Z,S as F,b as m,c as I}from"./styles-bbc3fe3b.7b7a1324.js";import{G as tt}from"./layout.4a5c24ba.js";import{N as E,I as g,M as x,a4 as et,O as st,Q as w}from"./state.044ebaf0.js";import{r as ot}from"./index-67a42d7d.a14d1bdb.js";const h="rect",C="rectWithTitle",nt="start",ct="end",it="divider",rt="roundedWithTitle",lt="note",at="noteGroup",p="statediagram",dt="state",Et=`${p}-${dt}`,U="transition",St="note",Tt="note-edge",_t=`${U} ${Tt}`,pt=`${p}-${St}`,ut="cluster",Dt=`${p}-${ut}`,bt="cluster-alt",ft=`${p}-${bt}`,V="parent",Y="note",At="state",N="----",ht=`${N}${Y}`,B=`${N}${V}`,W="fill:none",z="fill: #333",q="c",K="text",Q="normal";let y={},d=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){return n.db.extract(n.db.getRootDocV2()),n.db.getClasses()};function $t(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",c=N){const i=e!==null&&e.length>0?`${c}${e}`:"";return`${At}-${t}${i}-${n}`}const A=(t,n,e,c,i,r)=>{const s=e.id,u=$t(c[s]);if(s!=="root"){let T=h;e.start===!0&&(T=nt),e.start===!1&&(T=ct),e.type!==H&&(T=e.type),y[s]||(y[s]={id:s,shape:T,description:w.sanitizeText(s,g()),classes:`${u} ${Et}`});const o=y[s];e.description&&(Array.isArray(o.description)?(o.shape=C,o.description.push(e.description)):o.description.length>0?(o.shape=C,o.description===s?o.description=[e.description]:o.description=[o.description,e.description]):(o.shape=h,o.description=e.description),o.description=w.sanitizeTextOrArray(o.description,g())),o.description.length===1&&o.shape===C&&(o.shape=h),!o.type&&e.doc&&(E.info("Setting cluster for ",s,G(e)),o.type="group",o.dir=G(e),o.shape=e.type===Z?it:rt,o.classes=o.classes+" "+Dt+" "+(r?ft:""));const _={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:s,dir:o.dir,domId:R(s,d),type:o.type,padding:15};if(_.centerLabel=!0,e.note){const l={labelStyle:"",shape:lt,labelText:e.note.text,classes:pt,style:"",id:s+ht+"-"+d,domId:R(s,d,Y),type:o.type,padding:15},a={labelStyle:"",shape:at,labelText:e.note.text,classes:o.classes,style:"",id:s+B,domId:R(s,d,V),type:"group",padding:0};d++;const D=s+B;t.setNode(D,a),t.setNode(l.id,l),t.setNode(s,_),t.setParent(s,D),t.setParent(l.id,D);let S=s,b=l.id;e.note.position==="left of"&&(S=l.id,b=s),t.setEdge(S,b,{arrowhead:"none",arrowType:"",style:W,labelStyle:"",classes:_t,arrowheadStyle:z,labelpos:q,labelType:K,thickness:Q})}else t.setNode(s,_)}n&&n.id!=="root"&&(E.trace("Setting node ",s," to be child of its parent ",n.id),t.setParent(s,n.id)),e.doc&&(E.trace("Adding nodes children "),xt(t,e,e.doc,c,i,!r))},xt=(t,n,e,c,i,r)=>{E.trace("items",e),e.forEach(s=>{switch(s.stmt){case m:A(t,n,s,c,i,r);break;case H:A(t,n,s,c,i,r);break;case F:{A(t,n,s.state1,c,i,r),A(t,n,s.state2,c,i,r);const u={id:"edge"+d,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:W,labelStyle:"",label:w.sanitizeText(s.description,g()),arrowheadStyle:z,labelpos:q,labelType:K,thickness:Q,classes:U};t.setEdge(s.state1.id,s.state2.id,u,d),d++}break}})},G=(t,n=I)=>{let e=n;if(t.doc)for(let c=0;c<t.doc.length;c++){const i=t.doc[c];i.stmt==="dir"&&(e=i.value)}return e},Ct=async function(t,n,e,c){E.info("Drawing state diagram (v2)",n),y={},c.db.getDirection();const{securityLevel:i,state:r}=g(),s=r.nodeSpacing||50,u=r.rankSpacing||50;E.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),E.info(c.db.getRootDocV2());const T=c.db.getStates(),o=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:G(c.db.getRootDocV2()),nodesep:s,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(o,void 0,c.db.getRootDocV2(),T,c.db,!0);let _;i==="sandbox"&&(_=x("#i"+n));const l=i==="sandbox"?x(_.nodes()[0].contentDocument.body):x("body"),a=l.select(`[id="${n}"]`),D=l.select("#"+n+" g");await ot(D,o,["barb"],p,n);const S=8;et.insertTitle(a,"statediagramTitleText",r.titleTopMargin,c.db.getDiagramTitle());const b=a.node().getBBox(),L=b.width+S*2,P=b.height+S*2;a.attr("class",p);const O=a.node().getBBox();st(a,P,L,r.useMaxWidth);const k=`${O.x-S} ${O.y-S} ${L} ${P}`;E.debug(`viewBox ${k}`),a.attr("viewBox",k);const j=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const $ of j){const v=$.getBBox(),f=document.createElementNS("http://www.w3.org/2000/svg",h);f.setAttribute("rx",0),f.setAttribute("ry",0),f.setAttribute("width",v.width),f.setAttribute("height",v.height),$.insertBefore(f,$.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Pt={parser:J,db:M,renderer:Rt,styles:X,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,M.clear()}};export{Pt as diagram};
