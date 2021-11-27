sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    'sap/m/MessageToast'
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel,Fragment,MessageToast) {
		"use strict";

		return Controller.extend("routing.controller.TableView", {
			onInit: function () {
                var oModel=new JSONModel("model/data.json","model");
                this.getView().setModel(oModel);
                this.fragments={};
            },
            onReturnUser: function(){
                
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("FormView");
            },
            onHandletoast: function(){ 
                var name=sap.ui.getCore().getModel("names").getData();
                debugger;
                var msg="Welcome"+"\n"+name["user"]+"!";
                MessageToast.show(msg);
            },

            onOpenFragment: function(){
                var myview=this.getView();
                var oDialog=myview.byId("dialogID");
                if(!oDialog)
                {
                    oDialog=sap.ui.xmlfragment(myview.getId(),"routing.view.TestFragment",this);
                    myview.addDependent(oDialog);
                }
                oDialog.open();
                
            },
            onCloseDialog:function(event){
               this.getView().byId('dialogID').close();
               
            },
            onOpenGps:function(){
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("gps");
            }
        }
        );
    }
    );
