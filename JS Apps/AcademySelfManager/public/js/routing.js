(function() {

    var sammyApp = Sammy('#content', function() {
        this.get('#/', homeController.all);
        this.get('#/login', userController.login);
        this.get('#/register', userController.register);
        this.get('#/todos', todoController.all);
        this.get("#/todos/add", todoController.add);
    }); //sammy

    $(function() {
        sammyApp.run('#/');
    });
}());