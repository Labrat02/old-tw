'use strict';

module.exports = function(app, env){
    var db = env.db;
    debugger;

    app.get('/server/triviaquestions', function(req, res){

        db.questions.find({userId:1}, function(err, q){
            res.json(q);
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
                    } else {
                        res.json(null);
                    }
                });
            } else {
                db.questions.findOne({userId: {$ne:userId}}, function(err, question){
                    res.json(question);
                });
            }
        });
        

    });
    app.get('/server/getAllTags', function(req, res){
        db.questions.aggregate( 
            {$project: {_id:0,tags:1}},
            {$unwind:'$tags'},
            {$group: {_id: 'distinct', allTags: {$addToSet:'$tags'}}},
            function(err, result){
                console.log(result);
                res.json(result);
            }
        )
    });
}
