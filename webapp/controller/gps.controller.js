sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/vbm/AnalyticMap",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("routing.controller.app", {
			onInit: function () {
                var oModel=new JSONModel("model/countries.json");
                this.getView().setModel(oModel,"First");
            },
            onChange:function(){
                var getkey=this.byId("comboinput").getSelectedItem().getKey();
                //debugger;
                var getvalue=this.byId("comboinput").getSelectedItem().getText();
                //debugger;
                
                var oData={
                        key:getkey,
                        value:getvalue                
                }
                var oModel=new JSONModel(oData);
                //debugger;
                this.getView().setModel(oModel,"Second");
                //debugger;
            },
            onReturn:function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("TableView");
            }
		});
	});
