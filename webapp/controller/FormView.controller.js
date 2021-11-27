
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageBox,JSONModel) {
		"use strict";

		return Controller.extend("routing.controller.FormView", {
			onInit: function () {

            },
            onLoginUser: function(){
                var username= this.getView().byId('inp_usernameId').getValue();
                var password= this.getView().byId('inp_passwordId').getValue();
                
                if(username === '')
                {
                    MessageBox.error("Please enter username")
                }
                else if(password === '')
                {
                    MessageBox.error("Please enter password")
                }
                else if(username.length>10)
                {
                    MessageBox.error("Username should be less than 10 characters")
                }
                else
                {
                    var oModel=new JSONModel({"user":username});
                    sap.ui.getCore().setModel(oModel,"names");
                    debugger;
                    MessageBox.success("Login successful");
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			        oRouter.navTo("TableView");
                }
            }

		});
	});
