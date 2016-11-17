(function() {

    var sammyApp = Sammy('#content', function() {
        this.get('#/', materialsController.all);
        this.get('#/login', userController.login);
        this.get("#/search", materialsController.search);
        this.get("#/home", materialsController.material);
        this.get("#/materials/:id", function(params) {
            Promise.all([data.materials.getById(this.params['id']), templates.get('materialsId')])
                .then(([data, template]) => {

                    $('#content').html(template(data));
                });
        });
        this.get('#/profiles/:username', function(params) {
            Promise.all([data.users.getByUser(this.params['username']), templates.get('userProfiles')])
                .then(([data, template]) => {

                    $('#content').html(template(data));
                });
        });
    }); //sammy

    $(function() {
        sammyApp.run('#/');
    });
}());