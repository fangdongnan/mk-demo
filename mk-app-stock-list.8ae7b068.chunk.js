webpackJsonp([4],{1850:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o,i=n(2),c=a(i),u=n(55),s=a(u),d=n(5),f=a(d),l=n(10),p=a(l),m=n(8),h=a(m),v=n(9),k=a(v),g=n(0),y=(a(g),n(252)),x=n(686),A=a(x),w=(r=(0,y.wrapper)(A.default))(o=function(t){function e(){return(0,f.default)(this,e),(0,h.default)(this,(e.__proto__||(0,s.default)(e)).apply(this,arguments))}return(0,k.default)(e,t),(0,p.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,c.default)({},this.props,{path:"root"}))}}]),e}(g.Component))||o;e.default=w,t.exports=e.default},1851:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new m.action(t),n=A.default.actionCreator((0,i.default)({},t,{metaAction:e})),a=new w((0,i.default)({},t,{metaAction:e,extendAction:n})),r=(0,i.default)({},e,n.gridAction,a);return e.config({metaHandlers:r}),r}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=a(o),c=n(567),u=a(c),s=n(568),d=a(s),f=n(5),l=a(f);e.default=r;var p=n(0),m=(a(p),n(252)),h=(n(72),n(606)),v=a(h),k=n(6),g=(a(k),n(11)),y=a(g),x=n(1987),A=a(x),w=function t(e){var n=this;(0,l.default)(this,t),this.onInit=function(t){var e=t.component,a=t.injections;n.extendAction.gridAction.onInit({component:e,injections:a}),n.component=e,n.injections=a,a.reduce("init");var r=n.metaAction.gf("data.pagination").toJS(),o=n.metaAction.gf("data.filter").toJS();n.load(r,o)},this.load=function(){var t=(0,d.default)(u.default.mark(function t(e,a){var r;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.webapi.stockList.init({pagination:e,filter:a});case 2:r=t.sent,r.filter=a,n.injections.reduce("load",r);case 5:case"end":return t.stop()}},t,n)}));return function(e,n){return t.apply(this,arguments)}}(),this.reload=(0,d.default)(u.default.mark(function t(){var e,a;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=n.metaAction.gf("data.pagination").toJS(),a=n.metaAction.gf("data.filter").toJS(),n.load(e,a);case 3:case"end":return t.stop()}},t,n)})),this.pageChanged=function(t,e){var a=n.metaAction.gf("data.filter").toJS();n.load({current:t,pageSize:e},a)},this.selectType=function(t,e){var a=n.metaAction.gf("data.pagination").toJS(),r=n.metaAction.gf("data.filter").toJS(),o=n.metaAction.gf("data.other.stockTypes").toJS(),i=y.default.tree.find(o,"children",function(e){return e.id==t[0]});r.type=i,n.load(a,r)},this.getTypeChildren=function(t){return t?{_isMeta:!0,value:y.default.tree.map(t,"children","",function(t){return{name:t.id,component:"Tree.TreeNode",key:t.id,title:t.name,children:t.children}})}:null},this.searchChange=function(t){var e=n.metaAction.gf("data.pagination").toJS(),a=n.metaAction.gf("data.filter").toJS();a.search=t.target.value,n.load(e,a)},this.showDisableChange=function(t){var e=n.metaAction.gf("data.pagination").toJS(),a=n.metaAction.gf("data.filter").toJS();a.showDisable=t.target.checked,n.load(e,a)},this.batchMenuClick=function(t){switch(t.key){case"del":n.batchDel();break;case"modify":n.batchModify();break;case"disable":n.batchDisable();break;case"enable":n.batchEnable()}},this.batchModify=(0,d.default)(u.default.mark(function t(){return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:throw"请实现批量删除功能";case 1:case"end":return t.stop()}},t,n)})),this.batchDel=(0,d.default)(u.default.mark(function t(){var e,a,r,o;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=n.metaAction.gf("data.list"))&&0!=e.size){t.next=4;break}return n.metaAction.toast("error","请选中要删除的存货"),t.abrupt("return");case 4:if((a=e.filter(function(t){return t.get("selected")}))&&0!=a.size){t.next=8;break}return n.metaAction.toast("error","请选中要删除的存货"),t.abrupt("return");case 8:return t.next=10,n.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 10:if(r=t.sent){t.next=13;break}return t.abrupt("return");case 13:return o=a.map(function(t){return t.get("id")}).toJS(),t.next=16,n.webapi.stockList.del({ids:o});case 16:n.metaAction.toast("success","删除成功"),n.reload();case 18:case"end":return t.stop()}},t,n)})),this.batchDisable=(0,d.default)(u.default.mark(function t(){var e,a,r;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=n.metaAction.gf("data.list"))&&0!=e.size){t.next=4;break}return n.metaAction.toast("error","请选中要停用的存货"),t.abrupt("return");case 4:if((a=e.filter(function(t){return t.get("selected")}))&&0!=a.size){t.next=8;break}return n.metaAction.toast("error","请选中要停用的存货"),t.abrupt("return");case 8:return r=a.map(function(t){return t.get("id")}).toJS(),t.next=11,n.webapi.stockList.disable({ids:r});case 11:n.metaAction.toast("success","停用成功"),n.reload();case 13:case"end":return t.stop()}},t,n)})),this.batchEnable=(0,d.default)(u.default.mark(function t(){var e,a,r;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=n.metaAction.gf("data.list"))&&0!=e.size){t.next=4;break}return n.metaAction.toast("error","请选中要启用的存货"),t.abrupt("return");case 4:if((a=e.filter(function(t){return t.get("selected")}))&&0!=a.size){t.next=8;break}return n.metaAction.toast("error","请选中要启用的存货"),t.abrupt("return");case 8:return r=a.map(function(t){return t.get("id")}).toJS(),t.next=11,n.webapi.stockList.enable({ids:r});case 11:n.metaAction.toast("success","启用成功"),n.reload();case 13:case"end":return t.stop()}},t,n)})),this.del=function(t){return(0,d.default)(u.default.mark(function e(){var a,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return");case 5:return r=[t],e.next=8,n.webapi.stockList.del({ids:r});case 8:n.metaAction.toast("success","删除成功"),n.reload();case 10:case"end":return e.stop()}},e,n)}))},this.addType=(0,d.default)(u.default.mark(function t(){var e,a;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.metaAction.gf("data.filter.type")){t.next=4;break}return n.metaAction.toast("error","请选中一个父分类"),t.abrupt("return");case 4:if(n.config.apps["mk-app-stock-type-card"]){t.next=6;break}throw"依赖mk-app-stock-type-card app,请使用mk clone mk-app-stock-type-card命令添加";case 6:return t.next=8,n.metaAction.modal("show",{title:"新增",children:n.metaAction.loadApp("mk-app-stock-type-card",{store:n.component.props.store,parentId:e.get("id")})});case 8:a=t.sent,a&&n.reload();case 10:case"end":return t.stop()}},t,n)})),this.modifyType=(0,d.default)(u.default.mark(function t(){var e,a;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.metaAction.gf("data.filter.type")){t.next=4;break}return n.metaAction.toast("error","请选中一个分类"),t.abrupt("return");case 4:if(n.config.apps["mk-app-stock-type-card"]){t.next=6;break}throw"依赖mk-app-stock-type-card app,请使用mk clone mk-app-stock-type-card命令添加";case 6:return t.next=8,n.metaAction.modal("show",{title:"修改",children:n.metaAction.loadApp("mk-app-stock-type-card",{store:n.component.props.store,typeId:e.get("id")})});case 8:a=t.sent,a&&n.reload();case 10:case"end":return t.stop()}},t,n)})),this.delType=(0,d.default)(u.default.mark(function t(){var e,a,r,o,i;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.metaAction.gf("data.filter.type")){t.next=4;break}return n.metaAction.toast("error","请选中一个分类"),t.abrupt("return");case 4:return t.next=6,n.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 6:if(!(a=t.sent)){t.next=15;break}return r=n.metaAction.gf("data.filter.type.id"),t.next=11,n.webapi.stockType.del({id:r});case 11:o=t.sent,n.metaAction.toast("success","删除类型成功"),i=n.metaAction.gf("data.pagination").toJS(),n.load(i,{type:void 0});case 15:case"end":return t.stop()}},t,n)})),this.add=(0,d.default)(u.default.mark(function t(){return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.config.apps["mk-app-stock-card"]){t.next=2;break}throw"依赖mk-app-stock-card app,请使用mk clone mk-app-stock-card命令添加";case 2:n.component.props.setPortalContent&&n.component.props.setPortalContent("存货卡片","mk-app-stock-card");case 3:case"end":return t.stop()}},t,n)})),this.modify=function(t){return(0,d.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.config.apps["mk-app-stock-card"]){e.next=2;break}throw"依赖mk-app-stock-card app,请使用mk clone mk-app-stock-card命令添加";case 2:n.component.props.setPortalContent&&n.component.props.setPortalContent("存货卡片","mk-app-stock-card",{stockId:t});case 3:case"end":return e.stop()}},e,n)}))},this.print=function(){throw"请实现打印功能"},this.imp=function(){throw"请实现导入功能"},this.exp=function(){throw"请实现导出功能"},this.setting=function(){throw"请实现设置功能"},this.numberFormat=y.default.number.format,this.metaAction=e.metaAction,this.extendAction=e.extendAction,this.config=v.default.current,this.webapi=this.config.webapi};t.exports=e.default},1852:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new d.reducer(t),n=m.default.reducerCreator((0,i.default)({},t,{metaReducer:e})),a=new h((0,i.default)({},t,{metaReducer:e,extendReducer:n}));return(0,i.default)({},e,n.gridReducer,a)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=a(o),c=n(5),u=a(c);e.default=r;var s=n(72),d=n(252),f=n(606),l=(a(f),n(687)),p=n(1987),m=a(p),h=function t(e){var n=this;(0,u.default)(this,t),this.init=function(t,e){return n.metaReducer.init(t,(0,l.getInitState)())},this.load=function(t,e){return t=n.metaReducer.sf(t,"data.list",(0,s.fromJS)(e.list)),t=n.metaReducer.sf(t,"data.pagination",(0,s.fromJS)(e.pagination)),t=n.metaReducer.sf(t,"data.filter",(0,s.fromJS)(e.filter)),e.stockTypes&&(t=n.metaReducer.sf(t,"data.other.stockTypes",(0,s.fromJS)(e.stockTypes))),t},this.metaReducer=e.metaReducer};t.exports=e.default},1903:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1904),o=a(r),i=n(1905),c=a(i);e.default={action:o.default,reducer:c.default},t.exports=e.default},1904:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o=a(r),i=n(51),c=a(i),u=n(2),s=a(u),d=n(46),f=a(d),l=n(5),p=a(l),m=n(10),h=a(m),v=n(11),k=a(v),g=function(){function t(e){var n=this;(0,p.default)(this,t),this.onInit=function(t){var e=t.component,a=t.injections;n.component=e,n.injections=a},this.isSelectAll=function(t){if(n.option){"string"==typeof t&&t||(t=(0,f.default)(n.option)[0]);var e=n.metaAction.gf(n.option[t].path);return!(!e||0==e.size)&&e.every(function(e){return e.get(n.option[t].selectFieldName)})}},this.selectAll=function(t){return function(e){n.option&&("string"==typeof t&&t||(t=(0,f.default)(n.option)[0]),n.injections.reduce("selectAll",e.target.checked,t))}},this.getSelectedCount=function(t){if(n.option){"string"==typeof t&&t||(t=(0,f.default)(n.option)[0]);var e=n.metaAction.gf(n.option[t].path);if(!e||0==e.size)return 0;return e.filter(function(e){return!!e.get(n.option[t].selectFieldName)}).size}},this.mousedown=function(t){if(n.option){var e=k.default.path.findPathByEvent(t);if(!n.metaAction.isFocus(e))if(-1!=e.indexOf("cell.cell"))n.focusCell(n.getCellInfo(e),e);else{if(!n.metaAction.focusByEvent(t))return;setTimeout(n.cellAutoFocus,16)}}},this.gridKeydown=function(t){if(n.option){var e="";if(37!=t.keyCode&&39!=t.keyCode&&13!=t.keyCode&&108!=t.keyCode&&9!=t.keyCode&&38!=t.keyCode&&40!=t.keyCode||(e=k.default.path.findPathByEvent(t))&&-1!=e.indexOf(",")){if(37==t.keyCode){if(!k.default.dom.cursorAtBegin(t))return;return void n.moveEditCell(e,"left")}if(39==t.keyCode||13==t.keyCode||108==t.keyCode||9==t.keyCode){if(!k.default.dom.cursorAtEnd(t))return;return void n.moveEditCell(e,"right")}return 38==t.keyCode?void n.moveEditCell(e,"up"):40==t.keyCode?void n.moveEditCell(e,"down"):void 0}}},this.cellAutoFocus=function(){k.default.dom.gridCellAutoFocus(n.component,".editable-cell")},this.getCellClassName=function(t,e,a){if(n.option){"string"==typeof a&&a||(a=(0,f.default)(n.option)[0]);var r=n.option[a].cellClassName,o=n.metaAction.isFocus(t)?r+" editable-cell":"";return e&&(o+=" "+r+"-"+e),o}},this.addRow=function(t){return function(e){n.injections.reduce("addRow",t,e.rowIndex+1)}},this.delRow=function(t){return function(e){n.injections.reduce("delRow",t,e.rowIndex)}},this.metaAction=e.metaAction,e.gridOption&&(this.option=e.gridOption)}return(0,h.default)(t,[{key:"getColNames",value:function(t){return this.option[t].getColNames(this.metaAction.gf)}},{key:"moveEditCell",value:function(t,e){var n=this.getCellInfo(t);this.moveCell(n,e,t)}},{key:"moveCell",value:function(t,e,n){var a=function(t,e,n){return!1},r=(0,f.default)(this.option),o=!0,i=!1,u=void 0;try{for(var d,l=(0,c.default)(r);!(o=(d=l.next()).done);o=!0){var p=d.value;-1!=n.indexOf(p)&&this.option[p].cellIsReadonly&&(a=this.option[p].cellIsReadonly)}}catch(t){i=!0,u=t}finally{try{!o&&l.return&&l.return()}finally{if(i)throw u}}var m=k.default.matrix.move(t.rowCount,t.colCount,{x:t.x,y:t.y},e);m.x===t.x&&m.y===t.y||(a(m,n,this.metaAction.gf)?this.moveCell((0,s.default)({},t,m),e,n):this.focusCell((0,s.default)({},t,m),n))}},{key:"focusCell",value:function(t,e){var n=(0,f.default)(this.option),a=!0,r=!1,i=void 0;try{for(var u,s=(0,c.default)(n);!(a=(u=s.next()).done);a=!0){var d=u.value;if(-1!=e.indexOf(d)){var l,p=this.getColPathPrefix(e,d);this.metaAction.sfs((l={"data.other.focusFieldPath":""+p+this.getColNames(d)[t.x]+".cell.cell,"+t.y},(0,o.default)(l,"data.other."+d+"ScrollToRow",t.y),(0,o.default)(l,"data.other."+d+"ScrollToColumn",t.x+1),l))}}}catch(t){r=!0,i=t}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}setTimeout(this.cellAutoFocus,16)}},{key:"getColPathPrefix",value:function(t,e){return t.substring(0,t.indexOf(e))+e+".columns."}},{key:"getCellInfo",value:function(t){if(this.option){var e=k.default.path.parsePath(t),n=(0,f.default)(this.option),a=!0,r=!1,o=void 0;try{for(var i,u=(0,c.default)(n);!(a=(i=u.next()).done);a=!0){var s=i.value;if(-1!=t.indexOf(s)){var d=this.getColPathPrefix(t,s),l=this.metaAction.gf(this.option[s].path).size,p=this.getColNames(s).length,m=e.path.replace(d,"").replace(".cell.cell","").replace(/\s/g,"");return{x:this.getColNames(s).findIndex(function(t){return t==m}),y:Number(e.vars[0]),colCount:p,rowCount:l}}}}catch(t){r=!0,o=t}finally{try{!a&&u.return&&u.return()}finally{if(r)throw o}}}}}]),t}();e.default=g,t.exports=e.default},1905:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),r=function(t){return t&&t.__esModule?t:{default:t}}(a),o=n(72),i=function t(e){var n=this;(0,r.default)(this,t),this.selectAll=function(t,e,a){if(!n.option)return t;var r=n.option[a].path,o=n.option[a].selectFieldName,i=n.metaReducer.gf(t,r);if(!i||0==i.size)return t;for(var c=0;c<i.size;c++)t=n.metaReducer.sf(t,r+"."+c+"."+o,e);return t},this.addRow=function(t,e,a){if(!n.option)return t;var r=n.option[e].path,i=n.option[e].emptyRow||{},c=n.metaReducer.gf(t,r);return c=c.insert(a,(0,o.Map)(i)),n.metaReducer.sf(t,r,c)},this.delRow=function(t,e,a){if(!n.option)return t;var r=n.option[e].path,i=n.metaReducer.gf(t,r);return-1==a?t:(i=i.remove(a),0==i.size&&(i=i.insert(a,(0,o.Map)({}))),n.metaReducer.sf(t,r,i))},this.metaReducer=e.metaReducer,e.gridOption&&(this.option=e.gridOption)};e.default=i,t.exports=e.default},1987:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function r(){return{dataGrid:{path:"data.list",selectFieldName:"selected"}}}function o(t){return{gridAction:new d.default.action((0,u.default)({},t,{gridOption:r()}))}}function i(t){return{gridReducer:new d.default.reducer((0,u.default)({},t,{gridOption:r()}))}}Object.defineProperty(e,"__esModule",{value:!0});var c=n(2),u=a(c),s=n(1903),d=a(s);e.default={actionCreator:o,reducerCreator:i},t.exports=e.default}});