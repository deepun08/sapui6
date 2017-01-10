jQuery.sap.declare("sapui6.ui.commons.Tree"),jQuery.sap.require("sap.ui.commons.Tree"),sap.ui.commons.Tree.extend("sapui6.ui.commons.Tree",{metadata:{library:"sapui6.ui.commons"},bFirstNodeRendered:!1,_checkedNodes:[],renderer:function(e,t){var i=e;t.bFirstNodeRendered=!1,i.write("<div"),i.writeControlData(t),i.addClass("sapUiTree"),""!=t.getHeight()&&"auto"!=t.getHeight()&&i.addClass("sapUiTreeFixedHeight"),t.getShowHeader()||i.addClass("sapUiTreeTransparent"),i.writeClasses(),i.addStyle("width",t.getWidth()||"auto"),i.addStyle("height",t.getHeight()),i.addStyle("min-width",t.getMinWidth()),i.writeStyles(),i.writeAttribute("role","tree"),i.write(">"),t.getShowHeader()&&(i.write('<div id="'+t.getId()+'-Header" class="sapUiTreeHeader"'),i.writeAttribute("role","heading"),i.write(">"),i.write("<div class='sapUiTreeTitle'"),t.getTooltip_AsString()&&i.writeAttributeEscaped("title",t.getTooltip_AsString()),i.write(">"),i.writeEscaped(t.getTitle()),i.write("</div>"),t.getShowHeaderIcons()&&(i.write("<div id='"+t.getId()+"-TBCont' class='sapUiTreeTbCont'"),i.writeAttribute("role","toolbar"),i.write(">"),i.renderControl(t.oCollapseAllButton),i.renderControl(t.oExpandAllButton),i.write("</div>")),i.write("</div>")),i.write('<div id="'+t.getId()+'-TreeCont"'),i.addClass("sapUiTreeCont");var d=t.getShowHorizontalScrollbar();d?i.addClass("sapUiTreeContScroll"):i.addClass("sapUiTreeContNoScroll"),i.writeClasses(),i.write(">"),i.write('<ul class="sapUiTreeList">');for(var r=t.getNodes(),s=0;s<r.length;s++)t.renderNode(i,r[s],1,r.length,s+1);i.write("</ul>"),i.write("</div>"),i.write("</div>")}}),sapui6.ui.commons.Tree.prototype.renderNode=function(e,t,i,d,r){var s,a=e;a.write("<li"),a.writeElementData(t),a.addClass("sapUiTreeNode"),t.getExpanded()&&(t.getHasExpander()||t.hasChildren())?(a.addClass("sapUiTreeNodeExpanded"),s=!0):t.getExpanded()||!t.getHasExpander()&&!t.hasChildren()||(a.addClass("sapUiTreeNodeCollapsed"),s=!1),t.getSelectable()&&t.getIsSelected()&&(a.addClass("sapUiTreeNodeSelected"),a.writeAttribute("aria-selected","true")),!s&&t.hasSelectedHiddenChild()&&(a.addClass("sapUiTreeNodeSelectedParent"),a.writeAttribute("aria-selected","true")),a.writeClasses(t);var o={role:"treeitem",level:i,setsize:d,posinset:r};if(s?o.expanded=!0:t.getHasExpander()&&(o.expanded=!1),a.writeAccessibilityState(t,o),a.writeAttributeEscaped("title",t.getTooltip_AsString()),this.bFirstNodeRendered||(a.write("tabindex='0'"),this.bFirstNodeRendered=!0),a.write(">"),a.write("<span"),a.addClass("sapUiTreeNodeContent"),t.getSelectable()||a.addClass("sapUiTreeNodeNotSelectable"),a.writeClasses(),a.write(">"),t.getShowCheckBox()&&(t.getChecked()?a.write('<input type="checkbox" onclick="sap.ui.getCore().byId(\''+this.getId()+"')._checkNode(this,'"+t.getId()+"')\" checked>"):a.write('<input type="checkbox" onclick="sap.ui.getCore().byId(\''+this.getId()+"')._checkNode(this,'"+t.getId()+"')\">")),t.getIcon()&&a.writeIcon(t.getIcon(),"sapUiTreeIcon"),a.writeEscaped(t.getText()),a.write("</span>"),a.write("</li>"),t.getNodes()){var l=t.getNodes();a.write("<ul"),a.writeAttribute("id",t.getId()+"-children"),a.addClass("sapUiTreeChildrenNodes"),s?a.writeAttribute("style","display: block;"):a.addClass("sapUiTreeHiddenChildrenNodes"),a.writeClasses(),a.write(">"),i++;for(var n=0;n<l.length;n++)this.renderNode(a,l[n],i,l.length,n+1);a.write("</ul>")}},sapui6.ui.commons.Tree.prototype._checkNode=function(e,t){e.checked?sap.ui.getCore().byId(t).setChecked(!0):sap.ui.getCore().byId(t).setChecked(!1)},sapui6.ui.commons.Tree.prototype.getCheckedNodes=function(){this._checkedNodes=[];var e=this;return this.getNodes().forEach(function(t){t.getChecked()&&e._checkedNodes.push(t),e._getCheckedSubNodes(t)}),this._checkedNodes},sapui6.ui.commons.Tree.prototype._getCheckedSubNodes=function(e){var t=this;e.getNodes().forEach(function(e){e.getChecked()&&t._checkedNodes.push(e),t._getCheckedSubNodes(e)})},sap.ui.commons.TreeNode.extend("sapui6.ui.commons.TreeNode",{metadata:{library:"sapui6.ui.commons",properties:{key:{type:"string",defaultValue:null},showCheckBox:{type:"boolean",defaultValue:!1},checked:{type:"boolean",defaultValue:!1}}}});