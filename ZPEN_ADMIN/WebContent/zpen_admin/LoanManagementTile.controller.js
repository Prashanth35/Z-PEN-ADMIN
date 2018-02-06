sap.ui.controller("zpen_admin.LoanManagementTile", {

	onLoanRequests : function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idLoanRequests");
	},
	onLoanBarrowers :  function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idLoanBarrowers");
	},
	onLoanPaymentHistory :  function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idLoanPaymentHistory");
	} //
	,
	onDefaulters :  function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idLoanDefaulters");
	} ,
	onNavPress: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idUserTile");
	}
});