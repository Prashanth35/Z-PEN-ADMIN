sap.ui.controller("zpen_admin.UserPaymentpendingDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zpen_admin.UserPaymentpendingDetails
*/
onInit: function() {
		
//	..	var that = this;

	this.getView().addEventDelegate(
				{

					onBeforeShow : function(evt) {
						debugger
						var detailpath = evt.data.path;

						var oModel = new sap.ui.model.json.JSONModel();
						oModel.loadData("model/paymentPending.json");

						this.getView().setModel(oModel);

						
                    var page=this.getView().byId("idPage");
                     page.bindElement(detailpath);
                   // debugger;
                 
                    var otemp=new sap.m.StandardListItem({
		        		title :"{name}", description :"{city}",type:"Active", press : this.gotodetail });				
					  
                    var list=this.getView().byId("idlist");
                    list.bindAggregation("items",detailpath+"/persons",otemp);
					}   
				},this)
				
	},
onNavPress : function(){
		
		this.getView().getParent().to("idUserPaymentPending"); 
	},
	gotodetail:function(evt2){
		debugger;
		var listpath=evt2.getSource().getBindingContext().getPath();
	//	 var appRef =this.getParent().getParent().getParent().getParent();
		debugger;
		
		var data = this.getParent().getParent().getParent().getParent().getModel().getProperty(listpath);

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(data);
		sap.ui.getCore().setModel(oModel, "personalData");
		// var selectedPersonalData=evt2.getSource().getModel(); 
		// var oModel - new sap.ui.model.json.JSONModel();
		// oModel.setData(selectedPersonalData);
		 // sap.ui.getCore().setModel(oModel, "personalData");
		 
   	 //  	 appRef.toDetail("idPendingpayments--idDetail");
   	  
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zpen_admin.UserPaymentpendingDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zpen_admin.UserPaymentpendingDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zpen_admin.UserPaymentpendingDetails
*/
//	onExit: function() {
//
//	}

});