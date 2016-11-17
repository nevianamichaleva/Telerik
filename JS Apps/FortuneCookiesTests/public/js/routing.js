(function() {

    var sammyApp = Sammy('#content', function() {
        this.get('#/', cookieController.all);
        //this.get('#/home', cookieController.all);
        this.get('#/login', userController.login);
        this.get("#/cookie-add", cookieController.add);
        this.get("#/my-cookie", cookieController.my);
        this.get("#/sortByCategories", cookieController.sortByCateg);
        this.get("#/home", cookieController.category);
    }); //sammy

    $(function() {
        sammyApp.run('#/');
    });
}());