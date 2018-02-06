sap.ui.controller("zpen_admin.AdminMainTile", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zpen_paymenthystory_tile.Tile1
*/
	onInit: function() {
	
	},
	onUserManagement : function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idUserManagementTiles");
	}, 
	onAccountManagement: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idAccountManagement");
	}, 
	onLoanManagement: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idLoanManagementTile");
	},
	onNotifications: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idNotifications");
	}
});