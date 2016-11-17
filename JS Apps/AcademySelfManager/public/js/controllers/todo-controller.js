var todoController = function() {

    function all(context) {
        var category = context.params.category;
        if (category) {
            category = category.toLowerCase();
        }
        console.log(category);
        var todos;
        data.todos.get()
            .then(function(resTodos) {
                todos = resTodos.result;

                return templates.get('todos');
            })
            //za checkbox-sa
            .then(function(template) {
                //group categories
                var group = _.chain(todos)
                    .groupBy(category)
                    .map(function(todos, categoryName) {
                        return {
                            category: categoryName,
                            todos: todos
                        };
                    })
                    .filter(function(group) {
                        return !category || group.category.toLowerCase() === category;
                    })
                    .value();
                context.$element().html(template(group));

                $('.checkToDo').on('change', function() {
                    var id = $(this).parents('.todo-item').attr('data-id');
                    var state = !!$(this).prop('checked');
                    console.log(state);
                    data.todos.update(id, state)
                        .then(function() {
                            toastr.success('State updated');
                        });
                });
            });
    }

    function add(context) {
        templates.get('addtodos')
            .then(function(template) {
                context.$element().html(template());
                $('#todo-add').on('click', function() {
                    var todo = {
                        text: $('#title').val(),
                        category: $('#category').val()
                    };
                    data.todos.add(todo)
                        .then(function() {
                            toastr.success("Todo's added");
                            context.redirect('#/todos');
                        });
                });
                return data.categories.get();

            }).then(function(categories) {
                $('#category').autocomplete({
                    source: categories.result
                });
            })
    }
    return {
        all,
        add
    };

}();