jQuery.sap.declare("sapui6.ui.layout.BootstrapContainer"),sap.ui.core.Control.extend("sapui6.ui.layout.BootstrapContainer",{metadata:{library:"sapui6.ui.layout",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},className:{type:"string",group:"Appearance",defaultValue:""},visible:{type:"boolean",group:"Appearance",defaultValue:!0}},defaultAggregation:"rows",aggregations:{rows:{type:"sapui6.ui.layout.BootstrapRow",multiple:!0,singularName:"row"}}},renderer:function(e,a){if(a.getVisible()){e.write("<div"),e.writeControlData(a),e.addClass(a.getClassName()),e.writeClasses(),e.write(">");for(var t=a.getRows(),r=t.length,o=0;r>o;o++){e.write("<div"),e.addClass("row"),e.writeClasses(),e.write(">");for(var i=t[o],s=i.getColumns(),u=s.length,l=0;u>l;l++){var p=s[l];e.write("<div"),e.addClass(p.getClassName()),e.writeClasses(),e.write(">");for(var n=p.getContent(),g=n.length,d=0;g>d;d++)e.renderControl(n[d]);e.write("</div>")}e.write("</div>")}e.write("</div>")}}}),jQuery.sap.declare("sapui6.ui.layout.BootstrapRow"),sap.ui.core.Element.extend("sapui6.ui.layout.BootstrapRow",{metadata:{library:"sapui6.ui.layout",properties:{},defaultAggregation:"columns",aggregations:{columns:{type:"sapui6.ui.layout.BootstrapColumn",multiple:!0,singularName:"column"}}}}),jQuery.sap.declare("sapui6.ui.layout.BootstrapColumn"),sap.ui.core.Element.extend("sapui6.ui.layout.BootstrapColumn",{metadata:{library:"sapui6.ui.layout",properties:{className:{type:"string",group:"Appearance",defaultValue:""}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:!0,singularName:"content"}}}});