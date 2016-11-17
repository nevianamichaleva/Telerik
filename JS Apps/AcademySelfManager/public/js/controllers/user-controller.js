var userController = function() {

    function register(context) {
        templates.get('register')
            .then(function(template) {
                context.$element().html(template());


                $('#btn-register').on('click', function() {
                    var user = {
                        username: $('#username').val(),
                        password: $('#password').val()
                    };
                    data.users.register(user)
                        .then(function() {
                            toastr.success("User registered");
                        });
                });
                $('#btn-login').on('click', function() {
                    var user = {
                        username: $('#username').val(),
                        password: $('#password').val()
                    };
                    data.users.login(user)
                        .then(function() {
                            toastr.success("User logged in");
                            context.redirect('#/');
                        });
                });
            });
    }

    return {
        register
    };

}();