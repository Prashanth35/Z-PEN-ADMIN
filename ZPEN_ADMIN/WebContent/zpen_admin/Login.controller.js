sap.ui.controller("zpen_admin.Login", {
   
	getDashboard : function (){
		var oPage = this.getView().getParent();
		oPage.to("idUserTile");
	}

});