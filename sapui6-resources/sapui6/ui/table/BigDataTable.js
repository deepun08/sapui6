jQuery.sap.declare("sapui6.ui.table.BigDataTable"),jQuery.sap.require("sapui6.ui.table.Table"),sapui6.ui.table.Table.extend("sapui6.ui.table.BigDataTable",{library:"sapui6.ui.table",metadata:{properties:{visibleRowCount:{type:"int",defaultValue:10}}},_scroll:null,_scrollPosition:0,_sBindingTimer:null,renderer:function(e,t){t.getVisible()&&(t._makeData(),t._RM=e,t.gridName=t.getId(),e.write("<div"),e.writeControlData(t),t.getWidth()&&e.addStyle("width",t.getWidth()),t.getMargin()&&e.addStyle("margin",t.getMargin()),t.getMarginLeft()&&e.addStyle("margin-left",t.getMarginLeft()),t.getMarginRight()&&e.addStyle("margin-right",t.getMarginRight()),t.getMarginTop()&&e.addStyle("margin-top",t.getMarginTop()),t.getMarginBottom()&&e.addStyle("margin-bottom",t.getMarginBottom()),e.writeStyles(),e.write(">"),t.getToolbar()?(e.write("<div id='"+t.getId()+"-title-area'>"),e.renderControl(t.getToolbar()),e.write("</div>")):(t.getButton().length>0||t.getTitle())&&(e.write("<div id='"+t.getId()+"-title-area'"),0==t.getButton().length&&(e.addStyle("margin-bottom","5px"),e.addStyle("position","relative"),e.writeStyles()),e.write(">"),t.getButton().length>0&&(e.write("<span"),e.addClass("sapui6_table_btn_right"),e.writeClasses(),e.write(">"),t.getButton().forEach(function(t,i){e.write("<span style='margin-left:5px;'>"),e.renderControl(t),e.write("</span>")})),e.write("</span>"),t.getTitle()&&(e.write("<span"),e.addClass("sapui6_table_title"),e.writeClasses(),e.addStyle("color",t.getTitleColor()),e.addStyle("font-size",t.getTitleFontSize()),t.getStrongColor()&&e.addStyle("border-left-color",t.getStrongColor()),e.writeStyles(),e.write(">"),e.write(t.getTitle()),e.write("</span>")),e.write("</div>"),e.write("<div style='clear:both;'></div>")),e.write('<div class="sapui6_table"'),e.addStyle("color",t.getTextColor()),e.writeStyles(),e.write(">"),e.write('<div class="sapui6_table_wrap" id="'+t.gridName+'_gridbg">'),e.write('<div class="sapui6_table_layout" id="'+t.gridName+'_outerdiv">'),t._scrollPosition=0,t.getFixedColumnIndex()>-1?(e.write('<table style="border-spacing:0px;margin:0px;padding:0px;border:0px;background-color:'+t._tableRowBGColor+';"><tr><td style="vertical-align:top;border:0px;padding:0px;margin:0px;">'),t.headerHtml="",t.headerHtml+='<div id="'+t.gridName+'_h1">',t.headerHtml+=t.renderLeftTableHeader(),t.headerHtml+="</div>",t.dataHtml='<div id="'+t.gridName+'_d1" style="background-color:'+t._tableRowBGColor+';">',t.dataHtml+=t.renderLeftTableRow(0,t.getVisibleRowCount()),0==t.getRows().length&&""!=t.getNoDataText()&&(t.dataHtml+='<div id="'+t.getId()+'-nodatatext" style="display:none;text-align:center;width:100%;height:40px;position:absolute;z-index:5;">'+t.getNoDataText()+"</div>"),t.dataHtml+="</div>",e.write('<div id="'+t.gridName+'_left_div" style="border-collapse:collapse;border-right:1px solid '+t._borderColor+';">'+t.headerHtml+t.dataHtml+"</div>"),e.write('</td><td style="vertical-align:top;border:0px;padding:0px;margin:0px;">'),t.headerHtml="",t.headerHtml+='<div id="'+t.gridName+'_h2">',t.headerHtml+=t.renderRightTableHeader(),t.headerHtml+="</div>",t.dataHtml='<div id="'+t.gridName+'_d2" style="background-color:'+t._tableRowBGColor+';" onscroll="javascript:sap.ui.getCore().byId(\''+t.gridName+"').scrollX();javascript:sap.ui.getCore().byId('"+t.gridName+"').scrollY();\">",t.dataHtml+=t.renderRightTableRow(0,t.getVisibleRowCount()),0==t.getRows().length&&""!=t.getNoDataText()&&(t.dataHtml+='<div id="'+t.getId()+'-nodatatext" style="display:none;text-align:center;width:100%;height:40px;position:absolute;z-index:5;">'+t.getNoDataText()+"</div>"),t.dataHtml+="</div>",e.write('<div id="'+t.gridName+'_right_div" style="border-collapse:collapse;">'+t.headerHtml+t.dataHtml+'<div id="'+t.getId()+'-vscroll-blank" style="display:none;z-index:99;position:absolute;top:0px;right:0px;border:1px solid '+t._borderColor+";border-top:2px solid "+t.getStrongColor()+";background-color:"+t._tableRowBGColor+';"></div></div>'),e.write('</td><td style="vertical-align:top;border:0px;padding:0px;margin:0px;">'),t._scroll=new sap.ui.core.ScrollBar,t._scroll.setScrollPosition(t._scrollPosition),t._scroll.setSteps(t.getRows().length),t._scroll.setSize("0px"),t._scroll.attachScroll(function(e){null!=t._sBindingTimer&&jQuery.sap.clearDelayedCall(t._sBindingTimer),t._sBindingTimer=jQuery.sap.delayedCall(50,t,function(){t.doScroll(e)})}),e.renderControl(t._scroll),e.write("</td></tr></table>")):(e.write('<table style="border-spacing:0px;margin:0px;padding:0px;border:0px;background-color:'+t._tableRowBGColor+';"><tr><td style="vertical-align:top;border:0px;padding:0px;margin:0px;">'),t.headerHtml="",t.headerHtml+='<div id="'+t.gridName+'_h">',t.headerHtml+=t.renderTableHeader(),t.headerHtml+="</div>",t.dataHtml='<div id="'+t.gridName+'_d" style="background-color:'+t._tableRowBGColor+';" onscroll="javascript:sap.ui.getCore().byId(\''+t.gridName+"').scroll();\">",t.dataHtml+=t.renderTableRow(0,t.getVisibleRowCount()),0==t.getRows().length&&""!=t.getNoDataText()&&(t.dataHtml+='<div id="'+t.getId()+'-nodatatext" style="display:none;text-align:center;width:100%;height:40px;position:absolute;z-index:5;">'+t.getNoDataText()+"</div>"),t.dataHtml+="</div>",e.write(t.headerHtml+t.dataHtml),e.write('</td><td style="vertical-align:top;border:0px;padding:0px;margin:0px;">'),t._scroll=new sap.ui.core.ScrollBar,t._scroll.setScrollPosition(t._scrollPosition),t._scroll.setSteps(t.getRows().length),t._scroll.setSize("0px"),t._scroll.attachScroll(function(e){null!=t._sBindingTimer&&jQuery.sap.clearDelayedCall(t._sBindingTimer),t._sBindingTimer=jQuery.sap.delayedCall(50,t,function(){t.doScroll(e)})}),e.renderControl(t._scroll),e.write("</td></tr></table>")),e.write("</div>"),e.write("</div>"),e.write("</div>"),e.write("</div>"),t.getRows().length>0&&t.doScroll())}}),sapui6.ui.table.BigDataTable.prototype.doScroll=function(e){var t=this._scroll,i=this,o=this.getVisibleRowCount();if(this.getFixedColumnIndex()>-1){var l=t.getScrollPosition();i._scrollPosition=l,$("#"+i.getId()+"_d1").html(i.renderLeftTableRow(l,l+o)),$("#"+i.getId()+"_d2").html(i.renderRightTableRow(l,l+o))}else{var l=t.getScrollPosition();i._scrollPosition=l,$("#"+i.getId()+"_d").html(i.renderTableRow(l,l+o))}this._sBindingTimer=null},sapui6.ui.table.BigDataTable.prototype._setColumnsMenuEntry=function(){this.label=sap.ui.getCore().getLibraryResourceBundle("sapui6.ui.table",this.getLanguage());var e=this;this.getColumns().forEach(function(t,i){var o=0,l=new sap.ui.unified.Menu;if(t.getShowSortMenuEntry()&&e.getTreeColumnIndex()<0&&(l.addItem(new sap.ui.unified.MenuItem(l.getId()+"-asc",{text:e.label.getText("sort_ascending"),icon:"sap-icon://arrow-top",select:function(o){sap.ui.getCore().byId(e.getId()).sortASC(i,t.getKey())}})),l.addItem(new sap.ui.unified.MenuItem(l.getId()+"-desc",{text:e.label.getText("sort_descending"),icon:"sap-icon://arrow-bottom",select:function(o){sap.ui.getCore().byId(e.getId()).sortDES(i,t.getKey())}})),o++),t.getShowFilterMenuEntry()&&(l.addItem(new sapui6.ui.table.MenuFilterItem(l.getId()+"-filter",{label:e.label.getText("filter"),icon:e._getThemedIcon("ico12_filter.gif"),value:"",type:t.getFilterType(),select:function(t){e._scrollPosition=0,sap.ui.getCore().byId(e.getId()).filter(i,t.getSource().getOperator(),t.getSource().getValue()),e._resetTableContextMenu(e,i,"filter")}})),l.addItem(new sap.ui.unified.MenuItem(l.getId()+"-clear_filter",{text:e.label.getText("clear_filter"),icon:"sap-icon://decline",select:function(t){e._scrollPosition=0,sap.ui.getCore().byId(e.getId()).clearFilter(),e._resetTableContextMenu(e,i,"clear_filter")}}).setEnabled(!1)),o++),t.getShowFreezePaneMenuEntry()&&(e.getFixedColumnIndex()>-1&&e.getFixedColumnIndex()==i?(l.addItem(new sap.ui.unified.MenuItem(l.getId()+"-freeze",{text:e.label.getText("freeze_panes"),icon:"sap-icon://collapse",select:function(t){sap.ui.getCore().byId(e.getId()).freezePane(i),e._resetTableContextMenu(e,i,"freeze")}}).setEnabled(!1)),l.addItem(new sap.ui.unified.MenuItem(l.getId()+"-clear_freeze",{text:e.label.getText("clear_freeze"),icon:"sap-icon://decline",select:function(t){sap.ui.getCore().byId(e.getId()).clearFreezePane(),e._resetTableContextMenu(e,i,"clear_freeze")}}))):(l.addItem(new sap.ui.unified.MenuItem(l.getId()+"-freeze",{text:e.label.getText("freeze_panes"),icon:"sap-icon://collapse",select:function(t){sap.ui.getCore().byId(e.getId()).freezePane(i),e._resetTableContextMenu(e,i,"freeze")}})),l.addItem(new sap.ui.unified.MenuItem(l.getId()+"-clear_freeze",{text:e.label.getText("clear_freeze"),icon:"sap-icon://decline",select:function(t){sap.ui.getCore().byId(e.getId()).clearFreezePane(),e._resetTableContextMenu(e,i,"clear_freeze")}}).setEnabled(!1))),o++),t.getShowBackgroundColorMenuEntry()){var s=e._createMenuItem(l,"column-bg","important_columns","sap-icon://multi-select");l.addItem(s);var r=new sap.ui.unified.Menu(s.getId()+"-color");r.addStyleClass("sapUiTableColumnVisibilityMenu"),s.setSubmenu(r),r.addItem(new sap.ui.unified.MenuItem({text:"None",select:function(){sap.ui.getCore().byId(e.getId()).setBgColorColumn(i,"")}})),r.addItem(new sap.ui.unified.MenuItem({text:"Red",select:function(){sap.ui.getCore().byId(e.getId()).setBgColorColumn(i,"#ffd1d1")}})),r.addItem(new sap.ui.unified.MenuItem({text:"Orange",select:function(){sap.ui.getCore().byId(e.getId()).setBgColorColumn(i,"#ffdcb9")}})),r.addItem(new sap.ui.unified.MenuItem({text:"Yellow",select:function(){sap.ui.getCore().byId(e.getId()).setBgColorColumn(i,"#fff4bb")}})),r.addItem(new sap.ui.unified.MenuItem({text:"Green",select:function(){sap.ui.getCore().byId(e.getId()).setBgColorColumn(i,"#e1f7cb")}})),r.addItem(new sap.ui.unified.MenuItem({text:"SkyBlue",select:function(){sap.ui.getCore().byId(e.getId()).setBgColorColumn(i,"#dff5ff")}})),r.addItem(new sap.ui.unified.MenuItem({text:"Blue",select:function(){sap.ui.getCore().byId(e.getId()).setBgColorColumn(i,"#d3dcf7")}})),r.addItem(new sap.ui.unified.MenuItem({text:"Purple",select:function(){sap.ui.getCore().byId(e.getId()).setBgColorColumn(i,"#f8dcff")}})),r.addItem(new sap.ui.unified.MenuItem({text:"Gray",select:function(){sap.ui.getCore().byId(e.getId()).setBgColorColumn(i,"#e9e9e9")}})),o++}t.getAggregation("customMenuItem")&&t.getAggregation("customMenuItem").forEach(function(e){l.addItem(e),o++}),o>0&&(t.setMenu(l),t.getShowVisibilityMenuEntry()&&e._addColumnVisibilityMenuItem(e,t.getMenu(),i))})},sapui6.ui.table.BigDataTable.prototype.scrollX=function(e,t){$("#"+this.getId()+"_h2").scrollLeft($("#"+this.getId()+"_d2").scrollLeft()),$("#"+this.getId()+"_d2").scrollLeft($("#"+this.getId()+"_h2").scrollLeft())},sapui6.ui.table.BigDataTable.prototype.scrollY=function(e,t){$("#"+this.getId()+"_d1").scrollTop($("#"+this.getId()+"_d2").scrollTop()),$("#"+this.getId()+"_d2").scrollTop($("#"+this.getId()+"_d1").scrollTop())},sapui6.ui.table.BigDataTable.prototype.scrollWheel=function(e){var t=this;null!=this._sBindingTimer&&jQuery.sap.clearDelayedCall(this._sBindingTimer),this._sBindingTimer=jQuery.sap.delayedCall(50,t,function(){var i=window.event||e;i=i.originalEvent?i.originalEvent:i;var o=i.detail?-40*i.detail:i.wheelDelta;if(o>0){var l=t._scroll.getScrollPosition()-3;0>=l&&(l=0),t._scroll.setScrollPosition(l)}else{var l=t._scroll.getScrollPosition()+3;l>=t.getRows().length-1&&(l=t.getRows().length-1),t._scroll.setScrollPosition(l)}t.doScroll()})},sapui6.ui.table.BigDataTable.prototype.scroll=function(){document.getElementById(this.gridName+"_h")&&document.getElementById(this.gridName+"_d")&&($("#"+this.getId()+"_h").scrollLeft($("#"+this.getId()+"_d").scrollLeft()),$("#"+this.getId()+"_d").scrollLeft($("#"+this.getId()+"_h").scrollLeft()))},sapui6.ui.table.BigDataTable.prototype._handleResize=function(e){var t=document.getElementById(this.getId());$(t).css("width",$(t).width()+"px");var i=/px/g,o=this.getScrollBarWidth()+2;0>=o&&(o=17);var l="mousewheel";if(sap.ui.Device.browser.firefox&&(l="DOMMouseScroll"),this.getFixedColumnIndex()<0){e&&($(t).css("width",String(parseInt($(window).width()*this._widthRatio))+"px"),$("#"+this.getId()+"_d").css("width",$(t).width()+"px"));var s=document.getElementById(this.gridName+"_d"),r=document.getElementById(this.gridName+"_h"),d=document.getElementById(this.gridName+"_dt"),a=document.getElementById(this.gridName+"_ht");this.getHeight()||$(t).css("height",$(d).height()+$(a).height()+"px");var n=$(t).width();this.getRows().length>this.getVisibleRowCount()&&(n-=o),$(s).css("width",n+"px"),$(r).css("width",n+"px"),$(r).css("overflow","hidden"),$(s).css("height",$(t).height()-($(s).offset().top-$(t).offset().top));var g=!1;if(this.getRows().length>0){$(d).outerWidth()>$(s).width()&&(g=!0,$(s).css("overflow-x","auto"),$(s).css("-webkit-overflow-scrolling","touch"));var u=0;g&&(u=o),this.getRows().length>this.getVisibleRowCount()&&(this._scroll.setSize($(a).height()+$(d).height()+"px"),this._scroll.rerender());var h=this;if(jQuery.sap.delayedCall(100,h,function(){$(r).css("width",$(s).width()+"px"),$(a).css("width",$(s).width()+"px"),$(d).css("width",$(s).width()+"px")}),$(s).css("height",$(d).outerHeight()+u+"px"),sap.ui.Device.browser.msie){$("#"+this.getId()+"_dt tr:first").addClass("sapUiTableRowHvr");var h=this;jQuery.sap.delayedCall(100,h,function(){$("#"+h.getId()+"_dt tr:first").removeClass("sapUiTableRowHvr")})}this.getRows().length>this.getVisibleRowCount()&&$(s).bind(l,function(e){sap.ui.getCore().byId(h.getId()).scrollWheel(e)})}}else if(this.getFixedColumnIndex()>-1){e&&$(t).css("width",String(parseInt($(window).width()*this._widthRatio))+"px");for(var c=0,p=0;p<=this.getFixedColumnIndex();p++)c+=parseInt(this.getColumns()[p].getWidth().replace(i,""));this.isGroup&&(c+=parseInt(this.getColumns()[this.groupHeaderIdx].getWidth().replace(i,""))),$("#"+this.getId()+"_left_div").css("width",c+"px");var s=document.getElementById(this.gridName+"_d1"),r=document.getElementById(this.gridName+"_h1"),d=document.getElementById(this.gridName+"_dt1"),a=document.getElementById(this.gridName+"_ht1");$(s).css("overflow","hidden"),$(r).css("overflow","hidden"),this.getHeight()||$(t).css("height",$(d).height()+$(a).height()+"px"),$(s).css("width",c+"px"),$(r).css("width",c+"px");var m=$(t).innerWidth()-$(s).outerWidth();this.getRows().length>this.getVisibleRowCount()&&(m-=o),$("#"+this.getId()+"_right_div").css("width",m+"px");var b=document.getElementById(this.gridName+"_d2"),w=document.getElementById(this.gridName+"_h2"),I=document.getElementById(this.gridName+"_dt2");document.getElementById(this.gridName+"_ht2");$(w).css("overflow","hidden"),$(b).css("height",$(s).height()+"px");var g=!1;if(this.getRows().length>0){$(I).outerWidth()>$(b).width()&&(g=!0,$(b).css("overflow-x","auto"),$(b).css("-webkit-overflow-scrolling","touch"),$(s).css("height",$(s).height()-o));var u=0;g&&(u=o);var h=this;if(jQuery.sap.delayedCall(100,h,function(){$(w).css("width",$(b).width()+"px")}),$(s).css("height",$(I).outerHeight()+u+"px"),$(b).css("height",$(I).outerHeight()+u+"px"),this._scroll.setSize($(w).height()+$(b).height()+"px"),this._scroll.rerender(),sap.ui.Device.browser.msie){$("#"+this.getId()+"_dt2 tr:first").addClass("sapUiTableRowHvr");var h=this;jQuery.sap.delayedCall(100,h,function(){$("#"+h.getId()+"_dt2 tr:first").removeClass("sapUiTableRowHvr")})}this.getRows().length>this.getVisibleRowCount()&&($(s).bind(l,function(e){sap.ui.getCore().byId(h.getId()).scrollWheel(e)}),$(b).bind(l,function(e){sap.ui.getCore().byId(h.getId()).scrollWheel(e)}))}}},sapui6.ui.table.BigDataTable.prototype.renderTableRow=function(e,t){var i=this.dataArr,o="",l=this.getRows().length,s=this.getColumns().length,r=0,d=l;void 0!=e&&void 0!=t&&(r=e,d=t,r+this.getVisibleRowCount()>=l&&(r=l-this.getVisibleRowCount()),0>r&&(r=0),d>l&&(d=l)),this.displayRowCount=d-r,this.displayDataArr=[];var a="";a+=' <table class="sapui6_table_tb sapUiTableCtrl" id="'+this.gridName+'_dt" style="border-color:'+this._borderColor+';">',a+="     <colgroup>";var n=this.getColumns().length;!this.getSelectionMode()||"multiple"!=this.getSelectionMode().toLowerCase()&&"single"!=this.getSelectionMode().toLowerCase()||(a+='<col style="width:45px;max-width:45px;min-width:45px;" />'),this.isGroup&&(a+='         <col style="width:'+this.getColumns()[this.groupHeaderIdx].getWidth()+';" />');for(var g=0;n>g;g++)this.isGroup&&this.groupHeaderIdx==g||(a+=this.getColumns()[g].getVisible()?'          <col style="width:'+this.getColumns()[g].getWidth()+';display:;" />':this.getColumns()[g].getVisible()?'            <col style="width:'+this.getColumns()[g].getWidth()+';" />':'          <col style="width:'+this.getColumns()[g].getWidth()+';display:none;" />');if(a+="     </colgroup>",a+="     <tbody>",this.getRows().length>0)for(var g=r;d>g;g++){var u=i[g],h=this.getRows()[g];this.displayDataArr.push(u);var c="sapUiTableRowEven";g%2==0&&(c="sapUiTableRowOdd"),o+='<tr class="'+c+'" onclick="sap.ui.getCore().byId(\''+this.getId()+"').mouseclick(event,"+g+');" onmouseover="sap.ui.getCore().byId(\''+this.getId()+"').mouseover(event,"+g+');" onmouseout="sap.ui.getCore().byId(\''+this.getId()+"').mouseout(event,"+g+');" origin_class="'+c+'">',!this.getSelectionMode()||"multiple"!=this.getSelectionMode().toLowerCase()&&"single"!=this.getSelectionMode().toLowerCase()||(o+=this._getSelectionFieldDom(g));for(var p=0;s>p;p++)o+=this.renderTableCell(p,"",!1,"",h,g);o+="</tr>"}else for(var g=0;g<this.getVisibleRowCount();g++)o+="<tr><td>&nbsp;</td></tr>";return o=a+o,o+="</tbody></table>"},sapui6.ui.table.BigDataTable.prototype.renderLeftTableRow=function(e,t){var i=this.dataArr,o="",l=this.getRows().length,s=(this.getColumns().length,0),r=l;void 0!=e&&void 0!=t&&(s=e,r=t,s+this.getVisibleRowCount()>=l&&(s=l-this.getVisibleRowCount()),0>s&&(s=0),r>l&&(r=l)),this.displayRowCount=r-s,this.displayDataArr=[];var d="";d+='<table id="'+this.gridName+'_dt1" class="sapui6_table_tb sapUiTableCtrl" style="border-color:'+this._borderColor+';">',d+="<colgroup>",!this.getSelectionMode()||"multiple"!=this.getSelectionMode().toLowerCase()&&"single"!=this.getSelectionMode().toLowerCase()||(d+='<col style="width:45px;max-width:45px;min-width:45px;" />'),this.isGroup&&(d+='         <col style="width:'+this.getColumns()[this.groupHeaderIdx].getWidth()+';" />');for(var a=0;a<=this.getFixedColumnIndex();a++)this.isGroup&&this.groupHeaderIdx==a||(d+=this.getColumns()[a].getVisible()?'           <col style="width:'+this.getColumns()[a].getWidth()+';display:;" />':this.getColumns()[a].getVisible()?'            <col style="width:'+this.getColumns()[a].getWidth()+';" />':'           <col style="width:'+this.getColumns()[a].getWidth()+';display:none;" />');if(d+="                     </colgroup>",d+="                     <tbody>",this.getRows().length>0)for(var a=s;r>a;a++){var n=i[a],g=this.getRows()[a];this.displayDataArr.push(n);var u="sapUiTableRowEven";a%2==0&&(u="sapUiTableRowOdd"),o+='<tr class="'+u+'" onclick="sap.ui.getCore().byId(\''+this.getId()+"').mouseclick(event,"+a+');" onmouseover="sap.ui.getCore().byId(\''+this.getId()+"').mouseover(event,"+a+');" onmouseout="sap.ui.getCore().byId(\''+this.getId()+"').mouseout(event,"+a+');" origin_class="'+u+'">',!this.getSelectionMode()||"multiple"!=this.getSelectionMode().toLowerCase()&&"single"!=this.getSelectionMode().toLowerCase()||(o+=this._getSelectionFieldDom(a));for(var h=0;h<=this.getFixedColumnIndex();h++)o+=this.renderTableCell(h,"",!1,"",g,a);o+="</tr>"}else for(var a=0;a<this.getVisibleRowCount();a++)o+="<tr><td>&nbsp;</td></tr>";return d+=o,d+=" </tbody>",d+="</table>"},sapui6.ui.table.BigDataTable.prototype.renderRightTableRow=function(e,t){var i=this.dataArr,o="",l=this.getRows().length,s=this.getColumns().length,r=0,d=l;void 0!=e&&void 0!=t&&(r=e,d=t,r+this.getVisibleRowCount()>=l&&(r=l-this.getVisibleRowCount()),0>r&&(r=0),d>l&&(d=l)),this.displayRowCount=d-r,this.displayDataArr=[];var a="";a+='                 <table id="'+this.gridName+'_dt2" class="sapui6_table_tb sapUiTableCtrl"',a+=this.isGroup?'    style="table-layout:auto;border-color:'+this._borderColor+';">':'         style="border-color:'+this._borderColor+';">',a+="                     <colgroup>";for(var n=this.getColumns().length,g=this.getFixedColumnIndex()+1;n>g;g++)this.isGroup&&this.groupHeaderIdx==g||(a+=this.getColumns()[g].getVisible()?'          <col style="width:'+this.getColumns()[g].getWidth()+';display:;" />':this.getColumns()[g].getVisible()?'            <col style="width:'+this.getColumns()[g].getWidth()+';" />':'          <col style="width:'+this.getColumns()[g].getWidth()+';display:none;" />');if(a+="                     </colgroup>",a+="                     <tbody>",o="",this.getRows().length>0)for(var g=r;d>g;g++){var u=i[g],h=this.getRows()[g];this.displayDataArr.push(u);var c="sapUiTableRowEven";g%2==0&&(c="sapUiTableRowOdd"),this.getMergeColumnIndex()>-1&&(c="sapUiTableRowOdd"),o+='<tr class="'+c+'" onclick="sap.ui.getCore().byId(\''+this.getId()+"').mouseclick(event,"+g+');" onmouseover="sap.ui.getCore().byId(\''+this.getId()+"').mouseover(event,"+g+');" onmouseout="sap.ui.getCore().byId(\''+this.getId()+"').mouseout(event,"+g+');" origin_class="'+c+'">';for(var p=this.getFixedColumnIndex()+1;s>p;p++)o+=this.renderTableCell(p,"",!1,"",h,g);o+="</tr>"}else for(var g=0;g<this.getVisibleRowCount();g++)o+="<tr><td>&nbsp;</td></tr>";return o=a+o,o+="                       </tbody>",o+="                   </table>"};