Template.random.helpers({
    players: function() {
        return Gamblers.find({},
            {sort:{
              groupNum:1
            }}
          );
    }
});

Template.random.events({
    'click #saveGroup': function (event) {
        var $players=$("#rankBlock").find("li");
        $players.each(function(idx,item){
            var id=$(item).attr("data-id");
            var gn=$(item).attr("data-group-num");
            Gamblers.update(id,{
                $set:{groupNum:gn}
            },function(err,result){
                if(err){
                    console.log("出错了...");
                }else{
                    console.log("更新成功！");
                }
                console.log(err,result);
            });
        });
    }
});