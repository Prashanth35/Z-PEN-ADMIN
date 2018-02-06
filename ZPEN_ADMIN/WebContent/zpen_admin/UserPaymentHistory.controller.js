sap.ui.controller("zpen_admin.UserPaymentHistory", {

	onInit : function(){
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/data.json");
		this.getView().setModel(oModel);
	},
	onItemSelection : function(oEvent){
			debugger;
			//get index of title
		this.getView().byId("idBread").setCurrentLocationText(oEvent.getSource().getTitle());
		this.getView().byId("idList").setVisible(false);
		
		var oList = new sap.m.List();
			
		oList.bindAggregation("items","/paymentData/"+oEvent.getSource().getParent().indexOfItem(oEvent.getSource())+"/month", new sap.m.ObjectListItem({
			title : "{month}",
			number : "{amount}",
			attributes : [ 
				new sap.m.ObjectAttribute({
					text : "Date of Payment : {date}",
					active : false,
					visible : "{=${status} === 'Paid'}"
				}),
				new sap.m.ObjectAttribute({
					text : "Pay Now",
					active : true,
					visible : "{=${status} === 'Pending'}"
				})],
			firstStatus : new sap.m.ObjectStatus({ text : "{status}", state : "{= ${status} >= 'Pending' ? 'Error' : 'Success' }"})
		}))
		this.getView().byId("idPage").addContent(oList);
	},
	onYears : function(){
		this.getView().byId("idList").setVisible(true);
		this.getView().byId("idPage").getContent()[1].destroy();
		
	},
	onNavPress: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idUserManagementTiles");
	}
	
	
});