sap.ui.controller("zpen_admin.UserManagementTiles", {

	onUserRegistrations : function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idUserManagementRequests");
	},
	onPaymentHistory : function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idUserPaymentHistory");
	}, //idUserPaymentPending
	onPaymentPendings : function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idUserPaymentPending");
	},
	onNavPress: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idUserTile");
	}
});