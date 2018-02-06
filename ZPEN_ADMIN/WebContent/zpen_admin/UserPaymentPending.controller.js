sap.ui.controller("zpen_admin.UserPaymentPending", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.UserPaymentPending
*/
	onInit: function() {
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.loadData("model/paymentPending.json");
        this.getView().setModel(oModel);
        
	},
	onNavPress: function(){
		
		var oApp= this.getView().getParent();
		
		oApp.to("idUserManagementTiles");
	},
	
	Onpress : function(oEvent){
		
			var sublistpath = oEvent.getSource().getBindingContext().getPath()
	   	 var appRef = this.getView().getParent()
	   	 appRef.to("idPendingpayments",{path:sublistpath})
	   
		
		} 

});
