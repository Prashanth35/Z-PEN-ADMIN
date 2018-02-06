sap.ui.controller("zpen_admin.LoanBarrowers", {

	onNavPress: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idLoanManagementTile");
	}
});