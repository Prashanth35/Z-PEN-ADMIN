sap.ui.controller("zpen_admin.AccountManagement", {
  
	onNavPress: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idUserTile");
	}


});