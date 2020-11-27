(this["webpackJsonpshopify-schema-generator"]=this["webpackJsonpshopify-schema-generator"]||[]).push([[0],{65:function(e,t,n){e.exports=n(81)},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),l=(n(70),n(71),n(72),n(16));var o=Object(l.b)(null,(function(e){return{addField:function(t){return e({type:"ADD_FIELD",fieldType:t})},updateSchema:function(){return e({type:"UPDATE_SCHEMA"})}}}))((function(e){return r.a.createElement("div",{className:"field-item-wrap"},r.a.createElement("div",{className:"field-item shadow",onClick:function(){e.addField(e.field),e.updateSchema()}},e.field))})),s=n(15),u=n(37),d=n(32),f=n(6),m=n(19),h=n(9),p=n(8),b=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.TYPE_TEXT,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(f.a)(this,e),this.name=t,this.type=n,this.required=a,this.value=r}return Object(m.a)(e,[{key:"setValue",value:function(t){return this.value=this.type===e.TYPE_NUMBER?Number(t):t,!0}}]),e}();b.TYPE_TEXT="text",b.TYPE_TEXTAREA="textarea",b.TYPE_NUMBER="number";var v=function(){function e(){Object(f.a)(this,e),this.settings=[]}return Object(m.a)(e,[{key:"getSettingsForJSON",value:function(){var e,t={type:this.type},n=Object(u.a)(this.settings);try{for(n.s();!(e=n.n()).done;){var a=e.value;""!==a.value&&(t[a.name]=a.value),a.required&&""===a.value&&(t[a.name]="FIELD IS REQUIRED")}}catch(r){n.e(r)}finally{n.f()}return t}}]),e}(),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this)).type=e,a.settings=[new b("id","text",!0,"".concat(e,"-id")),new b("label","text",!0,"label"),new b("info","text")],a}return n}(v),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="text",e.settings=[new b("id","text",!0,"text-id"),new b("label","text",!0,"label"),new b("default","text"),new b("info","text"),new b("placeholder","text")],e}return n}(v),E=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="html",e.settings=[new b("id","text",!0,"html_area"),new b("label","text",!0,"Custom HTML"),new b("default","textarea",!1,"<div><p>Some HTML content</p></div>"),new b("info","text")],e}return n}(v),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="image_picker",e.settings=[new b("id","text",!0,"image-id"),new b("label","text",!0,"image"),new b("default","textarea"),new b("info","text")],e}return n}(v),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="richtext",e.settings=[new b("id","text",!0,"column_richtext"),new b("label","text",!0,"Text"),new b("default","textarea",!1,'<p>Default <em>richtext</em> <a href="https://example.com">content</a></p>'),new b("info","text")],e}return n}(v),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="video_url",e.settings=[new b("id","text",!0,"video_url"),new b("label","text",!0,"Video URL"),new b("accept","text",!1,["youtube","vimeo"]),new b("default","text",!1,"https://www.youtube.com/watch?v=_9VUPq3SxOc"),new b("info","text")],e}return n}(v),j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="textarea",e.settings=[new b("id","text",!0,"textarea-id"),new b("label","text",!0,"textarea"),new b("default","textarea"),new b("info","text"),new b("placeholder","text")],e}return n}(v),D=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="range",e.settings=[new b("id","text",!0,"id"),new b("label","text",!0,"Text"),new b("min",b.TYPE_NUMBER,!0,0),new b("max","number",!0,0),new b("step","number",!0,0),new b("unit","text"),new b("default","text"),new b("info","text")],e}return n}(v),S=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="color",e.settings=[new b("id","text",!0,"color-id"),new b("label","text",!0,"color"),new b("default","color"),new b("info","text")],e}return n}(v),T=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="font_picker",e.settings=[new b("id","text",!0,"font_picker-id"),new b("label","text",!0,"font_picker"),new b("default","text",!1,"helvetica_n4"),new b("info","text")],e}return n}(v),N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="checkbox",e.settings=[new b("id","text",!0,"id"),new b("label","text",!0,"Text"),new b("default",!1),new b("info","text")],e}return n}(v),_=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="radio",e.settings=[new b("id","text",!0,"test id"),new b("label","text",!0,"label"),new b("options","radio",!0,[]),new b("default","text",!1,"default"),new b("info","text",!1,"test info")],e}return n}(v),k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).type="select",e.settings=[new b("id","text",!0,"id"),new b("label","text",!0,"Text"),new b("options","select",!0,[]),new b("default","text"),new b("info","text")],e}return n}(v),F={selectedFields:[],schema:{name:"Section name",settings:[],blocks:[{type:"block",name:"Block",settings:[]}],presets:[{name:"Section name"}]}},H=new(function(){function e(){Object(f.a)(this,e),this.settingsStructures={text:function(){return new w},textarea:function(){return new j},image_picker:function(){return new x},radio:function(){return new _},select:function(){return new k},checkbox:function(){return new N},range:function(){return new D},color:function(){return new S},font_picker:function(){return new T},collection:function(){return new g("collection")},product:function(){return new g("product")},blog:function(){return new g("blog")},page:function(){return new g("page")},link_list:function(){return new g("link_list")},url:function(){return new g("url")},video_url:function(){return new y},richtext:function(){return new O},html:function(){return new E},article:function(){return new g("article")}}}return Object(m.a)(e,[{key:"getFieldByType",value:function(e){return this.settingsStructures[e]()}},{key:"getAllFields",value:function(){return Object.keys(this.settingsStructures)}}]),e}());var I=function(){return r.a.createElement("div",{className:"FieldsList"},r.a.createElement("h3",{className:"heading"},"Fields"),r.a.createElement("div",{className:"all-field-list custom-scrollbar"},H&&H.getAllFields().map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(o,{field:e}))}))))},L=n(121),A=n(122),C=n(118),M=n(58),B=n.n(M),U=n(120),P=n(119);var R=Object(l.b)(null,(function(e){return{removeField:function(t){return e({type:"REMOVE_FIELD",fieldIndex:t})},updateSettingValue:function(t,n,a){return e({type:"UPDATE_SETTING_VALUE",value:t,index:n,fieldIndex:a})}}}))((function(e){return r.a.createElement("div",{className:"field-item-wrap",style:{marginBottom:"0"}},r.a.createElement(L.a,null,r.a.createElement(A.a,{expandIcon:r.a.createElement(B.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement("span",null,e.field.type)),r.a.createElement(C.a,{style:{flexWrap:"wrap"}},r.a.createElement("div",{style:{width:"100%"}},e.field.settings&&e.field.settings.map((function(t,n){return r.a.createElement(U.a,{key:n,style:{width:"100%",marginTop:"10px"},label:t.name,onChange:function(t){e.updateSettingValue(t.target.value,n,e.fieldIndex)}})}))),r.a.createElement("div",null,r.a.createElement(P.a,{variant:"contained",color:"secondary",style:{marginTop:"20px"},onClick:function(){e.removeField(e.fieldIndex)}},"Remove")))))})),V=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).onDragOverHandle=function(e){e.preventDefault()},a.styles={dropZone:{display:"block",width:"100%",height:"20px",border:"1px dashed #bbb",transition:"all .3s"}},a.from=0,a}return Object(m.a)(n,[{key:"canBeMoved",value:function(e,t){var n=t-1;return this.from!==t&&this.from!==n}},{key:"onDragStartHandle",value:function(e){e.target.style.opacity=.5,this.from=Number(e.target.getAttribute("from"))}},{key:"onDragEnterHandle",value:function(e){var t=Number(e.target.getAttribute("to"));this.canBeMoved(this.from,t)&&"dropZone"===e.target.className&&(e.target.style.height="50px")}},{key:"onDragLeaveHandle",value:function(e){"dropZone"===e.target.className&&(e.target.style.height="20px")}},{key:"onDragEndHandle",value:function(e){e.target.style.opacity="","dropZone"===e.target.className&&(e.target.style.height="20px")}},{key:"ondropHandle",value:function(e){e.preventDefault();var t=Number(e.target.getAttribute("to"));e.target.style.background="",this.canBeMoved(this.from,t)&&this.props.swapFields(this.from,t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"SelectedFieldsContainer",style:{display:"flex",flexDirection:"column",height:"100vh"}},r.a.createElement("h3",{className:"heading",onClick:function(){return e.forceUpdate()}},"Selected Fields"),r.a.createElement("div",{className:"SelectedFields custom-scrollbar",style:{flex:"auto",overflowY:"auto",paddingBottom:"30px",paddingRight:"25px"}},r.a.createElement("div",{className:"dropZone",style:this.styles.dropZone,to:0,onDragOver:function(t){e.onDragOverHandle(t)},onDragEnter:function(t){e.onDragEnterHandle(t)},onDragLeave:function(t){e.onDragLeaveHandle(t)},onDrop:function(t){e.onDragEndHandle(t),e.ondropHandle(t)}}),this.props.selectedFields&&this.props.selectedFields.map((function(t,n){return r.a.createElement("div",{style:{width:"100%"},key:n,className:"drag-wrapper"},r.a.createElement("div",{from:n,draggable:"true",onDragStart:function(t){e.onDragStartHandle(t)},onDragEnd:function(t){e.onDragEndHandle(t)}},r.a.createElement(R,{field:t,fieldIndex:n})),r.a.createElement("div",{className:"dropZone",style:e.styles.dropZone,to:1+n,onDragOver:function(t){e.onDragOverHandle(t)},onDragEnter:function(t){e.onDragEnterHandle(t)},onDragLeave:function(t){e.onDragLeaveHandle(t)},onDrop:function(t){e.onDragEndHandle(t),e.ondropHandle(t)}}))}))))}}]),n}(r.a.Component),Z=Object(l.b)((function(e){return{selectedFields:e.fields.selectedFields}}),(function(e){return{swapFields:function(t,n){return e({type:"SWITCH_SELECTED_FIELDS",from:t,to:n})}}}))(V),Y=(n(80),Object(l.b)((function(e){return{schema:e.fields.schema}}),(function(e){return{setSchemaName:function(t){return e({type:"SET_SCHEMA_TITLE",schemaName:t})}}}))((function(e){return r.a.createElement("div",{className:"Schema"},r.a.createElement("h3",{className:"heading"},"Schema"),r.a.createElement("div",null,r.a.createElement(U.a,{label:"Section Name",defaultValue:e.schema.name,variant:"outlined",onChange:function(t){e.setSchemaName(t.target.value)}})),r.a.createElement("br",null),r.a.createElement("textarea",{name:"schema",id:"schema",cols:"30",rows:"10",className:"custom-scrollbar",value:JSON.stringify(e.schema,null,4),onChange:function(){return console.log("onchange")}}))})));function J(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"fields-list custom-scrollbar"},r.a.createElement(I,null)),r.a.createElement("div",{className:"selected-fields custom-scrollbar"},r.a.createElement(Z,null)),r.a.createElement("div",{className:"generated-schema custom-scrollbar"},r.a.createElement(Y,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=n(28),q=Object(W.b)({fields:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=Object(d.a)(e.selectedFields),a=e.schema,r=function(){a.settings=[];var e,t=Object(u.a)(n);try{for(t.s();!(e=t.n()).done;){var r=e.value;a.settings.push(r.getSettingsForJSON())}}catch(i){t.e(i)}finally{t.f()}};switch(t.type){case"ADD_FIELD":return n.push(H.getFieldByType(t.fieldType)),r(),{selectedFields:Object(d.a)(n),schema:Object(s.a)({},a)};case"REMOVE_FIELD":return n.splice(t.fieldIndex,1),r(),{selectedFields:Object(d.a)(n),schema:Object(s.a)({},a)};case"SWITCH_SELECTED_FIELDS":console.log("swap",t.from,t.to);for(var i=n[t.from],c=[],l=0;l<n.length;l++)l!==t.from&&(l===t.to?(c.push(i),c.push(n[l])):c.push(n[l]));return n.length!==c.length&&c.push(i),n=c,r(),{selectedFields:Object(d.a)(n),schema:Object(s.a)({},a)};case"UPDATE_SETTING_VALUE":return n[t.fieldIndex].settings[t.index].setValue(t.value),r(),{selectedFields:Object(d.a)(n),schema:Object(s.a)({},a)};case"UPDATE_SCHEMA":return r(),Object(s.a)(Object(s.a)({},e),{},{schema:Object(s.a)({},a)});case"SET_SCHEMA_TITLE":return a.name=t.schemaName,a.presets[0].name=t.schemaName,r(),Object(s.a)(Object(s.a)({},e),{},{schema:Object(s.a)({},a)});default:return e}}}),X=Object(W.c)(q);c.a.render(r.a.createElement(l.a,{store:X},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.d6dd2ecc.chunk.js.map