"use strict";(self.webpackChunkmy_web=self.webpackChunkmy_web||[]).push([[410],{4855:(t,s,e)=>{e.d(s,{DQ:()=>i,FP:()=>l,Fy:()=>o,RT:()=>d,jo:()=>r,kJ:()=>c,nO:()=>a,qi:()=>n});const c=()=>new Promise(((t,s)=>{fetch("".concat("/Electronic-business-platform-Demo","/api/productData.json")).then((t=>t.json())).then((s=>{t(s)})).catch((t=>{console.log("Error fetching productData:",t),s(t)}))})),i=()=>new Promise(((t,s)=>{fetch("".concat("/Electronic-business-platform-Demo","/api/productText.json")).then((t=>t.json())).then((s=>{t(s)})).catch((t=>{console.log("Error fetching productText:",t),s(t)}))})),a=()=>new Promise(((t,s)=>{fetch("".concat("/Electronic-business-platform-Demo","/api/allProductData.json")).then((t=>t.json())).then((s=>{t(s.mac)})).catch((t=>{console.log("Error fetching macProductData:",t),s(t)}))})),n=()=>new Promise(((t,s)=>{fetch("".concat("/Electronic-business-platform-Demo","/api/allProductData.json")).then((t=>t.json())).then((s=>{t(s.iPad)})).catch((t=>{console.log("Error fetching macProductData:",t),s(t)}))})),l=()=>new Promise(((t,s)=>{fetch("".concat("/Electronic-business-platform-Demo","/api/allProductData.json")).then((t=>t.json())).then((s=>{t(s.iPhone)})).catch((t=>{console.log("Error fetching macProductData:",t),s(t)}))})),r=()=>new Promise(((t,s)=>{fetch("".concat("/Electronic-business-platform-Demo","/api/allProductData.json")).then((t=>t.json())).then((s=>{t(s.Watch)})).catch((t=>{console.log("Error fetching macProductData:",t),s(t)}))})),o=()=>new Promise(((t,s)=>{fetch("".concat("/Electronic-business-platform-Demo","/api/allProductData.json")).then((t=>t.json())).then((s=>{t(s.Airpods)})).catch((t=>{console.log("Error fetching macProductData:",t),s(t)}))})),d=()=>new Promise(((t,s)=>{fetch("".concat("/Electronic-business-platform-Demo","/api/allProductData.json")).then((t=>t.json())).then((s=>{t(s.TvHome)})).catch((t=>{console.log("Error fetching macProductData:",t),s(t)}))}))},6294:(t,s,e)=>{e.d(s,{A:()=>i});var c=e(5043);const i=t=>{const[s,e]=(0,c.useState)(null),[i,a]=(0,c.useState)(!0),[n,l]=(0,c.useState)(null);return(0,c.useEffect)((()=>{(async()=>{try{const s=await t();e(s)}catch(n){l(n)}finally{a(!1)}})()}),[t]),{data:s,loading:i,error:n}}},8747:(t,s,e)=>{e.r(s),e.d(s,{default:()=>b});var c=e(9919),i=e(4855),a=e(5099),n=e(6294),l=e(6065),r=e(2823),o=e(6204),d=e(9739),m=e(7771),x=e(5902),j=e(3170),h=e(7459),p=e(9805),u=e(3975),v=e(579);const f=()=>{const{data:t,loading:s,error:e}=(0,n.A)(i.FP),c=a.TQ.ex[0],f=a.TQ.ex.slice(1),N=a.Qj[0].product_information[0];return s?(0,v.jsx)("div",{}):e?(0,v.jsxs)("div",{children:["Error: ",e.message]}):(0,v.jsxs)("div",{className:"iphone",children:[(0,v.jsx)("div",{className:"Product-items",children:t&&t.map((t=>(0,v.jsx)(r.A,{text:t.text,PS:t.postscript,alt:t.text,src:t.src},t.id)))}),a.Qj&&a.Qj.map((t=>t.ads_text&&t.ads_text.map(((t,s)=>(0,v.jsx)(d.A,{text:t.text,linkText:t.link},s))))),(0,v.jsx)("div",{className:"section section1",children:a.Qj&&a.Qj.map((t=>t.header.map(((t,s)=>(0,v.jsx)(o.A,{title:t.title,subtitle:t.subtitle},s)))))}),(0,v.jsxs)("div",{className:"section section2",children:[a.Qj&&a.Qj.map((t=>t.section_info&&t.section_info.map(((t,s)=>(0,v.jsx)(o.A,{title:t.title},s))))),(0,v.jsx)(m.A,{children:(0,v.jsx)("div",{className:"section-items",children:a.Qj&&a.Qj.map((t=>t.section_info.map((t=>t.info_item.map(((t,s)=>(0,v.jsxs)(h.nB,{src:t.src,children:[(0,v.jsx)(h.tL,{title:t.title,subtitle:t.subtitle}),(0,v.jsx)(x.A,{})]},s)))))))})})]}),(0,v.jsxs)("div",{className:"section section3",children:[a.Qj&&a.Qj.map((t=>t.section_3&&t.section_3.map(((t,s)=>(0,v.jsx)(o.A,{title:t.title,subtitle:t.subtitle},s))))),(0,v.jsx)(m.A,{children:(0,v.jsx)("div",{className:"product-items",children:a.Qj&&a.Qj.map((t=>t.section_3&&t.section_3.map((t=>t.product_info_item&&t.product_info_item.map(((t,s)=>(0,v.jsx)(p.A,{src:t.src,alt:t.alt,color:t.color,postscript:t.postscript,title:t.title,text:t.text,price:t.price,btn:t.btn,productInfoItem:t.productInfoItem},s)))))))})})]}),(0,v.jsxs)("div",{className:"section section4",children:[a.Qj&&a.Qj.map((t=>t.section_4&&t.section_4.map(((t,s)=>(0,v.jsx)(o.A,{title:t.title},s))))),a.Qj&&a.Qj.map((t=>t.section_4&&t.section_4.map((t=>t.info&&t.info.map((t=>(0,v.jsx)(h.nB,{children:(0,v.jsxs)("div",{className:"text-info",children:[(0,v.jsx)(h.tL,{text:t.text}),(0,v.jsx)(j.Cl,{props:t.link})]})})))))))]}),(0,v.jsxs)("div",{className:"section section5",children:[a.Qj&&a.Qj.map((t=>t.section_5&&t.section_5.map(((t,s)=>(0,v.jsx)(o.A,{title:t.title,subtitle:t.subtitle},s))))),(0,v.jsx)("div",{className:"product-info-item",children:a.Qj&&a.Qj.map((t=>t.section_5&&t.section_5.map((t=>t.info_item&&t.info_item.map(((t,s)=>(0,v.jsx)(h.pz,{src:t.src,alt:t.alt,children:(0,v.jsx)(h.tL,{title:t.title,text:t.text,subtitle:t.link})},s)))))))})]}),(0,v.jsxs)("div",{className:"section section6",children:[a.Qj&&a.Qj.map((t=>t.product_information.map(((t,s)=>(0,v.jsx)(o.A,{title:t.title},s))))),(0,v.jsx)(u.s,{textData:N.list_item})]}),(0,v.jsxs)("div",{className:"section last",children:[(0,v.jsx)("h1",{className:"title",children:"iPhone"}),(0,v.jsxs)("div",{className:"section-last-info",children:[(0,v.jsx)(l.W,{title:c.title,items:c.listItem,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("br",{}),(0,v.jsx)("h4",{children:"\u6bd4\u8f03 iPhone"}),(0,v.jsx)("h4",{children:"\u5f9e Android \u8f49\u7528"})]})}),f&&f.map(((t,s)=>(0,v.jsx)(l.k,{title:t.title,items:t.listItem},s)))]})]})]})};var N=e(7542);const b=()=>{const t=N.K8.map((t=>t.iphone));return(0,v.jsx)(c.A,{logoTitle:t,children:(0,v.jsx)(f,{})})}},9272:(t,s,e)=>{e.d(s,{U_:()=>i,HK:()=>l,Ht:()=>a,hU:()=>n});var c=e(579);const i=t=>{let{className:s,style:e,onClick:i}=t;return(0,c.jsx)("div",{className:s,onClick:i,style:{...e,display:"block"},children:(0,c.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo","/images/arrow.png"),alt:"button"})})},a=t=>{let{className:s,style:e,onClick:i}=t;return(0,c.jsx)("div",{className:s,style:{...e,display:"block"},onClick:i,children:(0,c.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo","/images/arrow.png"),alt:"button"})})},n=t=>{let{className:s,style:e,onClick:i}=t;return(0,c.jsx)("div",{className:s,style:{...e,display:"block"},onClick:i,children:(0,c.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo","/images/arrow.png"),alt:"button"})})},l=t=>{let{onClick:s,isOpen:e}=t;return(0,c.jsxs)("div",{className:"arrow-icon ".concat(e?"open":""),onClick:s,children:[(0,c.jsx)("span",{className:"left-bar"}),(0,c.jsx)("span",{className:"right-bar"})]})}},3170:(t,s,e)=>{e.d(s,{Cl:()=>i,vm:()=>a,os:()=>n});var c=e(579);const i=t=>{let{props:s}=t;return(0,c.jsx)("div",{className:"button-item",children:s.map((t=>(0,c.jsx)("h4",{className:"btn",children:t})))})},a=t=>{let{text:s}=t;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("h4",{className:"click-button",children:s})})},n=t=>{let{text:s}=t;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("h4",{className:"clicked-button",children:s})})}},5902:(t,s,e)=>{e.d(s,{A:()=>i});var c=e(579);const i=()=>(0,c.jsx)("div",{className:"link_btn",children:(0,c.jsx)("span",{children:"+"})})},3975:(t,s,e)=>{e.d(s,{s:()=>n});var c=e(5043),i=e(9272),a=e(579);const n=t=>{let{textData:s}=t;const[e,n]=(0,c.useState)("item1");return(0,a.jsx)("div",{className:"product-information",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"info-text",children:s&&s.map(((t,s)=>{const c=e==="item".concat(s+1),l="item item".concat(s+1," ").concat(c?"open":"");return(0,a.jsxs)("div",{className:l,onClick:()=>(t=>{n("item".concat(t+1))})(s),children:[(0,a.jsxs)("div",{className:"title title".concat(s+1),children:[t.title,(0,a.jsx)(i.HK,{isOpen:c},s)]}),(0,a.jsx)("div",{className:"text",children:t.text})]},s)}))}),(0,a.jsx)("div",{className:"larger-image",children:s&&s.map(((t,s)=>{const c="background-image ".concat(e==="item".concat(s+1)?"active":"");return(0,a.jsx)("div",{className:c},s)}))})]})})}},7459:(t,s,e)=>{e.d(s,{tL:()=>n,BK:()=>l,pz:()=>a,nB:()=>i});e(6732);var c=e(579);const i=t=>{let{children:s,src:e,alt:i}=t;return(0,c.jsxs)("div",{className:"product-card wrapper",children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:e,alt:i})}),s]})},a=t=>{let{children:s,src:e,alt:i}=t;return(0,c.jsxs)("div",{className:"product-card center",children:[(0,c.jsx)("div",{className:"card-image",children:e&&(0,c.jsx)("img",{src:e,alt:i})}),s]})},n=t=>{let{title:s,text:e,subtitle:i,ps:a,children:n,src:l,alt:r}=t;return(0,c.jsxs)("div",{className:"card-info",children:[l&&(0,c.jsx)("div",{className:"images-box",children:(0,c.jsx)("img",{src:l,alt:r})}),(0,c.jsx)("h6",{className:"postscript",children:a}),(0,c.jsx)("h5",{className:"title",children:s}),(0,c.jsx)("h6",{className:"subtitle",children:i}),(0,c.jsx)("h4",{className:"text",children:e}),n]})},l=t=>{let{color:s}=t;return(0,c.jsx)("div",{id:s,className:"box"})}},9739:(t,s,e)=>{e.d(s,{A:()=>i});e(2101);var c=e(579);const i=t=>{let{text:s,linkText:e}=t;return(0,c.jsx)("div",{className:"wrapper-layout",children:(0,c.jsx)("div",{className:"product-info-item",children:(0,c.jsxs)("h3",{children:[s,(0,c.jsx)("a",{href:"#!",children:e})]})})})}},9805:(t,s,e)=>{e.d(s,{A:()=>l});var c=e(7459),i=e(3170),a=e(579);const n=t=>{let{src:s,alt:e,text:c,src_2:i,alt_2:n}=t;return(0,a.jsx)(a.Fragment,{children:s?(0,a.jsxs)("div",{className:"card-images",children:[(0,a.jsxs)("div",{className:"img-box",children:[(0,a.jsx)("img",{src:s,alt:e}),i&&(0,a.jsx)("img",{src:i,alt:n})]}),(0,a.jsx)("p",{children:c})]}):(0,a.jsx)("div",{className:"card-images",style:{justifyContent:"center"},children:(0,a.jsx)("p",{children:c})})})},l=t=>{let{src:s,alt:e,color:l,postscript:r,title:o,text:d,price:m,btn:x,productInfoItem:j,cardTitle:h,cardText:p,subtitle:u}=t;return(0,a.jsxs)("div",{className:"information-card",children:[(0,a.jsxs)(c.pz,{src:s,alt:e,children:[l&&(0,a.jsx)("div",{className:"color-item",children:l&&l.map(((t,s)=>(0,a.jsx)(c.BK,{color:t},s)))}),r||o||d||m?(0,a.jsx)(c.tL,{ps:r,title:o,text:d,subtitle:m,children:(0,a.jsx)("h3",{children:u})}):null,(0,a.jsx)(i.Cl,{props:x})]}),(0,a.jsx)("hr",{}),h||p?(0,a.jsx)(c.tL,{title:h,text:p}):null,(0,a.jsx)("div",{className:"info-item",children:j&&j.map(((t,s)=>(0,a.jsx)(n,{src:t.src,src_2:t.src_2,alt:t.alt,text:t.text},s)))})]})}},2823:(t,s,e)=>{e.d(s,{A:()=>i});e(2101);var c=e(579);const i=t=>{let{src:s,alt:e,text:i,PS:a}=t;return(0,c.jsxs)("div",{className:"col-10",children:[(0,c.jsx)("div",{className:"item-image",children:(0,c.jsx)("img",{src:s,alt:e})}),(0,c.jsxs)("div",{className:"item-info",children:[(0,c.jsx)("h3",{className:"text",children:i}),(0,c.jsx)("h4",{className:"ps",children:a})]})]})}},7771:(t,s,e)=>{e.d(s,{A:()=>n});var c=e(5043),i=e(9272),a=e(579);const n=c.forwardRef((t=>{let{children:s}=t;const[e,n]=(0,c.useState)(0),l=(0,c.useRef)(),r=t=>{const s=e+t;n(s),l.current.scrollLeft=s};return(0,a.jsxs)("div",{className:"section",children:[(0,a.jsx)("div",{className:"scrollbar",ref:l,children:s}),(0,a.jsxs)("div",{className:"action-btns",children:[(0,a.jsx)("button",{className:"left-button",onClick:()=>r(-400),children:(0,a.jsx)(i.U_,{})}),(0,a.jsx)("button",{className:"right-button",onClick:()=>r(400),children:(0,a.jsx)(i.U_,{})})]})]})}))},6204:(t,s,e)=>{e.d(s,{A:()=>i});var c=e(579);const i=t=>{let{title:s,subtitle:e}=t;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{children:s}),(0,c.jsx)("h3",{children:e})]}),(0,c.jsx)("div",{className:"video"})]})}},6732:()=>{},2101:()=>{}}]);
//# sourceMappingURL=410.ef5691f3.chunk.js.map