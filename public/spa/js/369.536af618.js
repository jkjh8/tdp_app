"use strict";(globalThis["webpackChunktdp_ui"]=globalThis["webpackChunktdp_ui"]||[]).push([[369],{4862:(e,l,a)=>{a.d(l,{Z:()=>C});var o=a(9835),n=a(499),s=a(6970),t=a(9302),i=a(4182),r=a(5575),d=a(1569);const c=e=>((0,o.dD)("data-v-052467c8"),e=e(),(0,o.Cn)(),e),p={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},u={class:"col q-px-sm"},m=c((()=>(0,o._)("div",{class:"q-uploader__title"},"Upload Files",-1))),g={class:"q-uploader__subtitle"},w={__name:"filesUploader",setup(e){const l=(0,t.Z)(),{dialogRef:a,onDialogOK:c,onDialogCancel:w}=(0,i.Z)(),_=()=>`${d.addr}/api/files/upload`,f=e=>{l.notify({type:"negative",message:`${e.length} file(s) did not pass validation constraints`})};return(e,l)=>{const t=(0,o.up)("q-btn"),i=(0,o.up)("q-spinner"),d=(0,o.up)("q-uploader-add-trigger"),w=(0,o.up)("q-uploader"),k=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(k,{ref_key:"dialogRef",ref:a,persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"uploader",multiple:"",url:_,color:"blue-grey-8",accept:"image/*, video/*, audio/*",onRejected:f},{header:(0,o.w5)((e=>[(0,o._)("div",p,[e.queuedFiles.length>0?((0,o.wg)(),(0,o.j4)(t,{key:0,round:"",dense:"",flat:"",icon:"clear_all",onClick:e.removeQueuedFiles},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(r.Z),{msg:"Clear All"})])),_:2},1032,["onClick"])):(0,o.kq)("",!0),e.uploadedFiles.length>0?((0,o.wg)(),(0,o.j4)(t,{key:1,round:"",dense:"",flat:"",icon:"done_all",onClick:e.removeUploadedFiles},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(r.Z),{msg:"Remove Uploaded Files"})])),_:2},1032,["onClick"])):(0,o.kq)("",!0),e.isUploading?((0,o.wg)(),(0,o.j4)(i,{key:2,class:"q-uploader__spinner"})):(0,o.kq)("",!0),(0,o._)("div",u,[m,(0,o._)("div",g,(0,s.zw)(e.uploadSizeLabel)+" / "+(0,s.zw)(e.uploadProgressLabel),1)]),e.canAddFiles?((0,o.wg)(),(0,o.j4)(t,{key:3,round:"",dense:"",flat:"",type:"a",icon:"add_box",onClick:e.pickFiles},{default:(0,o.w5)((()=>[(0,o.Wm)(d),(0,o.Wm)((0,n.SU)(r.Z),{msg:"Pick Files"})])),_:2},1032,["onClick"])):(0,o.kq)("",!0),e.canUpload?((0,o.wg)(),(0,o.j4)(t,{key:4,round:"",dense:"",flat:"",icon:"cloud_upload",onClick:e.upload},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(r.Z),{msg:"Upload Files"})])),_:2},1032,["onClick"])):(0,o.kq)("",!0),e.isUploading?((0,o.wg)(),(0,o.j4)(t,{key:5,round:"",dense:"",flat:"",icon:"clear",onClick:e.abort},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(r.Z),{msg:"Abrot Upload"})])),_:2},1032,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(t,{dense:"",round:"",flat:"",color:"blue-grey-2",icon:"close",onClick:(0,n.SU)(c)},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(r.Z),{msg:"Close"})])),_:1},8,["onClick"])])])),_:1})])),_:1},512)}}};var _=a(1639),f=a(3706),k=a(5918),b=a(4455),q=a(3940),U=a(6246),y=a(9984),v=a.n(y);const Z=(0,_.Z)(w,[["__scopeId","data-v-052467c8"]]),C=Z;v()(w,"components",{QDialog:f.Z,QUploader:k.Z,QBtn:b.Z,QSpinner:q.Z,QUploaderAddTrigger:U.Z})},9369:(e,l,a)=>{a.r(l),a.d(l,{default:()=>L});var o=a(9835),n=a(499),s=a(9302),t=a(4862),i=a(5575),r=a(1569);const d=(0,n.iH)([]),c=(0,n.iH)(""),p=[{name:"name",label:"Name",field:"name",align:"center",sortable:!0},{name:"type",label:"Type",field:"type",align:"center",sortable:!0},{name:"size",label:"Size",field:"size",align:"center",sortable:!0},{name:"actions",label:"Actions",align:"center"}],u=async()=>{const e=await r.api.get("/files");return d.value=e.data.files,c.value=e.data.defaultpath,console.log("files updated: ",d.value),e},m={class:"row justify-between"},g={class:"row no-wrap items-center q-gutter-x-sm"},w=(0,o._)("div",null,"Local Files",-1),_={__name:"FilesHeader",setup(e){const l=(0,s.Z)(),a=()=>{l.dialog({component:t.Z}).onOk((()=>{u()}))};return(e,l)=>{const s=(0,o.up)("q-icon"),t=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",g,[(0,o.Wm)(s,{color:"yellow-8",size:"sm",name:"folder"}),w]),(0,o._)("div",null,[(0,o.Wm)(t,{flat:"",round:"",color:"primary",icon:"cloud_uploadf",onClick:a},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(i.Z),{msg:"Upload Files"})])),_:1})])])}}};var f=a(2857),k=a(4455),b=a(9984),q=a.n(b);const U=_,y=U;q()(_,"components",{QIcon:f.Z,QBtn:k.Z});var v=a(6970),Z=a(321),C=a(3910);const W={__name:"FilesList",setup(e){const{humanStorageSize:l}=Z["default"];return(e,a)=>{const s=(0,o.up)("q-td"),t=(0,o.up)("q-btn"),r=(0,o.up)("q-tr"),c=(0,o.up)("q-table");return(0,o.wg)(),(0,o.j4)(c,{"table-header-class":"bg-grey-3",rows:(0,n.SU)(d),columns:(0,n.SU)(p),pagination:{rouwPerPage:0},"hide-pagination":"","wrap-cells":""},{body:(0,o.w5)((e=>[(0,o.Wm)(r,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{key:"name",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,v.zw)(e.row.name),1)])),_:2},1032,["props"]),(0,o.Wm)(s,{key:"type",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,v.zw)(e.row.ext.substring(1).toUpperCase()),1)])),_:2},1032,["props"]),(0,o.Wm)(s,{key:"size",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,v.zw)((0,n.SU)(l)(e.row.size)),1)])),_:2},1032,["props"]),(0,o.Wm)(s,{key:"actions",props:e},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(t,{round:"",flat:"",icon:"input",size:"sm",color:"primary",onClick:l=>(0,n.SU)(C.GM)(e.row)},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(i.Z),{msg:"Load"})])),_:2},1032,["onClick"])])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])}}};var S=a(7580),F=a(3532),z=a(7220);const Q=W,h=Q;q()(W,"components",{QTable:S.Z,QTr:F.Z,QTd:z.Z,QBtn:k.Z});const j={class:"q-pa-md"},x={__name:"FilesPage",setup(e){return(0,o.wF)((async()=>{console.log(await u())})),(e,l)=>{const a=(0,o.up)("q-card-section"),s=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",j,[(0,o.Wm)(s,{class:"bg-grey-1",flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{class:"q-pb-none q-mb-none"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(y))])),_:1}),(0,o.Wm)(a,{class:"q-pt-xs q-mt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(h),{class:"gt-xs"})])),_:1})])),_:1})])}}};var T=a(4458),D=a(3190);const A=x,L=A;q()(x,"components",{QCard:T.Z,QCardSection:D.Z})}}]);