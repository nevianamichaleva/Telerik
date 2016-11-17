var materialsController = function() {
    var materials;

    function all(context) {
        context.redirect('#/');
        data.materials.get()
            .then(function(resMat) {
                materials = resMat.result;
                return templates.get('home');

            })
            .then(function(template) {
                context.$element().html(template(materials));
            });

    }

    function search(context) {
        templates.get('search')
            .then(function(template) {
                context.$element().html(template());

                $("#go").on("click", function() {
                    var findItem = $("#findItem").val();
                    console.log(findItem);
                    context.redirect('#/home?filter=' + findItem);

                });

            });
    }

    function material(context) {
        var findMaterial = this.params.filter;
        console.log(materials);
        mat = _.filter(materials, { 'title': findMaterial });
        console.log(mat);


        templates.get('materials')
            .then(function(template) {
                context.$element().html(template(mat));
            });
        $("#for").html(findMaterial);
    }



    return {
        all,
        search,
        material,

    };
}();