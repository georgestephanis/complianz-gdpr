"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[3086,5671,849],{85671:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(30270),s=l(12902),n=l(48399);const r=(0,a.Ue)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,l)=>{e((0,s.ZP)((e=>{if("block_script"===l){let l=e.blockedScripts;if(t.urls){for(const[e,a]of Object.entries(t.urls)){if(!a||0===a.length)continue;let e=!1;for(const[t,s]of Object.entries(l))a===t&&(e=!0);e||(l[a]=a)}e.blockedScripts=l}}const a=e.scripts[l].findIndex((e=>e.id===t.id));-1!==a&&(e.scripts[l][a]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:l,plugins:a,scripts:s,placeholders:n,blocked_scripts:r}=await c();let i=s;i.block_script.forEach(((e,t)=>{e.id=t})),i.add_script.forEach(((e,t)=>{e.id=t})),i.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:l,plugins:a,scripts:i,fetching:!1,placeholders:n,blockedScripts:r})))},addScript:l=>{e({fetching:!0}),e((0,s.ZP)((e=>{e.scripts[l].push({name:"general",id:e.scripts[l].length,enable:!0})})));let a=t().scripts;return n.doAction("update_scripts",{scripts:a}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(l,a)=>{e({fetching:!0}),e((0,s.ZP)((e=>{const t=e.scripts[a].findIndex((e=>e.id===l.id));-1!==t&&(e.scripts[a][t]=l)})));let r=t().scripts;return n.doAction("update_scripts",{scripts:r}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(l,a)=>{e({fetching:!0}),e((0,s.ZP)((e=>{const t=e.scripts[a].findIndex((e=>e.id===l.id));-1!==t&&e.scripts[a].splice(t,1)})));let r=t().scripts;return n.doAction("update_scripts",{scripts:r}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,l)=>(e((0,s.ZP)((e=>{const a=e.plugins.findIndex((e=>e.id===t));-1!==a&&(e.plugins[a].enabled=l)}))),n.doAction("update_plugin_status",{plugin:t,enabled:l}).then((e=>e)).catch((e=>{console.error(e)}))),updatePlaceholderStatus:async(t,l,a)=>(a&&e((0,s.ZP)((e=>{const a=e.plugins.findIndex((e=>e.id===t));-1!==a&&(e.plugins[a].placeholder=l?"enabled":"disabled")}))),n.doAction("update_placeholder_status",{id:t,enabled:l}).then((e=>e)).catch((e=>{console.error(e)})))}))),c=()=>n.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},73086:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var a=l(69307),s=l(85671),n=l(65736),r=l(56293),c=l(60849),i=l(55609),o=l(82485);const d=(0,l(99196).memo)((()=>{const{updatePlaceholderStatus:e,integrationsLoaded:t,services:d,fetchIntegrationsData:p}=(0,s.default)(),[u,h]=(0,a.useState)([]),[g,m]=(0,a.useState)(""),[_,b]=(0,a.useState)(!1),[f,v]=(0,a.useState)(""),[y,E]=(0,a.useState)(""),{updateField:z,getField:k,getFieldValue:S,saveFields:C,setChangedField:w,addHelpNotice:F}=(0,r.default)(),{selectedSubMenuItem:A}=(0,o.default)(),[P,x]=(0,a.useState)(null);(0,a.useEffect)((()=>{l.e(44).then(l.bind(l,90044)).then((e=>{let{default:t}=e;x((()=>t))}))}),[]),(0,a.useEffect)((()=>{t||p(),t&&(1==S("safe_mode")?(v((0,n.__)("Safe Mode enabled. To manage integrations, disable Safe Mode in the general settings.","complianz-gdpr")),b(!0)):"yes"!==S("uses_thirdparty_services")&&"yes"!==S("uses_social_media")&&"yes"!==S("uses_ad_cookies")&&(v((0,n.__)("Third-party services and social media are marked as not being used on your website in the wizard.","complianz-gdpr")),E("#wizard/services"),b(!0)))}),[t]),(0,a.useEffect)((()=>{I()}),[d]);const I=()=>{let e=[...d];e.forEach((function(t,l){let a={...t},s=k(t.source);if("multicheckbox"===s.type){let e=s.value;Array.isArray(e)||(e=[]),a.enabled=e.includes(t.id)}else a.enabled="yes"===s.value;e[l]=a})),h(e);let t="yes"===S("block_recaptcha_service"),l=d.filter((e=>"google-recaptcha"===e.id))[0];t&&l&&l.enabled&&F("integrations-services","warning",(0,n.__)("reCaptcha is connected and will be blocked before consent. To change your settings, disable reCaptcha in the list.","complianz-gdpr"),(0,n.__)("reCaptcha blocking enabled","complianz-gdpr"),"#wizard/services")};(0,a.useEffect)((()=>{if(0===u.length)return;let e="yes";0===u.filter((e=>!0===e.enabled&&"thirdparty_services_on_site"===e.source)).length&&(e="no"),S("uses_thirdparty_services")!==e&&(z("uses_thirdparty_services",e),w("uses_thirdparty_services",e));let t="yes";0===u.filter((e=>!0===e.enabled&&"thirdparty_services_on_site"===e.source)).length&&(t="no"),S("uses_social_media")!==t&&(z("uses_social_media",t),w("uses_social_media",t))}),[u]);const N=[{name:(0,n.__)("Service","complianz-gdpr"),selector:e=>e.label,sortable:!0},{name:(0,n.__)("Placeholder","complianz-gdpr"),selector:e=>e.placeholderControl,sortable:!0,sortFunction:(e,t)=>{const l=e.placeholder,a=t.placeholder;return l>a?1:a>l?-1:0}},{name:(0,n.__)("Status","complianz-gdpr"),selector:e=>e.enabledControl,sortable:!0,sortFunction:(e,t)=>{const l=e.enabled,a=t.enabled;return l>a?1:a>l?-1:0}}];let T=u.filter((e=>e.label.toLowerCase().includes(g.toLowerCase())));return T.sort(((e,t)=>e.label<t.label?-1:e.label>t.label?1:0)),T.forEach((t=>{let l=S(t.source);Array.isArray(l)?t.enabled=l.includes(t.id):t.enabled="yes"===l,t.enabledControl=(0,a.createElement)(i.ToggleControl,{checked:t.enabled,onChange:e=>(async(e,t)=>{let l,a=k(e.source);"multicheckbox"===a.type?(l=[...a.value],Array.isArray(l)||(l=[]),t?l.push(e.id):l=l.filter((t=>t!==e.id))):l=t?"yes":"no",z(e.source,l),w(e.source,l),C(A,!1).then((()=>{p().then((()=>{I()}))}))})(t,e)}),t.placeholderControl=(0,a.createElement)(i.ToggleControl,{label:"none"===t.placeholder?(0,n.__)("N/A","complianz-gdpr"):(0,n.__)("Placeholder","complianz-gdpr"),disabled:"none"===t.placeholder,checked:"enabled"===t.placeholder,onChange:l=>(async(t,l)=>{let a=[...u],s=a.findIndex((e=>e.id===t.id));a[s].placeholder=l?"enabled":"disabled",h(a),await e(t.id,l)})(t,l)})})),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("p",null,(0,n.__)("Enabled services will be blocked on the front-end of your website until the user has given consent (opt-in), or after the user has revoked consent (opt-out). When possible a placeholder is activated. You can also disable or configure the placeholder to your liking.","complianz-gdpr"),(0,c.default)("https://complianz.io/blocking-recaptcha-manually/")),(0,a.createElement)("div",{className:"cmplz-table-header"},(0,a.createElement)("div",{className:"cmplz-table-header-controls"},(0,a.createElement)("input",{type:"text",placeholder:(0,n.__)("Search","complianz-gdpr"),value:g,onChange:e=>m(e.target.value)}))),(_||0===T.length)&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"cmplz-settings-overlay"},(0,a.createElement)("div",{className:"cmplz-settings-overlay-message"},f,y&&(0,a.createElement)(a.Fragment,null," ",(0,a.createElement)("a",{href:y},(0,n.__)("View services.","complianz-gdpr")))))),0===T.length&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"cmplz-integrations-placeholder"},(0,a.createElement)("div",null),(0,a.createElement)("div",null),(0,a.createElement)("div",null),(0,a.createElement)("div",null),(0,a.createElement)("div",null),(0,a.createElement)("div",null))),!_&&T.length>0&&P&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(P,{columns:N,data:T,dense:!0,pagination:!0,paginationPerPage:5,noDataComponent:(0,a.createElement)("div",{className:"cmplz-no-documents"},(0,n.__)("No services","really-simple-ssl")),persistTableHead:!0,theme:"really-simple-plugins",customStyles:{headCells:{style:{paddingLeft:"0",paddingRight:"0"}},cells:{style:{paddingLeft:"0",paddingRight:"0"}}}})))}))},60849:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(69307),s=l(65736),n=l(99950);const r=e=>(0,a.createElement)(a.Fragment,null," ",(0,a.createElement)(n.default,{url:e,text:(0,s.__)("For more information, please read this %sarticle%s.","complianz-gdpr")})," ")}}]);