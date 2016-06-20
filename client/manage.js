Template.manage.helpers({
  gamblers: function() {
        return Gamblers.find({},
            {sort:{
              groupNum:1
            }}
          );
    }
});
Template.gambler_list.helpers({
	gamblers: function() {
        return Gamblers.find({},
            {sort:{
              chip:-1
            }}
          );
    },
    is_first:function(val){
    	return !!Number(val);
    }
});


Template.manage.events({
	// save changes
	"click #saveBtn":function () {
		console.log(event,$(".gambler"));
		var gamblers=$(".gambler");
		var result=false;
		gamblers.each(function(idx,item){
			var $item=$(item);
			var id=$item.find("input:hidden").val();
			var newChip=parseInt($item.find(".chip").val());
			var newName=$item.find(".uname").val();
			var newWin=$item.find()
			console.log(id,newChip);
			Gamblers.update(id,{
				$set:{chip:newChip,uname:newName}
			},function(err,result){
				if(err){
					console.log("出错了...");
				}else{
					console.log("更新成功！");
					result=true;
				}
				console.log(err,result);
			});

		});
	},
	// delete
	"click .letWin": function(){
		console.log(event);
		if(confirm("确定让其装逼成功？")){
			var id=$(event.target).parents(".gambler").find("input:hidden").val();
			Gamblers.update(id,{
				$set:{isWin:true}
			},function(err,result){
				if(err){					
					console.log("出错了...");
				}else{
					console.log("ok")
				}
				console.log(err,result);
			});
		}
	},
	"click .win": function(){
		console.log(event);
		if(confirm("确定让其装逼失败？")){
			var id=$(event.target).parents(".gambler").find("input:hidden").val();
			Gamblers.update(id,{
				$set:{isWin:false}
			},function(err,result){
				if(err){					
					console.log("出错了...");
				}else{
					console.log("ok")
				}
				console.log(err,result);
			});
		}
	}
})






