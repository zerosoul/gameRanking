Gamblers = new Mongo.Collection("gamblers");
Barrage = new Mongo.Collection("msgs");

if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('templateName', "ranking");
    Template.ranking.helpers({
        players: function() {
            return Gamblers.find({},{
                sort: {
                    groupNum: 1,
                    chip:-1
                }
            });
        },
        plusOne:function(item){
            return item + 1;
        }
    });


    Template.body.helpers({
        template_name: function() {
            return Session.get("templateName")
        }
    });
    Template.body.events({
            "click .ranking": function() {
                Session.set("templateName", "ranking");
            },
            "click .enroll": function() {
                Session.set("templateName", "enroll");
            },
            "click .manage": function() {
                Session.set("templateName", "verify")
            },
            "click .barrage": function(){
              Session.set("templateName", "barrage_input");
            },
            "click .random": function(){
              Session.set("templateName", "random");
            }

    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
