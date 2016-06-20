Template.loading.helpers({
	meteorStatus: function () {
		if(Meteor.status()=="connected"){
			Session.set("templateName", "ranking");
		}else{
			return Meteor.status();
		}
	}
});