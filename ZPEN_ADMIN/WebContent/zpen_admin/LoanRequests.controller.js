sap.ui.controller("zpen_admin.LoanRequests", {

	onNavPress: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idLoanManagementTile");
	}
});