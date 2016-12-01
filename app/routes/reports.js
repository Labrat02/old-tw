'use strict';

module.exports = function(app, env){
    var db = env.db;

    app.get('/server/getHighScores/:userId/', function(req, res){
        var userId = req.params.userId;
        
        res.json({ ReportsAll: [
            {
                title: 'Longest Streak',
                data: {
                    userName: "Default",
                    numberCorrect: 2
                }
            },{
                title: 'Longest Streak Incorrect',
                data: {
                    userName: "Default",
                    numberCorrect: 2
                }
            },{
                title: 'Average User Score',
                data: {
                    MyScore: 5,
                    Average: 50
                }
            },{
                title: 'Longest Streak',
                data: {}
            },{
                title: 'Longest Streak',
                data: {}
            },]
        });
    });
}
