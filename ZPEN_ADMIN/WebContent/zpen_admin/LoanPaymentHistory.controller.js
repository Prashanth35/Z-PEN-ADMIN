sap.ui.controller("zpen_admin.LoanPaymentHistory", {

	onNavPress: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idLoanManagementTile");
	}

});