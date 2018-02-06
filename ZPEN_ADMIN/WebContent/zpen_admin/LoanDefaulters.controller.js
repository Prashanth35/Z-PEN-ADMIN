sap.ui.controller("zpen_admin.LoanDefaulters", {

	onNavPress: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idLoanManagementTile");
	}
});