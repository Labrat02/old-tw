'use strict';

module.exports = function(app, env){
    var db = env.db;

    app.post('/server/saveAnswer/:userId/', function(req, res){
        var userId = req.params.userId;
        //db.users.find({_id: 2}, function(err, users) {console.log(users)});
        db.users.update({_id: userId}, {$addToSet: {answers: req.body}}, function(err, updObj){
            console.log(updObj);
            res.json(updObj);
        });

    });

    app.post('/server/login', function(req, res){
        var userName = req.body.userName;
        var password = req.body.password;

        db.users.findOne({userName:userName, password: password}, function(err, user){
            res.json(user);
        });

    });
}