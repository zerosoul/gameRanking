Template.verify.events({
	'submit .verify': function () {
		event.preventDefault();
		console.log(event);
		var code=event.target.passcode.value;
		if(code == "888888"){
			Session.set("templateName", "manage");
		}else{
			alert("sorry,你不是赌神~");
			event.target.passcode.value="";
		}
		// Session.set("templateName", "manage");
	}
});