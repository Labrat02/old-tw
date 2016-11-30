'use strict';

module.exports = function(app, env){
    var db = env.db;
    debugger;

    app.get('/server/triviaquestions', function(req, res){

        db.questions.find({userId:1}, function(err, q){
            res.json(q);
        });

    });
    
    app.post('/server/saveAnswer/:userId/', function(req, res){
        var userId = req.params.userId;
        //db.users.find({_id: 2}, function(err, users) {console.log(users)});
        db.users.update({_id: userId}, {$addToSet: {answers: req.body}}, function(err, updObj){
            console.log(updObj);
            res.json(updObj);
        });

    });

    app.get('/server/getNextQuestion/:userId/', function(req, res){
        var userId = req.params.userId;
        // db.users.find({}, function(err,users){
        //     console.log(users);
        // })
        db.users.find({_id: userId}, function(err, users) {
            var answerIds = [];
            if (users.length > 0){
                //recurse answers to get (possibly switch to using underscore/lodash mapping)
                for (var i = users.length; i--;) {
                    if (users[i].answers.length > 0){
                        for(var q = users[i].answers.length; q--;){
                            console.log('answer')
                            answerIds.push(users[i].answers[q].questionId)
                        }
                    }
                }
                var queryOptions = {userId: {$ne:userId}}
                
                if (answerIds.length > 0)
                    queryOptions._id = {$nin: answerIds};

                db.questions.find(queryOptions, function(err, questions){
                    if (questions.length) {
                        var randomRecordIndx = Math.floor((Math.random() * questions.length));
                        res.json({matches: questions.length, question: questions[randomRecordIndx]});
                    }
                });
            } else {
                db.questions.findOne({userId: {$ne:userId}}, function(err, question){
                    res.json(question);
                });
            }
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
