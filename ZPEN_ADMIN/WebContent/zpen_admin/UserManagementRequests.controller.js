sap.ui.controller("zpen_admin.UserManagementRequests", {

	onAadharCard : function(){
		this._getDialog().open();
		 sap.ui.getCore().byId("idFragment--idDialog").setTitle("Aadhaar Card Verification");
         sap.ui.getCore().byId("idFragment--idImage").setSrc("image/Aadhaar_card.jpg");
       
	},
	onVoterCard : function(){
		this._getDialog().open();
		 sap.ui.getCore().byId("idFragment--idDialog").setTitle("Voter Card Verification");
         sap.ui.getCore().byId("idFragment--idImage").setSrc("image/Voter_id.jpg");
      
	},
	onPanCard : function(){
		this._getDialog().open();
		 sap.ui.getCore().byId("idFragment--idDialog").setTitle("PAN Card Verification");
         sap.ui.getCore().byId("idFragment--idImage").setSrc("image/pan_card.jpg");
      
	},
	onNavPress: function(){
		//debugger;
		var oApp= this.getView().getParent();
		//debugger;
		oApp.to("idUserManagementTiles");
	},
	_getDialog : function(){
		debugger;
		sap.ui.localResources("fragment");
		if(!this.dialog){
			this.dialog = sap.ui.xmlfragment("idFragment", "fragment.userDocument", this);
		}
		return this.dialog;
	},
	onVerified : function(){
	
		if(this.dialog.getTitle()=== "Aadhaar Card Verification"){
			sap.m.MessageToast.show("Aadhaar Card Verified");
			this.dialog.close();
			this.getView().byId("idaadhaarCard").setInfo("Verified");
			this.getView().byId("idaadhaarCard").setInfoState(sap.ui.core.ValueState.Success);
			this.getView().byId("idaadhaarCard").setIcon("sap-icon://accept"); 
		}
		 
		if(this.dialog.getTitle()=== "Voter Card Verification"){
				sap.m.MessageToast.show("Voter Card Verified");
				this.dialog.close();
				this.getView().byId("idVoterCard").setInfo("Verified");
				this.getView().byId("idVoterCard").setInfoState(sap.ui.core.ValueState.Success);
				this.getView().byId("idVoterCard").setIcon("sap-icon://accept"); 
		}
		
		if(this.dialog.getTitle()=== "PAN Card Verification"){
			sap.m.MessageToast.show("PAN Card Verified");
			this.dialog.close();
			this.getView().byId("idPanCard").setInfo("Verified");
			this.getView().byId("idPanCard").setInfoState(sap.ui.core.ValueState.Success);
			this.getView().byId("idPanCard").setIcon("sap-icon://accept"); 
		}

	},
	onRejected : function(){
		sap.m.MessageToast.show("Rejected");
		this.dialog.close();
		this.getView().byId("idaadhaarCard").setInfo("Rejected");
		this.getView().byId("idaadhaarCard").setInfoState(sap.ui.core.ValueState.Error);
		this.getView().byId("idaadhaarCard").setIcon("sap-icon://employee-rejections"); 

	},
	onFollowUp : function(){
		sap.m.MessageToast.show("Follow Up Required");
		this.dialog.close();
		this.getView().byId("idaadhaarCard").setInfo("Follow Up Required");
		this.getView().byId("idaadhaarCard").setInfoState(sap.ui.core.ValueState.Warning);
		this.getView().byId("idaadhaarCard").setIcon("sap-icon://inspection"); 
	}
	
	
});