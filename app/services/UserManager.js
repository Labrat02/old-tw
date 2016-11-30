var UserManager = (function(){



    // User Model
    var User = {
        Name: null,
        Login: null,
        Password: null,
        Score: null,
         

    }
    return {
        create: createUser,
        delete: deleteUser,
        update: updateUser,
    }
}());

