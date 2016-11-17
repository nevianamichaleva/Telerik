var userController = function() {

    function login(context) {
        templates.get('login')
            .then(function(template) {
                context.$element().html(template());


                $('#btn-register').on('click', function() {
                    var user = {
                        username: $('#inputUser').val(),
                        password: $('#inputPassword').val()
                    };
                    data.users.register(user)
                        .then(function() {
                            toastr.success("User registered");

                        });
                });
                $('#btn-login').on('click', function() {
                    var user = {
                        username: $('#inputUser').val(),
                        password: $('#inputPassword').val()
                    };
                    data.users.login(user)
                        .then(function() {
                            toastr.success("User logged in");
                            context.redirect('#/');
                            document.location.reload(true);
                        }, function() {
                            toastr.error("Wrong username or password");
                        });
                });
            });
    }


    return {
        login
    };

}();