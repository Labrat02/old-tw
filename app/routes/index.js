module.exports = function(app, env){
    const fs = require('fs');
    fs.readdir(env.routesPath, (err, files) => {
        files.forEach(file => {
            if (file.indexOf('index.js') == -1 && file.indexOf('.js') > -1) {
                require('./' + file)(app, env);
            }
        });
    })
    //require('./users')(app, env);
    //require('./questions')(app, env);
}