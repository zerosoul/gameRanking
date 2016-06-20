Template.body.events({
    'submit .enroll': function() {
        event.preventDefault();
        // Get value from form element
        var name = event.target.uname.value;
        var nickname = event.target.nickname.value;
        var result=checkBeforeEnroll(name, nickname);
        if(result){
          alert(result);
          return;
        }
        // Insert a gambler into the collection
        Gamblers.insert({
            uname: name,
            nickname: nickname,
            chip: 10000,
            isWin:false,
            groupNum:0,
            createdAt: new Date() // current time
        });

        // Clear form
        event.target.uname.value = "";
        event.target.nickname.value = "";
        Session.set("templateName", "ranking");
    }
});

function checkBeforeEnroll (uname,nickname) {
    var result="";
    if(!uname){
      return "请填写真实姓名！";
    }
    if(!nickname){
      return "请填写个碉堡的昵称！";
    }
   var unameItem=Gamblers.findOne({uname:uname});
   console.log(unameItem);
   if(unameItem){
    result="这个名字已存在，请找静静~~~";
    return result;
   }
   var nicknameItem=Gamblers.findOne({nickname:nickname});
   if(nicknameItem){
    result="昵称已存在，请换个更碉堡的~~~";
    return result;
   }
}