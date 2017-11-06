
module.exports = (function(){
    var mongojs = require('mongojs');
    var db = mongojs('mongo-dev/triviaWorld', ['questions', 'users']);

    //mock data initial setup
    var userData = [{
        _id: "1",
        userName: 'Default',
        password: 'Password',
        emailAddress: 'collin@yeadongroup.com',
        answers: []
    },{
        _id: "2",
        userName: 'Default2',
        password: 'Password2',
        emailAddress: 'collin2@yeadongroup.com',
        answers: [{questionId: "1", answer:"1", correct:false}]
    }];

    var triviaQuestions = [{
        _id: "1",
        question: 'What kind of bat !POW! crazy are you?',
        answers: [
            {_id: "1",text: 'Michael Keaton as Batman'},
            {_id: "2",text: 'Heath Ledger as Joker'},
            {_id: "3",text: 'Danny Devito as Penguin'},
        ],
        answerKey: "2",
        tags: ['candy', 'superheroes'],
        userId: "1",
    },{
        _id: "2",
        question: 'How many licks does it take to get to the Tootsie Roll center of a Tootsie Pop?',
        answers: [
            {_id: "4",text: 'One'},
            {_id: "5",text: 'Two'},
            {_id: "6",text: 'Three'},
            {_id: "7",text: 'The world will never know'},
        ],
        answerKey: "6",
        tags: ['candy', 'earth'],
        userId: "1",
    },{
        _id: "3",
        question: 'When will the world end?',
        answers: [
            {_id: "8",text: 'Within 100 years.'},
            {_id: "9",text: 'Some time in the next millenium.'},
            {_id: "10",text: 'I could tell you but that would spoil the surprise.'},
        ],
        answerKey: "10",
        tags: ['earth', 'trees'],
        userId: "1",
    },{
        _id: "4",
        question: 'If a bear scratches his butt against a tree in the middle of the forrest, how many peg-legged monkies does it take to screw in a light bulb?',
        answers: [
            {_id: "11",text: 'Did the tree make a sound?'},
            {_id: "12",text: 'A frog clearly hits his butt when he hops.'},
            {_id: "13",text: 'I could tell you but that would spoil the surprise.'},
        ],
        answerKey: "12",
        tags: ['earth', 'bears', 'trees'],
        userId: "2",
    }];

    function addUsers(){
        db.users.find({userName:'Default', password: 'Password'}, function (err, users){
            //if (!err && !users) {
                db.users.remove({});
                db.users.insert(userData);
            //}
        });
    }

    function addTriviaQuestions(){
        db.questions.find({userId:1}, function (err, questions){
            //if (!err && !questions) {
                db.questions.remove({});
                db.questions.insert(triviaQuestions);
            //}
        });
    }

    return {
        init: function(){
            addUsers();
            addTriviaQuestions();
        }
    };
}());


